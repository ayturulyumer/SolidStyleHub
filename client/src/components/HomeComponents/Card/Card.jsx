import styles from "./card.module.css"
import {Link} from "react-router-dom"
 
export default function Card({product}) {
  console.log(product.isNew)
  return (
    <Link className="link" to={`/products/${product.id}`}>
        <div className={styles.card}>
          <div className={styles.image}>
            {product.isNew && <span>New Season</span>}
            <img src={product.url} alt={product.title} className={styles.mainImg}/>
          </div>
          <h2>{product.title}</h2>
          <div className={styles.prices}>
            <h3>${product.oldPrice}</h3>
            <h3>${product.newPrice}</h3>
          </div>
        </div>
    </Link>
  )
}
