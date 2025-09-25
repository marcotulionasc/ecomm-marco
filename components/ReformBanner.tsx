'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shirt, Crown, Star, Zap } from 'lucide-react';

export function ReformBanner() {
  const reformCategories = [
    {
      id: 1,
      title: 'MELHORES OFERTAS EM CAMISETAS',
      cta: 'CONFIRA >',
      icon: Shirt,
      brands: ['LEVA BASIC', 'STYLE COLLECTION'],
      bgColor: 'bg-gray-800'
    },
    {
      id: 2,
      title: 'COLEÇÃO PREMIUM',
      cta: 'CONFIRA >',
      icon: Crown,
      brands: ['LEVA PREMIUM'],
      bgColor: 'bg-gray-800'
    },
    {
      id: 3,
      title: 'PRATICIDADE NO DIA A DIA',
      cta: 'CONFIRA >',
      icon: Star,
      brands: ['LEVA CASUAL', 'EVERYDAY'],
      bgColor: 'bg-gray-800'
    },
    {
      id: 4,
      title: 'TECNOLOGIA NO TECIDO',
      cta: 'CONFIRA >',
      icon: Zap,
      brands: ['TECH WEAR'],
      bgColor: 'bg-gray-800'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-center font-poppins font-bold text-3xl text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          O MELHOR PARA SEU ESTILO
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reformCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Área da Imagem */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <category.icon className="w-16 h-16 text-gray-600" />
                </div>
                
                {/* Marcas */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand, brandIndex) => (
                      <div
                        key={brandIndex}
                        className="bg-white/90 text-gray-800 font-poppins font-bold text-xs px-2 py-1 rounded"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Área do Texto */}
              <div className={`${category.bgColor} p-6`}>
                <h3 className="font-poppins font-bold text-lg text-white mb-4 leading-tight">
                  {category.title}
                </h3>
                
                <motion.button
                  className="text-white font-poppins font-bold text-sm flex items-center space-x-2 hover:text-leva-secondary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>{category.cta}</span>
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
