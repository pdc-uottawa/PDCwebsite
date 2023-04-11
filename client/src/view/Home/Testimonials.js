import React from "react";
import { Grid, Segment, Image, Container } from "semantic-ui-react";
import AliceCarousel from "react-alice-carousel";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TestimonialsV2(props) {
  const testimonialData = props.testimonialData;

  return (
    <>
     <Container fluid>
      <div className="frag3 marginOverall">
        <h1 className="subHeadings">Testimonials</h1>
        <AliceCarousel
          disableDotsControls
          autoPlay
          controlsStrategy="alternate"
          autoPlayInterval={"10000"}
          infinite
        >
          {testimonialData.map((data) => (
            <>
              <Grid>
                <div className="col-md-6">
                  <Grid.Column>
                    <Image className="testi-img" src={data.image} />
                  </Grid.Column>
                </div>
                <div className="col-md-6 marginTop6">
                  <Grid.Column className="grid-col-1">
                    <h3 className="testi-name">{data.name}</h3>
                    <h4 className="testi-designation">{data.designation}</h4>
                    <div className="maxHeight">
                      {/* <p> */}
                      {data.description}
                      {/* </p> */}
                    </div>
                  </Grid.Column>
                </div>
              </Grid>
            </>
          ))}
        </AliceCarousel>
      </div>
      </Container>
    </>
  );
}

export default TestimonialsV2;
