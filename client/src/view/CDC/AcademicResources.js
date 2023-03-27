import React, { Fragment, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import "react-activity/dist/Spinner.css";
import "./style.css";
import { Button, Image } from "semantic-ui-react";


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

const AcademicResourcespage = (props) => {
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const buttonLinks = props.buttonLinks;

  return (
    <>
      <div >
        <h1 className="headerAcademic marginTop3">Academic Resources</h1>
        <div className="container row leftspace">
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/friends.png"}
                     
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                    >
                      <text className="iconTextInfo">Student Association</text>
                    </a>
                  </p>
                </div>
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/certificate.png"}
                     
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                    >
                      <text className="iconTextInfo">Programs Recognized by FSWEP</text>
                    </a>
                  </p>
                </div>
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/resources.png"}
                     
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                    >
                      <text className="iconTextInfo">Resources for new Students</text>
                    </a>
                  </p>
                </div>
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/internship.png"}
                     
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                    >
                      <text className="iconTextInfo">Industry Internship Project </text>
                    </a>
                  </p>
                </div>
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/question-mark.png"}
                     
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                    >
                      <text className="iconTextInfo">Frequently Asked Questions (FAQs)</text>
                    </a>
                  </p>
                </div>
            
          
            
        </div>
      </div>
    </>
  );
};

export default AcademicResourcespage;
