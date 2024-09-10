import type { Schema } from "../data/resource";

export const handler: Schema["getCurrentDate"]["functionHandler"] =
  async () => {
    return new Date().toLocaleString();
  };
