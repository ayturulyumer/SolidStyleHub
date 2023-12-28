import List from "../../components/ProductsComponents/List/List.jsx"
import { useParams } from "react-router-dom"
import styles from "./products.module.css"

export default function Products() {
    const id = useParams()
    console.log(id)
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
                <input type="range"  min={0} max={1000}/>
                <span>1000</span>
                </div>
            </div>
            <div className={styles.filterItem}>
                <h2>Sort by</h2>
                <div className={styles.inputItem}>
                    <input type="radio" id="asc" value="asc" name="price" />
                    <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className={styles.inputItem}>
                    <input type="radio" id="desc" value="desc" name="price" />
                    <label htmlFor="desc">Price (Highest first)</label>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <img src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="productsImg" />
        </div>
        <List/>
    </div>
  )
}
