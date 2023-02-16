import React from "react";
import { NavLink } from "react-router-dom";
import './about.css'

export default function About() {
  return (
    <div className="py-6 bg-gray">
      <div className="container-box d-flex flex-wrap align-items-center">
        <div className="col-12 col-lg-6 img-story mb-3 mb-lg-0">
          <img src="" alt="not"/>
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="fw-bold mb-3 mb-md-5">
            Story about <br /> Our Brand
          </h2>
          <p className="gray fw-bold w-75 mb-3 mb-md-5">
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company. We will also
            facilitate the business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company Develop a website by finding a product
            identity that has value and branding to become a characteristic of a
            company. We will also facilitate the business marketing of these
            products with our SEO experts so that they become a ready-to-use
            website and help sell a product from the company
          </p>
          <NavLink className="orange text-decoration-none">Read full story</NavLink>
        </div>
      </div>
    </div>
  );
}
