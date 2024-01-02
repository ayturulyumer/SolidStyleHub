import List from "../../components/ProductsComponents/List/List.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./products.module.css";
import mapCategoryToId from "../../utils/utils.js";
import { useFetch } from "../../hooks/useFetch.js";
export default function Products() {
  const { categoryId } = useParams();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const id = mapCategoryToId(categoryId);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${id}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
  {/** If radio is checked set the value inside state if it's unchecked remove the value from the state */}
    setSelectedSubCategories((state) =>
      isChecked ? [...state, value] : state.filter((item) => item !== value)
    );
  };

 

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Categories</h2>
          {data?.map((subCat) => (
            <div className={styles.inputItem} key={subCat.id}>
              <input
                type="checkbox"
                id={subCat.id}
                value={subCat.id}
                onChange={handleChange}
              />
              <label htmlFor={subCat.id}>{subCat.attributes.title}</label>
            </div>
          ))}
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
        <List id={id} maxPrice={maxPrice} sort={sort} subCats={selectedSubCategories} />
      </div>
    </div>
  );
}
