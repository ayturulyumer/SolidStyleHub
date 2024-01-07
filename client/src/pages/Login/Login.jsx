import styles from "./login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h1>Login</h1>
        <span>
          Not a member? <Link to="/register" className="link">Sign up</Link>
        </span>
      </div>
      <div className={styles.form}>
        <form  method="post">
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className={styles.input}
          />
          <button className={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  </div>
);
}
