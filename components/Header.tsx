'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search, User, ShoppingCart, Heart, Star, Truck, Shield, Award, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Loja', href: '/loja' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-leva-text-light/10">
      <div className="bg-leva-primary text-white py-2">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4" />
              <span>Frete Grátis acima de R$ 299</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Garantia de Qualidade</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-[80px] flex items-center justify-between px-4 sm:px-6 lg:px-10 max-w-screen-xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="https://via.placeholder.com/50x32/8B5CF6/FFFFFF?text=LEVA"
              alt="Leva Ecom Logo"
              width={50}
              height={32}
              className="object-contain rounded"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-leva-secondary rounded-full"></div>
          </div>
          <span className="font-montserrat font-bold text-3xl text-leva-primary">
            Leva Ecom
          </span>
        </div>

      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-poppins font-medium text-base text-leva-text-dark hover:text-leva-primary transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>

        <div className="hidden md:flex items-center space-x-6">
          <button
            aria-label="Favoritos"
            className="relative hover:text-leva-primary transition-colors duration-300"
          >
            <Heart size={24} />
            <span className="absolute -top-2 -right-2 bg-leva-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
          <button
            aria-label="Search"
            className="hover:text-leva-primary transition-colors duration-300"
          >
            <Search size={24} />
          </button>
          <button
            aria-label="User account"
            className="hover:text-leva-primary transition-colors duration-300"
          >
            <User size={24} />
          </button>
          <button
            aria-label="Shopping cart"
            className="relative hover:text-leva-primary transition-colors duration-300"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-leva-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="hover:text-leva-primary transition-colors duration-300"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-6 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-poppins font-medium text-base text-leva-text-dark hover:text-leva-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-6 border-t">
                <button
                  aria-label="Search"
                  className="hover:text-leva-primary transition-colors duration-300"
                >
                  <Search size={24} />
                </button>
                <button
                  aria-label="User account"
                  className="hover:text-leva-primary transition-colors duration-300"
                >
                  <User size={24} />
                </button>
                <button
                  aria-label="Shopping cart"
                  className="hover:text-leva-primary transition-colors duration-300"
                >
                  <ShoppingCart size={24} />
                </button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}