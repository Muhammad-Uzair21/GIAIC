
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./gfx.module.css"

export default function About(){
    return(
        <>
        <Header></Header>
      <main className={styles.main}>
        <h2 className={styles.head}>This is Graphic Design Portfolio page!</h2>
      </main>
      <Footer></Footer>
        </>
    )
}