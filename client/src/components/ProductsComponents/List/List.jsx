import styles from "./list.module.css"
import { dummyProducts } from "../../../constants/constants.js"
import Card from "../../Card/Card.jsx"

export default function List() {
  return (
   <div className={styles.list}>
    {dummyProducts?.map(product =>(
        <Card key={product.id} product={product}/>
    ))}
   </div>
  )
}
