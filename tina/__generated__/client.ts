import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '3d0621e3e666dc2c62e07d32000193e39590650a', queries,  });
export default client;
  