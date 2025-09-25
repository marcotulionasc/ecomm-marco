'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-leva-text-light/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-bold text-3xl text-leva-primary">
              Leva Ecom.
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-leva-primary" />
                <address className="font-poppins font-normal text-base text-leva-text-muted not-italic">
                  Rua da Moda, 123<br />
                  Centro, São Paulo - SP 01234-567
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-leva-primary" />
                <span className="font-poppins font-normal text-base text-leva-text-muted">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-leva-primary" />
                <span className="font-poppins font-normal text-base text-leva-text-muted">
                  contato@levaecom.com.br
                </span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-leva-primary rounded-full flex items-center justify-center hover:bg-leva-primary/90 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-leva-secondary rounded-full flex items-center justify-center hover:bg-leva-secondary/90 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-leva-primary rounded-full flex items-center justify-center hover:bg-leva-primary/90 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
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
            <h4 className="font-poppins font-bold text-lg text-leva-text-secondary">
              Links
            </h4>
            <nav className="space-y-4">
              <a href="/" className="block font-poppins font-medium text-base text-leva-text-muted hover:text-leva-primary transition-colors duration-300">
                Início
              </a>
              <a href="/loja" className="block font-poppins font-medium text-base text-leva-text-muted hover:text-leva-primary transition-colors duration-300">
                Loja
              </a>
              <a href="/sobre" className="block font-poppins font-medium text-base text-leva-text-muted hover:text-leva-primary transition-colors duration-300">
                Sobre
              </a>
              <a href="/contato" className="block font-poppins font-medium text-base text-leva-text-muted hover:text-leva-primary transition-colors duration-300">
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
            <h4 className="font-poppins font-bold text-lg text-leva-text-secondary">
              Ajuda
            </h4>
            <nav className="space-y-4">
              <a href="/opcoes-pagamento" className="block font-poppins font-medium text-base text-leva-text-muted hover:text-leva-primary transition-colors duration-300">
                Opções de Pagamento
              </a>
              <a href="/devolucoes" className="block font-poppins font-medium text-base text-leva-text-muted hover:text-leva-primary transition-colors duration-300">
                Devoluções
              </a>
              <a href="/politica-privacidade" className="block font-poppins font-medium text-base text-leva-text-muted hover:text-leva-primary transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="block font-poppins font-medium text-base text-leva-text-muted hover:text-leva-primary transition-colors duration-300">
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
            <h4 className="font-poppins font-bold text-lg text-leva-text-secondary">
              Newsletter
            </h4>
            <p className="font-poppins font-medium text-sm text-leva-text-muted">
              Receba ofertas exclusivas e novidades
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="font-poppins font-normal text-sm text-leva-text-secondary placeholder-leva-text-muted border-0 border-b-2 border-leva-text-light pb-2 w-full bg-transparent focus:outline-none focus:border-leva-primary transition-colors duration-300"
                />
              </div>
              <motion.button
                type="submit"
                className="font-poppins font-bold text-sm text-leva-primary border-b-2 border-leva-primary pb-2 bg-transparent hover:text-leva-secondary hover:border-leva-secondary transition-colors duration-300 focus:outline-none uppercase flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Inscrever-se</span>
                <Send size={16} />
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
            <p className="font-poppins font-normal text-base text-leva-text-muted">
              © 2024 Leva Ecom. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <span className="font-poppins font-medium text-sm text-leva-text-muted">
                Feito com ❤️ no Brasil
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}