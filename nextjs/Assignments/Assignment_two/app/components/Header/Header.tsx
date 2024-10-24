import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
    <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/" className={styles.link}>Logo</Link>
          </div>
          <div className={styles.sec}>
            <ul>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
              <li><Link href="/about" className={styles.link}>About</Link></li>
              <li><Link href="/services" className={styles.link}>Services</Link></li>
            </ul>
          </div>
        </div>
    </header>
    </>
  );
}
export default Header;