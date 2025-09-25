'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export function RoomsInspiration() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/rooms/room-1.jpg',
      number: '01',
      title: 'Bed Room',
      subtitle: 'Inner Peace'
    },
    {
      id: 2,
      image: '/rooms/room-2.jpg',
      number: '02',
      title: 'Living Room',
      subtitle: 'Cozy Space'
    },
    {
      id: 3,
      image: '/rooms/room-3.jpg',
      number: '03',
      title: 'Kitchen',
      subtitle: 'Modern Style'
    }
  ];

  return (
    <section className="bg-furniro-bg-warm h-[670px] flex items-center px-4 sm:px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-poppins font-bold text-[40px] leading-[48px] text-furniro-text-secondary">
            50+ Beautiful rooms<br />
            inspiration
          </h2>
          
          <p className="font-poppins font-medium text-[16px] text-furniro-text-muted max-w-[368px]">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          
          <button className="bg-furniro-gold text-white font-poppins font-semibold text-[16px] px-9 py-3 hover:bg-opacity-90 transition-all ease-out focus:outline-none focus:ring-2 focus:ring-furniro-gold focus:ring-offset-2">
            Explore More
          </button>
        </div>
        
        <div className="relative flex items-center space-x-6">
          <div className="relative">
            <Image
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              width={404}
              height={582}
              className="w-[404px] h-[582px] object-cover rounded-lg"
            />
            
            <div className="absolute bottom-6 left-6 w-[217px] h-[130px] bg-white bg-opacity-72 backdrop-blur-sm rounded-lg p-6 flex flex-col justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-poppins font-medium text-[16px] text-furniro-text-muted">
                  {slides[activeSlide].number}
                </span>
                <span className="font-poppins font-medium text-[16px] text-furniro-text-muted">
                  —
                </span>
                <span className="font-poppins font-medium text-[16px] text-furniro-text-muted">
                  {slides[activeSlide].title}
                </span>
              </div>
              <h3 className="font-poppins font-semibold text-[28px] text-furniro-text-secondary">
                {slides[activeSlide].subtitle}
              </h3>
            </div>
            
            <button 
              className="absolute bottom-6 right-6 w-12 h-12 bg-furniro-gold rounded-lg flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all ease-out"
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <Image
              src="/rooms/thumb-1.jpg"
              alt="Room Thumbnail 1"
              width={372}
              height={486}
              className="w-[372px] h-[486px] object-cover rounded-lg"
            />
            
            <div className="flex items-center justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ease-out ${
                    index === activeSlide
                      ? 'bg-furniro-gold ring-2 ring-furniro-gold ring-offset-2'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
