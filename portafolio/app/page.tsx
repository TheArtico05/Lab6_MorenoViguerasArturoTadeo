import Image from "next/image";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/Hero.section";
import Interest from "./Components/Interest/Interest";
import CV from "./Components/CV/CV"; 
import Projects from "./Components/Projects/Projects"; 
import Contact from "./Components/Contact/Contact"; 
import Footer from "./Components/Footer/Footer"; 

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Interest/>
      <CV/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}