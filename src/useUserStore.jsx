import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [
    {
      id: 1,
      photo: "https://via.placeholder.com/100",
      firstName: "Rowan",
      lastName: "Torres",
      email: "rowan.torres@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/100",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/100",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
    },
    {
      id: 4,
      photo: "https://via.placeholder.com/100",
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      status: "Inactive",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/100",
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@example.com",
      status: "Active",
    },
    {
      id: 6,
      photo: "https://via.placeholder.com/100",
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@example.com",
      status: "Inactive",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/100",
      firstName: "Eve",
      lastName: "Clark",
      email: "eve.clark@example.com",
      status: "Active",
    },
    {
      id: 8,
      photo: "https://via.placeholder.com/100",
      firstName: "Frank",
      lastName: "Martinez",
      email: "frank.martinez@dexample.com",
      status: "Inactive",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/100",
      firstName: "Grace",
      lastName: "Rodriguez",
      email: "grace.rodriguez@example.com",
      status: "Active",
    },
    {
      id: 10,
      photo: "https://via.placeholder.com/100",
      firstName: "Hank",
      lastName: "Lewis",
      email: "hank.lewis@example.com",
      status: "Inactive",
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
