import styles from "./slider.module.css";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { useState } from "react";
import { sliderImages } from "../../constants/constants.js";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        {sliderImages.map((image, index) => {
          return (
            <div
              key={index}
              className={`${styles.carouselCard} ${index == 0 ? styles.carouselCardActive : styles.carouselCard}`}
            >
              <img
                className={styles.cardImage}
                src={image.url}
                alt={image.title}
              />
              <div className={styles.cardOverlay}>
                <h2 className={styles.cardTitle}>{image.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.icons}>
        <div className={styles.icon} onClick={prevSlide}>
          <WestRoundedIcon />
        </div>
        <div className={styles.icon} onClick={nextSlide}>
          <EastRoundedIcon />
        </div>
      </div>
    </div>
  );
}
