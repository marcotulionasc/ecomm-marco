import { PromotionalBanner } from '@/components/PromotionalBanner';
import { PromotionalOffers } from '@/components/PromotionalOffers';
import { FeaturedCategories } from '@/components/FeaturedCategories';
import { ConstructionBanners } from '@/components/ConstructionBanners';
import { ReformBanner } from '@/components/ReformBanner';
import { FastShippingOffers } from '@/components/FastShippingOffers';
import { DailyOffers } from '@/components/DailyOffers';
import { Benefits } from '@/components/Benefits';
import { CategoryTiles } from '@/components/CategoryTiles';
import { ProductsGrid } from '@/components/ProductsGrid';
import { RoomsInspiration } from '@/components/RoomsInspiration';
import { SocialGallery } from '@/components/SocialGallery';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PromotionalBanner />
      <PromotionalOffers />
      <FeaturedCategories />
      <ConstructionBanners />
      <ReformBanner />
      <FastShippingOffers />
      <DailyOffers />
      <Benefits />
      <CategoryTiles />
      <ProductsGrid />
      <RoomsInspiration />
      <SocialGallery />
    </div>
  );
}
