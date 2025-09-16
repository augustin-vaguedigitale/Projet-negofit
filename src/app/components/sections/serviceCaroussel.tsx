"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Factory,
  FlaskConical,
  Building2,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Industrie Agroalimentaire",
    description:
      "Nous sommes également partenaires de plusieurs entreprises qui nous fournissent des produits et des services de l'industrie agroalimentaire. Nous connectons les producteurs locaux aux marchés internationaux, tout en garantissant un approvisionnement élevées de durabilité et d'innovation",
    Icon: Factory,
  },
  {
    id: 2,
    title: "Industrie Chimique",
    description:
      "Partenaires de plusieurs entreprises qui nous fournissent des produits et des services dans le domaine de l'industrie chimique. En collaborant avec des experts de la chimie, nous assurons la distribution de produits de haute qualité, essentiels pour diverses applications industrielles, tout en respectant les normes strictes de sécurité et d'innovation.",
    Icon: FlaskConical,
  },
  {
    id: 3,
    title: "Industrie Économique",
    description:
      "Nous sommes également partenaires de plusieurs entreprises qui nous fournissent des produits et des services dans le domaine économique. En travaillant main dans la main avec des acteurs clés, nous favorisons la croissance et le développement durable, tout en offrant des solutions adaptées aux défis contemporains de l'économie mondiale.",
    Icon: Building,
  },
  {
    id: 4,
    title: "Industrie Construction",
    description:
      "Nous sommes également partenaires de plusieurs entreprises qui nous fournissent des produits et des services dans le domaine de la construction. En collaboration avec des leaders du secteur, nous garantissons des matériaux de qualité et des solutions innovantes, contribuant à bâtir des infrastructures durables et performantes pour l'avenir.",
    Icon: Building2,
  },
];

// Animation simple
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

export default function Services() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="services" className="relative py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header + boutons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          {/* Titre + Description */}
          <div className="max-w-3xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-indigo-950"
            >
              Negofit SARL
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              Negofit SARL, située à Abidjan Marcory, est un leader en Côte
              d&apos;Ivoire dans le négoce technique et la fourniture
              industrielle. Nous offrons une gamme complète d&apos;équipements
              et de machines pour les industries agroalimentaires et chimiques.
            </motion.p>
          </div>

          {/* Boutons navigation desktop */}
          {isDesktop && (
            <div className="flex justify-end gap-3 shrink-0">
              <button className="service-prev p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="service-next p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop // on garde le loop partout
          autoplay={
            isDesktop ? false : { delay: 4000, disableOnInteraction: false }
          }
          pagination={
            isDesktop
              ? false
              : { clickable: true, el: ".swiper-pagination" }
          }
          navigation={
            isDesktop
              ? { nextEl: ".service-next", prevEl: ".service-prev" }
              : false
          }
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map(({ id, title, description, Icon }, index) => (
            <SwiperSlide key={id}>
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={index * 0.2}
                viewport={{ once: true, amount: 0.2 }}
                className="relative bg-white shadow-md p-6 h-full flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition group cursor-pointer overflow-hidden"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition">
                  <Icon className="w-7 h-7" />
                </div>

                <h4 className="text-lg font-semibold text-indigo-950 ">
                  {title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition">
                  {description}
                </p>

                {/* Trait jaune animé */}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination seulement mobile */}
        {!isDesktop && (
          <div className="swiper-pagination flex justify-center md:hidden" />
        )}
      </div>
    </section>
  );
}
