import React, { useState } from "react";

export default function UserCard({ user }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex col-3  items-center border border-[#E0E0E2] p-2 m-1 rounded-md bg-[#FAFAFA]">
      <div className="photo-container px-2">
        <img
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          className="rounded-full w-[75px] h-[75px] min-w-[75px] min-h-[75px]"
        />
      </div>
      <div className="flex flex-col justify-center p-2 text-[#63666B]">
        <p className="font-bold text-xl">{`${user.firstName} ${user.lastName}`}</p>
        <p
          className="email text-ellipsis whitespace-nowrap overflow-hidden max-w-[230px]"
          title={user.email}
        >
          {user.email}
        </p>

        <div className="flex items-center">
          {user.status === "Active" ? (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#52D229"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="5" />
              </svg>
              <span>{user.status}</span>
            </div>
          ) : (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#F19803"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="5" />
              </svg>
              <span>{user.status}</span>
            </div>
          )}
        </div>
      </div>
      <div className="ml-auto mb-auto relative">
        <button onClick={handleDropdownToggle} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#641CC0"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
            <ul className="py-1">
              <li className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
                Option 1
              </li>
              <li className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
                Option 2
              </li>
              <li className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
                Option 3
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
