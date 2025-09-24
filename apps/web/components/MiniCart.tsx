'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function MiniCart() {
  const [cartItems] = useState([]);
  const itemCount = cartItems.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
            >
              {itemCount}
            </Badge>
          )}
          <span className="sr-only">Carrinho de compras</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Carrinho de Compras</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {itemCount === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item: any) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-muted rounded-md" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Quantidade: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium">{item.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {itemCount > 0 && (
            <>
              <Separator />
              <div className="space-y-4 py-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>R$ 0,00</span>
                </div>
                <Button className="w-full">Finalizar Compra</Button>
                <Button variant="outline" className="w-full">
                  Continuar Comprando
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
