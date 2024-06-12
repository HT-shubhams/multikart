import React, { useState } from "react";
import UserCard from "./UserCard";
import useUserStore from "../useUserStore";
import { GridViewIcon, ListViewIcon } from "../assets/icons";
import classNames from "classnames";

const UserList = () => {
  const users = useUserStore((state) => state.users);
  const [isListView, setIsListView] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-semibold leading-9 bg-[#f9f9f9] m-6 text-2xl">
          Users
        </div>
        <div className="flex items-center">
          <div className="border border-gray-400">
            <button
              type="button"
              onClick={() => {
                setIsListView(true);
              }}
              className={classNames("p-2", { "bg-red-500": isListView })}
            >
              <ListViewIcon
                className={classNames({
                  "text-[#641CC0]": !isListView,
                  "text-white": isListView,
                })}
              />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsListView(false);
              }}
              className={classNames("p-2 mr-2", { "bg-red-500": !isListView })}
            >
              <GridViewIcon className={"text-[#641CC0]"} />
            </button>
          </div>
          <button className="text-xl font-normal bg-[#641cc0] text-[#ffffff] w-[140px] h-[40px] rounded-md mr-6">
            + Add User
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-4">
          <button className="flex items-center p-2 bg-[#fafafa] border border-[#E0E0E2] text-[#63666b] rounded">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M16 18L12 14H15V4H12L16 0L20 4H17V14H20L16 18ZM0 16V14H10V16H0ZM0 10V8H7V10H0ZM0 4V2H4V4H0Z"
                fill="#641CC0"
              />
            </svg>
            Sort By
          </button>
          <button className="flex items-center p-2 bg-[#fafafa] border border-[#E0E0E2] text-[#63666b] rounded">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M11.6666 10V16.5667C11.7 16.8167 11.6166 17.0833 11.425 17.2583C11.1 17.5833 10.575 17.5833 10.25 17.2583L8.57498 15.5833C8.38332 15.3917 8.29998 15.1333 8.33332 14.8917V10H8.30832L3.50832 3.85C3.22498 3.49167 3.29165 2.96667 3.64998 2.68333C3.80832 2.56667 3.98332 2.5 4.16665 2.5H15.8333C16.0166 2.5 16.1917 2.56667 16.35 2.68333C16.7083 2.96667 16.775 3.49167 16.4917 3.85L11.6916 10H11.6666Z"
                fill="#641CC0"
              />
            </svg>
            Filter By
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 border border-[#e0e0e2] rounded-md w-[200px] focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            className="absolute left-3 top-2.5 text-[#641CC0]"
          >
            <path
              d="M7.41823 1C6.14883 1 4.90793 1.35989 3.85246 2.03416C2.79698 2.70843 1.97434 3.66679 1.48856 4.78806C1.00278 5.90932 0.875679 7.14313 1.12333 8.33347C1.37098 9.5238 1.98225 10.6172 2.87986 11.4754C3.77747 12.3335 4.92108 12.918 6.1661 13.1547C7.41111 13.3915 8.70161 13.27 9.87439 12.8056C11.0472 12.3411 12.0496 11.5546 12.7548 10.5455C13.46 9.53637 13.8365 8.34998 13.8365 7.13633C13.8364 5.5089 13.1601 3.94817 11.9565 2.7974C10.7529 1.64664 9.12042 1.0001 7.41823 1V1Z"
              stroke="#641CC0"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M12.2676 11.7145L16.75 16"
              stroke="#641CC0"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 m-4 bg-[#ffffff] rounded-lg">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
