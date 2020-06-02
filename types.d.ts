declare const cwd: (...s: string) => string;

declare interface DenoDbEntry {
  desc: string;
  type: "GitHub" | "GitLab";
  org: string;
  repo: string;
}

declare interface DenoDatabase {
  $schema?: string;
  [module: string]: DenoDbEntry | {};
}
