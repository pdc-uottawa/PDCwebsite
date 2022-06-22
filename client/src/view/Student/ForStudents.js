import React from "react";
import Card from 'react-bootstrap/Card'
import './student.css'
import { FcBusinessman, FcDataRecovery, FcDiploma1, FcDocument, FcList, FcMultipleDevices,FcSearch, FcSurvey } from "react-icons/fc"
import { Helmet } from "react-helmet";

function ForStudents(props) {
  return (
    <>
      <Helmet>
        <title>For Students | Professional Development Club</title>
      </Helmet>
      <div className=" jumbotron container-fluid student-header" >
        <h1>FOR STUDENTS</h1>
      </div>
      <div className="container-fluid">
        <div className="row ct-rw" >
          <div className="col-sm-3">
            <Card>
              <Card.Header>
                <FcBusinessman size="100"/>
              </Card.Header>
              <Card.Body>
                <h3><a class="item" target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra5WauXDgBfFLkMzBuH0SCR9UOElJOExDSjRON1c2RElYVTY3STY0V0NNVC4u">
                  Join the club as a Volunteer
                </a></h3>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <Card.Header>
                <FcDataRecovery size="100"/>
              </Card.Header>
              <Card.Body>
                <h3><a class="item" href="#/create-form">
                  Create or Activate Association
                </a></h3>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <Card.Header>
                <FcList size="100"/>
              </Card.Header>
              <Card.Body>
                <h3><a class="item" href="#/student-form">
                  uOttawa Student Associations
                </a></h3>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <Card.Header>
                <FcDiploma1 size="100" />
              </Card.Header>
              <Card.Body>
                <h3><a class="item" href="#/fswep/">
                  Programs Recognized by FSWEP
                </a></h3>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <Card.Header>
                <FcSearch size="100"/>
              </Card.Header>
              <Card.Body>
                <h3><a class="item" href="#/useful-resources">
                  Useful Resources for New Students
                </a>
                </h3>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <Card.Header>
                <FcMultipleDevices size="100"/>
              </Card.Header>
              <Card.Body>
                <h3><a href="https://catalogue.uottawa.ca/en/courses/gng/" target="_blank">
                  Industry Internship Project
                </a>
                </h3>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <Card.Header>
                <FcSurvey size="100"/>
              </Card.Header>
              <Card.Body>
                <h3><a class="item" href="#/resume-guidelines">
                  Resume Writing Guidelines
                </a></h3>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <Card.Header>
                <FcDocument size="100"/>
              </Card.Header>
              <Card.Body>
                <h3>
                  <a class="item" href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra21LUdPDoDZJjwyjqRZEOIZUM1Y3U1cwMlBRUTVKVkpPRFVRTDBTQ1ZTNi4u">
                    Ask for Resume review session with us
                  </a>
                </h3>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForStudents;
