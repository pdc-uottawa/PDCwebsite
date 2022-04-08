import React, { Fragment } from "react";
import { Image, Grid, Segment, Card } from "semantic-ui-react";
import "./Home.css";

const Home = (props) => {
  console.log(window.innerWidth);
  console.log(window.innerHeight)
  return (
    <Fragment>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center' >
        <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <h1 style={{marginTop: "30px"}}>Welcome to Professional Development Club!</h1>
        </Grid.Column>
        <Grid.Column>
          <Image centered size="medium" src="/assets/pdc-logo.png" />
        </Grid.Column>
        </Grid.Row>
        </Grid>
          <h2 class="center">
            About us
          </h2>  
          <Grid columns={2} stackable textAlign='center' >
          <Grid.Row>
          
          <Grid.Column class="picture">
            <Image centered size="large" src="/assets/homepic1.jpg" />
          </Grid.Column>
          <Grid.Column class="text">
            <h3 class="ui left aligned header">We believe in growing together. Here we provide a platform for you 
              to professionally grow and we put in our best to bridge the gap between you 
              and your dream profession.</h3>
          </Grid.Column>
          </Grid.Row>
          <Grid.Column>
            <h3 class="ui left aligned header">Our job starts with you: understanding what you need, so we can 
              offer you options that make sense.</h3>
          </Grid.Column>
          <Grid.Column>
            <Image centered size="large" src="/assets/homepic2.jpg" />
          </Grid.Column>
          <Grid.Column>
            <Image centered size="large" src="/assets/homepic3.jpg" />
          </Grid.Column>
          <Grid.Column>
            <h3 class="ui left aligned header">Enhance Professional development skills via workshops and seminars
            Provide a platform to discuss issues related to student life and to your specific field of interest.
            Connect with industry and professors</h3>
          </Grid.Column>
        </Grid>
        </Segment>
        <Segment placeholder>
        <Grid columns={2} stackable textAlign='center' >
        <Grid.Row verticalAlign='middle'>
        <Grid.Column>
        <h3 class="ui center aligned">
            <div>
            Become a member <br/>
            <a class="item" target="_blank" href="https://www.facebook.com/groups/gespdc">
                 Facebook
          </a> &nbsp;&nbsp; or  &nbsp;&nbsp;
          <a class="item" target="_blank" href="https://www.linkedin.com/groups/10528074/">
                 Linkedin
          </a>
          </div>
          <br/>
        <div class="ui center aligned">
            <a class="item" target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra5WauXDgBfFLkMzBuH0SCR9UOElJOExDSjRON1c2RElYVTY3STY0V0NNVC4u">
            Volunteer with us
          </a>
          </div>
          </h3>
        </Grid.Column>
        <Grid.Column>
          <Image centered size="large" src="/assets/becomeavolunteer.jpg" />
        </Grid.Column>
          </Grid.Row>
          </Grid>
       </Segment>     
    </Fragment>
    
  );
};

export default Home;
