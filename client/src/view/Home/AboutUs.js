import React, { useState, useEffect } from "react";
import { Grid, Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./Home.css";
import CareerResources from "./CareerResources";
import Axios from "axios";
import { config } from "../../common/config/config";

function AboutUs(props) {
  const aboutUsData = props.aboutUsData;
  const path = config();
  const [buttonLinks, setButtonLinks] = useState([]);

  useEffect(() => {
    Axios.all([
      Axios.get(path + "cdc/links/all", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setButtonLinks(data);
        })
        .catch((e) => {
          console.log(e);
        }),
    ]);
  }, []);

  return (
    <> 
    <Container fluid>
      <div className="marginOverall">
      <div className="frag1">
        
        <div className="row">
        <h1 className="subHeadings">About Us</h1>
          {aboutUsData.map((abdata) => (
            <Grid>
              <div className="col-md-6">
                <Grid.Column>
                  <p className="ab-desc">{parse(abdata.description)}</p>
                </Grid.Column>
              </div>
              <div className="col-md-6">
                <Grid.Column className="grid-col-1">
                  <img className="ab-img" src={abdata.image} />
                </Grid.Column>
              </div>
            </Grid>
          ))}
        </div>
        <div>
          <br></br>
          <br></br>

          <CareerResources buttonLinks={buttonLinks} />
        </div>
      </div>
      </div>
      </Container>
    </>
  );
}

export default AboutUs;
