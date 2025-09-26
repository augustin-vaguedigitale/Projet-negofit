import ProductsCarousel from "@/app/components/sections/productsCarousel";
import { getProducts } from "@/lib/products";
//import Products from "@/app/components/sections/productsCarousel";


export default async function PageProducts() {
    const Product = await getProducts();
    return (
        <>
        <div className="mt-28">
          
          <ProductsCarousel products={Product}/>
        </div>
        </>
    )
}