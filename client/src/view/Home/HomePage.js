import React, { } from "react";
import { config } from "../../common/config/config";
import AboutUs from "./AboutUs";
import ImageCarousel from "./Carousel";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";

function HomePage() {
    const path = config();

    return (
        <>
            <ImageCarousel />
            <AboutUs />
            <Testimonials />
            <ContactUs />
        </>
    )
};

export default HomePage;