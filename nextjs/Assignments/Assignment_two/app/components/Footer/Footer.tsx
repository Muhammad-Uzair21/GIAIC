
import styles from "./Footer.module.css";

const Footer = ()=> {
    return(
        <footer className={styles.footer}>
            <div className={styles.columns2}>
                    <h1>Zee Designs</h1>
                    <p>Bringning Concepts into Life, Through Desgin</p>
            </div>
            <div className={styles.cont}>
                <div className={styles.columns}>
                    <h3>Quick Links</h3>
                    <p>Join Our Team!</p>
                    <p>Blog</p>
                    <p>Terms of Service</p>
                </div>
                <div className={styles.columns}>
                    <h3>Help</h3>
                    <p>Customer Support</p>
                    <p>Customer Reviews</p>
                    <p>FAQs</p>
                </div>
                <div className={styles.columns}>
                    <h3>Follow Us</h3>
                    <p>LinkedIn | GitHub | Facebook | Twitter</p>
                </div>
            </div>
            <div className={styles.bottom}>
            <p>© 2001 Zee Designs. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;