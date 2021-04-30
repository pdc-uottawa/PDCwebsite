import React, { Component, PropTypes } from 'react';
import { Segment, Grid, Icon } from "semantic-ui-react";
import "./projectdetail.css";
import "./ProjectDeatiledPage";
import LinesEllipsis from "react-lines-ellipsis";

class ProjectDetailedInfo extends Component {

  constructor(props) {
    super(props);
  }
  render()
  {
return(
    <Segment.Group>
      <Segment attached="top">
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>
              {this.props.project.postedOn}
              {this.props.project.postedOn ? "  To  " + this.props.project.validUntil : ""}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <LinesEllipsis
            id="project_description"
            style={{ whiteSpace: "pre-wrap" }}
            text={this.props.project.description}
            ellipsis=""
            maxLine={30}
            trimRight
            basedOn="letters">
            </LinesEllipsis>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="code branch" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{this.props.project.skills}</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
)
  };
}




export default ProjectDetailedInfo;

