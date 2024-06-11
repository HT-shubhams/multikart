import React from "react";

export default function UserCard({ user }) {
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
        <p className="font-poppins text-[18px] font-medium leading-[27px] text-left">
          {`${user.firstName} ${user.lastName}`}
        </p>
        <p
          className="font-poppins text-[14px] font-normal leading-[21px] text-left text-ellipsis whitespace-nowrap overflow-hidden max-w-[180px]"
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
                fill="#52D229" // Green for active status
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="5" />
              </svg>
              <span className="font-poppins text-[14px] font-normal leading-[21px] text-left">
                Active
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#F19803" // Orange for inactive status
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="5" />
              </svg>
              <span className="font-poppins text-[14px] font-normal leading-[21px] text-left">
                Inactive
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="ml-auto mb-auto">
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
      </div>
    </div>
  );
}
