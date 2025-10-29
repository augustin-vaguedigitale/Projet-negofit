"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type FournisseursItems = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type FournisseursPbProps = {
  title?: string;
  fournisseurs: FournisseursItems[];
};

export default function FournisseursPb({
  title = "",
  fournisseurs,
}: FournisseursPbProps) {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 mb-14">
          {title}
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="px-4 md:px-10"
        >
          {fournisseurs.map((fournisseur) => (
            <SwiperSlide key={fournisseur.id}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl  hover:transition-all duration-300 border border-gray-100 flex flex-col items-center text-center px-6 py-8">
                {/* Image circulaire stylée */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-100 to-blue-50 flex items-center justify-center mb-5 shadow-inner">
                  <img
                    src={fournisseur.imageUrl}
                    alt={fournisseur.title}
                    width={60}
                    height={60}
                    className="object-contain w-12 h-12"
                  />
                </div>

                {/* Titre */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {fournisseur.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
                  {fournisseur.description ||
                    "Fournisseur de confiance garantissant la qualité et la performance."}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
