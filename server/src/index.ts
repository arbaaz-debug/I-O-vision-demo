import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDb, closeDb } from './db.js';
import { snapshotsRouter } from './routes/snapshots.js';
import { exportsRouter } from './routes/exports.js';

const app = express();
const port = Number(process.env.PORT ?? 3001);
const corsOrigin = process.env.CORS_ORIGIN ?? 'http://localhost:4200';

app.use(cors({ origin: corsOrigin }));
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/snapshots', snapshotsRouter);
app.use('/exports', exportsRouter);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'internal_error' });
});

async function main() {
  await connectDb();
  const server = app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });

  const shutdown = async (signal: string) => {
    console.log(`\n${signal} received, shutting down...`);
    server.close(async () => {
      await closeDb();
      process.exit(0);
    });
  };
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

main().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
