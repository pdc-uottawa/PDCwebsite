import React, { Component, Fragment } from "react"
import { Segment, Item, Label, Icon, ListItem } from "semantic-ui-react"
const image = require('../../assets/default.png')

const ProjectHost = ({ project }) => {
    return (
        <Fragment>
            <Segment
                textAlign="center"
                className="heading"
                attached="top"
            ><Icon name='user outline' />
                Organizer
            </Segment>
            <Segment>
                <Item.Group divided>
                    <Item style={{ position: "relative" }}>
                        <Label attached='top right' color='red'>Host</Label>
                    </Item>
                    {project.user && project.user.map((user) =>
                        <Item>

                            {
                                user.picture ?
                                    <Item.Image size="tiny" circular src={user.picture} />
                                    :
                                    <Item.Image size="tiny" circular src={image} />
                            }
                            <Item.Content verticalAlign="middle">
                                <Item.Header as="h3">{user.name}</Item.Header>
                                <Item.Meta>
                                    <ListItem>
                                        <div>
                                <a href={"mailto:"+ user.email}><Icon name="mail"/> &nbsp; {user.email}</a>
                                </div>
                                
                                </ListItem>
                                </Item.Meta>
                            </Item.Content>
                        </Item>
                    )}
                </Item.Group>
            </Segment>
        </Fragment>
    )

}

export default ProjectHost;