import styles from "./featuredProducts.module.css";
import Card from "../../Card/Card.jsx";
import { dummyProducts } from "../../../constants/constants.js";
import * as productsApi from "../../../../apis/productsApi.js"
import { useEffect,useState } from "react";



export default function FeaturedProducts({ type }) {
const [products,setProducts] = useState([])

useEffect(() => {
  productsApi.getAll()
  .then((data) => setProducts(data))
  /**Add proper error handling   */
  .catch((err) => console.log(err))
},[])
console.log(products)
  return (
    <div className={styles.featuredProducts}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur itaque corrupti corporis repellat adipisci harum nesciunt! Perferendis atque asperiores deserunt sit laudantium ullam ipsa, aspernatur fugit quod nihil beatae saepe ducimus eum minima! Corporis quia est iusto consequatur asperiores.
        </p>
      </div>
      <div className={styles.bottom}>
        {products.map((product) => {
          return <Card product={product.attributes} key={product.id} />; 
        })}
      </div>
    </div>
  );
}
