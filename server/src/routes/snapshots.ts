import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getDb } from '../db.js';

export const snapshotsRouter = Router();

snapshotsRouter.post('/', async (req, res) => {
  const { evidenceId, timestamp, note } = req.body ?? {};

  if (!evidenceId || typeof evidenceId !== 'string') {
    return res.status(400).json({ error: 'evidenceId (string) is required' });
  }
  const ts = timestamp ? new Date(timestamp) : new Date();
  if (Number.isNaN(ts.getTime())) {
    return res.status(400).json({ error: 'timestamp must be a valid ISO date' });
  }

  const doc = {
    evidenceId,
    timestamp: ts,
    note: typeof note === 'string' ? note : null,
    createdAt: new Date(),
  };
  const result = await getDb().collection('snapshots').insertOne({ ...doc });
  return res.status(201).json({ id: result.insertedId.toString(), ...doc });
});

snapshotsRouter.get('/', async (req, res) => {
  const { evidenceId } = req.query;
  const filter = typeof evidenceId === 'string' ? { evidenceId } : {};
  const items = await getDb()
    .collection('snapshots')
    .find(filter)
    .sort({ createdAt: -1 })
    .limit(100)
    .toArray();
  return res.json(items.map(({ _id, ...rest }) => ({ id: (_id as ObjectId).toString(), ...rest })));
});
