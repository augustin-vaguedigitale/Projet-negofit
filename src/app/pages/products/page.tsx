//import ProductsCarousel from "@/app/components/sections/productsCarousel";
import PageProduits from "@/app/components/pageProduits";
//import Products from "@/app/components/sections/productsCarousel";
import getProducts from '@/lib/pocketBase/pb_getproducts';


export default async function PageProducts() {
    const Product = await getProducts();
    return (
        <>
        <div className="mt-28">
          
          <PageProduits products={Product}/>
        </div>
        </>
    )
}