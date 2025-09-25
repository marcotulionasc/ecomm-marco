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
    name: 'Sofá Moderno',
    subtitle: 'Cadeira de escritório elegante',
    price: 'R$ 2.500,00',
    originalPrice: 'R$ 3.500,00',
    badge: {
      type: 'sale',
      text: '-30%'
    },
    imageSrc: 'https://via.placeholder.com/285x301/8B5CF6/A3E635?text=SOFA+MODERNO'
  },
  {
    id: '2',
    name: 'Mesa de Centro',
    subtitle: 'Mesa de centro contemporânea',
    price: 'R$ 1.200,00',
    hasOverlay: true,
    imageSrc: 'https://via.placeholder.com/285x301/A3E635/8B5CF6?text=MESA+CENTRO'
  },
  {
    id: '3',
    name: 'Poltrona Luxo',
    subtitle: 'Poltrona de luxo grande',
    price: 'R$ 4.500,00',
    originalPrice: 'R$ 6.000,00',
    badge: {
      type: 'sale',
      text: '-25%'
    },
    imageSrc: 'https://via.placeholder.com/285x301/8B5CF6/A3E635?text=POLTRONA+LUXO'
  },
  {
    id: '4',
    name: 'Mesa Jantar',
    subtitle: 'Mesa de jantar e banqueta',
    price: 'R$ 3.200,00',
    badge: {
      type: 'new',
      text: 'Novo'
    },
    imageSrc: 'https://via.placeholder.com/285x301/A3E635/8B5CF6?text=MESA+JANTAR'
  },
  {
    id: '5',
    name: 'Luminária LED',
    subtitle: 'Luminária de mesa moderna',
    price: 'R$ 450,00',
    imageSrc: 'https://via.placeholder.com/285x301/8B5CF6/A3E635?text=LUMINARIA+LED'
  },
  {
    id: '6',
    name: 'Cadeira Gamer',
    subtitle: 'Cadeira gamer ergonômica',
    price: 'R$ 1.800,00',
    badge: {
      type: 'new',
      text: 'Novo'
    },
    imageSrc: 'https://via.placeholder.com/285x301/A3E635/8B5CF6?text=CADEIRA+GAMER'
  },
  {
    id: '7',
    name: 'Conjunto Quarto',
    subtitle: 'Conjunto de quarto completo',
    price: 'R$ 5.500,00',
    originalPrice: 'R$ 7.200,00',
    badge: {
      type: 'sale',
      text: '-24%'
    },
    hasOverlay: true,
    imageSrc: 'https://via.placeholder.com/285x301/8B5CF6/A3E635?text=CONJUNTO+QUARTO'
  },
  {
    id: '8',
    name: 'Vaso Decorativo',
    subtitle: 'Vaso minimalista moderno',
    price: 'R$ 180,00',
    badge: {
      type: 'new',
      text: 'Novo'
    },
    imageSrc: 'https://via.placeholder.com/285x301/A3E635/8B5CF6?text=VASO+DECORATIVO'
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
    name: 'Sala de Jantar',
    imageSrc: 'https://via.placeholder.com/381x480/8B5CF6/A3E635?text=SALA+JANTAR',
    bgColor: '#8B5CF6'
  },
  {
    id: '2',
    name: 'Sala de Estar',
    imageSrc: 'https://via.placeholder.com/381x480/A3E635/8B5CF6?text=SALA+ESTAR',
    bgColor: '#A3E635'
  },
  {
    id: '3',
    name: 'Quarto',
    imageSrc: 'https://via.placeholder.com/381x480/8B5CF6/A3E635?text=QUARTO',
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
