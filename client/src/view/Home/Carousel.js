import React, { useEffect, useState } from "react";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";

function ImageCarousel() {
  const path = config();
  const [CarouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(path + "home/carousel", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setLoading(false);
        setCarouselData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setCarouselData, path]);

  return (
    <>
    {
        loading ?
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
        :
      <Carousel disableDotsControls autoPlay autoPlayInterval={"500000"} infinite>
        {CarouselData.map((car) => (
          <>
            <img className="car-img" src={car.image} />
          </>
        ))}
      </Carousel>
    }
    </>
  );
}

export default ImageCarousel;
