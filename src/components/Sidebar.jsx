import React from "react";
import imgPath from "../assets/image_3.png";
import { DashboardIcon, UsersIcon } from "../assets/icons";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg min-h-screen min-w-fit h-auto flex flex-col items-center">
      <img
        // className="w-[157px] h-[28px] mt-[30px] ml-5"
        className="w-[157px] h-[28px] mt-[30px]"
        src={imgPath}
        alt="MultiKart_logo"
      />

      <h1 className="pt-10 my-1 text-[14px] text-gray-600 uppercase self-start ml-11 leading-[21px] tracking-[0.13em]">
        Main Menu
      </h1>

      <div className="flex flex-col items-start w-full pr-4 space-y-2 ml-20">
        <div className="flex items-center space-x-3 mb-5 mt-5">
          <DashboardIcon />
          <a
            href=""
            class="text-[18px] text-[#000000] hover:underline font-poppins leading-[27px] tracking-[0.055em]"
          >
            Dashboard
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <UsersIcon />
          <a
            href=""
            class="text-[18px] text-[#000000] hover:underline font-poppins leading-[27px] tracking-[0.055em]"
          >
            Users
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
