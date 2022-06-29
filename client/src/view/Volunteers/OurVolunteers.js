
import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import "./Volunteers.css";
import { Helmet } from "react-helmet";


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

    const uniqueTeams = [...new Set(volunteerList.map(volunteerData => volunteerData.team))]

    return (
        <>
        <Helmet>
        <title>Our Volunteer | Professional Development Club</title>
      </Helmet>
            {loading ? (
                <div className="loadingState">
                    <Spinner color="#727981" size={35} speed={1} animating={true} />
                </div>
            ) :
                uniqueTeams.map((teams) => {
                    return (
                        <>
                            <div>
                                <h1 class="ui center aligned huge header teams-section">
                                    {teams}
                                </h1>
                                <Card.Group centered="true">
                                    {volunteerList.filter((volunteer) => volunteer.team === teams)
                                        .map((tvolunteer) => {
                                            return (
                                                <Card color="blue">
                                                    <Card.Content>
                                                        <Card.Header>{tvolunteer.name}</Card.Header>
                                                        <Card.Description>
                                                            Email: {tvolunteer.email}
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            )
                                        })}
                                </Card.Group>
                                
                            </div></>
                            
                    )
                })
            }
            
        </>
    );
};

export default OurVolunteers;