import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getDb } from '../db.js';

export const exportsRouter = Router();

exportsRouter.post('/', async (req, res) => {
  const { evidenceId, start, end } = req.body ?? {};

  if (!evidenceId || typeof evidenceId !== 'string') {
    return res.status(400).json({ error: 'evidenceId (string) is required' });
  }
  const startAt = start ? new Date(start) : null;
  const endAt = end ? new Date(end) : null;
  if (!startAt || Number.isNaN(startAt.getTime())) {
    return res.status(400).json({ error: 'start must be a valid ISO date' });
  }
  if (!endAt || Number.isNaN(endAt.getTime())) {
    return res.status(400).json({ error: 'end must be a valid ISO date' });
  }
  if (endAt <= startAt) {
    return res.status(400).json({ error: 'end must be after start' });
  }

  const doc = {
    evidenceId,
    start: startAt,
    end: endAt,
    status: 'queued' as const,
    createdAt: new Date(),
  };
  const result = await getDb().collection('exports').insertOne({ ...doc });
  return res.status(202).json({ id: result.insertedId.toString(), ...doc });
});

exportsRouter.get('/:id', async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'invalid id' });
  }
  const item = await getDb()
    .collection('exports')
    .findOne({ _id: new ObjectId(req.params.id) });
  if (!item) return res.status(404).json({ error: 'not found' });
  const { _id, ...rest } = item;
  return res.json({ id: (_id as ObjectId).toString(), ...rest });
});
