import React, { Fragment, useState } from "react";
import {Image, Grid, Segment, Button} from "semantic-ui-react";
import './OurTeam.css';
import {TeamMembers} from './TeamMembers'
import Volunteers from "../Volunteers/Volunteers";

const OurTeam = (props) => {
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
            {TeamMembers.map((teamMember,index)=><Grid.Column  id="column">
              <Image id={index} centered src={teamMember.imagePath} id="image"/>
              <h3>{teamMember.name}</h3>
              <h3>{teamMember.position}</h3>
              <div  id="socialMediaIconsContainer">
              <a href={teamMember.linkedinId } target="_blank"><Image src={"/assets/linkedin.png"}  id="socialMediaIcon"/></a>
              <a href={"mailto:"+ teamMember.mailId} target="_blank"> <Image src={"/assets/outlook.png"}  id="socialMediaIcon"/></a>
              </div>
              
            </Grid.Column>)}
            
          </Grid.Row>
          
          <Volunteers />
          

            
            <Grid.Row id="contentContainer">

              

              <h1>PDC STUDENT REPRESENTATIVES</h1>
              <p>
                Student Reps primarily represent matters relating to the academic experience of their cohort and relating to the impact of the more comprehensive student experience on academic issues and make sure that the voice and feedback of the University and the Students Union are taken and utilized, thus creating a real difference at the course level, but also have many wins across their departments and beyond!
              </p>
              <div id="buttons-container">
              <Button primary color="blue" onClick={()=>window.location.href='#/program-coordinators'}>
                Meet Your PDC Student Representative
              </Button>
              </div>
            </Grid.Row>
            <Grid.Row id="contentContainer">
              <h1>PDC VOLUNTEERS</h1>
              <p>
                Whether you want to learn a new skill, meet new people, experience something meaningful, or help where help is needed, volunteer opportunities at PDC,uOttawa is as diverse as people who fill them. Donating your time, energy, and possibly resources can be just as rewarding for you as for those you are helping. Get to connect with the student community, make it a better place, expand your network, and boost your social skills.
                <b>There's no better time than now to join the team!</b>
              </p>
              <div id="buttons-container">
              <Button primary color="blue" onClick={()=>window.location.href='#/volunteers'} id="meetVolunteersButton">
                Meet Our Volunteers
              </Button>
              <Button primary color="blue" onClick={()=>window.open('https://forms.office.com/r/R7kBcQbnvX','_blank')} >
                Join the team
              </Button>
              </div>
            </Grid.Row>
            <Grid.Row>
          </Grid.Row>
        </Grid>
      </Segment>
      
    </Fragment>
  );
};

export default OurTeam;
