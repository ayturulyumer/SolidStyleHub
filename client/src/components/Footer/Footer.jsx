import styles from "./footer.module.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h1>Categories</h1>
          <Link to="/products/women" className="link">
            <span>Women</span>
          </Link>
          <Link to="/products/men" className="link">
            <span>Men</span>
          </Link>
          <Link to="/products/children" className="link">
            <span>Children</span>
          </Link>
          <Link to="/products/accessories" className="link">
            <span>Accessories</span>
          </Link>
        </div>
        <div className={styles.item}>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            asperiores dolores, voluptas deserunt voluptatem optio dolor quod
            quibusdam non reiciendis.
          </span>
        </div>
        <div className={styles.item}>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab sed
            aut expedita quisquam ad corporis blanditiis ullam sit illum?
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.logo}>Solid Style Hub</div>
          <div className={styles.copyright}>
            {" "}
            © Copyright Ayturul Yumer 2024 . All rights reserved{" "}
          </div>
        </div>
        <div className={styles.right}>
          <img src="../paymentmethods.png" alt="paymentmethods" />
        </div>
      </div>
    </div>
  );
}
