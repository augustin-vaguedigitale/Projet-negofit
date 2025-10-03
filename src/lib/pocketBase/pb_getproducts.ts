


export default async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/client/products`, {
    cache: "no-store",// pas de cache → données toujours fraîches
  });

  if (!res.ok) throw new Error("Erreur de chargement des produits");
  return res.json();// ✅ retourne directement un tableau
}