
export default async function getFournisseursPb() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/client/fournisseurs`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Erreur de chargement des fournisseurs");
  return res.json();
}