import React from "react";
import { NavLink } from "react-router-dom";

export default function CardArticle() {
  return (
    <div className="col-12 col-md-6 p-3 article mb-3">
      <div className="h-500">
        <img src="" alt="not" />
      </div>
      <h3 className="fw-bold">Best Summer Outfit Style</h3>
      <span className="fw-bold">14 Feb.Livina Style</span>
      <p className="fw-bold gray my-3">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s.
      </p>
      <NavLink to={''} className="fw-bold text-decoration-none orange">Explore More</NavLink>
    </div>
  );
}
