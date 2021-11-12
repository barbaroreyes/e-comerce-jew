/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrenda = /* GraphQL */ `
  query GetPrenda($id: ID!) {
    getPrenda(id: $id) {
      id
      name
      description
      categoria
      image
      price
      orders {
        items {
          id
          prenda_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPrendas = /* GraphQL */ `
  query ListPrendas(
    $filter: ModelPrendaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrendas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        categoria
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCate = /* GraphQL */ `
  query GetCate($id: ID!) {
    getCate(id: $id) {
      id
      name
      price
      image
      createdAt
      updatedAt
    }
  }
`;
export const listCates = /* GraphQL */ `
  query ListCates(
    $filter: ModelCateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      prendas {
        items {
          id
          prenda_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        prendas {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
