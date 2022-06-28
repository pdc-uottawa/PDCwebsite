import React, { Fragment, useState } from "react";

import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Button,
  Form,
  Menu,
  GridColumn,
} from "semantic-ui-react";

const Footer = () => {
  const [focused, setFocused] = useState(false);
  const handlefacebook = () => {
    window.open("https://www.facebook.com/Professionaldevclub/");
  };
  const handlelinkedin = () => {
    window.open("https://www.linkedin.com/company/g-e-s-professional-development-club/");
  };
  const handleinsta = () => {
    window.open("https://www.instagram.com/pdc__uottawa/");
  };
  const handleyoutube = () => {
    window.open("https://www.youtube.com/channel/UCW4nbiQF-186o9kjAoj6FvA");
  };
  return (
    <Fragment style="margin-top: auto;">
      <Menu>
        <Segment inverted color="black" vertical className="footer">
          <Container textAlign="center">
            <Grid divided inverted stackable>
              {/* <Grid.Column width={8}> */}
              <Grid.Column>
                <Header inverted as="h4" content="FOLLOW US" />
                <p>
                  <button
                    onClick={handlefacebook}
                    className="ui facebook button"
                  >
                    <i className="facebook icon" />
                    Facebook
                  </button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={handleinsta}
                    className="ui instagram button"
                  >
                    <i className="instagram icon" />
                    Instagram
                  </button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={handlelinkedin}
                    className="ui linkedin button"
                  >
                    <i className="linkedin icon" />
                    LinkedIn
                  </button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={handleyoutube}
                    className="ui youtube button"
                  >
                    <i className="youtube icon" />
                    Youtube
                  </button>
                </p>
              </Grid.Column>
              {/* <GridColumn  width={8} textAlign="center">
              <a href="#/our-partners"><Header inverted as="h4" content="OUR PARTNERS"/></a>
              </GridColumn> */}
            </Grid>
          </Container>
        </Segment>
      </Menu>
    </Fragment>
  );
};

export default Footer;
