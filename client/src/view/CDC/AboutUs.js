import React, { useContext } from "react";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import "react-activity/dist/Spinner.css";
import "./style.css";

const ContactUS = (props) => {
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const contactDetails = props.contactDetails;

  return (
    <>
      <div className="container">
        <div>
          <h1 className="head">Welcome to the Career Development Centre!</h1>
        </div>
        <div className="marginTop">
          <p className="linkedinDesc">
          
          Welcome to the dynamic hub for personal and professional growth - the Career Development Centre. As an integral part of the Professional Development Club of the University of Ottawa, we are driven to guide you toward your fullest potential and help you find professional success.
          Whether you are a first-year student exploring prospective career paths, a senior preparing to enter the workforce, or an alum seeking opportunities to advance your career, our team is here to support you every step of the way. Explore our comprehensive range of services, receive personalized guidance from our dedicated team, engage in industry-specific meetups, and immerse yourself in the countless networking opportunities that await you.
          
          
            
          </p>
          <p className="linkedinDesc"><strong>Your success story begins right here.</strong></p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ContactUS;
