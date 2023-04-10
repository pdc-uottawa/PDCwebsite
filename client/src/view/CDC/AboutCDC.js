import React, { Fragment, useState, useEffect, useContext } from "react";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import "react-activity/dist/Spinner.css";
import "./style.css";
import { Container, Button, Image, Grid } from "semantic-ui-react";
import Axios from "axios";
import {
  FcBusinessman,
  FcDataRecovery,
  FcDiploma1,
  FcDocument,
  FcList,
  FcMultipleDevices,
  FcSearch,
  FcSurvey,
  FcVoicePresentation
} from "react-icons/fc";


const AboutCDC = (props) => {
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const buttonLinks = props.buttonLinks;
  return (
    <>
      <Container fluid>
        <Grid className="leftMarginCDC">
          <div className="row">
            <div classname="col-md-9">
              <Grid.Column>
                <p className="titleHead row ">Career Resources</p>
                <p className="subheading row">Career Development Centre</p>

                <div className="marginTop">
                  <p className="Desc">The Career Development Centre is a newly established group under the Professional Development <br></br>Club of the University of Ottawa, that aims to mentor, guide and help students build their career. <br></br>Our motto is to inspire students to embrace their potential and strive for career excellence. <br /><br /> We believe that:</p>
                  <div className="row textCenter">
                    <div className="col-md borderItemAbout">
                      <div>
                        <h1 className="headAbout">ABILITY</h1>
                      </div>
                      <br></br>
                      <div>
                        <h5 className="subheadAbout">is What You Are Capable Of Doing</h5>
                      </div>
                    </div>
                    <div className="col-md borderItemAbout">
                      <div>
                        <h1 className="headAbout">MOTIVATION</h1>
                      </div>
                      <br></br>
                      <div>
                        <h5 className="subheadAbout">determines What You Do</h5>
                      </div>
                    </div>
                    <div className="col-md borderItemAbout">
                      <div>
                        <h1 className="headAbout">ATTITUDE</h1>
                      </div>
                      <br></br>
                      <div>
                        <h5 className="subheadAbout">determines How Well You Do It</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
            </div>
            <div className="col-md-3 newButtonRight">
              <Grid.Column>
                {buttonLinks &&
                  buttonLinks.map((link) => {
                    return link.name === "book_appointment" &&
                      link.active === true ? (
                      <div >
                        <p>
                          <Image
                            className="newIconsRight"
                            src={"/assets/newinterview.png"}
                            href={link.link}
                          />
                          <a
                            id="bookInterviewAppointment-CDC"
                            class="item resources"
                            href={link.link}
                          >
                            <p className="textMargin">Book a Mock Interview</p>
                          </a>
                        </p>
                      </div>
                    ) : link.name === "submit_resume_linkedin" &&
                      link.active === true ? (
                      <>
                        <div >
                          <p>
                            <Image
                              className="newIconsRight"
                              src={"/assets/newresume.png"}
                              href={link.link}
                            />
                            <a
                              id="submitResumeLinkedinReview-CDC"
                              class="item"
                              href={link.link}
                            >
                              <p className="textMargin"> Request a Resume<br></br>/LinkedIn Profile Review</p>
                            </a>
                          </p>
                        </div>

                      </>
                    ) : null;
                  })}
              </Grid.Column>
            </div>
          </div>
        </Grid>
      </Container>

    </>
  );
};

export default AboutCDC;
