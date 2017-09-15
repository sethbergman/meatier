import r from '../src/server/database/rethinkdriver';

export default async function pretest() {
  const tables = await r.tableList().resolve;
  await Promise.all(tables.map(table => r.table(table).delete()));
  await r.getPool().drain();
}
