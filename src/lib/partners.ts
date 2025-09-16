import { ghost } from "./ghost"; // ✅ import nommé

export async function getPartners(): Promise<string[]> {
  const posts = await ghost.posts.browse({
    filter: "tag:partner",
    fields: "feature_image",
    limit: "all",
  });

  return posts
    .map((partner) => partner.feature_image) // ⚠️ on tape juste après
    .filter((url): url is string => !!url); // ✅ garde uniquement les non-nulls
}
