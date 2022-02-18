import React, { Fragment, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import "react-activity/dist/Spinner.css";
import { Card } from "semantic-ui-react";
import "./style.css";

const ContactUS = (props) => {
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const contactDetails = props.contactDetails;

  return (
    <>
      <div className="container">
        <div>
          <h1 className="head">CONTACT US</h1>
        </div>
        <div className="marginTopContactUs">
          <Card.Group centered="true">
            {contactDetails.map((contact) => (
              <Card color="blue">
                <Card.Content>
                  <Card.Header>{contact.name}</Card.Header>
                  <Card.Description><a href={`mailto:${contact.email}`}><i className="mail icon" /> {contact.email}</a></Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
