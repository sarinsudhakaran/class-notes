// Run: node dev/test-discovery.mjs
import assert from 'node:assert/strict';
import { toCsv } from '../api/discovery.js';

const csv = toCsv([
  { id: 2, created_at: '2026-11-26T10:00:00.000Z', participant: 'Resident, Flat 302', role: 'Owner',
    site: 'Green Meadows', answers: { 1: 'Up at 6', 3: 'The guard, mostly' } },
  { id: 1, created_at: '2026-11-26T09:00:00.000Z', participant: 'Guard', role: 'Security', site: 'Tower B',
    answers: { 1: 'Gate duty 8 to 8', 12: 'Talk to the "committee" head' } }
]);
const lines = csv.split('\n');

assert.equal(lines[0], 'id,created_at,participant,role,site,q1,q3,q12', 'header unions all answered questions');
assert.ok(lines[1].includes('"2026-11-26T10:00:00.000Z"'), 'timestamp is ISO, not a JS date string');
assert.equal(lines.length, 3);
assert.ok(lines[1].includes('"Resident, Flat 302"'), 'commas in values stay quoted');
assert.ok(lines[2].includes('"Talk to the ""committee"" head"'), 'quotes are doubled');
assert.ok(lines[1].endsWith(',""'), 'unanswered question is an empty cell, not a shifted column');
assert.equal(toCsv([]), 'id,created_at,participant,role,site', 'no responses yet still returns a header');

console.log('ok — CSV export');
