import React from "react";
import { Image, Button } from "semantic-ui-react";
import "./Home.css";
const img = require("../../assets/pdc-logo.png");

function Hero() {

  return (
    <>
      <div className="container-fluid">
        <div className="row HeroBg">
          <div className="col-md-5 paddingTop12">
            <div className="logoImg">
              <Image src={img} />
            </div>
          </div>
          <div className="col-md-7 borderLeft1 paddingTop12">
            <p className="HeroTextSmall">Welcome to the</p>
            <p className="HeroTextBig">
              University of Ottawa's <br />
              Professional Development Club
            </p>
          </div>
          <div className="row">
            <div className="col-md-12 IntroText">
              <p className="HeroTextSmall">
                - A Graduate Student Club Of the Students, By the Students, and
                For the Students.
              </p>
            </div>
          </div>
          <div
            className="JTTButton"
            id="joinTeam-carousel"
            onClick={() =>
              window.open(
                "https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra5WauXDgBfFLkMzBuH0SCR9UOElJOExDSjRON1c2RElYVTY3STY0V0NNVC4u",
                "_blank"
              )
            }
          >
            <Button>
              <p>Join The Team</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
