
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Top from "@/components/Top";
import Companies from "@/components/Companies";
import Category from "@/components/Category";
import Achievements from "@/components/Achievements";
import Courses from "@/components/Courses";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white " >
      <Top />
      <Header />
      <Hero />
      <Companies />
      <Category />
      <Achievements />
      <Courses />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  )
}
