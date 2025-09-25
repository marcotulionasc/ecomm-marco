export function Footer() {
  return (
    <footer className="bg-white border-t border-black border-opacity-17">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-[24px] text-black">
              Funiro.
            </h3>
            <address className="font-poppins font-normal text-[16px] text-furniro-text-light not-italic leading-relaxed">
              400 University Drive Suite 200 Coral<br />
              Gables,<br />
              FL 33134 USA
            </address>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-poppins font-medium text-[16px] text-furniro-text-light">
              Links
            </h4>
            <nav className="space-y-4">
              <a href="/" className="block font-poppins font-medium text-[16px] text-black hover:text-furniro-gold transition-colors ease-out">
                Home
              </a>
              <a href="/shop" className="block font-poppins font-medium text-[16px] text-black hover:text-furniro-gold transition-colors ease-out">
                Shop
              </a>
              <a href="/about" className="block font-poppins font-medium text-[16px] text-black hover:text-furniro-gold transition-colors ease-out">
                About
              </a>
              <a href="/contact" className="block font-poppins font-medium text-[16px] text-black hover:text-furniro-gold transition-colors ease-out">
                Contact
              </a>
            </nav>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-poppins font-medium text-[16px] text-furniro-text-light">
              Help
            </h4>
            <nav className="space-y-4">
              <a href="/payment-options" className="block font-poppins font-medium text-[16px] text-black hover:text-furniro-gold transition-colors ease-out">
                Payment Options
              </a>
              <a href="/returns" className="block font-poppins font-medium text-[16px] text-black hover:text-furniro-gold transition-colors ease-out">
                Returns
              </a>
              <a href="/privacy-policies" className="block font-poppins font-medium text-[16px] text-black hover:text-furniro-gold transition-colors ease-out">
                Privacy Policies
              </a>
            </nav>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-poppins font-medium text-[16px] text-furniro-text-light">
              Newsletter
            </h4>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="font-poppins font-normal text-[14px] text-furniro-text-light placeholder-furniro-text-light border-0 border-b border-black pb-2 w-[200px] bg-transparent focus:outline-none focus:border-furniro-gold"
                />
              </div>
              <button
                type="submit"
                className="font-poppins font-medium text-[14px] text-black border-b border-black pb-2 w-[75px] bg-transparent hover:text-furniro-gold hover:border-furniro-gold transition-colors ease-out focus:outline-none focus:text-furniro-gold focus:border-furniro-gold uppercase"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[#D9D9D9] mt-12 pt-6">
          <p className="font-poppins font-normal text-[16px] text-black">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
}