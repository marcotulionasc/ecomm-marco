'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  variantId: string;
  quantity?: number;
  disabled?: boolean;
  className?: string;
}

export function AddToCartButton({ 
  variantId, 
  quantity = 1, 
  disabled = false,
  className 
}: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [cartId, setCartId] = useState<string | null>(null);

  const handleAddToCart = async () => {
    setIsLoading(true);
    
    try {
      let currentCartId = cartId;
      
      if (!currentCartId) {
        const createResponse = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'create',
          }),
        });
        
        const createData = await createResponse.json();
        currentCartId = createData.cartId;
        setCartId(currentCartId);
      }

      const addResponse = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'add',
          cartId: currentCartId,
          lines: [
            {
              merchandiseId: variantId,
              quantity,
            },
          ],
        }),
      });

      const addData = await addResponse.json();
      
      if (addData.success) {
        const checkoutResponse = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cartId: currentCartId,
          }),
        });

        const checkoutData = await checkoutResponse.json();
        
        if (checkoutData.checkoutUrl) {
          window.location.href = checkoutData.checkoutUrl;
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={disabled || isLoading}
      className={className}
    >
      <ShoppingCart className="w-4 h-4 mr-2" />
      {isLoading ? 'Adicionando...' : 'Adicionar ao Carrinho'}
    </Button>
  );
}
