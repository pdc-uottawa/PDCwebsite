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
        <h1 className="headerAcademic">Academic Resources</h1>
        <div className="container row leftspace">
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/friends.png"}
                      href="/#/student-association"
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                      href="/#/student-association"
                    >
                      <p className="iconTextInfo">Student Association</p>
                    </a>
                  </p>
                </div>
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/certificate.png"}
                      href="/#/fswep/"
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                      href="/#/fswep/"
                    >
                      <p className="iconTextInfo">Programs Recognized by FSWEP</p>
                    </a>
                  </p>
                </div>
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/resources.png"}
                      href="/#/useful-resources"
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                      href="/#/useful-resources"
                    >
                      <p className="iconTextInfo">Resources for new Students</p>
                    </a>
                  </p>
                </div>
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/internship.png"}
                      href="/#/industry-internship-info"
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                      href="/#/industry-internship-info"
                    >
                      <p className="iconTextInfo">Industry Internship Project </p>
                    </a>
                  </p>
                </div>
                <div className="col-md-4 centerItems padding5">
                  <p>
                    <Image
                      className="newIconsAcademic"
                      src={"/assets/question-mark.png"}
                      href="/#/FAQs"
                    />
                    <a
                      id="bookInterviewAppointment-CDC"
                      class="item resources"
                      href="/#/FAQs"
                    >
                      <p className="iconTextInfo">Frequently Asked Questions (FAQs)</p>
                    </a>
                  </p>
                </div>
            
          
            
        </div>
      </div>
    </>
  );
};

export default AcademicResourcespage;
