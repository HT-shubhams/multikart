import useUserStore from "../useUserStore";
import UserCard from "./UserCard";
import Sidebar from "./Sidebar";

export default function UserWidget() {
  const users = useUserStore((state) => state.users);

  return (
    <div className="flex h-screen">
      <div className="w-1/5 h-full">
        <Sidebar />
      </div>
      <div className="w-4/5 h-full p-4 grid lg:grid-cols-3 gap-4">
        {/* <div className="w-4/5 h-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div> */}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
