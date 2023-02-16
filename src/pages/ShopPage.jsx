import React from "react";
import Contact from "../components/Contact/Contact";
import Filter from "../components/Filter/Filter";
import HeroSection from "../components/HeroSection/HeroSection";
import Privacy from "../components/Privacy/Privacy";

export default function ShopPage() {
  return (
    <>
      <HeroSection />
      <Filter />
      <Contact />
      <Privacy />
    </>
  );
}
