const fs = require("fs");
const path = require("path");

/** @param {string[]} s */
const cwd = (...s) => path.resolve(process.cwd(), ...s);

module.exports = {
  fs,
  path,
  cwd,
};
