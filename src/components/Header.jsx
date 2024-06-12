import React from "react";
import { LinesIcon } from "../assets/icons";

const Header = () => {
  return (
    <div className="h-[70px] bg-white shadow-lg flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="flex items-center h-full py-2">
          <LinesIcon className={"mx-auto"} />
        </div>
      </div>
      <div className="flex items-center">{/* <LoginUser /> */}</div>
    </div>
  );
};

export default Header;
