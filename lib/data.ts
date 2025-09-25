export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  badge?: {
    type: 'sale' | 'new';
    text: string;
  };
  hasOverlay?: boolean;
  imageSrc: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Syltherine',
    subtitle: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    originalPrice: 'Rp 3.500.000',
    badge: {
      type: 'sale',
      text: '-30%'
    },
    imageSrc: '/products/syltherine.jpg'
  },
  {
    id: '2',
    name: 'Leviosa',
    subtitle: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    hasOverlay: true,
    imageSrc: '/products/leviosa.jpg'
  },
  {
    id: '3',
    name: 'Lolito',
    subtitle: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    originalPrice: 'Rp 14.000.000',
    badge: {
      type: 'sale',
      text: '-50%'
    },
    imageSrc: '/products/lolito.jpg'
  },
  {
    id: '4',
    name: 'Respira',
    subtitle: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    badge: {
      type: 'new',
      text: 'New'
    },
    imageSrc: '/products/respira.jpg'
  },
  {
    id: '5',
    name: 'Grifo',
    subtitle: 'Night lamp',
    price: 'Rp 1.500.000',
    imageSrc: '/products/grifo.jpg'
  },
  {
    id: '6',
    name: 'Muggo',
    subtitle: 'Small mug',
    price: 'Rp 150.000',
    badge: {
      type: 'new',
      text: 'New'
    },
    imageSrc: '/products/muggo.jpg'
  },
  {
    id: '7',
    name: 'Pingky',
    subtitle: 'Cute bed set',
    price: 'Rp 7.000.000',
    originalPrice: 'Rp 14.000.000',
    badge: {
      type: 'sale',
      text: '-50%'
    },
    hasOverlay: true,
    imageSrc: '/products/pingky.jpg'
  },
  {
    id: '8',
    name: 'Potty',
    subtitle: 'Minimalist flower pot',
    price: 'Rp 500.000',
    badge: {
      type: 'new',
      text: 'New'
    },
    imageSrc: '/products/potty.jpg'
  }
];

export interface CategoryTile {
  id: string;
  name: string;
  imageSrc: string;
  bgColor: string;
}

export const categoryTiles: CategoryTile[] = [
  {
    id: '1',
    name: 'Dining',
    imageSrc: '/categories/dining.jpg',
    bgColor: '#111111'
  },
  {
    id: '2',
    name: 'Living',
    imageSrc: '/categories/living.jpg',
    bgColor: '#F2F5FF'
  },
  {
    id: '3',
    name: 'Bedroom',
    imageSrc: '/categories/bedroom.jpg',
    bgColor: '#F4F4F4'
  }
];

export interface SocialImage {
  id: string;
  imageSrc: string;
  width: number;
  height: number;
}

export const socialImages: SocialImage[] = [
  { id: '1', imageSrc: '/social/1.jpg', width: 274, height: 382 },
  { id: '2', imageSrc: '/social/2.jpg', width: 451, height: 312 },
  { id: '3', imageSrc: '/social/3.jpg', width: 295, height: 392 },
  { id: '4', imageSrc: '/social/4.jpg', width: 344, height: 242 },
  { id: '5', imageSrc: '/social/5.jpg', width: 178, height: 242 },
  { id: '6', imageSrc: '/social/6.jpg', width: 258, height: 196 },
  { id: '7', imageSrc: '/social/7.jpg', width: 290, height: 348 },
  { id: '8', imageSrc: '/social/8.jpg', width: 425, height: 433 },
  { id: '9', imageSrc: '/social/9.jpg', width: 381, height: 323 }
];
