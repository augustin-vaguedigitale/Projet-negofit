"use client"
import { Card, CardContent} from "@/components/ui/card";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ProductsProps = {
  title?: string;
  products: string[];
};
export default function Products ({
    title = "Les differents produits",
    products,
}: ProductsProps){
    return(
        <>
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-2xl font-bold text-center text-indigo-950 mb-14 tracking-tight">
          {title}
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <Card className="group relative flex flex-col items-center rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="p-6 flex flex-col items-center">
                  {/* Image avec effet hover */}
                  <div className="relative h-32 rounded-t-2xl overflow-hidden bg-gray-50 p-4 w-full  flex items-center justify-center shadow-sm">
                    <img
                      src={product || "/placeholder.svg"}
                      alt={`Produit ${idx + 1}`}
                      className="w-full h-56 object-contain transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Titre */}
                  <h3 className="mt-6 text-center text-base font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-600 -space-y-48">
                    Produit {idx + 1}
                  </h3>

                  {/* Trait décoratif animé */}
                  <span className="mt-3 block h-0.5 w-0 bg-orange-500 transition-all duration-500 group-hover:w-12" />
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    
        </>
    )

}