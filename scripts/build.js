/// <reference path="../types.d.ts" />

const { fs, cwd } = require("./utils");

/** @type {DenoDatabase} */
let dbs = {};

for (const letter of "abcdefghijklmnopqrstuvwxyz") {
  const current = cwd(`database/${letter}.json`);
  try {
    dbs = { ...dbs, ...JSON.parse(fs.readFileSync(current).toString()) };
  } catch {}
}

fs.writeFileSync(cwd("database/all.json"), JSON.stringify(dbs, null, 2));
fs.copyFileSync(cwd("schema.json"), cwd("database/schema.json"));
