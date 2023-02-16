import React from "react";
import Form from "react-bootstrap/Form";
import CardShop from "../Card/CardShop";
import Category from "./Category";
import Featured from "./Featured";
import "./filter.css";
import { SuperSimple } from "./SuperSimple";

export default function Filter() {
  return (
    <div className="py-6 bg-gray">
      <div className="container-box filter d-flex">
        <div className="col-6 col-md-4 col-lg-3 pe-2 pe-md-5">
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search products"
          />
          <div className="d-flex justify-content-between mt-4 mt-md-5">
            <h5 className="fw-bold">Price</h5>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0V6.469L6 11.469V18.618L12 15.618V11.469L18 6.469V0H0ZM16 2V4H2V2H16ZM10 10.531V14.382L8 15.382V10.531L2.562 6H15.438L10 10.531Z"
                fill="#11142D"
              />
            </svg>
          </div>
          <SuperSimple />
          <p className="d-flex justify-content-between my-2">
            <span>Range</span>
            <span>$5-$20</span>
          </p>
          <div className="my-5">
            <h5 className="fw-bold my-4">Product Categories</h5>
            <Category title={"Coat and Jackets"} />
            <Category title={"Dressses"} />
            <Category title={"Playsuit"} />
            <Category title={"Short"} />
            <Category title={"Top"} />
            <Category title={"Bottoms"} />
          </div>
          <div className="my-5">
            <h5 className="fw-bold my-4">Featured Product</h5>
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
          </div>
        </div>
        <div className="col-6 col-md-8 col-lg-9 d-flex flex-wrap">
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
        </div>
      </div>
    </div>
  );
}
