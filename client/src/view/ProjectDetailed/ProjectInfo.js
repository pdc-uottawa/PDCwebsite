import React, { Component, Fragment } from "react"
import { Segment, Item, Label, Grid, Icon } from "semantic-ui-react"
import LinesEllipsis from "react-lines-ellipsis";
import './projectdetail.css'
const image = require('../../assets/default.png')



class ProjectInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid.Column width={9} >
                <Segment
                    textAlign="center"
                    className="heading"
                    attached="top"
                    secondary

                    color="teal"
                ><Icon name='file alternate' />
                    Description
                </Segment>
                <Segment>

                    <LinesEllipsis
                        id="project_description"
                        style={{ whiteSpace: "pre-wrap" }}
                        text={this.props.project.description}
                        ellipsis=""
                        maxLine={100}
                        trimRight
                        basedOn="letters">
                    </LinesEllipsis>
                </Segment>
            </Grid.Column>
        )

    }
}

export default ProjectInfo