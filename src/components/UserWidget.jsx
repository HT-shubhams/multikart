import useUserStore from "../useUserStore";
import UserCard from "./UserCard";
import styles from "./userwidget.module.css";
import Sidebar from "./Sidebar";

export default function UserWidget() {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      {/* <Sidebar /> */}
      <div className={styles.userWidgetContainer}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
