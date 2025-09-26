import HeroSlider from "./components/HeroSlider";
import ServiceCaroussel from "./components/sections/serviceCaroussel";
import PartnerCarousel from "./components/sections/partnersCarousel";
import { getPartners } from "@/lib/partners";
import { getProducts } from "@/lib/products";
import FournisseursCarousel from "./components/sections/fournisseursCarousel";
import { getFournisseurs } from "@/lib/fournisseurs";
import About from "./components/sections/about";
import Link from "next/link";
import ProductsCarousel from "./components/sections/productsCarousel";


export default async function Home() {
  const partners = await getPartners();
  const Product = await getProducts();
  const fournisseur = await getFournisseurs();
  return (
    <main>
        {/* Hero Slider - Swiper Component, template fidelity */}
      <div className="animate__animated animate__fadeIn mt-32" style={{animationDelay: '0.4s'}}>
        <HeroSlider />
      </div>
     
    
      {/* About Section */}
     
    <About/>
      {/* Service Section */}
     
<ServiceCaroussel />
      {/* Produits Section */}
         <ProductsCarousel
    products={Product} />
          <div className="text-center text-slate-100 mx-auto mt-10 w-32 bg-amber-500 rounded-full hover:bg-indigo-950">
            <button className=" h-12">
                <Link href={"/pages/products"}>Voir plus</Link>
            </button>
            
          </div>
    
      {/* Partners Section */}
      <section className="section-padding animate__animated animate__fadeInUp border-b-2 border-gray-300 mt-18" id="partners" style={{animationDelay: '3.6s'}}>
        <h2 className="text-center py-4 fs-1 font-bold text-2xl text-indigo-950 text-uppercase"> Ils nous font confiance</h2>
        <PartnerCarousel
        title=""
        partners={partners}  // tu passes juste les images
      />
      </section>

      {/* Suppliers Section */}
      <section className="animate__animated animate__fadeInUp pt-6" style={{animationDelay: '4.2s'}}>
        <h2 className="text-center text-uppercase font-bold text-2xl text-indigo-950 mt-18">Nos fournisseurs</h2>
        <FournisseursCarousel
      fournisseurs={fournisseur}
      />
      </section>
     
    </main>
  );
}
