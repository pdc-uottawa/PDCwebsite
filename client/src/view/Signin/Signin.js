import React, { Fragment } from "react";
import { config } from "../../common/config/config";
import {Divider,  Button, Image, Grid, GridRow } from "semantic-ui-react";

const Signin = (props) => {
  let path = config();

  // Use google login
  const handleGoogleLogin = () => {
    window.open(path + "auth/login", "_self");
  };

  const handleLinkedinLogin = () => {
    window.open(path + "auth/linkedin", "_self");
  };

  const handleOutlookLogin = () => {
    window.open(path + "auth/outlook", "_self")
  }

  return (
    <Fragment>
      <Grid columns={2} stackable textAlign="center">
      <Grid.Row>
      <Divider vertical>Or</Divider>
        <Grid.Column>
          <Image centered size="medium" src="/assets/student.png" />
          <h2>If you are a student, please log in with Google</h2>
          <Button onClick={handleGoogleLogin}>
            <i className="google icon"></i>
            Sign in with Google
          </Button>
          Or
          <Button onClick={handleOutlookLogin}>
            Sign in with Outlook
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Image centered size="medium" src="/assets/employer.png" />
          <h2>If you are a company, please log in with Linkedin</h2>
          <Button className="ui linkedin button" onClick={handleLinkedinLogin}>
            <i className="linkedin icon"></i>
            Sign in with Linkedin
          </Button>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        {/* <Grid.Column>
          <div>By signing in to your account, you agree to our Terms of Service and consent to our Privacy Policy.</div>
          </Grid.Column> */}
        <Grid.Column>
          <h3>By signing in to your account, you consent to our <a href="https://www.termsfeed.com/live/80119971-49f1-4f43-a60e-29b2918fae4a" target="_blank">Privacy Policy</a>.</h3>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      

    </Fragment>
  );
};

export default Signin;
