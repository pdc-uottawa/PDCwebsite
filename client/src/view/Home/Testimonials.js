import React, { useEffect, useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import AliceCarousel from "react-alice-carousel";
import { config } from "../../common/config/config";
import Axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Testimonials(props) {
  const testimonialData = props.testimonialData;

  return (
    <>
      <div className="frag3">
        <h1 className="hd-2">TESTIMONIALS</h1>
        <AliceCarousel
          disableDotsControls
          autoPlay
          controlsStrategy="alternate"
          autoPlayInterval={"10000"}
          infinite
        >
          {testimonialData.map((data) => (
            <Segment className="testi" secondary>
              <img className="testi-img" src={data.image} />
              <div className="myCarousel">
                <h3 className="testi-name">{data.name}</h3>
                <h4 className="testi-designation">{data.designation}</h4>
                <p className="maxHeight">{data.description}</p>
              </div>
            </Segment>
          ))}
        </AliceCarousel>
      </div>
    </>
  );
}

export default Testimonials;
