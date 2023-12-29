import { useState } from "react";
import styles from "./singleProduct.module.css";
import { productImages } from "../../../constants/constants.js";

export default function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0)
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.images}>
          <img
            src={productImages[0]}
            alt="firstImg"
            onClick={() => setSelectedImage(0)}
          />
          <img
            src={productImages[1]}
            alt="secondImg"
            onClick={() => setSelectedImage(1)}
          />
        </div>
        <div className={styles.mainImg}>
          <img src={productImages[selectedImage]} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>Title</h1>
        <span>$100</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          nesciunt numquam cupiditate minima ratione eum repellendus fugit.
          Dicta, nam commodi.
        </p>
        <div className={styles.quantity}>
            <button onClick={() => setQuantity( prev => prev == 0 ? 0 : prev - 1)}>-</button>
            {quantity}
            <button onClick={() => setQuantity( prev => prev + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}
