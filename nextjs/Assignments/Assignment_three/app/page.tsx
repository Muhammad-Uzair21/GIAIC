import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Insta from "./components/Insta";
import { SliderData } from "./components/SliderData";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Hero heading="Zee Captures" message="Keeping moments of nature alive" />
    <Slider slides={SliderData} />
    <Insta />
    </>
  );
}
