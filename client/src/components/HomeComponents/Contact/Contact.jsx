import styles from "./contact.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";
export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <span>BE IN TOUCH WITH US:</span>
        <div className={styles.mail}>
          <input type="text" placeholder="Enter your email..." />
          <button>JOIN US</button>
        </div>
        <div className={styles.icons}>
          <FacebookIcon />
          <InstagramIcon />
          <PinterestIcon />
          <GoogleIcon />
        </div>
      </div>
    </div>
  );
}
