import express from 'express';
import { nanoid } from 'nanoid';
import Database from 'better-sqlite3';
import cors from 'cors';

const app = express();
const db = new Database('retro.db');

app.use(express.json());
app.use(cors());

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS retrospectives (
    id TEXT PRIMARY KEY,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.post('/api/retrospectives', (req, res) => {
  const id = nanoid(10);
  db.prepare('INSERT INTO retrospectives (id) VALUES (?)').run(id);
  res.json({ id });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
