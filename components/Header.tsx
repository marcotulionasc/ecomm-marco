'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { MiniCart } from '@/components/MiniCart';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              E-commerce Store
            </span>
          </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground/80 text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/colecoes"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Coleções
                </Link>
                <Link
                  href="/buscar"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Buscar
                </Link>
              </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center">
              <span className="font-bold">E-commerce Store</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/"
                      className="text-foreground/60 transition-colors hover:text-foreground"
                    >
                      Home
                    </Link>
                    <Link
                      href="/colecoes"
                      className="text-foreground/60 transition-colors hover:text-foreground"
                    >
                      Coleções
                    </Link>
                    <Link
                      href="/buscar"
                      className="text-foreground/60 transition-colors hover:text-foreground"
                    >
                      Buscar
                    </Link>
                  </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="pl-8 md:w-[100px] lg:w-[300px]"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <MiniCart />
          </nav>
        </div>
      </div>
    </header>
  );
}
