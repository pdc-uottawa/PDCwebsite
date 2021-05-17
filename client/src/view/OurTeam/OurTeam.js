import React, { Fragment, useState } from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import './OurTeam.css';
import {TeamMembers} from './TeamMembers'

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
            {TeamMembers.map((teamMember,index)=><Grid.Column>
              <Image id={index} centered src={teamMember.imagePath} />
              <h3>{teamMember.name}</h3>
              <h3>{teamMember.position}</h3>
              <p>{teamMember.mailId}</p>
            </Grid.Column>)}
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
