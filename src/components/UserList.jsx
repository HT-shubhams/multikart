import React from "react";
import UserCard from "./UserCard";
import useUserStore from "../useUserStore";

const UserList = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-semibold leading-9 bg-[#f9f9f9] m-6 text-2xl">
          Users
        </div>
        <div className="flex items-center">
          <button className="p-2 border-2 border-[#e0e0e2] rounded-md ">
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#641CC0]"
            >
              <path
                d="M0 0H5V5H0V0ZM7.5 1.25V3.75H22.5V1.25H7.5ZM0 7.5H5V12.5H0V7.5ZM7.5 8.75V11.25H22.5V8.75H7.5ZM0 15H5V20H0V15ZM7.5 16.25V18.75H22.5V16.25H7.5Z"
                fill="#641CC0"
              />
            </svg>
          </button>
          <button className="p-2 border-2 border-[#e0e0e2] rounded-md mr-[22px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#641CC0]"
            >
              <path
                d="M10 15C11.375 15 12.5 16.125 12.5 17.5C12.5 18.875 11.375 20 10 20C8.625 20 7.5 18.875 7.5 17.5C7.5 16.125 8.625 15 10 15ZM10 7.5C11.375 7.5 12.5 8.625 12.5 10C12.5 11.375 11.375 12.5 10 12.5C8.625 12.5 7.5 11.375 7.5 10C7.5 8.625 8.625 7.5 10 7.5ZM10 0C11.375 0 12.5 1.125 12.5 2.5C12.5 3.875 11.375 5 10 5C8.625 5 7.5 3.875 7.5 2.5C7.5 1.125 8.625 0 10 0ZM2.5 15C3.875 15 5 16.125 5 17.5C5 18.875 3.875 20 2.5 20C1.125 20 0 18.875 0 17.5C0 16.125 1.125 15 2.5 15ZM2.5 7.5C3.875 7.5 5 8.625 5 10C5 11.375 3.875 12.5 2.5 12.5C1.125 12.5 0 11.375 0 10C0 8.625 1.125 7.5 2.5 7.5ZM2.5 0C3.875 0 5 1.125 5 2.5C5 3.875 3.875 5 2.5 5C1.125 5 0 3.875 0 2.5C0 1.125 1.125 0 2.5 0ZM17.5 15C18.875 15 20 16.125 20 17.5C20 18.875 18.875 20 17.5 20C16.125 20 15 18.875 15 17.5C15 16.125 16.125 15 17.5 15ZM17.5 7.5C18.875 7.5 20 8.625 20 10C20 11.375 18.875 12.5 17.5 12.5C16.125 12.5 15 11.375 15 10C15 8.625 16.125 7.5 17.5 7.5ZM17.5 0C18.875 0 20 1.125 20 2.5C20 3.875 18.875 5 17.5 5C16.125 5 15 3.875 15 2.5C15 1.125 16.125 0 17.5 0Z"
                fill="#641CC0"
              />
            </svg>
          </button>
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
