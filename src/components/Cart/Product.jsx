import React from "react";

export default function Product() {
  return (
    <div className="d-flex mb-3 mb-md-4">
      <div className="product-img">
        <img src="" alt="not" />
      </div>
      <div className="ms-4">
        <h5 className="fw-bold mb-3">Tropical Playsuit</h5>
        <div className="d-flex justify-content-between ">
          <p className="fw-bold">Size :</p>
          <p className="fw-bold">M</p>
        </div>
        <div className="d-flex justify-content-between ">
          <p className="fw-bold">Quantity :</p>
          <p className="fw-bold">
            <span className="mx-2">+</span>
            <span className="mx-2">5</span>
            <span className="mx-2">-</span>
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="orange fw-bold me-5">$99</h3>
          <button className="wishlist">
            Wishlist <i class="fa-regular fa-heart"></i>
          </button>
          <button className="wishlist delete">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
