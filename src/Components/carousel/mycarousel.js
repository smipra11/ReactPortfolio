import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner from "../../assets/img/carousal/Banner.png";
import banner2 from "../../assets/img/projects/banner2.png"
import "./mycarousel.css";

function MyCarousel() {
  return (
    <Carousel>
      <img className="d-block w-100 " src={banner2} alt="First slide" />
     
    </Carousel>
  
  
  );
}

export default MyCarousel;
