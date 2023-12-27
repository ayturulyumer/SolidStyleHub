import styles from "./home.module.css"
import Slider from '../../components/Slider/Slider.jsx'
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx"

export default function Home() {
  return (
    <div className={styles.home}>
        <Slider/>
        <FeaturedProducts/>
    </div>
  )
}
