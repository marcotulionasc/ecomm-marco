import type { MoneyV2 } from '@/lib/types/shopify';

interface PriceProps {
  price: MoneyV2;
  compareAtPrice?: MoneyV2;
  className?: string;
}

export function Price({ price, compareAtPrice, className }: PriceProps) {
  const formatPrice = (money: MoneyV2) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: money.currencyCode,
    }).format(parseFloat(money.amount));
  };

  return (
    <div className={className}>
      {compareAtPrice && parseFloat(compareAtPrice.amount) > parseFloat(price.amount) && (
        <span className="text-sm text-muted-foreground line-through mr-2">
          {formatPrice(compareAtPrice)}
        </span>
      )}
      <span className="font-semibold text-primary">
        {formatPrice(price)}
      </span>
    </div>
  );
}
