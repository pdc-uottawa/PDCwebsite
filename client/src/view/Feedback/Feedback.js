import React, { Fragment } from "react";
import { Segment, Button, Grid, GridRow } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import "./Feedback.css";

const Feedback = (props) => {
  return (
    <>
      <Helmet>
        <title>Feedback Form | Professional Development Club</title>
      </Helmet>
      <div className="feedback">
        <div className="row feedbackBody">
          <div className="col-md-12 feedbackText">
            <h3>
              Please share your website experience with us. Your feedback help
              us improve.
            </h3>
          </div>
          <div className="col-md-12">
            <Button
              id="takeSurvery-Feedback"
              href="https://forms.office.com/r/53RY8BBPRf"
              size="lg"
              className="survey-reminder"
              target="_blank"
            >
              <h4>Take the Survey!</h4>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feedback;
