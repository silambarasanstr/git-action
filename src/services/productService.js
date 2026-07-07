import products from "../data/products";

export const getProducts = async () => {
  return Promise.resolve({
    data: products,
  });
};