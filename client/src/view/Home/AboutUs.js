import React, {useState} from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./Home.css";
import {config} from "../../common/config/config";
import Axios from "axios";

function AboutUs(props) {
  const aboutUsData = props.aboutUsData;

  const [formLink, setFormLink] = useState("");
  let path = config();

  Axios.get(path + "form/link", {})
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setFormLink(data[0].link);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <>
      <div className="frag2">
        <h1 className="header">ABOUT US</h1>
        <div className="row">
          {aboutUsData.map((abdata) => (
            <Grid className="grid-col-1" columns={2}>
              <div className="col-md-6">
                <Grid.Column>
                  <img className="ab-img" src={abdata.image} />
                </Grid.Column>
              </div>
              <div className="col-md-6">
                <Grid.Column>
                  <p className="ab-desc">{parse(abdata.description)}</p>
                </Grid.Column>
              </div>
            </Grid>
          ))}
        </div>
        <div className="home-buttons">
          <div className="row center">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6">
              <Button
                size="large"
                color="#ccc"
                className="but-b-o-v"
                id="becomeAVolunteer-homepage"
                onClick={() =>
                  window.open(
                    formLink,
                    "_blank"
                  )
                }
              >
                Become A Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
