import React from "react";

export default function Review() {
  return (
    <div className="d-flex mb-3 mb-lg-5 col-12 col-md-9 col-lg-8">
      <div className="review-img">
        <img src="" alt="" />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0 me-5">Alex Iwobi</h5>
          <div className="rating my-3 d-flex">
            <i class="fa-solid fa-star mx-1"></i>
            <i class="fa-solid fa-star mx-1"></i>
            <i class="fa-solid fa-star mx-1"></i>
            <i class="fa-solid fa-star mx-1"></i>
            <i class="fa-solid fa-star mx-1"></i>
          </div>
        </div>
        <p className="gray fw-bold">2 March 2021 at 06.30 pm</p>
        <div className="review-imgs d-flex justify-content-between">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="img">
            <img src="" alt="" />
          </div>
        </div>
        <p className="gray fw-bold">
          Thank you for the article that was made, it really provides insight
          and knowledge that I didn't know before.
        </p>
      </div>
    </div>
  );
}
