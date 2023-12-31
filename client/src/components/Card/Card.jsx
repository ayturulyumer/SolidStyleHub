import styles from "./card.module.css"
import {Link} from "react-router-dom"
 
export default function Card({product}) {
  const imageURL = import.meta.env.VITE_APP_IMAGE_URL
  return (
    <Link className="link" to={`/products/${product.id}`}>
        <div className={styles.card}>
          <div className={styles.image}>
            {product?.isNew && <span>New Season</span>}
            <img src={imageURL + product.firstImg.data.attributes.url} alt={product.title} className={styles.mainImg}/>
          </div>
          <h2>{product?.title}</h2>
          <div className={styles.prices}>
            <h3>${product?.oldPrice || product?.price + 20} </h3>
            <h3>${product?.price}</h3>
          </div>
        </div>
    </Link>
  )
}
