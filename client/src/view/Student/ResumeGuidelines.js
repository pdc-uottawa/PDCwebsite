import React, { Fragment } from "react";
import { Grid, Segment, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet";

function ResumeGuidelines(props) {
  return (
    <>
      <Helmet>
        <title>Resume Guidelines | Professional Development Club</title>
      </Helmet>
      
      <div class="container-fluid justify lead all-data">
      <h1 class="jumbotron center">
      CALL FOR RESUMES
      </h1>
      <ol class="ui list">
        <li>
          Make sure you arrange the relevant experience to showcase your
          candidature.
        </li>
        <li>Highlight skills that match the nature of the job</li>
        <li>Make sure to include LinkedIn profile link</li>
        <li>Limit adding unnecessary line-spacing and content not relevant</li>
      </ol>
      <p>You can find templates and more resources regarding resumes below.</p>
      <a href="https://www.uottawa.ca/career-development-centre/job-search/resume-writing-advice">
        https://www.uottawa.ca/career-development-centre/job-search/resume-writing-advice
      </a>   
      </div>
    </>
  );
};
export default ResumeGuidelines;
