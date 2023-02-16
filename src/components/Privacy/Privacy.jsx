import React from "react";
import './privacy.css'

export default function Privacy() {
  return (
    <div className="container-box py-6 d-flex flex-wrap justify-content-between">
      <div className="col-6 col-md-3 w-320">
        <img src="" alt="not" />
      </div>
      <div className="col-12 col-md-8 d-flex flex-column justify-content-between privacy">
        <div>
          <div className="d-flex justify-content-between flex-wrap">
            <h2 className="fw-bold orange mb-3 mb-md-4">Dealerz.</h2>
            <div className="d-flex justify-content-between icons">
              <span className="icon">Yt</span>
              <span className="icon">Fb</span>
              <span className="icon">Tw</span>
              <span className="icon">Ig</span>
            </div>
          </div>
          <p className="fw-bold">Privacy Policy</p>
          <p className="fw-bold">Terms and Condition</p>
        </div>
        <p className="fw-bold">@2020 TanahAir Studio. All rights reserved.</p>
      </div>
    </div>
  );
}
