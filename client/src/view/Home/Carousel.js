import React, { useEffect, useState } from "react";
import Carousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { config } from "../../common/config/config";
import Axios from "axios";

function ImageCarousel() {
  const path = config();
  const [CarouselData, setCarouselData] = useState([]);

  useEffect(() => {
    Axios.get(path + "home/carousel", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setCarouselData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setCarouselData, path]);

  return (
    <div className="car-1">
      <Carousel autoPlay autoPlayInterval={"3000"} infinite >
        {CarouselData.map((car) =>
          <img className="car-img" src={car.image} />)}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;