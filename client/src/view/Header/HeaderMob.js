import React, { useState, useEffect, useContext } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import Axios from "axios";
import "./Header.css";

function HeaderMob() {
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formLink, setFormLink] = useState("");
  const [alternateLang, setAlternateLang] = useState("FR");
  const { userInfo, setUserInfo } = useContext(UserContext);

  let path = config();

  useEffect(() => {
    Axios.get(path + "auth/login/success", {
      withCredentials: true,
    })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setUserInfo({
          ...userInfo,
          user: data.user,
          authenticated: data.authenticated,
        });

        if (data.user.checkUser) {
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });

      Axios.get(path + "form/link", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setFormLink(data[0].link);
        })
        .catch((e) => {
          console.log(e);
        });
  }, []);

  function handleOpen() {
    setDrawerOpen(!drawerOpen);
  }

  function handleLang() {
    alternateLang === "EN" ? setAlternateLang("FR") : setAlternateLang("EN");
  }

  function handleLogin() {
    history.push("/signin");
    handleOpen();
  }

  const handleLogout = () => {
    window.open(path + "auth/logout", "_self");
  };

  const handleHome = () => {
    history.push("/");
    handleOpen();
  };

  const handleOurTeam = () => {
    history.push("/OurTeam");
    handleOpen();
  };

  const handleEvents = () => {
    history.push("/events");
    handleOpen();
  };

  const handleCDC = () => {
    history.push("/cdc");
    handleOpen();
  };

  const handleStudent = () => {
    history.push("/for-students");
    handleOpen();
  };

  const handlehirestudent = () => {
    history.push("/hirestudent");
    handleOpen();
  };

  const handleAlumni = () => {
    history.push("/alumni");
    handleOpen();
  };

  const handleCovid19 = () => {
    history.push("/covid");
    handleOpen();
  };

  const handleProjectList = () => {
    history.push("/project-list");
    handleOpen();
  };
  const handleVolunteers = () => {
    history.push("/our-volunteers");
    handleOpen();
  };

  const handleFeedback = () => {
    history.push("/feedback");
    handleOpen();
  };

  return (
    <>
      {!drawerOpen ? (
        <div className="menuBarBg">
          <Icon
            onClick={handleOpen}
            className="menuIconMob"
            name="bars"
            color="white"
            size="big"
            inverted
          />
        </div>
      ) : (
        <div className="drawerMenuBg">
          <div>
            <Icon
              onClick={handleOpen}
              className="menuIconMob"
              name="close"
              color="grey"
              size="big"
              inverted
            />
          </div>
          <div className="drawerMenu">
            <div className="drawerMenuItem homeLangBut">
              <Icon
                onClick={handleHome}
                name="home"
                color="grey"
                size="large"
                inverted
              />
              {/* {
                userInfo.authenticated ? (
                  <div onClick={handleLogout} className="loginButton">
                    Logout
                  </div>
                ) : (
                  <div onClick={handleLogin} className="loginButton">
                    Login
                  </div>
                )
              } */}
              {/* <div onClick={handleLang} className="langButton">
                {alternateLang}
              </div> */}
            </div>
            <div className="drawerMenuItem">
              <Icon name="users" color="grey" inverted />
              <p className="menuItemName">The Team</p>
            </div>
            <div className="row drawerMenuItem drawerMenuNestedItem">
              <Icon name="chevron right" color="grey" inverted />
              <p
                onClick={handleOurTeam}
                name="OurTeam"
                className="menuItemName"
              >
                Our Team
              </p>
            </div>
            <div className="row drawerMenuItem drawerMenuNestedItem">
              <Icon name="chevron right" color="grey" inverted />
              <p onClick={handleAlumni} className="menuItemName">
                Our Alumni
              </p>
            </div>
            <div className="row drawerMenuItem drawerMenuNestedItem">
              <Icon name="chevron right" color="grey" inverted />
              <p onClick={handleVolunteers} className="menuItemName">
                Our Volunteers
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="student" color="grey" inverted />
              <p onClick={handleStudent} className="menuItemName">
                For Students
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="chart line" color="grey" inverted />
              <p onClick={handleCDC} className="menuItemName">
                Career Development Centre
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="calendar alternate outline" color="grey" inverted />
              <p onClick={handleEvents} className="menuItemName">
                Events
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="code" color="grey" inverted />
              <p onClick={handleProjectList} className="menuItemName">
                Projects
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="chat" color="grey" inverted />
              <p onClick={handleFeedback} className="menuItemName">
                Feedback
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="add user" color="grey" inverted />
              <p
                onClick={() =>
                  window.open(
                    formLink,
                    "_blank"
                  )
                }
                className="menuItemName"
              >
                Join the Team
              </p>
              <br />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderMob;