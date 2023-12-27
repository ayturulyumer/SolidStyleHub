import styles from "./featuredProducts.module.css";
import Card from "../Card/Card.jsx";
import { dummyProducts } from "../../../constants/constants.js";

export default function FeaturedProducts({ type }) {
  return (
    <div className={styles.featuredProducts}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem sunt debitis velit nisi reprehenderit veritatis iusto
          optio facilis perferendis possimus?
        </p>
      </div>
      <div className={styles.bottom}>
        {dummyProducts.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
