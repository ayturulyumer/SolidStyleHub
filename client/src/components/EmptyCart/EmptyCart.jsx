import styles from "./emptyCart.module.css";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
export default function EmptyCart() {
  return (
    <>
      <div className={styles.emptycart}>
         <span><ShoppingBasketOutlinedIcon sx={{ fontSize: 50 }}/></span>
        </div>
      <span className={styles.message}>Your Cart is Empty</span>
    </>
  );
}
