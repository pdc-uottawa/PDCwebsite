import React, { Fragment, Component } from "react"
import { Segment, Icon } from "semantic-ui-react"

class ProjectDates extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Segment
                    textAlign="center"
                    className="heading"
                    attached="top"
                >
                 
                </Segment>
                <Segment>
                    <span>
                        <Icon /><b>Posted on:</b> &nbsp; {this.props.project.postedOn}<br />
                        {this.props.project.validUntil ? "Valid until" + this.props.project.validUntil : null}
                    </span>
                </Segment>
                <Segment>
                    <span>
                        <Icon  /><b>Valid Until:</b> &nbsp; {this.props.project.validUntil}<br />
                        {this.props.project.validUntil ? "Valid until" + this.props.project.validUntil : null}
                    </span>
                </Segment>
            </Fragment>
        )
    }

}

export default ProjectDates;