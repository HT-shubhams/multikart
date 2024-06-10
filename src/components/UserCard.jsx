import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="container flex min-w-fit justify-around items-center border border-[#E0E0E2] p-2 m-1 rounded-md bg-[#FAFAFA]">
      <div className="photo-container ">
        <img
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          className="photo rounded-full w-[75px] h-[75px]"
        />
      </div>
      <div className="details flex flex-col justify-center p-2 text-[#63666B]">
        <p className="name font-bold text-xl">{`${user.firstName} ${user.lastName}`}</p>
        <p className="email">{user.email}</p>
        <p className="status flex items-start">
          {user.status === "Active" ? (
            <p className="flex place-items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#52D229"
                class="bi bi-dot"
                viewBox="0 0 16 16"
              >
                {/* <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" /> */}
                <circle cx="8" cy="8" r="5" />
              </svg>
              {user.status}
            </p>
          ) : (
            <p className="flex place-items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#F19803"
                class="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="5" />
              </svg>
              {user.status}
            </p>
          )}
        </p>
      </div>
      <div className="flex items-start h-[100%]">
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
