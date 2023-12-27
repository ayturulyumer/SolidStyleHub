import styles from "./home.module.css"
import Slider from '../../components/Slider/Slider.jsx'

export default function Home() {
  return (
    <div className={styles.home}>
        <Slider/>
    </div>
  )
}
