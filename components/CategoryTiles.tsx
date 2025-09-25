'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Utensils, Bed } from 'lucide-react';
import { categoryTiles } from '@/lib/data';

export function CategoryTiles() {
  const categoryIcons = {
    'Sala de Jantar': Utensils,
    'Sala de Estar': Home,
    'Quarto': Bed
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins font-bold text-4xl text-leva-primary mb-4">
            Explore Nossas Categorias
          </h2>
          <p className="font-poppins font-normal text-xl text-leva-text-medium max-w-2xl mx-auto">
            Descubra móveis incríveis para cada ambiente da sua casa. Qualidade premium com design moderno.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryTiles.map((tile, index) => (
            <motion.div 
              key={tile.id} 
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src={`https://via.placeholder.com/381x480/8B5CF6/A3E635?text=${tile.name.toUpperCase()}`}
                  alt={`Categoria ${tile.name}`}
                  width={381}
                  height={480}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {React.createElement(categoryIcons[tile.name as keyof typeof categoryIcons] || Home, {
                      className: "w-6 h-6 text-white"
                    })}
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h3 
                    className="font-poppins font-bold text-2xl text-white mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tile.name}
                  </motion.h3>
                  <motion.button 
                    className="bg-white text-leva-primary font-poppins font-semibold text-base px-6 py-3 rounded-lg hover:bg-leva-secondary hover:text-white transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Ver Produtos</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
