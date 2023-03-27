import React from "react";
import { Segment, Image } from "semantic-ui-react";
import AliceCarousel from "react-alice-carousel";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Testimonials(props) {
  const testimonialData = props.testimonialData;

  return (
    <>
      <div className="frag3">
        <h1 className="header">Testimonials</h1>
        <AliceCarousel
          disableDotsControls
          autoPlay
          controlsStrategy="alternate"
          autoPlayInterval={"10000"}
          infinite
        >
          {testimonialData.map((data) => (
            <Segment className="testi" secondary>
              <div className="row">
                <div className="col-md-12 center">
                  <Image className="testi-img" src={data.image} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="myCarousel">
                    <h3 className="testi-name">{data.name}</h3>
                    <h4 className="testi-designation">{data.designation}</h4>
                    <div className="maxHeight">
                      {/* <p> */}
                        {data.description}
                      {/* </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </Segment>
          ))}
        </AliceCarousel>
      </div>
    </>
  );
}

export default Testimonials;
