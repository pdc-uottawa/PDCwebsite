import React, { Fragment } from "react";
import { Grid, Segment, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet";

function ResumeGuidelines(props) {
  return (
    <>
      <Helmet>
        <title>Resume Guidelines | Professional Development Club</title>
      </Helmet>
      <div class="container-fluid justify all-data">
      <h1 class="jumbotron center hdr">
      call for resumes
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
      <p>Please get in touch with our Career Development Centre experts for getting your LinkedIn and Resume
        reviewed and having a 1-1 practical interview call.
      </p>
      <p>
      More information on Career Development services provided by PDC can be found <a href="#/cdc"><u>here</u></a>.
      </p>
      </div>
    </>
  );
};
export default ResumeGuidelines;
