import { shopifyClient } from './client';
import type { Collection, Product, Cart } from '@/lib/types/shopify';

const GET_COLLECTIONS_QUERY = `
  query getCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          descriptionHtml
          image {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
  }
`;

const GET_PRODUCTS_BY_COLLECTION_QUERY = `
  query getProductsByCollection($handle: String!, $first: Int!, $after: String) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      image {
        id
        url
        altText
        width
        height
      }
      products(first: $first, after: $after) {
        edges {
          node {
            id
            handle
            title
            description
            descriptionHtml
            availableForSale
            productType
            vendor
            createdAt
            updatedAt
            publishedAt
            tags
            images(first: 5) {
              edges {
                node {
                  id
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  price {
                    amount
                    currencyCode
                  }
                  compareAtPrice {
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
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            options {
              id
              name
              values
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_HANDLE_QUERY = `
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      availableForSale
      productType
      vendor
      createdAt
      updatedAt
      publishedAt
      tags
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 50) {
        edges {
          node {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
            compareAtPrice {
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
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        id
        name
        values
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

const SEARCH_PRODUCTS_QUERY = `
  query searchProducts($query: String!, $first: Int!, $after: String) {
    products(first: $first, after: $after, query: $query) {
      edges {
        node {
          id
          handle
          title
          description
          descriptionHtml
          availableForSale
          productType
          vendor
          createdAt
          updatedAt
          publishedAt
          tags
          images(first: 5) {
            edges {
              node {
                id
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
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
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            id
            name
            values
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export async function getCollections(first: number = 10) {
  const response = await shopifyClient.query<{ collections: { edges: Array<{ node: Collection }> } }>(
    GET_COLLECTIONS_QUERY,
    { first }
  );
  return response.data.collections.edges.map(edge => edge.node);
}

export async function getProductsByCollection(
  handle: string,
  first: number = 20,
  cursor?: string
) {
  const response = await shopifyClient.query<{ collection: Collection }>(
    GET_PRODUCTS_BY_COLLECTION_QUERY,
    { handle, first, after: cursor }
  );
  return response.data.collection;
}

export async function getProductByHandle(handle: string) {
  const response = await shopifyClient.query<{ product: Product }>(
    GET_PRODUCT_BY_HANDLE_QUERY,
    { handle }
  );
  return response.data.product;
}

export async function searchProducts(
  query: string,
  first: number = 20,
  cursor?: string
) {
  const response = await shopifyClient.query<{ products: { edges: Array<{ node: Product; cursor: string }>; pageInfo: any } }>(
    SEARCH_PRODUCTS_QUERY,
    { query, first, after: cursor }
  );
  return response.data.products;
}
