import React, { useEffect, useState } from "react";
import {
  Segment,
  SegmentGroup,
  Grid,
  Container,
  GridColumn,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { config } from "../../common/config/config";
import Axios from "axios";
import "./Home.css";

function AboutUs() {
  const path = config();
  const [aboutUsData, setAboutUsData] = useState([]);

  useEffect(() => {
    Axios.get(path + "home/about", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAboutUsData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setAboutUsData, path]);

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
                <p className="ab-desc">{abdata.description}</p>
              </Grid.Column>
            </Grid>
          ))}
        </div>
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
      </div>
    </>
  );
}

export default AboutUs;
