import imgPath from "../assets/muliticart_logo.png";

export default function Sidebar() {
  return (
    <div>
      <img
        className="mx-auto"
        src={imgPath}
        alt="MultiKart_logo"
        height="80px"
      />
      <h1>Main Menu</h1>
      <div>
        <a href="">Dashboard</a>
        <a href="">Users</a>
      </div>
    </div>
  );
}
