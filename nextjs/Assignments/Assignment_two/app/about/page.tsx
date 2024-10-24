import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./about.module.css"

export default function About(){
    return(
        <>
        <Header>
      </Header>
      <main className={styles.main}>
        <div className={styles.contain}>
            <h2 className={styles.about}>About Us</h2>

            <h3 className={styles.stuff}>Our Mission</h3>
            <p className={styles.paras}>At Zee Designs, we strive to blend creativity with functionality, delivering exceptional design solutions that empower businesses to thrive in the digital landscape.</p>

            <h3 className={styles.stuff}>Who We Are</h3>
            <p className={styles.paras}>We are a passionate team of designers and developers dedicated to crafting visually stunning and user-friendly experiences. Our diverse skill set allows us to approach each project with a fresh perspective, ensuring unique outcomes tailored to your needs.</p>

            <h3 className={styles.stuff}>Our Values</h3>
            <ul className={styles.list}>
             <li><strong>Innovation</strong>: We embrace change and constantly seek new ideas to push boundaries.</li>
             <li><strong>Collaboration</strong>: Working together with clients is at the heart of our process.</li>
             <li><strong>Quality</strong>: We are committed to excellence in every aspect of our work.</li>
            </ul>
        </div>
      </main>
      <Footer></Footer>
        </>
    )
}