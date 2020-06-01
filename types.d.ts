export interface DenoDbEntry {
  desc: string;
  type: "GitHub" | "GitLab";
  org: string;
  repo: string;
}

export interface DenoDatabase {
  $schema?: string;
  [module: string]: DenoDbEntry | {};
}
