import { MongoClient, Db } from 'mongodb';

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectDb(): Promise<Db> {
  if (db) return db;
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB ?? 'io_vision_widget';
  if (!uri) throw new Error('MONGODB_URI is not set');
  client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);
  return db;
}

export function getDb(): Db {
  if (!db) throw new Error('Database not connected. Call connectDb() first.');
  return db;
}

export async function closeDb(): Promise<void> {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}
