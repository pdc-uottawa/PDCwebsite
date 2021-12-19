import React,{ Fragment } from "react";
import {
    Card
} from "semantic-ui-react";
import './Volunteers.css';


const EventManagementTeam=[
    {   name: "Jyotin Gokli",
        mail:"jgokl049@uottawa.ca"
    },
    {   name: "Piumantha Gunasekara",
        mail:"pguna066@uottawa.ca"
    },
    {   name: "Naurin Husain",
        mail:"nhusa095@uottawa.ca"
    },
];

const SocialMediaTeam=[
    {   name: "Sahana",
        mail:"ssaha062@uottawa.ca"
    },
    {   name: "Siddhi",
        mail:"sdesh031@uottawa.ca"
    },
    {   name: "Roopinder Singh",
        mail:"rsingh155@uottawa.ca"
    },
    {   name: "Subah Chawla",
        mail:"schaw095@uottawa.ca"
    },
    {   name: "Satya Subhakar reddy Chirla",
        mail:"credd091@uottawa.ca"
    },
];

const ContentAndGraphicsTeam=[
    {   name: "Carvi Jain",
        mail:"cjain034@uottawa.ca"
    },
    {   name: "Roshanak Ahmadi",
        mail:"rahma102@uottawa.ca"
    },
    {   name: "Tulika",
        mail:"tshuk055@uottawa.ca"
    },
    {   name: "Azin Rezaeiangharagozlou",
        mail:"areza030@uottawa.ca"
    },
    {   name: "Rhema Kirby",
        mail:"rkirb063@uottawa.ca"
    },
    {   name: "Patrick Akkad",
        mail:"pakka041@uottawa.ca"
    },
];

const InitiativeManagementTeam=[
    {   name: "Abhijith Kumar",
        mail:"akuma006@uottawa.ca"
    },
    {   name: "Piyush Prashant Nikhade",
        mail:"pnikh049@uottawa.ca"
    },
    {   name: "Yuting Cao",
        mail:"ycao053@uottawa.ca"
    },
    {   name: "Yash",
        mail:"yseng083@uottawa.ca"
    },
];

const VolunteerManagementTeam=[
    {   name: "Rahul",
        mail:"rgand061@uottawa.ca"
    },
    {
        name:"Naurin Hussain",
        mail:"nhusa095@uottawa.ca"
    },
    {
        name:"Anushree Raghunath Kulai",
        mail:"akula045@uottawa.ca"
    },
    {
        name:"Abhishek Singh Chouhan",
        mail:"achou085@uottawa.ca"
    },
    {
        name:"Georges Abou Gebrayel",
        mail:"gabou045@uottawa.ca"
    },
    {
        name:"Harshitha KV",
        mail:"fhars091@uottawa.ca"
    },
    {
        name:"Gurjot Singh",
        mail:"gsing163@uottawa.ca"
    },
];


const Volunteers = (props) => {
    return (
        <>
            <h1 class="ui center aligned huge header">
                Event Management Team
            </h1>
            <Card.Group centered="true">
                {EventManagementTeam.map((programCoordinator)=>(
                    <Card color='blue'>
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
                {SocialMediaTeam.map((programCoordinator)=>(
                    <Card color='blue'>
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
                {ContentAndGraphicsTeam.map((programCoordinator)=>(
                    <Card color='blue'>
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
                {InitiativeManagementTeam.map((programCoordinator)=>(
                    <Card color='blue'>
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
                {VolunteerManagementTeam.map((programCoordinator)=>(
                    <Card color='blue'>
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
