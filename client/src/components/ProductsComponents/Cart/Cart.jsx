import styles from "./cart.module.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import EmptyCart from "../../EmptyCart/EmptyCart.jsx";

import { useContext } from "react";
import CartContext from "../../../contexts/CartContext.jsx";

export default function Cart() {
  const { cart,removeFromCart,resetCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, product) => {
    const total = acc + product.price * product.quantity;
    return total;
  }, 0);
  return (
    <>
      {cart.length > 0 ? (
        <div className={styles.cart}>
          <h1>Products in your cart</h1>
          {cart?.map((product) => (
            <div className={styles.item} key={product.id} >
              <img src={product.img} alt={product.title} />
              <div className={styles.details}>
                <h1>{product.title}</h1>
                <p>{product.description.substring(0, 100)}</p>
                <div className={styles.price}>
                  ${product.quantity} x ${product.price}
                </div>
              </div>
              <DeleteOutlinedIcon className={styles.delete} onClick={() => removeFromCart(product.id)}/>
            </div>
          ))}
          <div className={styles.total}>
            <span>TOTAL :</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button>
            CHECKOUT
            <ShoppingCartCheckoutOutlinedIcon />
          </button>
          <span className={styles.reset} onClick={() => resetCart()}>
            RESET CART
            <RemoveShoppingCartOutlinedIcon />
          </span>
        </div>
      ) : (
        <div className={styles.cart}>
          <EmptyCart />
        </div>
      )}
    </>
  );
}
