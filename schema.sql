CREATE TABLE IF NOT EXISTS discovery_responses (
  id          bigserial PRIMARY KEY,
  created_at  timestamptz NOT NULL DEFAULT now(),
  participant text NOT NULL DEFAULT '',
  role        text NOT NULL DEFAULT '',
  site        text NOT NULL DEFAULT '',
  answers     jsonb NOT NULL
);
