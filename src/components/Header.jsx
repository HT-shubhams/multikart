import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  return (
    <div className="h-[70px] bg-white shadow-lg flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="flex items-center h-full py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="15"
            viewBox="0 0 30 20"
            fill="none"
            className="mx-auto"
          >
            <path
              d="M0 11.6667H20V8.33333H0V11.6667ZM0 0V3.33333H30V0H0ZM0 20H10V16.6667H0V20Z"
              fill="#641CC0"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center">{/* <LoginUser /> */}</div>
    </div>
  );
};

export default Header;
