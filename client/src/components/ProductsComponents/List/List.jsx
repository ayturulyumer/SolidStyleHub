import styles from "./list.module.css";
import Card from "../../Card/Card.jsx";
import { useFetch } from "../../../hooks/useFetch.js";

export default function List({ categoryId, maxPrice, sort, subCats }) {
  {
    /** Initially fetch all the products related to the current category */
  }
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${categoryId}${subCats.map(
      (category) => `&[filters][sub_categories][id][$eq]=${category}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <div className={styles.list}>
      {data?.map((product) => (
        <Card key={product.id} product={product.attributes} />
      ))}
    </div>
  );
}
