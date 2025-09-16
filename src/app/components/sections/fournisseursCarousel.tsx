
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type FournisseursCarouselProps = {
  title?: string;
  fournisseurs: string[];
};

export default function FournisseursCarousel({
  title = "",
  fournisseurs,
}: FournisseursCarouselProps) {
  return (
    <section className="py-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold uppercase mb-10">
        {title}
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full px-6 md:px-20"
      >
        {fournisseurs.map((fournisseur, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center">
               {/* Conteneur fixe */}
              <div className="w-32 h-20 flex items-center justify-center bg-white rounded-md shadow-sm">
                   <img
                src={fournisseur}
                alt={`fournisseur ${idx + 1}`}
                width={100}
                height={50}
                className="max-h-16 max-w-[120px] object-contain hover:scale-105 transition-transform duration-300"
              />
              </div>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
