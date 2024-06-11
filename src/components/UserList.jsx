import React from "react";
import UserCard from "./UserCard";
import useUserStore from "../useUserStore";

const UserList = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      Users
      <div className="grid grid-cols-3 gap-4 p-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
