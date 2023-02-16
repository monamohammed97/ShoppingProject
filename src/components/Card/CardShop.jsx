import React from "react";

export default function CardShop() {
  return (
    <div className="col-12 col-md-6 px-3">
      <div className="bg-white mb-3 p-3 p-md-5 position-relative">
        <span className="heart position-absolute">
          <i class="fa-regular fa-heart"></i>
        </span>
        <div className="h-375 mb-3">
          <img src="" alt="not" />
        </div>
        <h3 className="text-center fw-bold">Urbano Jacket</h3>
        <div className="rating my-3 d-flex justify-content-center m-auto">
          <i class="fa-solid fa-star mx-1"></i>
          <i class="fa-solid fa-star mx-1"></i>
          <i class="fa-solid fa-star mx-1"></i>
          <i class="fa-solid fa-star mx-1"></i>
          <i class="fa-solid fa-star mx-1"></i>
        </div>
        <p className="text-center fw-bold">watchmenow</p>
        <p className="text-center fw-bold orange my-3">$99</p>
      </div>
    </div>
  );
}
