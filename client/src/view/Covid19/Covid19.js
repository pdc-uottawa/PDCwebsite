import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Covid19 = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>COVID 19 | Professional Development Club</title>
      </Helmet>
      <h1 class="ui center aligned huge header">Updates on Covid-19</h1>
      <p>
        The latest updates on the covid-19 can be found{" "}
        <a href="https://www.uottawa.ca/coronavirus/en">here</a>
      </p>
    </Fragment>
  );
};
export default Covid19;
