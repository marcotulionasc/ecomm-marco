'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search, User, ShoppingCart, Heart, Star, Truck, Shield, Award, Phone, MapPin, ChevronDown } from 'lucide-react';
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
    <header className="bg-white shadow-sm">
      <div className="bg-leva-primary text-white py-2">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4" />
              <span>Frete Grátis acima de R$ 99</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Qualidade Premium</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
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
                <span className="font-montserrat font-bold text-2xl text-leva-primary">
                  Leva Ecom
                </span>
              </div>

              <div className="hidden lg:flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Informe seu CEP</span>
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar camisetas, marcas e muito mais..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leva-primary/50 focus:border-leva-primary"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-leva-primary transition-colors duration-300">
                <User className="w-5 h-5" />
                <span className="text-sm">Crie a sua conta</span>
              </button>
              
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-leva-primary transition-colors duration-300">
                <span className="text-sm">Entre</span>
              </button>
              
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-leva-primary transition-colors duration-300">
                <span className="text-sm">Compras</span>
              </button>
              
              <button className="relative hover:text-leva-primary transition-colors duration-300">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-leva-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center space-x-8 py-3">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-leva-primary transition-colors duration-300">
              <Menu className="w-5 h-5" />
              <span className="text-sm font-medium">Categorias</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <Link href="/ofertas" className="text-sm font-medium text-gray-700 hover:text-leva-primary transition-colors duration-300">
              Ofertas
            </Link>
            
            <Link href="/cupons" className="text-sm font-medium text-gray-700 hover:text-leva-primary transition-colors duration-300">
              Cupons
            </Link>
            
            <Link href="/moda" className="text-sm font-medium text-gray-700 hover:text-leva-primary transition-colors duration-300">
              Moda
            </Link>
            
            <Link href="/contato" className="text-sm font-medium text-gray-700 hover:text-leva-primary transition-colors duration-300">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}