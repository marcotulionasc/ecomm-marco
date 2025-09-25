import { PromotionalBanner } from '@/components/PromotionalBanner';
import { DailyOffers } from '@/components/DailyOffers';
import { Benefits } from '@/components/Benefits';
import { Stats } from '@/components/Stats';
import { CategoryTiles } from '@/components/CategoryTiles';
import { ProductsGrid } from '@/components/ProductsGrid';
import { RoomsInspiration } from '@/components/RoomsInspiration';
import { SocialGallery } from '@/components/SocialGallery';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PromotionalBanner />
      <DailyOffers />
      <Benefits />
      <Stats />
      <CategoryTiles />
      <ProductsGrid />
      <RoomsInspiration />
      <SocialGallery />
    </div>
  );
}
