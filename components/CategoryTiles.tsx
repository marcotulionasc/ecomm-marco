'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { categoryTiles } from '@/lib/data';

export function CategoryTiles() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-white to-leva-bg-light">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins font-bold text-[40px] bg-gradient-to-r from-leva-primary to-leva-secondary bg-clip-text text-transparent mb-4">
            Explore Nossas Categorias
          </h2>
          <p className="font-poppins font-normal text-[20px] text-leva-text-medium max-w-2xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-t from-leva-primary/20 to-leva-secondary/20 z-10" />
                <Image
                  src={`https://via.placeholder.com/381x480/8B5CF6/A3E635?text=${tile.name.toUpperCase()}`}
                  alt={`Categoria ${tile.name}`}
                  width={381}
                  height={480}
                  className="w-full h-[480px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20" />
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <motion.h3 
                    className="font-poppins font-bold text-[28px] text-white mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tile.name}
                  </motion.h3>
                  <motion.button 
                    className="bg-white/20 backdrop-blur-sm text-white font-poppins font-semibold text-[16px] px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Produtos
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
