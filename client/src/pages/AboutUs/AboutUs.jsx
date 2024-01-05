import styles from "./aboutUs.module.css";
export default function AboutUs() {
  return (
    <div className={`${styles.responsiveContainerBlock} ${styles.bigContainer}`}>
    <div className={`${styles.responsiveContainerBlock} ${styles.Container}`}>
      <p className={`${styles.textBlk} ${styles.heading}`}>About Us</p>
      <p className={`${styles.textBlk} ${styles.subHeading}`}>
        Welcome to SolidStyleHub – your go-to destination for effortlessly
        chic fashion. At SolidStyleHub, we curate a blend of contemporary
        trends and timeless classics, ensuring you discover quality pieces
        that elevate your style. Our diverse and inclusive collections cater
        to all tastes and sizes, delivering a seamless shopping experience
        that celebrates individuality. Explore, express, and embrace your
        Solid Style with us.
      </p>
      <div className={styles.socialIconsContainer}>
        <a className={styles.socialIcon}>
          <img
            className={`${styles.socialIcon} ${styles.imageBlock}`}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"
            alt="Social Icon 1"
          />
        </a>
        <a className={styles.socialIcon}>
          <img
            className={`${styles.socialIcon} ${styles.imageBlock}`}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"
            alt="Social Icon 2"
          />
        </a>
        <a className={styles.socialIcon}>
          <img
            className={`${styles.socialIcon} ${styles.imageBlock}`}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"
            alt="Social Icon 3"
          />
        </a>
        <a className={styles.socialIcon}>
          <img
            className={`${styles.socialIcon} ${styles.imageBlock}`}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"
            alt="Social Icon 4"
          />
        </a>
      </div>
    </div>
  </div>
);
}
