import { ghost } from "./ghost"; // ✅ import nommé

export async function getFournisseurs(): Promise<string[]> {
  const posts = await ghost.posts.browse({
    filter: "tag:fournisseur",
    fields: "feature_image",
    limit: "all",
  });

  return posts
    .map((fournisseur) => fournisseur.feature_image) // ⚠️ on tape juste après
    .filter((url): url is string => !!url); // ✅ garde uniquement les non-nulls
}
