import React, { Fragment, useState, useEffect } from "react";
import { Segment, Card, Icon } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";

const ProgramCoordinators = (props) => {
  const path = config();
  const [ProgramCoordinatorsList, setProgramCoordinatorsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(path + "coordinators/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setProgramCoordinatorsList(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setProgramCoordinatorsList, path]);

  return (
    <>
      <Helmet>
        <title>Program Coordinators | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <>
          <Segment
            centered
            inverted
            color="black"
            style={{ borderRadius: "10px" }}
          >
            <h1 class="ui center aligned huge header">
              PDC PROGRAM COORDINATORS
            </h1>
          </Segment>
          <div className="marginTop">
            <p className="justify">
              Program coordinators primarily represent matters relating to the academic
              experience of their cohort and relating to the impact of the more
              comprehensive student experience on academic issues and make sure
              that the voice and feedback of the University and the Students
              Union are taken and utilized, thus creating a real difference at
              the course level, but also have many wins across their departments
              and beyond!
            </p>
          </div>
          <hr />
          <Card.Group centered="true" textAlign="center">
            {ProgramCoordinatorsList.map((programCoordinator) => (
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

export default ProgramCoordinators;
