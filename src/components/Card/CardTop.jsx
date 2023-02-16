import React from "react";

export default function CardTop(props) {
  return (
    <div className="box-card position-relative">
    <span className="sale">SALE</span>
      <div className="container-card h-100">
        <img src="" alt="not" />
        <h3 className="fw-bold text-center">{props.title}</h3>
        <p className="fw-bold text-center gray mb-1 mb-md-3">{props.description}</p>
        <p className="fw-bold text-center">
          <span className="orange mx-1">{props.price}</span>
          <span className="gray mx-1">{props.price2}</span>
        </p>
      </div>
    </div>
  );
}
