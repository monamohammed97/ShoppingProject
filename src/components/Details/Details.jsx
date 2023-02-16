import React from "react";
import "./details.css";
import Review from "./Review";
export default function Details() {
  return (
    <>
      <div className="bg-wb py-6 product">
        <div className="container-box">
          <p>Grocery > Fruits > Japan Oranges</p>
          <div className="d-flex justify-content-between flex-wrap">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <img src="" alt="not" />
              <div className="images d-flex justify-content-between">
                <img src="" alt="not" />
                <img src="" alt="not" />
                <img src="" alt="not" />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-0 ps-lg-5">
              <h2 className="fw-bold">Urbano Jacket</h2>
              <div className="rating my-3 d-flex">
                <i class="fa-solid fa-star mx-1"></i>
                <i class="fa-solid fa-star mx-1"></i>
                <i class="fa-solid fa-star mx-1"></i>
                <i class="fa-solid fa-star mx-1"></i>
                <i class="fa-solid fa-star mx-1"></i>
              </div>
              <h3 className="orange fw-bold my-4">$99</h3>
              <span>Details Product</span>
              <p className="fw-bold gray my-4">
                Develop a website by finding a product identity that has value
                and branding to become a characteristic of a company. We will
                also facilitate the business marketing of these products with
                our SEO experts so that they become a ready-to-use website and
                help sell a product from the company.
              </p>
              <p className="fw-bold gray">
                Develop a website by finding a product identity that has value
                and branding to become a characteristic of a company. We will
                also facilitate the business marketing of these products with
                our SEO experts so that they become a ready-to-use website and
                help sell a product from the company.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3 mt-md-5">
                <p className="fw-bold">Quantity</p>
                <div className="counter bg-white p-2">
                  <span className="mx-3">+</span>
                  <span className="mx-3">1</span>
                  <span className="mx-3">-</span>
                </div>
                <p className="orange">Add note</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold">Sub Total</p>
                <p className="fw-bold">$10</p>
              </div>
              <div className="d-flex align-items-center mt-5">
                <button className="fw-bold wishlist">
                  Wishlist <i class="fa-regular fa-heart"></i>
                </button>
                <button className="fw-bold mx-3">
                  Add to Cart <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray py-6 pt-0 description">
        <div className="container-box">
          <h2 className="fw-bold mb-4">Description</h2>
          <div className="d-flex justify-content-between flex-wrap">
            <div className="col-12 col-lg-6">
              <p className="gray fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="gray fw-bold">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo.
              </p>
              <h2 className="fw-bold mb-4">Reviews (2)</h2>
              <div className="reviews">
                <Review />
                <Review />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-0 ps-lg-5">
              <img src="" alt="not" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
