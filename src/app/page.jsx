import About from "@/components/home/about/About";
import Banner from "@/components/home/banner/Banner";
import Contact from "@/components/home/contact/Contact";
import Testimonial from "@/components/home/testimonial/Testimonial";
import Usp from "@/components/home/usp/Usp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Usp/>
      {/* <Testimonial/> */}
      <Contact/>
    </>
  );
}
