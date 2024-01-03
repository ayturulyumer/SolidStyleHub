import { useState } from "react";
import styles from "./singleProduct.module.css";
import { productImages } from "../../../constants/constants.js";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import { useFetch } from "../../../hooks/useFetch.js";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState("firstImg");
  const [quantity, setQuantity] = useState(0);

  const {productId} = useParams()
  const imageURL = import.meta.env.VITE_APP_IMAGE_URL
 

  const {data,loading,error} = useFetch(`/products/${productId}?populate=*`)
  console.log(data)
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.images}>
          <img
            src={imageURL + data?.attributes?.firstImg?.data?.attributes?.url}
            alt="firstImg"
            onClick={() => setSelectedImage("firstImg")}
          />
          <img
            src={imageURL + data?.attributes?.secondImg?.data?.attributes?.url}
            alt="secondImg"
            onClick={() => setSelectedImage("secondImg")}
          />
        </div>
        <div className={styles.mainImg}>
          <img src={imageURL + data?.attributes?.[selectedImage]?.data?.attributes?.url} alt="mainImg" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>{data?.attributes?.title}</h1>
        <span className={styles.price}>${data?.attributes?.price}</span>
        <p>
         {data?.attributes?.description}
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
          ADD TO CART
          <AddShoppingCartOutlinedIcon />
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
