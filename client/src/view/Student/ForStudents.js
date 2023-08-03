import React, { useState, useEffect } from "react";
import { config } from "../../common/config/config";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import "./student.css";
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
  FcViewDetails,
  FcKindle
} from "react-icons/fc";
import { Helmet } from "react-helmet";
import { Spinner } from "react-activity";

function ForStudents(props) {
  const path = config();
  const [resumeLink, setResumeLink] = useState([]);
  const [joinTeamLink, setJoinTeamLink] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(path + "cdc/links/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setResumeLink(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setResumeLink, path]);

  useEffect(() => {
    Axios.get(path + "form/link", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setJoinTeamLink(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setJoinTeamLink, path]);

  const jointeam = joinTeamLink.map((jlink) => jlink.link);
  const reslink = resumeLink
    .filter(
      (links) =>
        links.name === "submit_resume_linkedin" && links.active === true
    )
    .map((remlink) => remlink.link);

  return (
    <>
      <Helmet>
        <title>For Students | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <>
          <div className="container-fluid">
            <h1 class="jumbotron student-header hdr">For students</h1>
          </div>
          <div className="container-fluid">
            <div className="row ct-rw">
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcBusinessman size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        class="item"
                        id="joinTeam-forStudents"
                        target="_blank"
                        href={jointeam}
                      >
                        Join the club as a Volunteer
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcDataRecovery size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        id="createActivateAssociation-forStudents"
                        class="item"
                        href="#/create-association"
                      >
                        Create or Activate Association
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcList size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        id="uOttawaStudentAssociations-forStudents"
                        class="item"
                        href="#/student-association"
                      >
                        uOttawa Student Associations
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcDiploma1 size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        id="FSWEPPrograms-forStudents"
                        class="item"
                        href="#/fswep/"
                      >
                        Programs Recognized by FSWEP
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcSearch size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        id="usefulResources-forStudents"
                        class="item"
                        href="#/useful-resources"
                      >
                        Useful Resources for New Students
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcMultipleDevices size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3><a class="item" href="#/industry-internship-info">
                      Industry Internship Project (GNG/ELG/DTI 5902)
                    </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcSurvey size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        id="resumeWritingGuidelines-forStudents"
                        class="item"
                        href="#/resume-guidelines"
                      >
                        Resume Writing Guidelines
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcDocument size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        id="resumeReviewSession-forStudents"
                        class="item"
                        href={reslink}
                      >
                        Ask for Resume review session with us
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcViewDetails size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        id="fac-dir"
                        class="item"
                        href="#/faculty-directories"
                      >
                       Here You Can Find The  Faculty Directories
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcKindle size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a
                        id="GNG"
                        class="item"
                        href="#/gng-queries"
                      >
                       5901 Guide: FAQ and Queries
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <Card>
                  <Card.Header>
                    <FcVoicePresentation size="100" />
                  </Card.Header>
                  <Card.Body>
                    <h3>
                      <a class="item" href="#/FAQs">
                        Frequently Asked Questions (FAQs)
                      </a>
                    </h3>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ForStudents;
