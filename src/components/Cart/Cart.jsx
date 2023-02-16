import React from "react";
import { Form } from "react-bootstrap";
import Product from "./Product";
import "./cart.css";

export default function Cart() {
  return (
    <div className="bg-gray py-6">
      <div className="container-box">
        <div className="d-flex">
          <p className="fw-bold me-3">1. Shopping Cart</p>
          <p className="fw-bold gray mx-3">2. Checkout</p>
          <p className="fw-bold gray mx-3">3. Order Succesed</p>
        </div>
        <h2 className="fw-bold my-3 my-lg-5">My Cart</h2>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="products col-12 col-lg-7">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="col-12 col-md-5 ps-0 ps-lg-5">
            <div className="bg-white p-3 p-md-5">
              <h5 className="fw-bold">Have a Coupon?</h5>
              <Form.Control
                placeholder="Input your email here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="p-3 my-4"
              />
              <button className="fw-bold">Apply</button>
            </div>
            <div>
              <h5 className="fw-bold mt-5 mb-3">Cart Totals</h5>
              <div className="d-flex justify-content-between col-12 col-md-8 col-lg-6">
                <p className="fw-bold">Subtotal</p>
                <p className="fw-bold gray">$150</p>
              </div>
              <div className="d-flex justify-content-between col-12 col-md-8 col-lg-6">
                <p className="fw-bold">Shipping</p>
                <p className="fw-bold gray">Free Shipping</p>
              </div>
              <div className="d-flex justify-content-between col-12 col-md-8 col-lg-6">
                <p className="fw-bold">Shipping to Sidney</p>
                <p className="fw-bold orange">Change</p>
              </div>
              <div className="d-flex justify-content-between col-12 col-md-8 col-lg-6">
                <p className="fw-bold">Total</p>
                <p className="fw-bold gray">$350</p>
              </div>
              <button className="fw-bold">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
