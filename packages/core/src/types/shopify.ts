export interface MoneyV2 {
  amount: string;
  currencyCode: string;
}

export interface Image {
  id: string;
  url: string;
  altText?: string;
  width?: number;
  height?: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: MoneyV2;
  compareAtPrice?: MoneyV2;
  image?: Image;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  productType: string;
  vendor: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tags: string[];
  images: Image[];
  variants: ProductVariant[];
  options: Array<{
    id: string;
    name: string;
    values: string[];
  }>;
  priceRange: {
    minVariantPrice: MoneyV2;
    maxVariantPrice: MoneyV2;
  };
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  image?: Image;
  products: {
    edges: Array<{
      node: Product;
      cursor: string;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string;
      endCursor?: string;
    };
  };
}

export interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    price: MoneyV2;
    image?: Image;
    product: {
      id: string;
      handle: string;
      title: string;
    };
    selectedOptions: Array<{
      name: string;
      value: string;
    }>;
  };
  cost: {
    totalAmount: MoneyV2;
    amountPerQuantity: MoneyV2;
    compareAtAmountPerQuantity?: MoneyV2;
  };
}

export interface Cart {
  id: string;
  checkoutUrl?: string;
  totalQuantity: number;
  cost: {
    totalAmount: MoneyV2;
    subtotalAmount: MoneyV2;
    totalTaxAmount?: MoneyV2;
    totalDutyAmount?: MoneyV2;
  };
  lines: {
    edges: Array<{
      node: CartLine;
    }>;
  };
}

export interface ShopifyResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
    locations?: Array<{
      line: number;
      column: number;
    }>;
    path?: Array<string | number>;
  }>;
  extensions?: {
    cost: {
      requestedQueryCost: number;
      actualQueryCost: number;
      throttleStatus: {
        maximumAvailable: number;
        currentlyAvailable: number;
        restoreRate: number;
      };
    };
  };
}
