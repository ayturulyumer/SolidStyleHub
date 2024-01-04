import styles from "./cart.module.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmptyCart from "../../EmptyCart/EmptyCart.jsx";

import { useContext } from "react";
import CartContext from "../../../contexts/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart,removeFromCart,resetCart,toggleCart  } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, product) => {
    const total = acc + product.price * product.quantity;
    return total;
  }, 0);
  return (

     <div className={styles.cart} >
       <CloseRoundedIcon className={styles.closeIcon} onClick={() => toggleCart()} />
      {cart.length > 0 ? (
        <>
          <h1>Products in your cart</h1>
          {cart?.map((product) => (
            <Link to={`/products/details/${product.id}`} className="link">

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
            </Link>
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
          </>
      ) : (
          <EmptyCart />
      )}
       </div>
  );
}
