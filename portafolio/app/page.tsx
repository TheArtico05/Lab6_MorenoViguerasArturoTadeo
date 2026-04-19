import Image from "next/image";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/Hero.section";
import Interest from "./Components/Interest/Interest";

export default function Home() {
  return (
    <><Header/>
      <HeroSection/>
      <Interest/>
    </>
  );
}
