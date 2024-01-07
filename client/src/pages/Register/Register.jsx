import styles from "./register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h1>Create an account</h1>
        <span>
          Already a member? <Link to="/login" className="link">Sign in</Link>
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
           <input
            type="password"
            name="RepeatPassword"
            placeholder="RepeatPassword"
            id="RepeatPassword"
            className={styles.input}
          />
          <button className={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  </div>
);
}
