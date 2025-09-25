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
    name: 'Camiseta Básica',
    subtitle: 'Camiseta 100% algodão com corte moderno e conforto premium',
    price: 'R$ 49,90',
    originalPrice: 'R$ 79,90',
    badge: {
      type: 'sale',
      text: '38'
    },
    imageSrc: 'https://via.placeholder.com/285x301/8B5CF6/A3E635?text=CAMISETA+BASICA'
  },
  {
    id: '2',
    name: 'Camiseta Oversized',
    subtitle: 'Camiseta oversized com estampa exclusiva e tecido macio',
    price: 'R$ 69,90',
    hasOverlay: true,
    imageSrc: 'https://via.placeholder.com/285x301/A3E635/8B5CF6?text=CAMISETA+OVERSIZED'
  },
  {
    id: '3',
    name: 'Camiseta Premium',
    subtitle: 'Camiseta premium com acabamento diferenciado e durabilidade',
    price: 'R$ 89,90',
    originalPrice: 'R$ 129,90',
    badge: {
      type: 'sale',
      text: '31'
    },
    imageSrc: 'https://via.placeholder.com/285x301/8B5CF6/A3E635?text=CAMISETA+PREMIUM'
  },
  {
    id: '4',
    name: 'Camiseta Estampada',
    subtitle: 'Camiseta com estampa exclusiva e design único',
    price: 'R$ 59,90',
    badge: {
      type: 'new',
      text: 'Novo'
    },
    imageSrc: 'https://via.placeholder.com/285x301/A3E635/8B5CF6?text=CAMISETA+ESTAMPADA'
  },
  {
    id: '5',
    name: 'Camiseta Minimalista',
    subtitle: 'Camiseta minimalista com foco no conforto e simplicidade',
    price: 'R$ 39,90',
    imageSrc: 'https://via.placeholder.com/285x301/8B5CF6/A3E635?text=CAMISETA+MINIMALISTA'
  },
  {
    id: '6',
    name: 'Camiseta Streetwear',
    subtitle: 'Camiseta streetwear com design urbano e atitude',
    price: 'R$ 79,90',
    badge: {
      type: 'new',
      text: 'Novo'
    },
    imageSrc: 'https://via.placeholder.com/285x301/A3E635/8B5CF6?text=CAMISETA+STREETWEAR'
  },
  {
    id: '7',
    name: 'Kit 3 Camisetas',
    subtitle: 'Kit com 3 camisetas básicas em cores diferentes',
    price: 'R$ 119,90',
    originalPrice: 'R$ 179,90',
    badge: {
      type: 'sale',
      text: '33'
    },
    hasOverlay: true,
    imageSrc: 'https://via.placeholder.com/285x301/8B5CF6/A3E635?text=KIT+3+CAMISETAS'
  },
  {
    id: '8',
    name: 'Camiseta Vintage',
    subtitle: 'Camiseta com estilo vintage e acabamento envelhecido',
    price: 'R$ 65,90',
    badge: {
      type: 'new',
      text: 'Novo'
    },
    imageSrc: 'https://via.placeholder.com/285x301/A3E635/8B5CF6?text=CAMISETA+VINTAGE'
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
    name: 'Básicas',
    imageSrc: 'https://via.placeholder.com/381x480/8B5CF6/A3E635?text=CAMISETAS+BASICAS',
    bgColor: '#8B5CF6'
  },
  {
    id: '2',
    name: 'Estampadas',
    imageSrc: 'https://via.placeholder.com/381x480/A3E635/8B5CF6?text=CAMISETAS+ESTAMPADAS',
    bgColor: '#A3E635'
  },
  {
    id: '3',
    name: 'Premium',
    imageSrc: 'https://via.placeholder.com/381x480/8B5CF6/A3E635?text=CAMISETAS+PREMIUM',
    bgColor: '#8B5CF6'
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
