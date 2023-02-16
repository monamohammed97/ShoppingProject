import React from "react";
import Card from "../Card/Card";
import "./gallery.css";

export default function Gallery(props) {
  return (
    <div className="gallery">
      <div className="container-box">
        <h2 className="text-center mb-4 mb-md-5 fw-bold">{props.title}</h2>
        <div className="d-flex justify-content-between flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="d-flex justify-content-center my-3 my-md-5">
          <button>Find out More </button>
        </div>
      </div>
    </div>
  );
}
