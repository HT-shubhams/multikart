import styles from "./usercard.module.css";

export default function UserCard({ user }) {
  return (
    <div className={styles.userWidget}>
      <img
        src={user.photo}
        alt={`${user.firstName} ${user.lastName}`}
        className={styles.userPhoto}
      />
      <div className={styles.userDetails}>
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>{user.email}</p>
        <p>
          {user.status === "Active" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="rgb(82,210,41)"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="rgb(241,152,3)"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          )}{" "}
          {user.status}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="rgb(100,28,192)"
        className="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      </svg>
    </div>
  );
}
