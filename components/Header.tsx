'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search, User, ShoppingCart } from 'lucide-react';
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
    <header className="bg-white h-[100px] flex items-center justify-between px-4 sm:px-6 lg:px-10 max-w-screen-xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <Image
          src="https://via.placeholder.com/50x32/8B5CF6/FFFFFF?text=LEVA"
          alt="Leva Ecom Logo"
          width={50}
          height={32}
          className="object-contain rounded"
        />
        <span className="font-montserrat font-bold text-[34px] bg-gradient-to-r from-leva-primary to-leva-secondary bg-clip-text text-transparent">
          Leva Ecom
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-poppins font-medium text-[16px] text-black hover:text-leva-primary hover:underline transition-colors ease-out"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center space-x-6">
        <button
          aria-label="Menu"
          className="hover:text-leva-primary transition-colors ease-out"
        >
          <Menu size={24} />
        </button>
        <button
          aria-label="Search"
          className="hover:text-leva-primary transition-colors ease-out"
        >
          <Search size={24} />
        </button>
        <button
          aria-label="User account"
          className="hover:text-leva-primary transition-colors ease-out"
        >
          <User size={24} />
        </button>
        <button
          aria-label="Shopping cart"
          className="hover:text-leva-primary transition-colors ease-out"
        >
          <ShoppingCart size={24} />
        </button>
      </div>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="hover:text-leva-primary transition-colors ease-out"
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
                  className="font-poppins font-medium text-[16px] text-black hover:text-leva-primary transition-colors ease-out"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-6 border-t">
                <button
                  aria-label="Search"
                  className="hover:text-leva-primary transition-colors ease-out"
                >
                  <Search size={24} />
                </button>
                <button
                  aria-label="User account"
                  className="hover:text-leva-primary transition-colors ease-out"
                >
                  <User size={24} />
                </button>
                <button
                  aria-label="Shopping cart"
                  className="hover:text-leva-primary transition-colors ease-out"
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