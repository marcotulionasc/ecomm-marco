import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[716px] bg-furniro-hero-bg overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          width={1440}
          height={1008}
          className="w-full h-full object-cover"
          style={{
            marginTop: '-75px'
          }}
          priority
        />
      </div>
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-end">
        <div className="relative">
          <div className="absolute -top-8 left-4">
            <span className="font-poppins font-semibold text-[16px] tracking-[3px] text-black">
              New Arrival
            </span>
          </div>
          
          <div className="w-[643px] h-[443px] bg-furniro-hero-card rounded-[10px] flex flex-col justify-center px-[39px] py-[62px]">
            <h1 className="font-poppins font-bold text-[52px] leading-[65px] text-furniro-gold mb-4">
              Discover Our<br />
              New Collection
            </h1>
            
            <p className="font-poppins font-medium text-[18px] leading-[24px] text-furniro-text-dark mb-12 max-w-[546px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            
            <button className="bg-furniro-gold text-white font-poppins font-bold text-[16px] uppercase px-[72px] py-[25px] hover:bg-opacity-90 transition-all ease-out focus:outline-none focus:ring-2 focus:ring-furniro-gold focus:ring-offset-2">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
