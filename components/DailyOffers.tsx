'use client';

import { motion } from 'framer-motion';
import { Flame, ArrowRight, Clock, Star } from 'lucide-react';

export function DailyOffers() {
  const offers = [
    {
      id: 1,
      name: 'Camiseta Básica',
      originalPrice: 'R$ 79,90',
      price: 'R$ 49,90',
      discount: '38%',
      image: 'https://via.placeholder.com/200x200/8B5CF6/A3E635?text=BASICA',
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: 'Camiseta Premium',
      originalPrice: 'R$ 129,90',
      price: 'R$ 89,90',
      discount: '31%',
      image: 'https://via.placeholder.com/200x200/A3E635/8B5CF6?text=PREMIUM',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Kit 3 Camisetas',
      originalPrice: 'R$ 179,90',
      price: 'R$ 119,90',
      discount: '33%',
      image: 'https://via.placeholder.com/200x200/8B5CF6/A3E635?text=KIT+3',
      rating: 4.7,
      reviews: 203
    },
    {
      id: 4,
      name: 'Camiseta Streetwear',
      originalPrice: 'R$ 99,90',
      price: 'R$ 79,90',
      discount: '20%',
      image: 'https://via.placeholder.com/200x200/A3E635/8B5CF6?text=STREETWEAR',
      rating: 4.6,
      reviews: 156
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-poppins font-bold text-2xl text-leva-text-dark">
              Ofertas para comprar agora
            </h2>
          </div>
          
          <motion.button
            className="flex items-center space-x-2 text-leva-primary hover:text-leva-secondary transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <span className="font-poppins font-semibold">Ver mais</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute top-3 left-3">
                  <div className="bg-red-500 text-white font-poppins font-bold text-xs px-3 py-1 rounded-full">
                    -{offer.discount}
                  </div>
                </div>
                
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-leva-primary" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-poppins font-semibold text-lg text-leva-text-dark mb-2">
                  {offer.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i <= Math.floor(offer.rating)
                            ? 'fill-leva-secondary text-leva-secondary'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({offer.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-500 line-through text-sm">
                      {offer.originalPrice}
                    </p>
                    <p className="text-leva-primary font-bold text-xl">
                      {offer.price}
                    </p>
                  </div>
                  
                  <motion.button
                    className="bg-leva-primary text-white px-4 py-2 rounded-lg font-poppins font-semibold text-sm hover:bg-leva-primary/90 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Comprar
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
