import React, { Fragment, useState, useEffect } from "react";
import { Image, Grid, Segment, Button } from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import { Spinner } from "react-activity";
import DOMpurify from "dompurify";
import "./OurTeam.css";
import { TeamMembers } from "./TeamMembers";
import { OurAdvisors } from "./OurAdvisors";
import { Helmet } from "react-helmet";
const img = require("../../assets/default.png");

//secured by Makwana Harsh
const OurTeam = (props) => {
  const path = config();
  //const { userInfo, setUserInfo } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // when click create new project, jump to create-project page
  // const handleCreateNewProject = () => {
  //   props.history.push("/create-project");
  // };

  useEffect(() => {
    Axios.get(path + "ourTeam/all", {})

      .then((res) => {
        return res.data;
      })

      .then((data) => {
        setUsers(data);
        setLoading(false);
      })

      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Team | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <div>
          <h1 className="center ourTeamHead">OUR FACULTY ADVISORS</h1>
          <div className="row cardsCenter">
            {OurAdvisors.map((ourAdvisor, index) => {
              return (
                <div className="cursor col-md-3">
                  <div className="body">
                    <Image
                      circular
                      id={index}
                      centered
                      src={ourAdvisor.imagePath}
                      className="photo"
                    />
                    <h2 className="titleName">{DOMpurify.sanitize(ourAdvisor.name)}</h2>
                    <h4 className="titlePosition">{DOMpurify.sanitize(ourAdvisor.position)}</h4>
                    <div className="btn">
                      <a href={ourAdvisor.linkedinId} target="_blank">
                        <Image
                          src={"/assets/linkedin.png"}
                          id="socialMediaIcon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="marginTop">
            <h1 className="center ourTeamHead">OUR TEAM</h1>
            <div className="row cardsCenter">
              {users.map((user) => {
                return (
                  <div key={DOMpurify.sanitize(user._id)} className="cursor col-md-3">
                    <div className="body">
                      <Image
                        circular
                        src={user.image ? user.image : img}
                        alt={DOMpurify.sanitize(user.name)}
                        className="photo"
                      />
                      <h2 className="titleName">{DOMpurify.sanitize(user.name)}</h2>
                      <h4 className="titlePosition">{DOMpurify.sanitize(user.position)}</h4>
                      <div className="btn">
                        <a href={DOMpurify.sanitize(user.linkedIn)} target="_blank">
                          <Image
                            src={"/assets/linkedin.png"}
                            id="socialMediaIcon"
                          />
                        </a>
                        <a href={"mailto:" + DOMpurify.sanitize(user.email)} target="_blank">
                          <Image
                            src={"/assets/outlook.png"}
                            id="socialMediaIcon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="marginTop">
            <h1 className="center">PDC STUDENT REPRESENTATIVES</h1>
            <p className="justify">
              Student Reps primarily represent matters relating to the academic
              experience of their cohort and relating to the impact of the more
              comprehensive student experience on academic issues and make sure
              that the voice and feedback of the University and the Students
              Union are taken and utilized, thus creating a real difference at
              the course level, but also have many wins across their departments
              and beyond!
            </p>
            <div className="centerButtons" id="buttons-container">
              <Button
                id="meetPDCRepresentative-ourTeam"
                primary
                color="blue"
                onClick={() =>
                  (window.location.href = "#/program-coordinators")
                }
              >
                Meet Your PDC Student Representative
              </Button>
            </div>
          </div>
          <hr />
          <div className="marginTop">
            <h1 className="center">PDC VOLUNTEERS</h1>
            <p className="justify">
              Whether you want to learn a new skill, meet new people, experience
              something meaningful, or help where help is needed, volunteer
              opportunities at PDC,uOttawa is as diverse as people who fill
              them. Donating your time, energy, and possibly resources can be
              just as rewarding for you as for those you are helping. Get to
              connect with the student community, make it a better place, expand
              your network, and boost your social skills. <br />
              <b>There's no better time than now to join the team!</b>
            </p>
            <div className="centerButtons" id="buttons-container">
              <Button
                primary
                color="blue"
                onClick={() => (window.location.href = "#/our-volunteers")}
                id="meetVolunteersButton"
              >
                Meet Our Volunteers
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurTeam;
