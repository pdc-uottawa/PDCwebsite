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
          <h1 className="head">ABOUT US</h1>
        </div>
        <div className="marginTop">
          <p className="linkedinDesc">The Career Development Centre is a newly established group under the Professional Development Club of the University of Ottawa, that aims to mentor, guide and help students build their career. Our motto is to inspire students to embrace their potential and strive for career excellence. <br /><br /> We believe that:</p>
            <div className="row textCenter">
                <div className="col-md borderItemAbout">
                    <div>
                        <h1 className="headAbout">ABILITY</h1>
                    </div>
                    <div>
                        <h5>Is What You Are Capable Of Doing</h5>
                    </div>
                </div>
                <div className="col-md borderItemAbout">
                    <div>
                        <h1 className="headAbout">MOTIVATION</h1>
                    </div>
                    <div>
                        <h5>Determines What You Do</h5>
                    </div>
                </div>
                <div className="col-md borderItemAbout">
                    <div>
                        <h1 className="headAbout">ATTITUDE</h1>
                    </div>
                    <div>
                        <h5>Determines How Well You Do It</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ContactUS;
