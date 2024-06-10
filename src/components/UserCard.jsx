import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="container">
      <div className="photo-container">
        <img
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          className="photo"
        />
      </div>
      <div className="details">
        <h2 className="name">{`${user.firstName} ${user.lastName}`}</h2>
        <p className="email">{user.email}</p>
        <p className="status">
          {user.status === "Active" ? (
            <span className="active">🟢 Active</span>
          ) : (
            <span className="inactive">🟠 Inactive</span>
          )}
        </p>
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(100,28,192)"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </div>
    </div>
  );
}
