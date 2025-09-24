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
  const response = await shopifyClient.query<{ collection: any }>(
    GET_PRODUCTS_BY_COLLECTION_QUERY,
    { handle, first, after: cursor }
  );
  
  const collection = response.data.collection;
  
  if (!collection) return null;
  
  return {
    ...collection,
    products: {
      ...collection.products,
      edges: collection.products.edges.map((edge: any) => ({
        ...edge,
        node: {
          ...edge.node,
          variants: edge.node.variants.edges.map((vEdge: any) => vEdge.node),
          images: edge.node.images.edges.map((iEdge: any) => iEdge.node),
        }
      }))
    }
  };
}

export async function getProductByHandle(handle: string) {
  const response = await shopifyClient.query<{ product: any }>(
    GET_PRODUCT_BY_HANDLE_QUERY,
    { handle }
  );
  
  const product = response.data.product;
  
  if (!product) return null;
  
  return {
    ...product,
    variants: product.variants.edges.map((edge: any) => edge.node),
    images: product.images.edges.map((edge: any) => edge.node),
  };
}

export async function searchProducts(
  query: string,
  first: number = 20,
  cursor?: string
) {
  const response = await shopifyClient.query<{ products: any }>(
    SEARCH_PRODUCTS_QUERY,
    { query, first, after: cursor }
  );
  
  const products = response.data.products;
  
  return {
    ...products,
    edges: products.edges.map((edge: any) => ({
      ...edge,
      node: {
        ...edge.node,
        variants: edge.node.variants.edges.map((vEdge: any) => vEdge.node),
        images: edge.node.images.edges.map((iEdge: any) => iEdge.node),
      }
    }))
  };
}
