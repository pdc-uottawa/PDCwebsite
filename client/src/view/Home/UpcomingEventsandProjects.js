import React, { Fragment, useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Card, Dropdown, Container } from "semantic-ui-react";
import { EventsContext } from "../../common/context/EventContext";
import EventCard from "./EventCard";
import { Spinner } from "react-activity";
import Axios from "axios";
import { deviceType } from "react-device-detect";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Grid, Image, Button } from "semantic-ui-react";
import "./UpcomingEventsandProjects.css";

const LatestEvents = (props) => {
  const { eventInfo, setEventInfo } = useContext(EventsContext);
  const [formLink, setFormLink] = useState("");
  const url =
    "https://www.eventbriteapi.com/v3/organizations/464741062423/events/?token=2SWITQPH72SPNCSRK7OW";

  const [columnNumber, setColumnNumber] = useState(3);

  const [filteredEvents, setFilteredEvents] = useState([]);

  const [filterType, setFilterType] = useState({});

  const [loading, setLoading] = useState(true);

  // var fileteredEvents = eventInfo;

  const handleMobileView = (device) => {
    if (device === "mobile") {
      setColumnNumber(1);
    } else {
      setColumnNumber(1);
    }
  };

  useEffect(() => {
    let device = deviceType;

    handleMobileView(device);
    console.log("effective currently");
    Axios.get(url)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setEventInfo(data);
        let eventsInReverseOrder = data.events.reverse().slice(0, 1);
        setFilteredEvents(eventsInReverseOrder);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setEventInfo, setFilteredEvents]);

  return (
    <Container fluid>
    <div className="frag2 marginOverall">
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <>
      
          <Grid>
            <div className="col-md-6">
              <Grid.Column>
                <h1 className="subHeadings">Upcoming/Recent Events</h1>
                <Card className="eventBox" itemsPerRow={columnNumber}>
            {filteredEvents === undefined
              ? null
              : filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
          </Card>
                <div
                  className="Button paddingTop5"
                >
                  <Button href="/#/events" className="alleventButton ">
                    <p>All Events</p>
                  </Button>
                </div>
              </Grid.Column>
            </div>
            <div className="col-md-6 ">
              <Grid.Column>
                <p className="subHeadings">Projects</p>
                <p className="projectText">
                The PDC coordinates various project <br></br>
                  opportunities with companies and the university.
                  <br></br>
                  Browse our listings to fulfill your degree project <br></br>
                  requirements or boost your work  experience.
                </p>
                <div
                  className="Button paddingTop5"
                  id="joinTeam-carousel"
                  href = "/#/eventsv2"
                >
                  <Button href="/#/project-list" className="findProject">
                    <p>Find a Project</p>
                    
                  </Button>
                </div>
              </Grid.Column>
            </div>
          </Grid>
          
        </>
      )}
    </div>
    </Container>
  );
};

export default LatestEvents;
