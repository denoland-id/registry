/// <reference path="../types.d.ts" />

const { fs, cwd } = require("./utils");

const defaultDb = { $schema: "https://registry.denoland.id/schema.json" };

for (const letter of "abcdefghijklmnopqrstuvwxyz") {
  const current = cwd(`database/${letter}.json`);

  /** @type {DenoDatabase} */
  let db;

  try {
    db = JSON.parse(fs.readFileSync(current).toString());
    const mods = Object.keys(db).sort();
    db = mods.reduce((acc, val) => ({ ...acc, [val]: db[val] }), defaultDb);
  } catch {
    db = defaultDb;
  }

  fs.writeFileSync(current, JSON.stringify(db, null, 2));
}
