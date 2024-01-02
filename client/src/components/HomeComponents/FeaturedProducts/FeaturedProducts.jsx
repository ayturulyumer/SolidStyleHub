import styles from "./featuredProducts.module.css";
import Card from "../../Card/Card.jsx";
import { useFetch } from "../../../hooks/useFetch.js";
import Spinner from "../../Spinner/Spinner.jsx";

export default function FeaturedProducts({ type }) {
  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  console.log(data);
  return (
    <div className={styles.featuredProducts}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          aspernatur itaque corrupti corporis repellat adipisci harum nesciunt!
          Perferendis atque asperiores deserunt sit laudantium ullam ipsa,
          aspernatur fugit quod nihil beatae saepe ducimus eum minima! Corporis
          quia est iusto consequatur asperiores.
        </p>
      </div>
      <div className={styles.bottom}>
        {loading && <Spinner/>}
        {data.map((product) => {
          return <Card product={product.attributes} key={product.id} />;
        })}
      </div>
    </div>
  );
}
