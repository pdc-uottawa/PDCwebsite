import React, { useEffect, useState } from "react";
import { Segment, SegmentGroup, Grid, Container, GridColumn } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import "./Home.css"

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
  }, [aboutUsData, setAboutUsData, path]);

  return (
    <div className="frag2">
      <h1 className="header">About Us</h1>
      <div>
        {aboutUsData.map((abdata) =>
          <Grid className="grid-col-1" columns={2}>
            <Grid.Column>
              <img className="ab-img" src={abdata.image} />
            </Grid.Column>
            <Grid.Column>
              <p className="ab-desc">{abdata.description}</p>
            </Grid.Column>
          </Grid>
        )}
      </div>
    </div>
  )
};

export default AboutUs;