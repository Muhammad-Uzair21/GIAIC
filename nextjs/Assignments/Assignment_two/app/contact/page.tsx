import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./contact.module.css"

export default function About(){
    return(
        <>
        <Header>
      </Header>
      <main className={styles.main}>
      <div className={styles.cont}>
        <h1 className={styles.head}>Contact Us</h1>
        <p className={styles.para}>If you have any questions or need further information, feel free to reach out to us:</p>
        
        <h3 className={styles.head}>Email:</h3>
        <p className={styles.para}>uzair.jay21@gmail.com</p>

        <h3 className={styles.head}>Phone:</h3>
        <p className={styles.para}>+92 3702061941</p>

        <h3 className={styles.head}>Address:</h3>
        <p className={styles.para}>123 St, xyz City, PK</p>
    </div>
    </main>
    <Footer></Footer>
        </>
    )
}