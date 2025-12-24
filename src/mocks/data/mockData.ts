import type { User, Product } from "../../types";
export const users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: "admin",
    status: "active",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role: "user",
    status: "active",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    role: "manager",
    status: "inactive",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Product A",
    category: "Category 1",
    price: 120,
    stock: 12,
    status: "active",
  },
  {
    id: 2,
    name: "Product B",
    category: "Category 2",
    price: 80,
    stock: 0,
    status: "inactive",
  },
  {
    id: 3,
    name: "Product C",
    category: "Category 1",
    price: 200,
    stock: 5,
    status: "active",
  },
  {
    id: 4,
    name: "Product D",
    category: "Category 3",
    price: 50,
    stock: 20,
    status: "active",
  },
];
