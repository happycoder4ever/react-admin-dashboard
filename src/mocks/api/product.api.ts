import type { Product } from "../../types";
import { products } from "../data/mockData";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    await delay(300);
    return [...products];
  },
  getById: async (id: number): Promise<Product | undefined> => {
    await delay(200);
    return products.find((p) => p.id === id);
  },
  create: async (product: Omit<Product, "id">): Promise<Product> => {
    await delay(200);
    const newProduct: Product = { id: products.length + 1, ...product };
    products.push(newProduct);
    return newProduct;
  },
  update: async (
    id: number,
    data: Partial<Product>
  ): Promise<Product | undefined> => {
    await delay(200);
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...data };
      return products[index];
    }
  },
  delete: async (id: number): Promise<boolean> => {
    await delay(200);
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      return true;
    }
    return false;
  },
};
