import React from "react";
import Cart from "../components/Cart/Cart";
import Contact from "../components/Contact/Contact";
import HeroSection from "../components/HeroSection/HeroSection";
import Privacy from "../components/Privacy/Privacy";
import TopItems from "../components/TopItems/TopItems";
export default function CartPage() {
  return (
    <>
      <HeroSection />
      <Cart />
      <TopItems />
      <Contact />
      <Privacy />
    </>
  );
}
