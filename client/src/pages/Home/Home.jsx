import styles from "./home.module.css"
import Slider from "../../components/HomeComponents/Slider/Slider.jsx"
import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts.jsx"

export default function Home() {
  return (
    <div className={styles.home}>
        <Slider/>
        <FeaturedProducts type="Featured"/>
        <FeaturedProducts type="Trending"/>
    </div>
  )
}
