import React, { Fragment, Component } from "react"
import { Segment, Icon } from "semantic-ui-react"

class ProjectSkills extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Segment
                    textAlign="left"
                    className="heading"
                    attached="top"
                >
                    Skills
                </Segment>
                <Segment >
                    <ul >
                        {this.props.project.category ? this.props.project.category.map((cate) => {
                            return (
                                <p className="roundedTagsDetail col-md-6 ">{cate}</p>
                            )
                        }) : null}
                    </ul>
                </Segment>
                {/* <Item.Description>
                                Hosted by <a>{project.hostedBy}</a>
                        </Item.Description> */}
            </Fragment>
        )
    }

}

export default ProjectSkills;