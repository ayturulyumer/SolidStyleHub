import styles from "./navbar.module.css";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../ProductsComponents/Cart/Cart.jsx";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext.jsx";
export default function Navbar() {
  const { cart, toggleCart , isCartOpen} = useContext(CartContext);
 
  return (
<>
    {isCartOpen && <Cart/>}
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <img src="../usaflag.jpg" alt="language" width={30} height={20} />
            <KeyboardArrowDownRoundedIcon />
          </div>
          <div className={styles.item}>
            <span>USD</span>
            <KeyboardArrowDownRoundedIcon />
          </div>
          <div className={styles.item}>
            <Link to="/products/men" className="link">
              Men
            </Link>
          </div>
          <div className={styles.item}>
            <Link to="/products/women" className="link">
              Women
            </Link>
          </div>
          <div className={styles.item}>
            <Link to="/products/children" className="link">
              Children
            </Link>
          </div>
          <div className={styles.item}>
            <Link to="/products/accessories" className="link">
              Accessories
            </Link>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.item}>
            <Link to="/" className="link">
              SolidStyleHub
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <Link to="/ " className="link">
              Homepage
            </Link>
          </div>
          <div className={styles.item}>
            <Link to="/aboutus" className="link">
              About
            </Link>
          </div>
          <div className={styles.item}>
            <Link to="/contacts" className="link">
              Contact us
            </Link>
          </div>
          <div className={styles.icons}>
            <SearchRoundedIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderRoundedIcon />
            <div className={styles.cartIcon} onClick={() => toggleCart()}>
              <ShoppingCartOutlinedIcon  />
              <span>{cart.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
