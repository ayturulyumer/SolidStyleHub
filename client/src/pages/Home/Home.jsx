import styles from "./home.module.css"
import Slider from "../../components/HomeComponents/Slider/Slider.jsx"
import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts.jsx"
import Categories from "../../components/HomeComponents/Categories/Categories.jsx"

export default function Home() {
  return (
    <div className={styles.home}>
        <Slider/>
        <FeaturedProducts type="Featured"/>
        <Categories/>
        <FeaturedProducts type="Trending"/>
    </div>
  )
}
