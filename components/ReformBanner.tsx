'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shirt, Crown, Star, Zap } from 'lucide-react';

export function ReformBanner() {
  const categories = [
    {
      id: 1,
      title: 'MELHORES OFERTAS EM CAMISETAS',
      icon: Shirt,
      brands: ['LEVA BASIC', 'STYLE COLLECTION']
    },
    {
      id: 2,
      title: 'COLEÇÃO PREMIUM',
      icon: Crown,
      brands: ['LEVA PREMIUM']
    },
    {
      id: 3,
      title: 'PRATICIDADE NO DIA A DIA',
      icon: Star,
      brands: ['LEVA CASUAL', 'EVERYDAY']
    },
    {
      id: 4,
      title: 'TECNOLOGIA NO TECIDO',
      icon: Zap,
      brands: ['TECH WEAR']
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
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Área Superior - Cinza Claro */}
              <div className="bg-gray-100 p-6 flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-leva-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Marcas */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.brands.map((brand, brandIndex) => (
                    <div
                      key={brandIndex}
                      className="bg-white text-gray-800 font-poppins font-bold text-xs px-3 py-1 rounded shadow-sm"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              {/* Área Inferior - Azul Escuro */}
              <div className="bg-gray-800 p-6">
                <h3 className="font-poppins font-bold text-lg text-white mb-4 leading-tight text-center">
                  {category.title}
                </h3>
                
                <motion.button
                  className="w-full text-white font-poppins font-bold text-sm flex items-center justify-center space-x-2 hover:text-leva-secondary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>CONFIRA</span>
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
