import React, { useEffect, useState } from "react";
import Carousel from "react-alice-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import { Icon, Button } from "semantic-ui-react";

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
      <AliceCarousel disableDotsControls autoPlay controlsStrategy="alternate" autoPlayInterval={"500000"} infinite >
        {
          carouselData.map((car, index) => {
            return (
              <>
                <div className="center">
                  <img className="car-img" src={car.image} />
                </div>
                <div className="ScrollDownButton" onClick={handleDownScroll}>
                  <Icon name="angle down" color="white" size="huge" />
                </div>
                {
                  index === 0 ? 
                  <div className="JTTButton" onClick={() =>
                      window.open(
                        "https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra5WauXDgBfFLkMzBuH0SCR9UOElJOExDSjRON1c2RElYVTY3STY0V0NNVC4u",
                        "_blank"
                      )}>
                    <Button><p>Join The Team</p></Button>
                  </div>
                  :
                  null
                }
              </>
            )
          })
        }
      </AliceCarousel>
    </>
  );
}

export default ImageCarousel;
