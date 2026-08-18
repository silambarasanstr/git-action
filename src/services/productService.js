import products from "../data/products";

export const getProducts = async () => {
  return Promise.resolve({
    data: products,
  });
};

export const getProductsId = async (id) => {
  const product = products.find((p) => p.id === Number(id));

  return Promise.resolve({
    data: product || null,
  });
};
