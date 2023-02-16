import React from "react";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";
import HeroSection from "../components/HeroSection/HeroSection";
import Privacy from "../components/Privacy/Privacy";
import SimpleSlider from "../components/SlickSlider/SlickSlider2";
export default function Test() {
  return (
    <>
      <HeroSection />
      <Gallery title={"Our Premium Collection"} />
      <SimpleSlider />
      <Contact />
      <Privacy />
    </>
  );
}
