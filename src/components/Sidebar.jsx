import styles from "./sidebar.module.css";
import imgPath from "../assets/multikart.png";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={imgPath} alt="MultiKart_logo" height="80px" />
      <h1>Main Menu</h1>
      <div>
        <a href="">Dashboard</a>
        <a href="">Users</a>
      </div>
    </div>
  );
}
