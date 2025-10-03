"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CirclePlus, ShoppingCart } from "lucide-react";

type ProductItems = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type ProduitsPbProps = {
  title?: string;
  products: ProductItems[];
};

export default function ProduitsPb({
  title = "Les différents produits",
  products,
}: ProduitsPbProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-950 mb-14 tracking-tight">
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Content */}
                <CardContent className="p-5 text-center flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-medium shadow-md hover:bg-orange-600 transition-all cursor-pointer">
                    <CirclePlus size={16} />
                    {product.title}
                  </button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
