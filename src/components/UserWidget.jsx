import useUserStore from "../useUserStore";
import Sidebar from "./Sidebar";
import UserList from "./UserList";
import styles from "./userwidget.module.css";

export default function UserWidget() {
  const users = useUserStore((state) => state.users);

  return (
    <div className={styles.userWidgetContainer}>
      <Sidebar />
      {users.map((user) => (
        <UserList key={user.id} user={user} />
      ))}
    </div>
  );
}
