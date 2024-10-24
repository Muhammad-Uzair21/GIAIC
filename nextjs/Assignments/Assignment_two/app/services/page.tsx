import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./services.module.css"

export default function About(){
    return(
        <>
        <Header>
      </Header>
      <main className={styles.body}>
        <h1 className={styles.head}>Our Services!</h1>
        <div className={styles.base}>
        <div className={styles.main}>
        <div className={styles.img}>
            <img src="/kalen-emsley-oY0EDfHGPH4-unsplash.jpg" width="320px" alt=""></img>
        </div>
        <div className={styles.info}>
            <h2>Graphics Designing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis ab quam deleniti ratione cumque asperiores ducimus necessitatibus. Est eaque expedita sapiente. Impedit quidem, commodi nesciunt ullam itaque sunt modi!</p>
        </div>
        <Link href="/services/gfx" className={styles.link}>
        <div className={styles.read}>
            <span>Read More</span>
        </div></Link>
        </div>

        <div className={styles.main}>
        <div className={styles.img}>
            <img src="/kalen-emsley-oY0EDfHGPH4-unsplash.jpg" width="320px" alt=""></img>
        </div>
        <div className={styles.info}>
            <h2>Ui/Ux Designing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis ab quam deleniti ratione cumque asperiores ducimus necessitatibus. Est eaque expedita sapiente. Impedit quidem, commodi nesciunt ullam itaque sunt modi!</p>
        </div>
        <Link href="/services/gfx" className={styles.link}>
        <div className={styles.read}>
            <span>Read More</span>
        </div></Link>
        </div>
        </div>
      </main>
      <Footer></Footer>
        </>
    )
}