import React, { Component, Fragment } from "react";
import { Segment, Item, Label, Icon, ListItem } from "semantic-ui-react";
const image = require("../../assets/default.png");

const ProjectHost = ({ project }) => {
  return (
    <Fragment>
      <Segment textAlign="left" className="heading" attached="top">
        Hosted By
        <Item.Group>
          {project.user &&
            project.user.map((user) => (
              <Item>
                <Item.Content className="hostedbyText" verticalAlign="middle">
                  <p>{project.hostedBy}</p>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
      <Segment textAlign="left" className="heading" attached="top">
        Organizer
        <Item.Group>
          {project.user &&
            project.user.map((user) => (
              <Item>
                <Item.Content className="hostedbyText" verticalAlign="middle">
                  <Item as="h6">{user.name}</Item>
                  <Item.Meta>
                    <ListItem>
                      <div>
                        <a href={"mailto:" + user.email}>
                          <Icon name="mail" /> &nbsp; {user.email}
                        </a>
                      </div>
                    </ListItem>
                  </Item.Meta>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </Fragment>
  );
};

export default ProjectHost;
