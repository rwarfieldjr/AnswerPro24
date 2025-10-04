import Database from "better-sqlite3";
import fs from "fs";

fs.mkdirSync("data", { recursive: true });
export const db = new Database("data/app.db");

// Create table + indexes (idempotent)
db.exec(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS reminder_jobs (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    email     TEXT    NOT NULL,
    type      TEXT    NOT NULL CHECK (type IN ('trial_7','trial_3','trial_1','custom')),
    send_at   INTEGER NOT NULL, -- unix seconds
    sent      INTEGER NOT NULL DEFAULT 0,
    sent_at   INTEGER,
    attempts  INTEGER NOT NULL DEFAULT 0,
    payload   TEXT
  );
  CREATE UNIQUE INDEX IF NOT EXISTS ux_jobs_unique ON reminder_jobs(email, type, send_at);
  CREATE INDEX        IF NOT EXISTS ix_jobs_due    ON reminder_jobs(sent, send_at);
`);
