import React, { Fragment, useState } from "react";
import { Image, Grid, Segment } from "semantic-ui-react";

const Home = (props) => {
  const InitialArray = new Array([10]);
  for (let i = 0; i < 10; i++) {
    InitialArray[i] = "Show bios";
  }
  const [bios, setbios] = useState(InitialArray);
  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    // setIndex(titleProps.index);
    const { index } = titleProps;
    let newIndex;
    if (activeIndex === index) {
      newIndex = -1;
      bios[index] = "Show bios";
    } else {
      newIndex = index;
      bios[activeIndex] = "Show bios";
      bios[newIndex] = "Hide bios";
    }
    setActiveIndex(newIndex);
  };

  return (
    <Fragment>
      <Segment placeholder>
        <Grid columns={4} stackable textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Image centered size="large" src="/assets/karam.jpg" />
              <h3>Karamvir Singh</h3>
              <h3>President</h3>
              <p>ksing108@uottawa.ca</p>
              {/* <Accordion>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[0]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    Introduction 1
                  </p>
                </Accordion.Content>
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/yillin.jpg" />
              <h3>Yilin Yang</h3>
              <h3>Vice-President</h3>
              <p>yyang308@uottawa.ca</p>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/fahim.png" />
              <h3>Mohammed Fahim</h3>
              <h3>Event Manager</h3>
              <p>mfahi009@uottawa.ca</p>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/chinmaye.jpg" />
              <h3>Chinmayee Mahagaonkar</h3>
              <h3>Event Manager</h3>
              <p>cmaha026@uottawa.ca</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <Grid.Column>
              <Image centered size="large" src="/assets/Flora.jpg" />
              <h3>Yi (Flora) Liu</h3>
              <h3>Alumni Relation Coordinator</h3>
              <p>yliu538@uottawa.ca</p>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/shubhneet.jpeg" />
              <h3>Shubhneet Baath</h3>
              <h3>Publications Director</h3>
              <p>sbaat080@uottawa.ca</p>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/roopleen.jpg" />
              <h3>Roopleen Kaur</h3>
              <h3>Project Manager</h3>
              <p>rkaur050@uottawa.ca</p>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/mansher.jpg" />
              <h3>Mansher Singh</h3>
              <h3>Lead Program Coordinator</h3>
              <p>rkaur050@uottawa.ca</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <Grid.Column>
              <Image centered size="large" src="/assets/abdullah.jpg" />
              <h3>Abdullah Hassan</h3>
              <h3>Finance Manager</h3>
              <p>ahasa085@uottawa.ca</p>
            </Grid.Column>
          <Grid.Column>
              <Image centered size="large" src="/assets/Navpreet.jpg" />
              <h3>Navpreet Kaur</h3>
              <h3>Web Master and Developer</h3>
              <p>nkaur051@uottawa.ca</p>
            </Grid.Column>
            <Grid.Column>
            <Image centered size="large" src="/assets/harman.jpg" />
              <h3>Harmanpreet Singh</h3>
              <h3>Web Developer</h3>
              <p>hbhut065@uottawa.ca</p>
            </Grid.Column>
            <Grid.Column>
            <Image centered size="large" src="/assets/sourabh.jpg" />
              <h3>Sourabh Aggarwal</h3>
              <h3>Web Developer</h3>
              <p>sagar044@uottawa.ca</p>
            </Grid.Column>
            </Grid.Row>

          <Grid.Row>
          <Grid.Column>
            <Image centered size="large" src="/assets/krishna.jpg" />
              <h3>Achyuth Krishna Chepuri</h3>
              <h3>Web Developer</h3>
              <p>achep065@uottawa.ca</p>
            </Grid.Column>
            <Grid.Column>
            <Image centered size="large" src="/assets/sunakshi.jpg" />
              <h3>Sunakshi Sharma</h3>
              <h3>Quality Assurance</h3>
              <p>sshar222@uottawa.ca</p>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <a class="item" href="#/program-coordinators" color="blue">
             <h3><font color="#4183c4">PDC Student Representative for Your Program</font></h3> 
            </a>
            </Grid.Row>
         
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default Home;
