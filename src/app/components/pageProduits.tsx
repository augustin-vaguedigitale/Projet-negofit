"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CirclePlus, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  const [selectedProduct, setSelectedProduct] = useState<ProductItems | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ✅ Filtrage intelligent (titre + description)
  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase().trim();
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
    );
  }, [search, products]);

  // ✅ Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // ✅ Gestion changement de page
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🌟 Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-950 mb-10 tracking-tight">
          {title}
        </h2>

        {/* 🔍 Barre de recherche */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={(e:any) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
            />
            <p className="text-center text-gray-500 text-sm mt-2">
  {filteredProducts.length} produit(s) trouvé(s)
</p>

          </div>
        </div>

        {/* 🧱 Grille des produits */}
        {displayedProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-sm mt-10">
            Aucun produit trouvé.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-[280px]">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Bandeau inférieur */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-md rounded-xl shadow-md px-4 py-3 text-center transition-all duration-300">
                  <h3 className="text-sm font-semibold text-gray-900 text-start mb-1">
                    {product.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 text-start line-clamp-2">
                    {product.description || "Aucune description."}
                  </p>

                  {/* Bouton visible au survol */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 flex justify-end">
                    <Button
                      onClick={() => setSelectedProduct(product)}
                      size="sm"
                      className="h-7 px-3 bg-orange-500 hover:bg-orange-600 text-[11px] font-medium rounded-md shadow-sm"
                    >
                      <CirclePlus size={12} className="mr-1" />
                      Voir détails
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 📄 Pagination */}
        {filteredProducts.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-200 text-indigo-950 hover:bg-orange-500 hover:text-white"
            >
              ← Précédent
            </Button>

            <span className="text-sm text-gray-700">
              Page {currentPage} / {totalPages}
            </span>

            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-gray-200 text-indigo-950 hover:bg-orange-500 hover:text-white"
            >
              Suivant →
            </Button>
          </div>
        )}
      </div>

      {/* 🧭 Drawer latéral gauche */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Fond */}
            <motion.div
              className="flex-1 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full sm:w-[420px] bg-white h-full shadow-2xl p-6 overflow-y-auto relative flex flex-col"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
              >
                <X size={22} />
              </button>

              <div className="w-full h-56 rounded-xl overflow-hidden shadow-md mb-6">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-950 mb-2">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {selectedProduct.description ||
                      "Aucune description disponible."}
                  </p>
                </div>

                <Button
                  onClick={() => setSelectedProduct(null)}
                  className="mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg self-start"
                >
                  Fermer
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
