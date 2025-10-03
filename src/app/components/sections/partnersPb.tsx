
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type PartnerItems = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type PartnerPbProps = {
  title?: string;
  partners: PartnerItems[];
};

export default function PartnersPb({
  title = "",
  partners,
}: PartnerPbProps) {
  return (
     <section className="py-16">
      <h2 className="text-center text-indigo-950 text-2xl md:text-2xl font-bold mb-10">
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
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="flex items-center justify-center">
              {/* Conteneur fixe */}
              <div className="w-32 h-20 flex items-center justify-center bg-white rounded-md shadow-sm">
                <img
                  src={partner.imageUrl}
                  alt={partner.title} 
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
