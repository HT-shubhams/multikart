import imgPath from "../assets/multikart.png";

export default function Sidebar() {
  return (
    <div className="w-[500px]">
      <img src={imgPath} alt="MultiKart_logo" height="80px" />
      <h1 className="bg-gray-950">Main Menu</h1>
      <div>
        <a href="">Dashboard</a>
        <a href="">Users</a>
      </div>
    </div>
  );
}

// import React from "react";
// import imgPath from "../assets/multikart.png";

// export default function Sidebar() {
//   return (
//     <div className="w-[500px] bg-gray-100 p-4">
//       <img src={imgPath} alt="MultiKart_logo" height="80px" />
//       <h1 className="bg-gray-950 text-white p-2">Main Menu</h1>
//       <div className="mt-2 space-y-2">
//         <a
//           href=""
//           className="block text-gray-700 hover:bg-gray-200 p-2 rounded"
//         >
//           Dashboard
//         </a>
//         <a
//           href=""
//           className="block text-gray-700 hover:bg-gray-200 p-2 rounded"
//         >
//           Users
//         </a>
//       </div>
//     </div>
//   );
// }
