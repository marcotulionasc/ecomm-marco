import Image from 'next/image';
import { socialImages } from '@/lib/data';

export function SocialGallery() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-poppins font-semibold text-[20px] text-furniro-text-muted mb-2">
            Share your setup with
          </p>
          <h2 className="font-poppins font-bold text-[40px] text-furniro-text-secondary">
            #FuniroFurniture
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-max">
          {socialImages.map((image, index) => (
            <div 
              key={image.id}
              className={`relative overflow-hidden rounded-md hover:scale-105 transition-transform duration-300 ease-out ${
                index === 0 ? 'md:row-span-2' :
                index === 1 ? 'lg:col-span-2' :
                index === 2 ? 'md:row-span-2' :
                index === 7 ? 'lg:col-span-2 md:row-span-2' :
                ''
              }`}
            >
              <Image
                src={image.imageSrc}
                alt={`Social furniture image ${image.id}`}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover"
                style={{
                  aspectRatio: `${image.width}/${image.height}`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
