import React from "react";
import { NavLink } from "react-router-dom";
import "./card.css";
export default function Card() {
  return (
    <div className="card mb-3">
      <img src="" alt="not"/>
      <span className="text">Category Dress</span>
      <p>Tropical Suit</p>
      <NavLink to="">
        <i class="fa-solid fa-circle-arrow-right"></i>
      </NavLink>
    </div>
  );
}
