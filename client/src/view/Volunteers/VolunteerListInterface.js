import React, { Fragment, useState, useEffect, useContext } from "react";
import { Grid } from "semantic-ui-react";
import Volunteers from "./Volunteers";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import { Spinner } from "react-activity";

import "react-activity/dist/Spinner.css";
import "./projectList.css";

/**
 * @author @binjiasata
 * @description This page shows a project list and a create new project button.
 *              The project list is got from server.
 *
 */
const VolunteersListInterface = (props) => {
=======
import { Segment, Card, Icon } from "semantic-ui-react";

const VoulnteerListInterface = (props) => {

  // path config http://localhost:8080/
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);


  const [VolunteersInfo, setVolunteersInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  // when click create new project, jump to create-project page
  // const handleCreateNewProject = () => {
  //   props.history.push("/create-project");
  // };

  useEffect(() => {
    Axios.get(path + "volunteers/all", {})
      .then((res) => {
        console.log(res.data);

  const [VoulnteersInfo, setVolunteersInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(path + "volunteers/all", {})
      .then((res) => {

        return res.data;
      })
      .then((data) => {
        setVolunteersInfo(data);

        setLoading(false);


      })
      .catch((e) => {
        console.log(e);
      });
  }, [setVolunteersInfo, path]);

  return (
    <>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (

        <div className="container">
          <Volunteers VolunteersInfo={VolunteersInfo} />
        </div>

        <>
          <Segment
            centered
            inverted
            color="black"
            style={{ borderRadius: "10px" }}
          >
            <h1 class="ui center aligned huge header">
              PROGRAM &nbsp; CO-ORDINATORS
            </h1>
          </Segment>
          <Card.Group centered="true" textAlign="center">
            {VoulnteersInfo.map((programCoordinator) => (
              <Card color="black">
                <Card.Content>
                  <Card.Header>
                    <u>{programCoordinator.program}</u>
                  </Card.Header>
                  <Card.Description>
                    <h4>{programCoordinator.name}</h4>
                  </Card.Description>
                  <Card.Description>
                    <a href={"mailto:" + programCoordinator.mail}>
                      <Icon name="mail" />
                      {programCoordinator.mail}
                    </a>
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </>

      )}
    </>
  );
};


export default VolunteersListInterface;

export default VoulnteerListInterface;

