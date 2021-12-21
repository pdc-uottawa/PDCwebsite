import React, { Component, useState } from "react"
import { Segment, Image, Item, Header, Button, Modal, Icon, Grid } from "semantic-ui-react"
import Axios from "axios";
import useReactRouter from "use-react-router";


const ProjectName = ({
    id,
    path,
    project,
    userInfo,
    appliedStudentsList,
}) => {
    const eventImageStyle = {
        filter: "brightness(30%)",
    };
    const { history } = useReactRouter();
    const [modalOpen, setModalOpen] = useState(false);

    const handleActiveStatus = () => {
        Axios.post(path + "project/delete/" + id, {
            isDeleted: !project.isDeleted,
        });
        setModalOpen(false);
        history.push("/project-detail/" + id);
        //remove this later after fixing bug# try returning data with latest project status changed.
        window.location.reload(false);
    };


    // pass state to Creat Project, state includes Project Details
    const handleManage = () => {
        let path = {
            pathname: "/project/manage/" + id,
            state: project,
        };
        history.push(path);
    };

    const handleApply = () => {
        if (userInfo.authenticated) {
            history.push("/students/apply/" + id);
        } else {
            alert("You need to login first!");
            history.push("/signin");
        }
    };

    function chckadmin(ad) {
        return ad.email === userInfo.user.email
    }

    return (
        <Grid.Column width={16}>
            <Segment className='project_name' color="teal" secondary>
                <Item.Group>
                    <Item>
                        <Item.Image size="small" src={project.logoUrl} />
                        <Item.Content >
                            <Item.Header>
                                {
                                    console.log(project)
                                }
                                <h1>{project.title}</h1>
                            </Item.Header>
                            <Item.Description>
                                Hosted by <a>{project.hostedBy}</a>
                            </Item.Description>
                            <Item.Extra>
                                {/* For student, only show Apply button. For company and admin, show Manage and Delete button */}
                                {userInfo.user &&
                                    (userInfo.user.company || userInfo.user.admin) &&
                                    project.user && project.user.findIndex(chckadmin) !== -1 ? (
                                    <Segment attached="bottom" clearing>
                                        <Button color="orange" onClick={handleManage}>
                                            Edit Project Details
                                        </Button>
                                        <Modal
                                            size="tiny"
                                            closeIcon
                                            open={modalOpen}
                                            trigger={project.isDeleted === true ? (
                                                <Button floated="right" color="green" content="Activate" />
                                            ) : (
                                                <Button floated="right" color="red">
                                                    Deactivate Project
                                                </Button>
                                            )}
                                            onClose={() => setModalOpen(false)}
                                            onOpen={() => setModalOpen(true)}
                                        >
                                            <Header icon="archive" content="Change project status" />
                                            <Modal.Content>
                                                <p>
                                                    <strong>Are you sure you want to proceed?</strong>
                                                </p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button color="red" onClick={() => setModalOpen(false)}>
                                                    <Icon name="remove" /> No
                                                </Button>
                                                <Button color="green" onClick={handleActiveStatus}>
                                                    <Icon name="checkmark" /> Yes
                                                </Button>
                                            </Modal.Actions>
                                        </Modal>
                                    </Segment>
                                ) : userInfo.user && (userInfo.user.company || userInfo.user.admin) ? (
                                    ""
                                ) :
                                    (
                                        <Item.Extra>
                                            {/* use email to judge the student applied or not */}
                                            {userInfo.user &&
                                                JSON.stringify(appliedStudentsList).indexOf(userInfo.user.email) !==
                                                -1 ? (
                                                <Button disabled floated="right" color="orange" content="Applied" />
                                            ) : (
                                                <Button floated='right' color="green" size='large' onClick={handleApply}>Apply</Button>
                                            )}
                                        </Item.Extra>
                                    )}
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
        </Grid.Column>
    )
}
export default ProjectName;