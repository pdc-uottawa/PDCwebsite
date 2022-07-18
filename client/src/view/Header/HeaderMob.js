import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import useReactRouter from "use-react-router";
import { useHistory } from "react-router-dom";

function HeaderMob() {
  // const { history } = useReactRouter();
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [alternateLang, setAlternateLang] = useState("FR");
  const [activeItem, setActiveItem] = useState("");

  function handleOpen() {
    setDrawerOpen(!drawerOpen);
  }

  function handleLang() {
    alternateLang === "EN" ? setAlternateLang("FR") : setAlternateLang("EN");
  }

  const handleOurTeam = () => {
    history.push("/OurTeam");
  };
  const handleEvents = () => {
    // history.push("/events");
  };
  const handleCDC = () => {
    // history.push("/cdc");
  };

  const handleStudent = () => {
    // history.push("/for-students");
  };

  const handlehirestudent = () => {
    // history.push("/hirestudent");
  };

  const handleAlumni = () => {
    // history.push("/alumni");
  };

  const handleCovid19 = () => {
    // history.push("/covid");
  };

  const handleProjectList = () => {
    // history.push("/project-list");
  };
  const handleVolunteers = () => {
    // history.push("/our-volunteers");
  };

  const handleFeedback = () => {
    // history.push("/feedback");
  };

  return (
    <>
      {!drawerOpen ? (
        <div onClick={handleOpen}>
          <Icon name="bars" color="grey" size="big" inverted />
        </div>
      ) : (
        <div>
          <div onClick={handleOpen}>
            <Icon name="close" color="grey" size="big" inverted />
          </div>
          <div className="drawerMenu">
            <div className="drawerMenuItem">
              <Icon name="users" color="grey" size="small" inverted />
              <p className="menuItemName">The Team</p>
            </div>
            <div className="row drawerMenuItem drawerMenuNestedItem">
              <Icon name="chevron right" color="grey" size="small" inverted />
              <p onClick={handleOurTeam} name="OurTeam" className="menuItemName">
                Our Team
              </p>
            </div>
            <div className="row drawerMenuItem drawerMenuNestedItem">
              <Icon name="chevron right" color="grey" size="small" inverted />
              <p onClick={handleAlumni} className="menuItemName">
                Our Alumni
              </p>
            </div>
            <div className="row drawerMenuItem drawerMenuNestedItem">
              <Icon name="chevron right" color="grey" size="small" inverted />
              <p onClick={handleVolunteers} className="menuItemName">
                Our Volunteers
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="student" color="grey" size="small" inverted />
              <p onClick={handleStudent} className="menuItemName">
                For Students
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="chart line" color="grey" size="small" inverted />
              <p onClick={handleCDC} className="menuItemName">
                Career Development Centre
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon
                name="calendar alternate outline"
                color="grey"
                size="small"
                inverted
              />
              <p onClick={handleEvents} className="menuItemName">
                Events
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="code" color="grey" size="small" inverted />
              <p onClick={handleProjectList} className="menuItemName">
                Projects
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="chat" color="grey" size="small" inverted />
              <p onClick={handleFeedback} className="menuItemName">
                Feedback
              </p>
            </div>
            <div className="drawerMenuItem">
              <Icon name="add user" color="grey" size="small" inverted />
              <p
                onClick={() =>
                  window.open(
                    "https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra5WauXDgBfFLkMzBuH0SCR9UOElJOExDSjRON1c2RElYVTY3STY0V0NNVC4u",
                    "_blank"
                  )
                }
                className="menuItemName"
              >
                Join the Team
              </p>
            </div>
            <br />
            <br />
            <div className="horizontalLineMenu" />
            <br />
            <div className="drawerMenuItem">
              <div onClick={handleLang} className="langButton">
                {alternateLang}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderMob;
