import Axios from "axios";
import React, { useEffect, useState, Component } from "react";
import { Button, Form, Input, Table, Icon } from "semantic-ui-react";
import { config } from "../../common/config/config";
import { Link } from 'react-router-dom'
import { Spinner } from "react-activity";
import UpdateForm from './UpdateForm'
import './student.css'

const UpdateCoordinators = (props) => {
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


    function removeCoordinator(_id) {

        // console.log(id);
        // console.log(programCoordinator);

        // let index= ProgramCoordinatorsList.indexOf(programCoordinator);
        // console.log(index);
        // if (index>-1)
        // {
        // ProgramCoordinatorsList.splice(index, 1)
        if (window.confirm('Are you sure?')) {
            setLoading(true)
            Axios.post(path + "coordinators/remove", { _id })
                .then((res) => {
                    setLoading(false)
                    Axios.get(path + "coordinators/all", {})
                })
                .catch((e) => {
                    console.log(e);
                });
            //}
            console.log(ProgramCoordinatorsList);
        }

    }

    return (
        loading ?
            <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
            </div>
            :
            <>
                <h1>Update Coordinator Details
                    <Link to='/AddForm'>
                        <Button color="teal" floated='right'> Add coordinator</Button>
                    </Link>
                </h1>

                <div>
                    <Table >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Program</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {ProgramCoordinatorsList.map((programCoordinator) => (
                                <Table.Row>
                                    <Table.Cell>{programCoordinator.name}</Table.Cell>
                                    <Table.Cell>{programCoordinator.program}</Table.Cell>
                                    <Table.Cell>{programCoordinator.email}</Table.Cell>
                                    {/* <Link to ='/UpdateForm'> */}
                                    <Button className=".button" onClick={() => <UpdateForm/>}>
                                        <Icon name="edit" color="blue" />
                                    </Button>
                                    {/* </Link> */}
                                    {/* <Link to = {removeCoordinator()}> */}
                                    <Button onClick={() => removeCoordinator(programCoordinator._id)}>
                                        <Icon name='delete'  color="red" />
                                    </Button>
                                    {/* </Link> */}
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </>
    )
};

export default UpdateCoordinators;