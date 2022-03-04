import React, { useEffect, useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import "./Home.css"
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Testimonials() {
    const path = config();
    const [TestimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        Axios.get(path + "home/testimonials", {})
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setTestimonialData(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [setTestimonialData, path]);

    return (
        <>
            <h1 className="hd-2">Testimonials</h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}>
                {TestimonialData.map((data) =>
                    <Segment className="testi" secondary >
                        <img src={data.image} />
                        <div className="myCarousel">
                            <h3>{data.name}</h3>
                            <h4>{data.designation}</h4>
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </Segment>
                )}
            </Carousel>

            <div className="home-buttons">
                <Link to="/OurTeam">
                    <Button size="large" className="but-m-o-t">Meet Our Team</Button>
                </Link>
                <Button size="large" className="but-b-o-v"
                    onClick={() =>
                        window.open(
                            "https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra5WauXDgBfFLkMzBuH0SCR9UOElJOExDSjRON1c2RElYVTY3STY0V0NNVC4u",
                            "_blank"
                        )
                    }>
                    Become A Volunteer</Button>

            </div>
        </>
    )
};

export default Testimonials;