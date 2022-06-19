import React, { Fragment } from "react";
import { Segment, Grid, Image, Button } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

const Student = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>Student | Professional Development Club</title>
      </Helmet>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <h1>For Students</h1>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/students-uottawa.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <div class="ui inverted segment">
        <div class="ui inverted relaxed divided list">
          <a
            class="item"
            target="_blank"
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra5WauXDgBfFLkMzBuH0SCR9UOElJOExDSjRON1c2RElYVTY3STY0V0NNVC4u"
          >
            Join as Volunteer
          </a>
          {/* <a class="item" href="#/program-coordinators">
          PDC Student Representative for Your Program
          </a> */}
          <a class="item" href="#/create-form">
            Create or Activate Association
          </a>
          <a class="item" href="#/student-form">
            uOttawa Student Associations
          </a>
          {/* <a class="item" href="#/programs">
          Program specific information
          </a> */}
          <a class="item" href="#/fswep/">
            Programs Recognized by FSWEP
          </a>
          <a class="item" href="#/useful-links">
            Useful University Resources for Newly Admitted Students
          </a>
          <div class="item">
            <details>
              <summary class="mysummaryItem">
                Industry Internship Project
              </summary>
              <br />
              <p>
                Please find more information about ELG/GNG - 5902
                <a
                  href="https://catalogue.uottawa.ca/en/courses/gng/"
                  target="_blank"
                >
                  <font color="#4183c4"> here</font>
                </a>
              </p>
            </details>
          </div>
          <a class="item" href="#/resume-guidelines">
            Resume Writing Guidelines
          </a>
          <a
            class="item"
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra21LUdPDoDZJjwyjqRZEOIZUM1Y3U1cwMlBRUTVKVkpPRFVRTDBTQ1ZTNi4u"
          >
            Ask for Resume review session with us
          </a>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};
export default Student;
