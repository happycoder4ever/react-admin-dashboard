// mocks/api/users.api.ts
let users = [
  { id: 1, name: "Alice", role: "Admin", status: "Active" },
  { id: 2, name: "Bob", role: "Editor", status: "Blocked" },
];

export const getUsers = () =>
  new Promise((resolve) => setTimeout(() => resolve([...users]), 500));

export const toggleUserStatus = (id: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      users = users.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" }
          : u
      );
      resolve(true);
    }, 400)
  );
