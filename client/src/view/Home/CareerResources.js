import React, { Fragment, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import "react-activity/dist/Spinner.css";
import "./CareerResources.css";
import { Button, Image, Container } from "semantic-ui-react";

import {
  FcBusinessman,
  FcDataRecovery,
  FcDiploma1,
  FcDocument,
  FcList,
  FcMultipleDevices,
  FcSearch,
  FcSurvey,
  FcVoicePresentation,
} from "react-icons/fc";

const CareerResources = (props) => {
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const buttonLinks = props.buttonLinks;

  return (
    <>
      
        <div className="marginTop10">
        <h1 className="subHeadings">Career Resources</h1>
        <div className="row marginTopButton">
          {buttonLinks &&
            buttonLinks.map((link) => {
              return link.name === "book_appointment" &&
                link.active === true ? (
                <div className="col-md-4 padding5">
                  <p>
                    <Image
                      className="newIcons"
                      src={"/assets/newinterview.png"}
                      href={link.link}
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                      href={link.link}
                    >
                      <p className="textMargin"><br></br>
                        Book a Mock Interview
                        </p>
                    </a>
                  </p>
                </div>
              ) : link.name === "submit_resume_linkedin" &&
                link.active === true ? (
                <>
                  <div className="col-md-4 padding5">
                    <p>
                      <Image
                        className="newIcons smallWidth"
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
                  <div className="col-md-4 padding5">
                    <p className="resources">
                      <Image
                        className="newIcons"
                        src={"/assets/newmoresearch.png"}
                        href={link.link}
                      />
                      <a
                        id="More Resources-CDC"
                        class="item"
                        href={link.link}
                      >
                       <p className="textMargin"><br></br>More Resources</p> 
                      </a>
                    </p>
                  </div>
                </>
              ) : null;
            })}
        </div>
      </div>
      
    </>
  );
};

export default CareerResources;
