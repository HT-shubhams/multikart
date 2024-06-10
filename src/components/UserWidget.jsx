import useUserStore from "../useUserStore";
import UserCard from "./UserCard";

export default function UserWidget() {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      {/* <Sidebar /> */}
      <div className="flex gap-1">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
