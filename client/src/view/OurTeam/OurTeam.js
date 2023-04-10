import React, { Fragment, useState, useEffect, useContext } from "react";
import { Image, Grid, Segment, Button, Icon } from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import { Spinner } from "react-activity";
import DOMpurify from "dompurify";
import "./OurTeam.css";
import { TeamMembers } from "./TeamMembers";
import { OurAdvisors } from "./OurAdvisors";
import { Helmet } from "react-helmet";
import OurVolunteerTeam from "./OurVolunteerTeam";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
const img = require("../../assets/default.png");

//secured by Makwana Harsh
const OurTeam = (props) => {
  const path = config();

  const { userInfo, setUserInfo } = useContext(UserContext);
  const resumeTips = props.resumeTips;
  const linkedInTips = props.linkedInTips;
  const interviewTips = props.interviewTips;
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
        <>
          <p className="titleHead row padding2">The Team</p>
          <p className="subheading row padding2">Faculty Advisors</p>

          <div className="row padding2">
            {OurAdvisors.map((ourAdvisor, index) => {
              return (
                <div className="col-md-3 cardss">
                  <div className="body">
                    <Image
                      circular
                      id={index}
                      centered
                      src={ourAdvisor.imagePath}
                      className="photo"
                    />
                    <h2 className="titleFont">
                      {DOMpurify.sanitize(ourAdvisor.name)}
                    </h2>
                    <h4 className="subTitle">
                      {DOMpurify.sanitize(ourAdvisor.position)}
                    </h4>
                    <a
                      href={DOMpurify.sanitize(ourAdvisor.linkedIn)}
                      target="_blank"
                    >
                      <Image
                        src={"/assets/linkedinsquare.png"}
                        id="socialMediaIcon"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className="nfont">Board Members</p>
       
          <div className="marginTop">
            <div className="row padding2">
              {users.map((user) => {
                return (
                  <div
                    key={DOMpurify.sanitize(user._id)}
                    className="col-md-3 cardss"
                  >
                    <div className="body">
                      <Image
                        circular
                        src={user.image ? user.image : img}
                        alt={DOMpurify.sanitize(user.name)}
                        className="photo"
                      />
                      <h2 className="titleFont">
                        {DOMpurify.sanitize(user.name)}
                      </h2>
                      <h4 className="subTitle">
                        {DOMpurify.sanitize(user.position)}
                      </h4>

                      <a
                        href={DOMpurify.sanitize(user.linkedIn)}
                        target="_blank"
                      >
                        <Image
                          src={"/assets/linkedinsquare.png"}
                          id="socialMediaIcon"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <OurVolunteerTeam />
        </>
      )}
    </>
  );
};

export default OurTeam;
