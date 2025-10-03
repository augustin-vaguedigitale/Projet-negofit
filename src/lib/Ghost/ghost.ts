import GhostContentAPI from '@tryghost/content-api';
//import api from "./ghost";

export const ghost = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL || "http://localhost:2368", // ton Ghost local
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY || "", // clé Content API (Ghost Admin > Integrations)
  version: "v6.0.5",
});
