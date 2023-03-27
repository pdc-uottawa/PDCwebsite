import React, { Fragment, useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Card, Dropdown } from "semantic-ui-react";
import { EventsContext } from "../../common/context/EventContext";
import EventCard from "./EventCard";
import { Spinner } from "react-activity";
import Axios from "axios";
import { deviceType } from "react-device-detect";
import moment from "moment";
import "./Event.css";

const Events = (props) => {
  const { eventInfo, setEventInfo } = useContext(EventsContext);

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
      setColumnNumber(3);
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
        let eventsInReverseOrder = data.events.reverse();
        setFilteredEvents(eventsInReverseOrder);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setEventInfo, setFilteredEvents]);

  const showPastEvent = () => {
    let currentTime = moment().format().slice(0, 10);
    setFilteredEvents(
      eventInfo.events.filter(
        (event) => event.start.local.slice(0, 10) < currentTime
      )
    );
  };

  const showFutureEvent = () => {
    let currentTime = moment().format().slice(0, 10);
    setFilteredEvents(
      eventInfo.events.filter(
        (event) => event.start.local.slice(0, 10) > currentTime
      )
    );
  };

  const showAllEvent = () => {
    setFilteredEvents(eventInfo.events);
  };

  useEffect(() => {
    switch (filterType.value) {
      case "past":
        showPastEvent();
        break;
      case "future":
        showFutureEvent();
        break;
      case "all":
        showAllEvent();
        break;
      default:
        break;
    }
  }, [filterType]);

  const eventsOptions = [
    {
      key: "Past Events",
      text: "Past Events",
      value: "past",
      onClick: (e, data) => setFilterType(data),
    },
    {
      key: "Future Events",
      text: "Future Events",
      value: "future",
      onClick: (e, data) => setFilterType(data),
    },
    {
      key: "All Events",
      text: "All Events",
      value: "all",
      onClick: (e, data) => setFilterType(data),
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Events | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <>
         <p className="pageHeader">Events</p>
          <Card.Group itemsPerRow={columnNumber}>
            {filteredEvents === undefined
              ? null
              : filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
          </Card.Group>
        
        </>
      )}
    </div>
  );
};

export default Events;
