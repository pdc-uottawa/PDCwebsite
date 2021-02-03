import React, { Fragment } from "react";
import {
    Card
  } from "semantic-ui-react";

const ProgramCoordinators = (props) => {
  return (
    <Fragment>
      <h1 class="ui center aligned huge header">
        Information about PDC Student Representative for various disciplines
      </h1>
      <Card.Group centered="true">
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Abdullah-Al-Mehedi</Card.Header>
        <Card.Description>
          Program: DTI (UI/UX, Data Science)
        </Card.Description>
        <Card.Description>
          Email: ahasa085@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Soroush Salehi</Card.Header>
        <Card.Description>
          Program: Systems Science
        </Card.Description>
        <Card.Description>
          Email: ssale066@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Akashdeep Singh</Card.Header>
        <Card.Description>
          Program: AMM and Mechanical Engineering
        </Card.Description>
        <Card.Description>
          Email: asing255@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Achyuth Krishna Chepuri</Card.Header>
        <Card.Description>
          Program: 
Electrical and Computer(ELG)
        </Card.Description>
        <Card.Description>
          Email: achep065@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Yunzao Ma</Card.Header>
        <Card.Description>
          Program: Computer Science
        </Card.Description>
        <Card.Description>
          Email: yma122@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Roopleen Kaur</Card.Header>
        <Card.Description>
          Program: Engineering Project Management
        </Card.Description>
        <Card.Description>
          Email: rkaur050@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Claudia Azigwe</Card.Header>
        <Card.Description>
          Program: Environmental and Civil Engineering 
        </Card.Description>
        <Card.Description>
          Email: cazig063@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Mansher Singh</Card.Header>
        <Card.Description>
          Program: Bio-medical and Chemical Engineering
        </Card.Description>
        <Card.Description>
          Email: msidh098@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Phani Rohith Maganti</Card.Header>
        <Card.Description>
          Program: CS, Concentration: Applied AI and Bioinformatics
        </Card.Description>
        <Card.Description>
          Email: pmaga044@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      </Card.Group>
      </Fragment>
  );
};

export default ProgramCoordinators;
