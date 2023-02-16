import React from "react";
import "./ourarchieve.css";
import img1 from '../../images/logo 1.png'
import img2 from '../../images/logo 2.png'
import img3 from '../../images/logo 3.png'
import img4 from '../../images/logo 4.png'
import img5 from '../../images/logo 5.png'
import img6 from '../../images/logo 6.png'

export default function OurAchieve() {
  return (
    <div className="py-6 bg-gray pt-0">
      <div className="container-box">
        <h2 className="fw-bold mb-3 mb-md-5 text-center">Our Achievement </h2>
        <div className="d-flex flex-wrap justify-content-between images">
          <img src={img1} alt="not"/>
          <img src={img2} alt="not"/>
          <img src={img3} alt="not"/>
          <img src={img4} alt="not"/>
          <img src={img5} alt="not"/>
          <img src={img6} alt="not"/>
        </div>
      </div>
    </div>
  );
}
