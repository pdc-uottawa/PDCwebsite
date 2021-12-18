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
      {/* <Divider vertical>Or</Divider> */}
        <Grid.Column>
          <Image centered size={20} src="/assets/student.png" />
          <h2>Students, Please Log In using Google or Outlook</h2>
          <Button onClick={handleGoogleLogin} style={{margin: '25px'}} color="google plus">
            <i className="google icon" />
            Sign In with Google
          </Button>
          Or
          <Button onClick={handleOutlookLogin} style={{margin: '25px'}} color="vk">
          <i className="mail icon" />
            Sign In with Outlook
          </Button>
        </Grid.Column>
        { <Grid.Column>
          <Image centered size={20} src="/assets/employer.png" />
          <h2>Employers, Please Log In via LinkedIn</h2>
          <Button className="ui linkedin button" style={{margin: '25px'}} onClick={handleLinkedinLogin}>
            <i className="linkedin icon"></i>
            Sign In with LinkedIn
          </Button>
        </Grid.Column> }
        </Grid.Row>
        <Grid.Row>
        {/* <Grid.Column>
          <div>By signing in to your account, you agree to our Terms of Service and consent to our Privacy Policy.</div>
          </Grid.Column> */}
        <Grid.Column>
          <h3 style={{marginTop: '25%'}}>By Signing In to your Account, You Consent to our <a href="https://www.termsfeed.com/live/80119971-49f1-4f43-a60e-29b2918fae4a" target="_blank">Privacy Policy</a>.</h3>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      

    </Fragment>
  );
};

export default Signin;
