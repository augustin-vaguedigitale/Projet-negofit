
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type PartnerCarouselProps = {
  title?: string;
  partners: string[];
};

export default function PartnerCarousel({
  title = "Nos fournisseurs",
  partners,
}: PartnerCarouselProps) {
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
        loop
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full px-6 md:px-20"
      >
        {partners.map((partner, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-center">
              {/* Conteneur fixe */}
              <div className="w-32 h-20 flex items-center justify-center bg-white rounded-md shadow-sm">
                <img
                  src={partner}
                  alt={`Partner ${idx + 1}`}
                  className="max-h-16 max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
