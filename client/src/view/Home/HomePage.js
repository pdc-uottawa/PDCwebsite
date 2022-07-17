import React, { useState, useEffect } from "react";
import { config } from "../../common/config/config";
import AboutUs from "./AboutUs";
import ImageCarousel from "./Carousel";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";

import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";
import Axios from "axios";
import ScrollToTop from "../../common/utils/ScrollToTop";

function HomePage() {
  const path = config();
  const [loading, setLoading] = useState(true);
  const [carouselData, setCarouselData] = useState([]);
  const [aboutUsData, setAboutUsData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    Axios.all([
      Axios.get(path + "home/carousel", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setCarouselData(data);
        })
        .catch((e) => {
          console.log(e);
        }),
      Axios.get(path + "home/about", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setAboutUsData(data);
        })
        .catch((e) => {
          console.log(e);
        }),
      Axios.get(path + "home/testimonials", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setLoading(false);
          setTestimonialData(data);
        })
        .catch((e) => {
          console.log(e);
        }),
    ]);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <>
          {/* <ScrollToTop /> */}
          <ImageCarousel carouselData={carouselData} />
          <AboutUs aboutUsData={aboutUsData} />
          <Testimonials testimonialData={testimonialData} />
          <ContactUs />
          
        </>
      )}
    </>
  );
}

export default HomePage;
