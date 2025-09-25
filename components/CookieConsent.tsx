'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Cookie className="w-6 h-6 text-leva-secondary" />
              <div>
                <p className="text-sm">
                  Usamos cookies para melhorar sua experiência no Leva Ecom. 
                  Consulte mais informações na nossa{' '}
                  <a href="/privacidade" className="text-leva-secondary hover:underline">
                    Central de privacidade
                  </a>
                  .
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsVisible(false)}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                Configurar cookies
              </button>
              
              <button
                onClick={() => setIsVisible(false)}
                className="bg-leva-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-leva-primary/90 transition-colors duration-300"
              >
                Aceitar cookies
              </button>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
