import Image from 'next/image';
import { categoryTiles } from '@/lib/data';

export function CategoryTiles() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-[32px] text-black mb-2">
            Browse The Range
          </h2>
          <p className="font-poppins font-normal text-[20px] text-furniro-text-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryTiles.map((tile) => (
            <div key={tile.id} className="text-center group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <div 
                  className="absolute inset-0 z-10 opacity-20"
                  style={{ backgroundColor: tile.bgColor }}
                />
                <Image
                  src={tile.imageSrc}
                  alt={tile.name}
                  width={381}
                  height={480}
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
              <h3 className="font-poppins font-semibold text-[24px] text-black">
                {tile.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
