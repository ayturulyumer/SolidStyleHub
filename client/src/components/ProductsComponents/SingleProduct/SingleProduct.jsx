import { useState } from "react";
import styles from "./singleProduct.module.css";
import { productImages } from "../../../constants/constants.js";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";

export default function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
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
        <span className={styles.price}>$100</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          nesciunt numquam cupiditate minima ratione eum repellendus fugit.
          Dicta, nam commodi.
        </p>
        <div className={styles.quantity}>
          <button
            onClick={() => setQuantity((prev) => (prev == 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className={styles.add}>
          <AddShoppingCartOutlinedIcon /> ADD TO CART
        </div>
        <div className={styles.links}>
          <div className={styles.item}>
            <FavoriteBorderOutlinedIcon /> ADD TO WISHLIST
          </div>
          <div className={styles.item}>
            <BalanceOutlinedIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className={styles.info}>
          <span>Vendor: Lorem ipsum dolor sit amet.</span>
          <span>Product Type: Lorem ipsum dolor sit amet.</span>
          <span>Tag: Lorem ipsum dolor sit amet.</span>
        </div>
        <hr />
        <div className={styles.info}>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
