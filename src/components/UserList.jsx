import useUserStore from "../useUserStore";

export default function UserList({ user }) {
  const updateUserStatus = useUserStore((state) => state.updateUserStatus);

  return (
    <div className="user-widget">
      <img
        src={user.photo}
        alt={`${user.firstName} ${user.lastName}`}
        className="user-photo"
      />
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <p>Email: {user.email}</p>
      <p>Status: {user.status}</p>
      <button
        onClick={() =>
          updateUserStatus(
            user.id,
            user.status === "active" ? "inactive" : "active"
          )
        }
      >
        Toggle Status
      </button>
    </div>
  );
}
