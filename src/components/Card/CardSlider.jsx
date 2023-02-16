import React from "react";

export default function CardSlider() {
  return (
    <div className="container-box bg-white py-3 py-md-5 px-5 d-flex flex-wrap justify-content-between">
      <div className="col-6 col-md-3 w-320">
        <img src="" alt="not" />
      </div>
      <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
        <h2 className="fw-bold mb-3 mb-md-5 orange"> Good Seller!</h2>
        <p className="fw-bold w-50 gray mb-3 mb-md-5">
          I am very happy with the services provided, it is very helpful,
          starting from the insight that the company gave from the start that I
          did not understand what it was so I got knowledge and made my website
          look better
        </p>
        <h5 className="fw-bold">Anna Saraspova</h5>
        <p className="fw-bold gray">Your Beloved Buyer</p>
      </div>
    </div>
  );
}
