'use client';

import Image from 'next/image';
import { Share2, Repeat, Heart, ShoppingCart, Star, Eye, Zap, TrendingUp, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '@/lib/data';

export function ProductsGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-leva-bg-light">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins font-bold text-4xl text-leva-primary mb-4">
            Nossas Camisetas
          </h2>
          <p className="font-poppins font-normal text-xl text-leva-text-medium max-w-2xl mx-auto">
            Descubra nossa seleção premium de camisetas com design único e qualidade excepcional
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
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
                    className="absolute top-4 left-4 bg-blue-600 text-white font-poppins font-bold text-xs px-3 py-1 rounded-lg shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    OFERTA DO DIA
                  </motion.div>
                )}
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye size={18} className="text-leva-primary" />
                  </div>
                </div>
                
                {product.hasOverlay && (
                  <motion.div 
                    className="absolute inset-0 bg-leva-primary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button 
                      className="bg-white text-leva-primary font-poppins font-bold text-base px-8 py-4 mb-6 rounded-lg shadow-lg hover:bg-leva-secondary hover:text-white transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={20} />
                      <span>Adicionar ao Carrinho</span>
                    </motion.button>
                    
                    <div className="flex items-center space-x-6 text-white">
                      <motion.button 
                        className="flex items-center space-x-2 hover:text-leva-secondary transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Share2 size={18} />
                        <span className="font-poppins font-semibold text-base">Compartilhar</span>
                      </motion.button>
                      <motion.button 
                        className="flex items-center space-x-2 hover:text-leva-secondary transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Repeat size={18} />
                        <span className="font-poppins font-semibold text-base">Comparar</span>
                      </motion.button>
                      <motion.button 
                        className="flex items-center space-x-2 hover:text-leva-secondary transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Heart size={18} />
                        <span className="font-poppins font-semibold text-base">Favoritar</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
              
              <div className="p-5 h-[220px] flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-bold text-xl text-leva-text-secondary mb-2">
                    {product.name}
                  </h3>
                  <p className="font-poppins font-medium text-sm text-leva-text-muted mb-3 line-clamp-2">
                    {product.subtitle}
                  </p>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-leva-secondary text-leva-secondary" />
                      ))}
                    </div>
                    <span className="text-sm text-leva-text-muted">(127)</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {product.originalPrice && (
                        <span className="font-poppins font-normal text-sm text-leva-text-lighter line-through">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="font-poppins font-bold text-2xl text-leva-primary">
                        {product.price}
                      </span>
                    </div>
                    
                    <button className="w-10 h-10 bg-leva-bg-light rounded-full flex items-center justify-center hover:bg-leva-primary hover:text-white transition-colors duration-300">
                      <Heart size={18} />
                    </button>
                  </div>
                  
                  {product.badge && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-poppins font-bold text-sm text-green-600">
                          {product.badge.text} OFF
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2 text-green-600">
                    <Truck className="w-4 h-4" />
                    <span className="font-poppins font-semibold text-sm">
                      Frete grátis ⚡ FULL
                    </span>
                  </div>
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
            className="bg-leva-primary text-white font-poppins font-bold text-lg px-12 py-4 rounded-lg shadow-lg hover:bg-leva-primary/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-leva-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Mais Camisetas
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
