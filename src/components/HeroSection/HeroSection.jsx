import React from "react";
// import laptop from "../../images/laptop.jpg";
import ellips from "../../images/Ellipse 153.png";
import ellips1 from "../../images/Ellipse 154.png";
import ellips2 from "../../images/Ellipse 155.png";
import ellips3 from "../../images/Ellipse 156.png";
import ellips4 from "../../images/Ellipse 157.png";
import ellips5 from "../../images/Ellipse 158.png";
import ellips6 from "../../images/Ellipse 159.png";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <div className="position-relative">
      <div className="d-flex flex-wrap container-box herosection">
        <div className="col-12 col-lg-6 content-img mb-3 mb-lg-0">
          {/* <img src={laptop} alt="" /> */}
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
          <h1 className="mb-3 mb-lg-5 fw-bold">Your Premium Sound, Unplugged!</h1>
          <p className="mb-3 mb-lg-5 w-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button>Find out More</button>
        </div>
      </div>
      <img src={ellips} alt="not found" className="position-absolute one" />
      <img src={ellips1} alt="not found" className="position-absolute two" />
      <img src={ellips2} alt="not found" className="position-absolute three" />
      <img src={ellips3} alt="not found" className="position-absolute four" />
      <img src={ellips4} alt="not found" className="position-absolute five" />
      <img src={ellips5} alt="not found" className="position-absolute six" />
      <img src={ellips6} alt="not found" className="position-absolute seven" />
    </div>
  );
}
