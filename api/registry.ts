import { DenoDatabase } from "../types";
import { NowApiHandler } from "@vercel/node";

const importDb = (db: string) => {
  return import(`../database/${db}`).then((d) => d.default as DenoDatabase);
};

const handler: NowApiHandler = async (req, res) => {
  const captured = /^([a-z]\.json)$/.exec(`${req.query.registry}`);

  if (!captured) {
    return res.status(400).json({
      message: "invalid request",
    });
  }

  const db = await importDb(captured[0]);
  delete db.$schema;

  if ("total" in req.query) {
    return res.end(Object.keys(db).length.toString());
  }

  res.json(db);
};

export default handler;
