import React, { Fragment } from "react";
import { Card } from "semantic-ui-react";
import "./Volunteers.css";

const EventManagementTeam = [
  { name: "Monika Gwalani", mail: "mgwal097@uottawa.ca" },
  { name: "Nimish Agarwaal", mail: "nagga078@uottawa.ca" },
  { name: "Tarini Sood", mail: "tsood097@uottawa.ca" },
  { name: "Kajari Talukdar", mail: "ktalu006@uottawa.ca" },
];

const SocialMediaTeam = [
  { name: "Georges Abou", mail: "gabou045@uottawa.ca" },
  { name: "Abhishek Xavier", mail: "axavi032@uottawa.ca" },
  { name: "Krishna Raviteja Maddali", mail: "kmadd080@uottawa.ca" },
];

const ContentAndGraphicsTeam = [
  { name: "Sai Supraja", mail: "snemm013@uottawa.ca" },
  { name: "Rishi Kumar Pandey", mail: "rpand104@uottawa.ca" },
  { name: "Gurjot Singh", mail: "gsing163@uottawa.ca" },
  { name: "Binit Pati", mail: "bpati033@uottawa.ca" },
];

const InitiativeManagementTeam = [
  { name: "Abhijith Kumar", mail: "akuma006@uottawa.ca" },
  { name: "Piyush Prashant Nikhade", mail: "pnikh049@uottawa.ca" },
  { name: "Yuting Cao", mail: "ycao053@uottawa.ca" },
  { name: "Yash", mail: "yseng083@uottawa.ca" },
];

const VolunteerManagementTeam = [
  { name: "Jiafeng Li", mail: "jili740@uottawa.ca" },
  { name: "Simranjeet Singh", mail: "ssingh327@uottawa.ca" },
  { name: "Harshitha KV", mail: "fhars091@uottawa.ca" },
  { name: "Mostafa Bidgeli", mail: "mbigd068@uottawa.ca" },
  { name: "Gurjot Singh", mail: "gsing163@uottawa.ca" },
];

const WebsiteManagementTeam = [
  { name: "Anahad Pandey", mail: "apand074@uottawa.ca" },
  { name: "Ripple Deep Singh", mail: "rkale087@uottawa.ca" },
  { name: "Khushpreet Kaur", mail: "kkaur025@uottawa.ca" },
  { name: "Gursimrat Singh", mail: "gsing152@uottawa.ca" },
];

const Volunteers = (props) => {
  return (
    <>
      <h1 class="ui center aligned huge header">Event Management Team</h1>
      <Card.Group centered="true">
        {EventManagementTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <h1 className="ui center aligned huge header teams-section">
        Social Media Team
      </h1>
      <Card.Group centered="true">
        {SocialMediaTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <h1 className="ui center aligned huge header teams-section">
        Content and Graphics Team
      </h1>
      <Card.Group centered="true">
        {ContentAndGraphicsTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <h1 className="ui center aligned huge header teams-section">
        Initiative Management Team
      </h1>
      <Card.Group centered="true">
        {InitiativeManagementTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <h1 className="ui center aligned huge header teams-section">
        Volunteer Management Team
      </h1>
      <Card.Group centered="true">
        {VolunteerManagementTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <h1 className="ui center aligned huge header teams-section">
        Website Management Team
      </h1>
      <Card.Group centered="true">
        {WebsiteManagementTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};

export default Volunteers;
