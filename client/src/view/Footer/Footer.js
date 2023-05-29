import React, { Fragment, useState } from "react";
import { Segment, Container, Grid, Header, Menu } from "semantic-ui-react";

const Footer = () => {
  const [focused, setFocused] = useState(false);
  const handlefacebook = () => {
    window.open("https://www.facebook.com/Professionaldevclub/");
  };
  const handlelinkedin = () => {
    window.open(
      "https://www.linkedin.com/groups/10528074/"
    );
  };
  const handleinsta = () => {
    window.open("https://www.instagram.com/pdc__uottawa/");
  };
  const handleyoutube = () => {
    window.open("https://www.youtube.com/channel/UCW4nbiQF-186o9kjAoj6FvA");
  };
  return (
    <>
      <Menu>
        <Segment inverted color="black" vertical className="footer">
          <div className="center">
            <Grid divided inverted stackable>
              <Grid.Column>
                <Header inverted as="h4" content="FOLLOW US" />
                <p>
                  <div className="row">
                    <div className="col-md-3 marginTopMob5">
                      <button
                        id="facebook-footer"
                        onClick={handlefacebook}
                        className="ui facebook button"
                      >
                        <i className="facebook icon" />
                        Facebook
                      </button>
                    </div>
                    <div className="col-md-3 marginTopMob5">
                    <button
                      onClick={handleinsta}
                      id="instagram-footer"
                      className="ui instagram button"
                    >
                      <i className="instagram icon" />
                      Instagram
                    </button>
                    </div>
                    <div className="col-md-3 marginTopMob5">
                    <button
                      onClick={handlelinkedin}
                      id="linkedIn-footer"
                      className="ui linkedin button"
                    >
                      <i className="linkedin icon" />
                      LinkedIn
                    </button>
                    </div>
                    <div className="col-md-3 marginTopMob5">
                    <button
                      onClick={handleyoutube}
                      id="youTube-footer"
                      className="ui youtube button"
                    >
                      <i className="youtube icon" />
                      YouTube
                    </button>
                    </div>
                  </div>                  
                </p>
              </Grid.Column>
            </Grid>
          </div>
        </Segment>
      </Menu>
    </>
  );
};

export default Footer;
