import React, { useState, useEffect } from "react";
import { Card, Icon, Container } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import "./OurVolunteerTeam.css";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const OurVolunteerTeam = (props) => {
  const path = config();
  const [volunteerList, setVolunteerList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(path + "ourVolunteers/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setVolunteerList(data);
        console.log(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setVolunteerList, path]);

  const uniqueTeams = [
    ...new Set(volunteerList.map((volunteerData) => volunteerData.team)),
  ];

  return (
    <>
      <Helmet>
        <title>Our Volunteer | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        uniqueTeams.map((teams) => {
          return (
            <>
            <Container fluid>
              <div className="accordionDiv">
                <Accordion allowZeroExpanded state>
                  <AccordionItem className="accordionItem">
                    <AccordionItemHeading className="accordionHeadResumeNew">
                      <AccordionItemButton className="padding">
                        {teams}
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded ? (
                              <Icon
                                name="angle up"
                                id="resumeTipsCollapsed-CDC"
                                color="white"
                                size="large"
                                className="down"
                              />
                            ) : (
                              <Icon
                                name="angle down"
                                id="resumeTipsExpanded-CDC"
                                color="white"
                                size="large"
                                className="down"
                              />
                            )
                          }
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="row">
                        <div className="col-md borderItem">
                          <div>
                            <ul>
                             
                              {volunteerList
                                .filter((volunteer) => volunteer.team === teams)
                                .map((tvolunteer) => {
                                  return (
                                    <Card className="volunteer" color="blue">
                                      <Card.Content className="volunteer">
                                        <Card.Header>
                                          {tvolunteer.name}
                                        </Card.Header>
                                        <Card.Description>
                                          {tvolunteer.email}
                                        </Card.Description>
                                      </Card.Content>
                                    </Card>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              </Container>
            </>
          );
        })
      )}
    </>
  );
};

export default OurVolunteerTeam;
