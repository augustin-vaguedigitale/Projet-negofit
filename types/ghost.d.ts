declare module "@tryghost/content-api" {
  export interface GhostPost {
    id: string;
    uuid: string;
    title: string;
    slug: string;
    feature_image?: string;
    published_at?: string;
    custom_excerpt?: string;
    html?: string;
  }

  export interface GhostSettings {
    title: string;
    description: string;
    logo?: string;
  }

  interface GhostAPIOptions {
    url: string;
    key: string;
    version: "v2" | "v3" | "v6.0.5" | "canary";
  }

  export default class GhostContentAPI {
    constructor(options: GhostAPIOptions);
    posts: {
      browse(options?: any): Promise<GhostPost[]>;
      read(options: { id?: string; slug?: string }, extra?: any): Promise<GhostPost>;
    };
    settings: {
      browse(): Promise<GhostSettings>;
    };
  }
}
