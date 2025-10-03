
export default async function getPartners_Pb(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/client/partners`, {
      cache: "no-store",
    });
  
    if (!res.ok) throw new Error("Erreur de chargement des partenaires");
    return res.json();
}