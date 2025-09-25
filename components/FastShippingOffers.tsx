'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function FastShippingOffers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fastShippingProducts = [
    {
      id: 1,
      name: 'Camiseta Básica Premium 100% Algodão Leva Collection',
      originalPrice: 'R$ 89,90',
      currentPrice: 'R$ 59,90',
      discount: '33% OFF',
      installments: '3x R$ 19,97 sem juros',
      image: 'https://via.placeholder.com/300x300/8B5CF6/A3E635?text=CAMISETA+BASICA',
      brand: 'LEVA BASIC'
    },
    {
      id: 2,
      name: 'Kit 3 Camisetas Estampadas Coleção Streetwear',
      originalPrice: 'R$ 179,90',
      currentPrice: 'R$ 119,90',
      discount: '33% OFF',
      installments: '4x R$ 29,98 sem juros',
      image: 'https://via.placeholder.com/300x300/A3E635/8B5CF6?text=KIT+3+CAMISETAS',
      brand: 'STYLE COLLECTION'
    },
    {
      id: 3,
      name: 'Camiseta Oversized Premium Tech Wear Leva',
      originalPrice: 'R$ 129,90',
      currentPrice: 'R$ 89,90',
      discount: '31% OFF',
      installments: '3x R$ 29,97 sem juros',
      image: 'https://via.placeholder.com/300x300/8B5CF6/A3E635?text=CAMISETA+OVERSIZED',
      brand: 'TECH WEAR'
    },
    {
      id: 4,
      name: 'Camiseta Minimalista Premium Corte Moderno',
      originalPrice: 'R$ 99,90',
      currentPrice: 'R$ 69,90',
      discount: '30% OFF',
      installments: '3x R$ 23,30 sem juros',
      image: 'https://via.placeholder.com/300x300/A3E635/8B5CF6?text=CAMISETA+MINIMALISTA',
      brand: 'LEVA PREMIUM'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % fastShippingProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + fastShippingProducts.length) % fastShippingProducts.length);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            className="font-poppins font-bold text-3xl text-gray-800 flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Truck className="w-8 h-8 text-leva-primary" />
            <span>OFERTAS COM ENVIOS RÁPIDOS</span>
          </motion.h2>
          
          <motion.button
            className="text-leva-primary font-poppins font-semibold text-base hover:text-leva-secondary transition-colors duration-300 flex items-center space-x-2"
            whileHover={{ x: 5 }}
          >
            <span>Ver mais</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className="relative">
          {/* Carrossel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {fastShippingProducts.map((product, index) => (
                <div key={product.id} className="w-1/4 flex-shrink-0 px-3">
                  <motion.div
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Imagem do Produto */}
                    <div className="relative h-64 bg-gray-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badge da Marca */}
                      <div className="absolute top-3 left-3">
                        <div className="bg-white/90 text-gray-800 font-poppins font-bold text-xs px-2 py-1 rounded">
                          {product.brand}
                        </div>
                      </div>
                    </div>

                    {/* Informações do Produto */}
                    <div className="p-5 space-y-3">
                      {/* Nome do Produto */}
                      <h3 className="font-poppins font-medium text-sm text-gray-800 line-clamp-2 leading-tight">
                        {product.name}
                      </h3>

                      {/* Preços */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-poppins font-normal text-sm text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                          <span className="font-poppins font-bold text-xl text-gray-800">
                            {product.currentPrice}
                          </span>
                          <span className="bg-green-500 text-white font-poppins font-bold text-xs px-2 py-1 rounded">
                            {product.discount}
                          </span>
                        </div>
                        
                        <p className="font-poppins font-medium text-sm text-gray-600">
                          {product.installments}
                        </p>
                      </div>

                      {/* Frete Grátis */}
                      <div className="flex items-center space-x-2 text-green-600">
                        <Truck className="w-4 h-4" />
                        <span className="font-poppins font-semibold text-sm">
                          Frete grátis ⚡ FULL
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Botões de Navegação */}
          <motion.button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-leva-primary" />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-leva-primary" />
          </motion.button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {fastShippingProducts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-leva-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
