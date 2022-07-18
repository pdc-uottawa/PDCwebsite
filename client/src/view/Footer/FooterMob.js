import React, { Fragment, useState } from "react";
import { Segment, Container, Grid, Header, Menu } from "semantic-ui-react";

const Footer = () => {
  const [focused, setFocused] = useState(false);
  const handlefacebook = () => {
    window.open("https://www.facebook.com/Professionaldevclub/");
  };
  const handlelinkedin = () => {
    window.open(
      "https://www.linkedin.com/company/g-e-s-professional-development-club/"
    );
  };
  const handleinsta = () => {
    window.open("https://www.instagram.com/pdc__uottawa/");
  };
  const handleyoutube = () => {
    window.open("https://www.youtube.com/channel/UCW4nbiQF-186o9kjAoj6FvA");
  };
  return (
    <Fragment style="margin-top: auto;">
      <div className="footerMobBg">
        <Container textAlign="center">
          <h1 className="headingMobContact">FOLLOW US</h1>
          <div className="horizontalLine" />
          <Grid className="grid-col-1" columns={1}>
            <Grid.Column>
              <div className="marginBottom10">
                <button
                  id="facebook-footer"
                  onClick={handlefacebook}
                  className="ui facebook button"
                >
                  <i className="facebook icon" />
                  Facebook
                </button>
              </div>
              <div className="marginBottom10">
                <button
                  onClick={handleinsta}
                  id="instagram-footer"
                  className="ui instagram button"
                >
                  <i className="instagram icon" />
                  Instagram
                </button>
              </div>
              <div className="marginBottom10">
                <button
                  onClick={handlelinkedin}
                  id="linkedIn-footer"
                  className="ui linkedin button"
                >
                  <i className="linkedin icon" />
                  LinkedIn
                </button>
              </div>
              <div className="marginBottom10">
                <button
                  onClick={handleyoutube}
                  id="youTube-footer"
                  className="ui youtube button"
                >
                  <i className="youtube icon" />
                  YouTube
                </button>
              </div>
              {/* </p> */}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

export default Footer;
