'use client';

import Image from 'next/image';
import { Share2, Repeat, Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '@/lib/data';

export function ProductsGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-leva-bg-light to-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins font-bold text-[48px] bg-gradient-to-r from-leva-primary to-leva-secondary bg-clip-text text-transparent mb-4">
            Nossos Produtos
          </h2>
          <p className="font-poppins font-normal text-[20px] text-leva-text-medium max-w-2xl mx-auto">
            Descubra nossa seleção premium de móveis modernos e elegantes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <Image
                  src={`https://via.placeholder.com/285x301/8B5CF6/A3E635?text=${product.name.toUpperCase()}`}
                  alt={product.name}
                  width={285}
                  height={301}
                  className="w-full h-[301px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {product.badge && (
                  <motion.div 
                    className={`absolute top-4 right-4 w-14 h-14 rounded-full flex items-center justify-center text-white font-poppins font-bold text-[14px] shadow-lg ${
                      product.badge.type === 'sale' ? 'bg-leva-sale' : 'bg-leva-new'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {product.badge.text}
                  </motion.div>
                )}
                
                {product.hasOverlay && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-leva-primary/90 to-leva-secondary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button 
                      className="bg-white text-leva-primary font-poppins font-bold text-[16px] px-8 py-4 mb-6 rounded-full shadow-lg hover:bg-leva-secondary hover:text-white transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={20} />
                      <span>Adicionar ao Carrinho</span>
                    </motion.button>
                    
                    <div className="flex items-center space-x-6 text-white">
                      <motion.button 
                        className="flex items-center space-x-2 hover:text-leva-secondary transition-colors ease-out"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Share2 size={18} />
                        <span className="font-poppins font-semibold text-[16px]">Compartilhar</span>
                      </motion.button>
                      <motion.button 
                        className="flex items-center space-x-2 hover:text-leva-secondary transition-colors ease-out"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Repeat size={18} />
                        <span className="font-poppins font-semibold text-[16px]">Comparar</span>
                      </motion.button>
                      <motion.button 
                        className="flex items-center space-x-2 hover:text-leva-secondary transition-colors ease-out"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Heart size={18} />
                        <span className="font-poppins font-semibold text-[16px]">Favoritar</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
              
              <div className="p-6 h-[160px] flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-bold text-[24px] text-leva-text-secondary mb-2">
                    {product.name}
                  </h3>
                  <p className="font-poppins font-medium text-[16px] text-leva-text-muted mb-3">
                    {product.subtitle}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="font-poppins font-bold text-[22px] text-leva-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-poppins font-normal text-[16px] text-leva-text-lighter line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-leva-primary to-leva-secondary text-white font-poppins font-bold text-[18px] px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-leva-primary/50 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Mais Produtos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
