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
  const handlesubscribe = () => {
    window.open(
      "https://gespdc.us9.list-manage.com/subscribe?u=c0d97c0b972136dcc031f31cc&id=426379abe6"
    );
  };
  return (
    <>
      <Menu>
        <Segment className=" greybg footer">
          <div>
            <Grid divided stackable>
            <div className="col-md-6">
                <Grid.Column>
                <blockquote className="textstyle">
                Want to receive the PDC Monthly Newsletter<br />
                with the latest news and events?<br />
                  </blockquote>
                  <div className="row Subbutton ">
                    <div className=" marginTopMob5">
                      <button
                        id="linkedIn-footer"
                        onClick={handlesubscribe}
                        className="ui button "
                      >
                      Subscribe
                      </button>
                    </div>
                  </div>
                </Grid.Column>
                </div>
                <div className="col-md-6">
                <Grid.Column>
                <p className="followUs">
                    
                    Follow Us
                  
                  </p>
                  <p>
                    <div className="row allign">
                      <div className=" col-md-3">
                        <button
                          id="facebook-footer"
                          onClick={handlefacebook}
                          className="ui facebook button"
                        >
                          <i className="facebook icon" />
                        </button>
                      </div>
                      <div className="col-md-3 ">
                        <button
                          onClick={handleinsta}
                          id="instagram-footer"
                          className="ui instagram button"
                        >
                          <i className="instagram icon" />
                        </button>
                      </div>
                      <div className="col-md-3 ">
                        <button
                          onClick={handlelinkedin}
                          id="linkedIn-footer"
                          className="ui linkedin button"
                        >
                          <i className="linkedin icon" />
                        </button>
                      </div>
                      <div className=" col-md-3 ">
                        <button
                          onClick={handleyoutube}
                          id="youTube-footer"
                          className="ui youtube button"
                        >
                          <i className="youtube icon" />
                        </button>
                      </div>
                    </div>
                  </p>
                </Grid.Column>
             </div>
            </Grid>
          </div>
        </Segment>
      </Menu>
    </>
  );
};

export default Footer;
