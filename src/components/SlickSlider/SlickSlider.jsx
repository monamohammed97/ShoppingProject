import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import CardTop from "../Card/CardTop";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="py-6 pb-12">
        <h2 className="text-center mb-4 fw-bold">Top Items</h2>
        <p className="w-50 text-center m-auto mb-3 mb-md-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <Slider {...settings}>
          <CardTop
            title={"Tracksuit Hyped"}
            description={"Apple Cherry"}
            price={"$384"}
            price2={"$454"}
          />
          <CardTop
            title={"Tracksuit Hyped"}
            description={"Apple Cherry"}
            price={"$384"}
            price2={"$454"}
          />
          <CardTop
            title={"Tracksuit Hyped"}
            description={"Apple Cherry"}
            price={"$384"}
            price2={"$454"}
          />
          <CardTop
            title={"Tracksuit Hyped"}
            description={"Apple Cherry"}
            price={"$384"}
            price2={"$454"}
          />
          <CardTop
            title={"Tracksuit Hyped"}
            description={"Apple Cherry"}
            price={"$384"}
            price2={"$454"}
          />
        </Slider>
      </div>
    );
  }
}
