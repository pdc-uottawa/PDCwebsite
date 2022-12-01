import Axios from "axios";
import React, { useEffect, useState, useContext, Component } from "react";
import { Icon, Card } from "semantic-ui-react";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";
import "../../OurTeam/OurTeam.css";
import { UserContext } from "../../../common/context/UserProvider";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import "./../admin.css"

const ManageOtherInfo = (props) => {
  const path = config();
  const [joinTeamLink, setJoinTeamLink] = useState([]);
  const [feedbackLink, setFeedbackLink] = useState([]);
  const [cdcLinks, setCDCLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
  const adminList = [];
  const { user } = userInfo;

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
  console.log(joinTeamLink)

  useEffect(() => {
    Axios.get(path + "form/feedbackLink", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setFeedbackLink(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setFeedbackLink, path]);

  useEffect(() => {
    Axios.get(path + "cdc/links/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setCDCLinks(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setCDCLinks, path]);

  useEffect(() => {
    Axios.get(path + "user/adminuserlist")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAdminUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [null]);

  adminUsers.map((admin) => {
    adminList.push({
      key: admin._id,
      value: admin,
      text: admin.name,
    });
  });

  return (
    <>
      <Helmet>
        <title>Manage Other Info | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {loading ? (
              <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
              </div>
            ) : (
              <>
                <h3 className="admin-h3">
                  Update Other Info
                </h3>
                <div className="row center flex" >
                  <div className="col-md-4 select">
                    <Card className="flexi">
                      <Card.Content>
                        <Card.Header>Join Our Team </Card.Header>
                        <Card.Meta>{joinTeamLink.map((link) => (link.link))}</Card.Meta>
                        <Card.Description className="right aligned description">
                          <Link to={`/update-link/joinOurTeamLink/${joinTeamLink.map((link) => (link._id))}`}>
                            <Icon name="edit" color="blue" />
                            Update
                          </Link>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  <div className="col-md-4 select">
                    <Card className="flexi">
                      <Card.Content>
                        <Card.Header>Feedback Form </Card.Header>
                        <Card.Meta>{feedbackLink.map((link) => (link.link))}</Card.Meta>
                        <Card.Description className="right aligned description">
                          <Link to={`/update-link/feedbackLink/${feedbackLink.map((link) => (link._id))}`}>
                            <Icon name="edit" color="blue" />
                            Update
                          </Link>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  <div className="col-md-4 select">
                    <Card className="flexi">
                      <Card.Content>
                        <Card.Header>Mock Interview Link</Card.Header>
                        <Card.Meta>{cdcLinks.filter((links) => {
                          const mockInterviewLink = links.name === "book_appointment" && links.active === true
                          return (mockInterviewLink)
                        }).map((link) => (link.link))}</Card.Meta>
                        <Card.Description className="right aligned description">
                          <Link to={`/update-link/mockInterviewLink/${cdcLinks.filter((links) => {
                            const mockInterviewLink = links.name === "book_appointment" && links.active === true
                            return (mockInterviewLink)
                          }).map((link) => (link._id))}`}>
                            <Icon name="edit" color="blue" />
                            Update
                          </Link>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  <div className="col-md-4 select">
                    <Card className="flexi">
                      <Card.Content>
                        <Card.Header>Resume/LinkedIn review</Card.Header>
                        <Card.Meta>{cdcLinks.filter((links) => {
                          const resumeLinkedInLink = links.name === "submit_resume_linkedin" && links.active === true
                          return (resumeLinkedInLink)
                        }).map((link) => (link.link))}</Card.Meta>
                        <Card.Description className="right aligned description">
                          <Link to={`/update-link/ResumeLinkedInReviewLink/${cdcLinks.filter((links) => {
                            const resumeLinkedInLink = links.name === "submit_resume_linkedin" && links.active === true
                            return (resumeLinkedInLink)
                          }).map((link) => (link._id))}`}>
                            <Icon name="edit" color="blue" />
                            Update
                          </Link>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                </div>
              </>
            )
            }
          </div>
        </div>
      ) : (
        <>
          <center className="page-not-found">
            <h1>Oops, Page Not Found!</h1>
            <h3>Please login as an admin to view this page!</h3>
          </center>
        </>
      )}
    </>
  );
};

export default ManageOtherInfo;
