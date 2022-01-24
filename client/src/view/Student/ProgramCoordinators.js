import React, { Fragment, useState, useEffect } from "react";
import { Segment, Card, Icon } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";

const ProgramCoordinators = (props) => {
    const path = config();
    const [ProgramCoordinatorsList, setProgramCoordinatorsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(path + "coordinators/all", {})
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setProgramCoordinatorsList(data);
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
            });
    }, [setProgramCoordinatorsList, path]);

    return (
        <>
            {
                loading ?
                    <div className="loadingState">
                        <Spinner color="#727981" size={35} speed={1} animating={true} />
                    </div>
                    :
                    <>
                    <Segment centered inverted color="black" style={{borderRadius: '10px'}}>
                        <h1 class="ui center aligned huge header">
                            PROGRAM &nbsp; CO-ORDINATORS    
                        </h1>
                        </Segment>
                        <Card.Group centered="true" textAlign="center">
                            {ProgramCoordinatorsList.map((programCoordinator) => (
                                <Card color='black'>
                                    <Card.Content>
                                        <Card.Header><u>{programCoordinator.program}</u></Card.Header>
                                        <Card.Description>
                                            <h4>{programCoordinator.name}</h4>  
                                        </Card.Description>
                                        <Card.Description>
                                        <a href={"mailto:"+ programCoordinator.mail}><Icon name ="mail" />{programCoordinator.mail}</a>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            ))}
                        </Card.Group>
                    </>
            }
        </>
    );
};

export default ProgramCoordinators;
