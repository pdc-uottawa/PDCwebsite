import React, { Fragment, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import "react-activity/dist/Spinner.css";
import { Button } from "semantic-ui-react";
import "./style.css";

const CDCButtons = (props) => {
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const buttonLinks = props.buttonLinks;

  return (
    <>
      <div>
        <div className="container row">
            {
                buttonLinks && buttonLinks.map((link) => {
                    return (
                        link.name === 'book_appointment' && link.active === true ?
                        <div className="col-md centerItems">
                            <Button href={link.link} target="blank" size="large" className="padding5 ui basic orange button" basic color='orange' content='Book Appointment for Mock Interviews' />
                        </div>
                        :
                        link.name === 'submit_resume_linkedin' && link.active === true ?
                        <div className="col-md centerItems">
                            <Button href={link.link} target="blank" size="large" className="padding5" basic color='blue' content='Submit your Resume or/and LinkedIn Profile for Review' />
                        </div>
                        :
                        null
                    )
                })
            }
        </div>
        <br />
        <hr />
      </div>
    </>
  );
};

export default CDCButtons;
