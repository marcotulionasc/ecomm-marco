'use client';

import Image from 'next/image';
import { Share2, Repeat, Heart } from 'lucide-react';
import { products } from '@/lib/data';

export function ProductsGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-poppins font-bold text-[40px] text-furniro-text-secondary text-center mb-8">
          Our Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-furniro-bg-section">
              <div className="relative">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={285}
                  height={301}
                  className="w-full h-[301px] object-cover"
                />
                
                {product.badge && (
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-poppins font-medium text-[16px] ${
                    product.badge.type === 'sale' ? 'bg-furniro-sale' : 'bg-furniro-new'
                  }`}>
                    {product.badge.text}
                  </div>
                )}
                
                {product.hasOverlay && (
                  <div className="absolute inset-0 bg-furniro-text-secondary bg-opacity-72 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-furniro-gold font-poppins font-semibold text-[16px] px-8 py-3 mb-6 hover:bg-furniro-gold hover:text-white transition-colors ease-out">
                      Add to cart
                    </button>
                    
                    <div className="flex items-center space-x-6 text-white">
                      <button className="flex items-center space-x-2 hover:text-furniro-gold transition-colors ease-out">
                        <Share2 size={16} />
                        <span className="font-poppins font-semibold text-[16px]">Share</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-furniro-gold transition-colors ease-out">
                        <Repeat size={16} />
                        <span className="font-poppins font-semibold text-[16px]">Compare</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-furniro-gold transition-colors ease-out">
                        <Heart size={16} />
                        <span className="font-poppins font-semibold text-[16px]">Like</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 h-[145px] flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-semibold text-[24px] text-furniro-text-secondary mb-2">
                    {product.name}
                  </h3>
                  <p className="font-poppins font-medium text-[16px] text-[#898989] mb-3">
                    {product.subtitle}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="font-poppins font-semibold text-[20px] text-furniro-text-secondary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-poppins font-normal text-[16px] text-furniro-text-lighter line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="border border-furniro-gold bg-white text-furniro-gold font-poppins font-semibold text-[16px] px-[72px] py-[12px] hover:bg-furniro-gold hover:text-white transition-colors ease-out focus:outline-none focus:ring-2 focus:ring-furniro-gold focus:ring-offset-2">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
