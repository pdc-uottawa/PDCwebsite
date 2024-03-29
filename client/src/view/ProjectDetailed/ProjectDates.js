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
                ><Icon name='tag' />
                    Tags
                </Segment>
                <Segment>
                    <ul>
                        {this.props.project.category ? this.props.project.category.map((cate) => {
                            return (
                                <li>{cate}</li>
                            )
                        }) : null}
                    </ul>
                </Segment>
                <Segment
                    textAlign="center"
                    className="heading"
                    attached="top"
                ><Icon name='calendar alternate outline' />
                    Important Dates
                </Segment>
                <Segment>
                    <span>
                        <Icon name="calendar alternate" /><b>Posted on:</b> &nbsp; {this.props.project.postedOn}<br />
                        {this.props.project.validUntil ? "Valid until" + this.props.project.validUntil : null}
                    </span>
                </Segment>
            </Fragment>
        )
    }

}

export default ProjectDates;