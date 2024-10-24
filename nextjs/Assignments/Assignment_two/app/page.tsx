import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default function Main() {
  return (
    <>
      <Header></Header>
      <main className="home">
        <div className="hero">
          <h3>Your Vision, Our Mission!</h3>
          <p>At the intersection of creativity and functionality, we craft visually stunning experiences that not only capture attention but also tell your brand’s unique story.</p>
          <Link href="/contact"><button>Join us Today!</button></Link>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
