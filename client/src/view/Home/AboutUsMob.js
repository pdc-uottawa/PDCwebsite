import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./Home.css";

function AboutUsMob(props) {
  const aboutUsData = props.aboutUsData;

  return (
    <>
      <div className="aboutUsMobBg">
        <h1 className="headingMob">ABOUT US</h1>
        <div className="horizontalLineBlack" />
        <div>
          {aboutUsData.map((abdata) => (
            <>
              <div>
                <p className="descMob">{parse(abdata.description)}</p>
              </div>
            </>
          ))}
        </div>
        <div className="row center paddingBottom10">
          <div className="col-6">
            <Link to="/OurTeam">
              <Button
                id="meetOurTeam-homepage"
                size="small"
                color="black"
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
          <div className="col-6">
            <Button
              size="small"
              color="black"
              id="becomeAVolunteer-homepage"
              onClick={() =>
                window.open(
                  "https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra5WauXDgBfFLkMzBuH0SCR9UOElJOExDSjRON1c2RElYVTY3STY0V0NNVC4u",
                  "_blank"
                )
              }
            >
              Become A Volunteer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsMob;
