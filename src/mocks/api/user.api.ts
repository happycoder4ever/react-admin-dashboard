import type {User} from "../../types"
import { users } from "../data/mockData";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const userApi = {
  getAll: async (): Promise<User[]> => {
    await delay(300);
    return [...users];
  },
  getById: async (id: number): Promise<User | undefined> => {
    await delay(200);
    return users.find((u) => u.id === id);
  },
  create: async (user: Omit<User, "id">): Promise<User> => {
    await delay(200);
    const newUser: User = { id: users.length + 1, ...user };
    users.push(newUser);
    return newUser;
  },
  update: async (
    id: number,
    data: Partial<User>
  ): Promise<User | undefined> => {
    await delay(200);
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...data };
      return users[index];
    }
  },
  delete: async (id: number): Promise<boolean> => {
    await delay(200);
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  },
};
