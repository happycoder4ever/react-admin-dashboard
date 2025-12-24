export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "inactive";
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "manager";
  status: "active" | "inactive";
}
