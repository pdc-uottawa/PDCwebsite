import React, { useEffect, useState } from "react";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import { Icon } from "semantic-ui-react";

function ImageCarousel(props) {
  const carouselData = props.carouselData;

  function handleDownScroll() {
    window.scrollTo({
      top: window.innerHeight - 61,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <Carousel disableDotsControls autoPlay autoPlayInterval={"500000"} infinite>
        {
          carouselData.map((car) => {
            return (
              <>
                <img className="car-img" src={car.image} />
                <div className="ScrollDownButton" onClick={handleDownScroll}>
                  <Icon name="angle down" color="white" size="huge" />
                </div>
              </>
            )
          })
        }
      </Carousel>
    </>
  );
}

export default ImageCarousel;
