import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Homechef from "@/components/home/Homechef";
import Services from "@/components/home/Services";
import Values from "@/components/home/Values";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <Banner/>
      <About />
      <Values/>
      <Services />
      <Homechef />
    </>
  );
}
