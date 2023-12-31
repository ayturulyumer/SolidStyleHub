import styles from "./home.module.css"
import Slider from "../../components/HomeComponents/Slider/Slider.jsx"
import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts.jsx"
import Categories from "../../components/HomeComponents/Categories/Categories.jsx"
import Contact from "../../components/HomeComponents/Contact/Contact.jsx"

export default function Home() {
  return (
    <div className={styles.home}>
        <Slider/>
        <FeaturedProducts type="featured"/>
        <Categories/>
        <FeaturedProducts type="trending"/>
        <Contact/>
    </div>
  )
}
