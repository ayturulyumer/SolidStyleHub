import styles from "./cart.module.css";
import { dummyProducts } from "../../../constants/constants.js";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
export default function Cart() {
  return (
    <div className={styles.cart}>
      <h1>Products in your cart</h1>
      {dummyProducts?.map((product) => (
        <div className={styles.item} key={product.id}>
          <img src={product.url} alt={product.title} />
          <div className={styles.details}>
            <h1>{product.title}</h1>
            <p>{product.description.substring(0, 100)}</p>
            <div className={styles.price}>1 x ${product.newPrice}</div>
          </div>
          <DeleteOutlinedIcon className={styles.delete} />
        </div>
      ))}
      <div className={styles.total}>
        <span>SUBTOTAL</span>
        <span>$999</span>
      </div>
      <button >CHECKOUT
        <ShoppingCartCheckoutOutlinedIcon/>
      </button>
      <span className={styles.reset}>
        RESET CART
        <RemoveShoppingCartOutlinedIcon />
      </span>
    </div>
  );
}
