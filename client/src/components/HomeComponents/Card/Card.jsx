import styles from "./card.module.css"
import {Link} from "react-router-dom"
 
export default function Card({product}) {
  return (
    <Link to={`/products/${product.id}`}>
        <div className={styles.card}></div>
    </Link>
  )
}
