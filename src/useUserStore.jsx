import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [
    {
      id: 1,
      photo: "https://via.placeholder.com/100",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      status: "active",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/100",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      status: "inactive",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/100",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      status: "active",
    },
    {
      id: 4,
      photo: "https://via.placeholder.com/100",
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      status: "inactive",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/100",
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@example.com",
      status: "active",
    },
    {
      id: 6,
      photo: "https://via.placeholder.com/100",
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@example.com",
      status: "inactive",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/100",
      firstName: "Eve",
      lastName: "Clark",
      email: "eve.clark@example.com",
      status: "active",
    },
    {
      id: 8,
      photo: "https://via.placeholder.com/100",
      firstName: "Frank",
      lastName: "Martinez",
      email: "frank.martinez@example.com",
      status: "inactive",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/100",
      firstName: "Grace",
      lastName: "Rodriguez",
      email: "grace.rodriguez@example.com",
      status: "active",
    },
    {
      id: 10,
      photo: "https://via.placeholder.com/100",
      firstName: "Hank",
      lastName: "Lewis",
      email: "hank.lewis@example.com",
      status: "inactive",
    },
  ],
  setUsers: (users) => set({ users }),
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  updateUserStatus: (userId, status) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, status } : user
      ),
    })),
}));

export default useUserStore;
