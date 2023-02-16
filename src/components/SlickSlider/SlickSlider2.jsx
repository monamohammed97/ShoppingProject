import React, { Component } from "react";
import Slider from "react-slick";
import CardSlider from "../Card/CardSlider";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
    };
    return (
      <div className="bg-gray py-6">
        <Slider {...settings}>
          <CardSlider />
          <CardSlider />
          <CardSlider />
          <CardSlider />
          <CardSlider />
          <CardSlider />
        </Slider>
      </div>
    );
  }
}
