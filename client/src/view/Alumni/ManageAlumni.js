import Axios from "axios";
import React, { useEffect, useState, Component } from "react";
import { Button, Form, Input, Table, Icon } from "semantic-ui-react";
import { config } from "../../common/config/config";
import { Link } from 'react-router-dom'
import { Spinner } from "react-activity";
import UpdateAlumniForm from './UpdateAlumniForm'

const ManageAlumni = (props) => {
    const path = config();
    const [AlumniList, setAlumniList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(path + "alumni/all", {})
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setAlumniList(data);
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
            });

    }, [setAlumniList, path, AlumniList]);


    function removeAlumni(_id) {
        if (window.confirm('Are you sure?')) {
            setLoading(true)
            Axios.post(path + "alumni/remove", { _id })
                .then((res) => {
                    setLoading(false)
                    Axios.get(path + "alumni/all", {})
                })
                .catch((e) => {
                    console.log(e);
                });
        }

    }

    return (
        loading ?
            <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
            </div>
            :
            <>
                <h1>Update Alumni Details
                    <Link to='/AddAlumniForm'>
                        <Button color="teal" floated='right'> Add coordinator</Button>
                    </Link>
                </h1>   
                <div>
                    <Table >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Image</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Current Position</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>LinkedIn</Table.HeaderCell>   
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {AlumniList.map((alumni) => (
                                <Table.Row>
                                    <Table.Cell>{alumni.image}</Table.Cell>
                                    <Table.Cell>{alumni.name}</Table.Cell>
                                    <Table.Cell>{alumni.currentPostion}</Table.Cell>
                                    <Link to={`/UpdateAlumniForm/${alumni._id}`}>
                                    {/* <Button className="button" onClick={() => <UpdateForm/>}> */}
                                        <Icon name="edit" color="blue" />
                                    {/* </Button> */}
                                    </Link>
                                    {/* <Link to = {removeCoordinator()}> */}
                                    <Button className="buttonss" onClick={() => removeAlumni(alumni._id)}>
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

export default ManageAlumni;