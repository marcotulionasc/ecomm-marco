'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-leva-bg-light border-t border-leva-text-light/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-bold text-[28px] bg-gradient-to-r from-leva-primary to-leva-secondary bg-clip-text text-transparent">
              Leva Ecom.
            </h3>
            <address className="font-poppins font-normal text-[16px] text-leva-text-muted not-italic leading-relaxed">
              Rua dos Móveis Modernos, 123<br />
              Centro, São Paulo<br />
              SP 01234-567 Brasil
            </address>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-leva-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-leva-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-sm">i</span>
              </div>
              <div className="w-8 h-8 bg-leva-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm">t</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-poppins font-bold text-[18px] text-leva-text-secondary">
              Links
            </h4>
            <nav className="space-y-4">
              <a href="/" className="block font-poppins font-medium text-[16px] text-leva-text-muted hover:text-leva-primary transition-colors ease-out">
                Início
              </a>
              <a href="/loja" className="block font-poppins font-medium text-[16px] text-leva-text-muted hover:text-leva-primary transition-colors ease-out">
                Loja
              </a>
              <a href="/sobre" className="block font-poppins font-medium text-[16px] text-leva-text-muted hover:text-leva-primary transition-colors ease-out">
                Sobre
              </a>
              <a href="/contato" className="block font-poppins font-medium text-[16px] text-leva-text-muted hover:text-leva-primary transition-colors ease-out">
                Contato
              </a>
            </nav>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-poppins font-bold text-[18px] text-leva-text-secondary">
              Ajuda
            </h4>
            <nav className="space-y-4">
              <a href="/opcoes-pagamento" className="block font-poppins font-medium text-[16px] text-leva-text-muted hover:text-leva-primary transition-colors ease-out">
                Opções de Pagamento
              </a>
              <a href="/devolucoes" className="block font-poppins font-medium text-[16px] text-leva-text-muted hover:text-leva-primary transition-colors ease-out">
                Devoluções
              </a>
              <a href="/politica-privacidade" className="block font-poppins font-medium text-[16px] text-leva-text-muted hover:text-leva-primary transition-colors ease-out">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="block font-poppins font-medium text-[16px] text-leva-text-muted hover:text-leva-primary transition-colors ease-out">
                Termos de Uso
              </a>
            </nav>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-poppins font-bold text-[18px] text-leva-text-secondary">
              Newsletter
            </h4>
            <p className="font-poppins font-medium text-[14px] text-leva-text-muted">
              Receba ofertas exclusivas e novidades
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="font-poppins font-normal text-[14px] text-leva-text-secondary placeholder-leva-text-muted border-0 border-b-2 border-leva-text-light pb-2 w-full bg-transparent focus:outline-none focus:border-leva-primary transition-colors duration-300"
                />
              </div>
              <motion.button
                type="submit"
                className="font-poppins font-bold text-[14px] text-leva-primary border-b-2 border-leva-primary pb-2 bg-transparent hover:text-leva-secondary hover:border-leva-secondary transition-colors ease-out focus:outline-none uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inscrever-se
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-leva-text-light/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-poppins font-normal text-[16px] text-leva-text-muted">
              © 2024 Leva Ecom. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <span className="font-poppins font-medium text-[14px] text-leva-text-muted">
                Feito com ❤️ no Brasil
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}