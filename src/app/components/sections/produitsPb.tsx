"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CirclePlus, MinusCircle } from "lucide-react";

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
  const [visibleDescription, setVisibleDescription] = useState<string | null>(null);

  const toggleDescription = (id: string) => {
    setVisibleDescription((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-950 mb-10 tracking-tight">
          {title}
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
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
              <Card className="group relative flex flex-col rounded-xl border border-gray-100 bg-white/90 backdrop-blur-sm shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Image plus compacte */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Contenu plus compact */}
                <CardContent className="p-4 text-center flex flex-col items-center justify-between min-h-[60px]">
                  {/* Titre */}
                  <h3 className="text-base font-semibold text-indigo-950 group-hover:text-orange-600 transition-colors">
                    {product.title}
                  </h3>

                  {/* Zone de description compacte */}
                  <div className="relative w-full h-16 mt-2">
                    <AnimatePresence mode="wait">
                      {visibleDescription === product.id ? (
                        <motion.div
                          key="desc-visible"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 text-xs text-gray-600 overflow-hidden text-ellipsis line-clamp-3"
                        >
                          {product.description}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="desc-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs italic"
                        >
                          ...
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bouton toggle */}
                  <motion.button
                    onClick={() => toggleDescription(product.id)}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-medium shadow-sm hover:bg-orange-600 transition-all cursor-pointer"
                  >
                    {visibleDescription === product.id ? (
                      <>
                        <MinusCircle size={14} />
                        Masquer
                      </>
                    ) : (
                      <>
                        <CirclePlus size={14} />
                        Voir plus
                      </>
                    )}
                  </motion.button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
