import List from "../../components/ProductsComponents/List/List.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./products.module.css";

export default function Products() {
  const { categoryId } = useParams();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Categories</h2>
          <div className={styles.inputItem}>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Coats</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">T-Shirts</label>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Filter by price</h2>
          <div className={styles.inputItem}>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Sort by</h2>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.categoryImg}
          src="https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_1280.jpg"
          alt="categoryImg"
        />
      <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}
