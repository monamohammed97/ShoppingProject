import React from "react";
import { NavLink } from "react-router-dom";
import CardArticle from "../Card/CardArticle";

export default function Article() {
  return (
    <div className="py-6 bg-gray">
      <div className="d-flex justify-content-between align-items-end container-box">
        <h2 className="fw-bold col-7 col-lg-2">
          Get Better Insights from Our Articles
        </h2>
        <NavLink to={""} className="orange text-decoration-none">
          See more
        </NavLink>
      </div>
      <div className="d-flex flex-wrap container-box mt-3 mt-md-5">
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </div>
    </div>
  );
}
