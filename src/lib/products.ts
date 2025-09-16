import { ghost } from "./ghost"; // ✅ import nommé

export async function getProducts(): Promise<string[]> {
  const posts = await ghost.posts.browse({
    filter: "tag:product",
    fields: "feature_image",
    limit: "all",
  });

  return posts
    .map((product) => product.feature_image) // ⚠️ on tape juste après
    .filter((url): url is string => !!url); // ✅ garde uniquement les non-nulls
}
