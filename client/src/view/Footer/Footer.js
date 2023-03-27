import React, { Fragment, useState } from "react";
import {
  Segment,
  Container,
  Grid,
  Header,
  Menu,
  Image,
} from "semantic-ui-react";
import "./Footer.css";

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
      <Menu className="margintop10">
        <Segment className=" greybg footer ">
          <div>
            <Grid divided stackable>
              <div className="col-md-6">
                <Grid.Column>
                  <blockquote className="textstyleNew marginFooter">
                    Want to receive the PDC Monthly Newsletter
                    <br />
                    with the latest news and events?
                    <br />
                  </blockquote>
                  <div className="row marginFooter ">
                    <div className=" marginTopMob5">
                      <button
                        onClick={handlesubscribe}
                        className="ui button newBlue"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </Grid.Column>
              </div>
              <div className="col-md-6">
                <Grid.Column>
                  <p className="followUs">Follow Us</p>
                  <p>
                    <div className="row allign">
                      <div className=" col-md-3">
                        <Image
                        className="icon"
                          centered
                          src="/assets/newFacebook.png"
                          id="facebook-footer"
                          onClick={handlefacebook}
                        />
                      </div>
                      <div className="col-md-3 ">
                        <Image
                        className="icon"
                          centered
                          src="/assets/newInstagram.png"
                          id="instagram-footer"
                          onClick={handleinsta}
                        />
                      </div>
                      <div className=" col-md-3">
                        <Image className="icon"
                          centered 
                          src="/assets/newLinkedicon.png"
                          id="facebook-footer"
                          onClick={handlelinkedin}
                        />
                      </div>
                      <div className=" col-md-3 ">
                        <Image
                        className="icon"
                          centered
                          icon
                          src="/assets/newYoutube.png"
                          onClick={handleyoutube}
                          id="youTube-footer"
                        />
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
