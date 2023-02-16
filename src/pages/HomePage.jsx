import React from "react";
import About from "../components/About/About";
import Article from "../components/Article/Article";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";
import HeroSection from "../components/HeroSection/HeroSection";
import OurAchieve from "../components/OurAchieve/OurAchieve";
import Privacy from "../components/Privacy/Privacy";
import SimpleSlider from "../components/SlickSlider/SlickSlider2";
import TopItems from "../components/TopItems/TopItems";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Gallery title={"Our Premium Collection"} />
      <TopItems />
      <About />
      <OurAchieve />
      <SimpleSlider />
      <Article />
      <Contact />
      <Privacy />
    </>
  );
}
