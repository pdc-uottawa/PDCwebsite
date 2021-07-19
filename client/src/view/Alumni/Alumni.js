import React, { Fragment, useState } from "react";
import {Image, Grid, Segment} from "semantic-ui-react";
import './Alumni.css';
import {AlumniMembers} from './AlumniMembers'

const Alumni = (props) => {
    return (
        <Fragment>
            <Segment placeholder>
                <Grid columns={4} stackable textAlign="center">
                    <Grid.Row>
                        {AlumniMembers.map((alumni,index)=><Grid.Column  id="column">
                            <Image id={index} centered src={alumni.imagePath} id="image" />
                            <h3>{alumni.name}</h3>
                            <h3>{alumni.position}</h3>
                            <div  id="socialMediaIconsContainer">
                                <a href={alumni.linkedinId } target="_blank"><Image src={"/assets/linkedin.png"}  id="socialMediaIcon"/></a>
                                <a href={"mailto:"+ alumni.mailId} target="_blank"> <Image src={"/assets/outlook.png"}  id="socialMediaIcon"/></a>
                            </div>
                        </Grid.Column>)}
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Fragment>
    );
};

export default Alumni;
