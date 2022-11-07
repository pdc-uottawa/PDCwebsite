import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Icon, Button } from "semantic-ui-react";

function ImageCarousel(props) {
  const carouselData = props.carouselData;

  function handleDownScroll() {
    window.scrollTo({
      top: window.innerHeight - 70,
      behavior: "smooth",
    });
  }

  return (
    <>
      <AliceCarousel
        disableDotsControls
        autoPlay
        controlsStrategy="alternate"
        autoPlayInterval={"10000"}
        infinite
      >
        {carouselData.map((car, index) => {
          return (
            <>
              <div className="center">
                <img className="car-img" src={car.image} />
              </div>
              <div
                className="ScrollDownButton"
                id="scrollDownButton-homepageCarousel"
                onClick={handleDownScroll}
              >
                <Icon name="angle down" color="white" size="huge" />
              </div>
              {index === 0 ? (
                <div
                  className="JTTButton"
                  id="joinTeam-carousel"
                  onClick={() =>
                    window.open(
                      "https://forms.office.com/pages/responsepage.aspx?id=sdof1BV-_Uy1-nIA5U3ra0GpeYLBv-hInq2BNuBF7HhUMFhEVlRKUlMzMFFZTFJZQzhWWVgzUDI0QyQlQCN0PWcu",
                      "_blank"
                    )
                  }
                >
                  <Button>
                    <p>Join The Team</p>
                  </Button>
                </div>
              ) : null}
            </>
          );
        })}
      </AliceCarousel>
    </>
  );
}

export default ImageCarousel;
