
import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import "./Volunteers.css";

const OurVolunteers = (props) => {
    const path = config();
    const [volunteerList, setVolunteerList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(path + "ourVolunteers/all", {})
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setVolunteerList(data);
                console.log(data)
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
            });
    }, [setVolunteerList, path]);

    return (
        <>
            {loading ? (
                <div className="loadingState">
                    <Spinner color="#727981" size={35} speed={1} animating={true} />
                </div>
            ) :
                <>
                    {volunteerList
                        .filter((volunteer) => volunteer.team === "Event Management Team")
                        .map((eventvolunteer) => {
                            return (
                                <div>
                                    <h1 class="ui center aligned huge header teams-section">
                                        Event Management Team
                                    </h1>
                                    <Card.Group centered="true">
                                        <Card color="blue">
                                            <Card.Content>
                                                <Card.Header>{eventvolunteer.name}</Card.Header>
                                                <Card.Description>
                                                    Email: {eventvolunteer.email}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>
                            )
                        })}
                    {volunteerList
                        .filter((volunteer) => volunteer.team === "Career Development Team")
                        .map((cdcvolunteer) => {
                            return (
                                <div>
                                    <h1 class="ui center aligned huge header teams-section">
                                        Career Development Team
                                    </h1>
                                    <Card.Group centered="true">
                                        <Card color="blue">
                                            <Card.Content>
                                                <Card.Header>{cdcvolunteer.name}</Card.Header>
                                                <Card.Description>
                                                    Email: {cdcvolunteer.email}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>
                            )
                        })}
                    {volunteerList
                        .filter((volunteer) => volunteer.team === "Program Coordinator Team")
                        .map((programcoordinatorvolunteer) => {
                            return (
                                <div>
                                    <h1 class="ui center aligned huge header teams-section">
                                        Program Coordinator Team
                                    </h1>
                                    <Card.Group centered="true">
                                        <Card color="blue">
                                            <Card.Content>
                                                <Card.Header>{programcoordinatorvolunteer.name}</Card.Header>
                                                <Card.Description>
                                                    Email: {programcoordinatorvolunteer.email}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>
                            )
                        })}
                    {volunteerList
                        .filter((volunteer) => volunteer.team === "Project Management Team")
                        .map((programmanagementvolunteer) => {
                            return (
                                <div>
                                    <h1 class="ui center aligned huge header teams-section">
                                        Project Management Team
                                    </h1>
                                    <Card.Group centered="true">
                                        <Card color="blue">
                                            <Card.Content>
                                                <Card.Header>{programmanagementvolunteer.name}</Card.Header>
                                                <Card.Description>
                                                    Email: {programmanagementvolunteer.email}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>
                            )
                        })}
                    {volunteerList
                        .filter((volunteer) => volunteer.team === "Marketing Team")
                        .map((marketingvolunteer) => {
                            return (
                                <div>
                                    <h1 class="ui center aligned huge header teams-section">
                                        Marketing Team
                                    </h1>
                                    <Card.Group centered="true">
                                        <Card color="blue">
                                            <Card.Content>
                                                <Card.Header>{marketingvolunteer.name}</Card.Header>
                                                <Card.Description>
                                                    Email: {marketingvolunteer.email}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>
                            )
                        })}
                    {volunteerList
                        .filter((volunteer) => volunteer.team === "Social Media Team")
                        .map((socialmediavolunteer) => {
                            return (
                                <div>
                                    <h1 class="ui center aligned huge header teams-section">
                                        Social Media Team
                                    </h1>
                                    <Card.Group centered="true">
                                        <Card color="blue">
                                            <Card.Content>
                                                <Card.Header>{socialmediavolunteer.name}</Card.Header>
                                                <Card.Description>
                                                    Email: {socialmediavolunteer.email}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>
                            )
                        })}
                    {volunteerList
                        .filter((volunteer) => volunteer.team === "Volunteer Management Team")
                        .map((vlmanagementvolunteer) => {
                            return (
                                <div>
                                    <h1 class="ui center aligned huge header teams-section">
                                        Volunteer Management Team
                                    </h1>
                                    <Card.Group centered="true">
                                        <Card color="blue">
                                            <Card.Content>
                                                <Card.Header>{vlmanagementvolunteer.name}</Card.Header>
                                                <Card.Description>
                                                    Email: {vlmanagementvolunteer.email}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>
                            )
                        })}
                    {volunteerList
                        .filter((volunteer) => volunteer.team === "Website Team")
                        .map((websitevolunteer) => {
                            return (
                                <div>
                                    <h1 class="ui center aligned huge header teams-section">
                                        Website Team
                                    </h1>
                                    <Card.Group centered="true">
                                        <Card color="blue">
                                            <Card.Content>
                                                <Card.Header>{websitevolunteer.name}</Card.Header>
                                                <Card.Description>
                                                    Email: {websitevolunteer.email}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>
                            )
                        })}
                </>
            }
        </>
    );
};

export default OurVolunteers;