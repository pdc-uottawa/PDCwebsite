import React, { Fragment } from "react";
import {
    Card
  } from "semantic-ui-react";


const ProgramCoordinatorsList=[
    {   name: "Abdullah-Al-Mehedi",
        program:"DTI (UI/UX, Data Science)",
        mail:"ahasa085@uottawa.ca"
    },
    {   name: "Yuting Cao",
        program:"Systems Science (SYS)",
        mail:"ycao053@uottawa.ca"
    },
    {   name: "Shaniasadat Shojaee",
        program:"Mechanical Engineering",
        mail:"sshoj065@uottawa.ca"
    },
    {   name: "Samhita Kuili",
        program:"Electrical and Computer (ELG)",
        mail:"skuil016@uottawa.ca"
    },
    {   name: "Piumantha Gunasekara",
        program:"Engineering Management",
        mail:"pguna066@uottawa.ca"
    },
    {   name: "Claudia Azigwe",
        program:"Civil and Environmental Engineering",
        mail:"cazig063@uottawa.ca"
    },
    {   name: "Mansher Singh",
        program:"Bio-medical Engineering",
        mail:"msidh098@uottawa.ca"
    },
];

const ProgramCoordinators = (props) => {
  return (
    <Fragment>
      <h1 class="ui center aligned huge header">
        Information about PDC Student Representative for various disciplines
      </h1>
      <Card.Group centered="true">
          {ProgramCoordinatorsList.map((programCoordinator)=>(
              <Card color='blue'>
                  <Card.Content>
                      <Card.Header>{programCoordinator.name}</Card.Header>
                      <Card.Description>
                          Program: {programCoordinator.program}
                      </Card.Description>
                      <Card.Description>
                          Email: {programCoordinator.mail}
                      </Card.Description>
                  </Card.Content>
              </Card>
          ))}
      </Card.Group>
      </Fragment>
  );
};

export default ProgramCoordinators;
