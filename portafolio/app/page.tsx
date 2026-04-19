import Image from "next/image";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/Hero.section";
import Interest from "./Components/Interest/Interest";
import CV from "./Components/CV/CV"; 

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Interest/>
      <CV/>
    </>
  );
}