import { neon } from '@neondatabase/serverless';

const sql = () => neon(process.env.DATABASE_URL);

// Columns are the union of answered question numbers, so a half-done interview
// still lines up with a complete one.
export function toCsv(rows) {
  const esc = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const qs = [...new Set(rows.flatMap(r => Object.keys(r.answers)))].sort((a, b) => a - b);
  return [
    ['id', 'created_at', 'participant', 'role', 'site', ...qs.map(q => `q${q}`)].join(','),
    ...rows.map(r => [r.id, new Date(r.created_at).toISOString(), r.participant, r.role, r.site,
      ...qs.map(q => r.answers[q])].map(esc).join(','))
  ].join('\n');
}

// One row per interview. Answers kept as JSONB so questions can change without a migration.
// ponytail: no auth on POST — public form. Add a captcha/rate limit if it gets spammed.
export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { participant = '', role = '', site = '', answers = {} } = req.body || {};
      if (!answers || typeof answers !== 'object' || !Object.keys(answers).length) {
        return res.status(400).json({ error: 'answers required' });
      }
      const [row] = await sql()`
        INSERT INTO discovery_responses (participant, role, site, answers)
        VALUES (${String(participant).slice(0, 200)}, ${String(role).slice(0, 200)},
                ${String(site).slice(0, 200)}, ${JSON.stringify(answers)})
        RETURNING id, created_at`;
      return res.status(201).json(row);
    }

    if (req.method === 'GET') {
      if (!process.env.ADMIN_KEY || req.query.key !== process.env.ADMIN_KEY) {
        return res.status(401).json({ error: 'unauthorized' });
      }
      const rows = await sql()`SELECT * FROM discovery_responses ORDER BY created_at DESC`;
      if (req.query.format === 'csv') {
        res.setHeader('content-type', 'text/csv');
        return res.send(toCsv(rows));
      }
      return res.json(rows);
    }

    res.setHeader('allow', 'GET, POST');
    return res.status(405).end();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'server error' });
  }
}
