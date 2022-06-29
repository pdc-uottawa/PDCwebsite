import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./Home.css";

function AboutUs(props) {
  const aboutUsData = props.aboutUsData;

  return (
    <>
      <div className="frag2">
        <h1 className="header">ABOUT US</h1>
        <div>
          {aboutUsData.map((abdata) => (
            <Grid className="grid-col-1" columns={2}>
              <Grid.Column>
                <img className="ab-img" src={abdata.image} />
              </Grid.Column>
              <Grid.Column>
                <p className="ab-desc">{parse(abdata.description)}</p>
              </Grid.Column>
            </Grid>
          ))}
        </div>
        <div className="home-buttons">
          <Link to="/OurTeam">
            <Button
              id="meetOurTeam-homepage"
              size="large"
              color="#ccc"
              className="but-m-o-t"
            >
              Meet Our Team
            </Button>
          </Link>
          <Button
            size="large"
            color="#ccc"
            className="but-b-o-v"
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
    </>
  );
}

export default AboutUs;
