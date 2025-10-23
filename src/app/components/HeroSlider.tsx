"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { motion } from "motion/react"
import { Factory, RefreshCcw, Ship } from "lucide-react"


// 🎯 data promo
const promos = [
  {
    id: "import",
    title: "IMPORTATIONS",
    description: "Commerce général de produits importés - Prestations diverses.",
    Icon: Factory,
  },
  {
    id: "export",
    title: "EXPORTATIONS",
    description:
      "Vente de matériels de travaux publics, de matériels agricoles, de matériels et équipements audiovisuels ainsi que divers autres.",
    Icon: Ship,
  },
  {
    id: "exchange",
    title: "ÉCHANGES",
    description:
      "Nous connectons les producteurs locaux aux marchés internationaux et assurons un approvisionnement fiable.",
    Icon: RefreshCcw,
  },
];

// 🔄 animations framer-motion
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut"as const },
  },
};

export default function HeroSlider() {
  return (
    <div className="relative w-full">

      <div className="relative z-10 h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full overlay"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[80vh] w-full flex items-center justify-center">
            {/* Background image + overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-50"
              style={{ backgroundImage: "url(/assets/img/slider/slide_1.jpg)" }}
            >
              
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-0 px-4 text-white text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight left-16">
                Bienvenue sur <br /> <b>Negofit Sarl</b>
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed">
                "Nous vous ouvrons des portes vers de nouveaux marchés et des
                opportunités infinies. <br /> Ensemble, nous bâtissons des ponts
                entre les cultures et les économies."
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[80vh] w-full flex items-center justify-center">
            {/* Background image + overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-50"
              style={{ backgroundImage: "url(/assets/img/slider/slide_2.jpg)" }}
            >
              
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-white text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Nous sommes l&apos;Industrie <br /> <b>Negofit Sarl.</b>
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-left">
                Industrial Revolution, dans l&apos;histoire moderne, le processus
                de changement de l&apos;économie <br /> agricole et artisanale
                vers une dominante par l&apos;industrie et la fabrication de
                machines.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

      {/* === PROMO (chevauche le hero) === */}
      <div className="relative z-20 -mt-20 md:-mt-28 lg:-mt-12">
        <div className="max-w-7xl mx-auto px-4">
               <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.15 }}
                 variants={containerVariants}
               >
                 <h2 id="promo-heading" className="sr-only">
                   Nos services (import / export / échanges)
                 </h2>
       
                 <div className="grid gap-10 md:grid-cols-3">
                   {promos.map(({ id, title, description, Icon }) => (
                     <motion.article
                       key={id}
                       variants={itemVariants}
                       whileHover="hover"
                       initial="rest"
                       animate="rest"
                       className="relative overflow-hidden bg-white p-8 shadow-md hover:shadow-lg transition border border-gray-100 group cursor-pointer"
                     >
                       {/* Overlay rectangulaire animé */}
                       <motion.div
                         variants={{
                           rest: { width: "24px", height: "24px", opacity: 1 },
                           hover: { width: "100%", height: "100%", opacity: 1 },
                         }}
                         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                         className="absolute bottom-2 right-2 bg-orange-400 z-0"
                       />
       
                       {/* Contenu */}
                       <div className="relative z-10 flex flex-col items-start gap-4 transition-colors duration-500 group-hover:text-white">
                         {/* Icône */}
                         <div className="w-14 h-14 rounded-lg flex items-center justify-center border border-gray-200 transition-colors duration-500 group-hover:border-white">
                           <Icon className="w-7 h-7 text-orange-500 transition-colors duration-500 group-hover:text-white" />
                         </div>
       
                         {/* Texte */}
                         <div>
                           <h3
                             id={`promo-${id}-title`}
                             className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-white"
                           >
                             
                             {title}
                           </h3>
                           <p className="mt-3 text-sm text-black leading-relaxed group-hover:text-white">
                             {description}
                           </p>
                         </div>
                       </div>
                     </motion.article>
                   ))}
                 </div>
               </motion.div>
             </div>
      </div>

    </div>
   
   
  )
}
