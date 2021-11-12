/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePrenda = /* GraphQL */ `
  subscription OnCreatePrenda {
    onCreatePrenda {
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
export const onUpdatePrenda = /* GraphQL */ `
  subscription OnUpdatePrenda {
    onUpdatePrenda {
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
export const onDeletePrenda = /* GraphQL */ `
  subscription OnDeletePrenda {
    onDeletePrenda {
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
export const onCreateCate = /* GraphQL */ `
  subscription OnCreateCate {
    onCreateCate {
      id
      name
      price
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCate = /* GraphQL */ `
  subscription OnUpdateCate {
    onUpdateCate {
      id
      name
      price
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCate = /* GraphQL */ `
  subscription OnDeleteCate {
    onDeleteCate {
      id
      name
      price
      image
      createdAt
      updatedAt
    }
  }
`;
