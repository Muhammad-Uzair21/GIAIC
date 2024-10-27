import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Insta from "./components/Insta";
import { SliderData } from "./components/SliderData";

export default function Home() {
  return (
    <>
      <Hero heading="Zee Captures" message="Keeping moments of nature alive" />
      <Slider slides={SliderData} />
      <Insta />
    </>
  );
}
