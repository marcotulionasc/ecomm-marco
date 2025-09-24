import { shopifyClient } from './client';
import type { Cart } from '@/lib/types/shopify';

const CART_CREATE_QUERY = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    id
                    url
                    altText
                    width
                    height
                  }
                  product {
                    id
                    handle
                    title
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                amountPerQuantity {
                  amount
                  currencyCode
                }
                compareAtAmountPerQuantity {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_QUERY = `
  query cart($id: ID!) {
    cart(id: $id) {
      id
      checkoutUrl
      totalQuantity
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                price {
                  amount
                  currencyCode
                }
                image {
                  id
                  url
                  altText
                  width
                  height
                }
                product {
                  id
                  handle
                  title
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
            cost {
              totalAmount {
                amount
                currencyCode
              }
              amountPerQuantity {
                amount
                currencyCode
              }
              compareAtAmountPerQuantity {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

const CART_LINES_ADD_QUERY = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    id
                    url
                    altText
                    width
                    height
                  }
                  product {
                    id
                    handle
                    title
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                amountPerQuantity {
                  amount
                  currencyCode
                }
                compareAtAmountPerQuantity {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_UPDATE_QUERY = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    id
                    url
                    altText
                    width
                    height
                  }
                  product {
                    id
                    handle
                    title
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                amountPerQuantity {
                  amount
                  currencyCode
                }
                compareAtAmountPerQuantity {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_REMOVE_QUERY = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    id
                    url
                    altText
                    width
                    height
                  }
                  product {
                    id
                    handle
                    title
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                amountPerQuantity {
                  amount
                  currencyCode
                }
                compareAtAmountPerQuantity {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function cartCreate() {
  const response = await shopifyClient.query<{
    cartCreate: { cart: Cart; userErrors: Array<{ field: string[]; message: string }> };
  }>(CART_CREATE_QUERY, { input: {} });
  
  if (response.data.cartCreate.userErrors.length > 0) {
    throw new Error(`Cart creation failed: ${response.data.cartCreate.userErrors.map(e => e.message).join(', ')}`);
  }
  
  return response.data.cartCreate.cart;
}

export async function cartQuery(cartId: string) {
  const response = await shopifyClient.query<{ cart: Cart }>(CART_QUERY, { id: cartId });
  return response.data.cart;
}

export async function cartLinesAdd(
  cartId: string,
  lines: Array<{ merchandiseId: string; quantity: number }>
) {
  const response = await shopifyClient.query<{
    cartLinesAdd: { cart: Cart; userErrors: Array<{ field: string[]; message: string }> };
  }>(CART_LINES_ADD_QUERY, { cartId, lines });
  
  if (response.data.cartLinesAdd.userErrors.length > 0) {
    throw new Error(`Cart lines add failed: ${response.data.cartLinesAdd.userErrors.map(e => e.message).join(', ')}`);
  }
  
  return response.data.cartLinesAdd.cart;
}

export async function cartLinesUpdate(
  cartId: string,
  lines: Array<{ id: string; quantity: number }>
) {
  const response = await shopifyClient.query<{
    cartLinesUpdate: { cart: Cart; userErrors: Array<{ field: string[]; message: string }> };
  }>(CART_LINES_UPDATE_QUERY, { cartId, lines });
  
  if (response.data.cartLinesUpdate.userErrors.length > 0) {
    throw new Error(`Cart lines update failed: ${response.data.cartLinesUpdate.userErrors.map(e => e.message).join(', ')}`);
  }
  
  return response.data.cartLinesUpdate.cart;
}

export async function cartLinesRemove(cartId: string, lineIds: string[]) {
  const response = await shopifyClient.query<{
    cartLinesRemove: { cart: Cart; userErrors: Array<{ field: string[]; message: string }> };
  }>(CART_LINES_REMOVE_QUERY, { cartId, lineIds });
  
  if (response.data.cartLinesRemove.userErrors.length > 0) {
    throw new Error(`Cart lines remove failed: ${response.data.cartLinesRemove.userErrors.map(e => e.message).join(', ')}`);
  }
  
  return response.data.cartLinesRemove.cart;
}
