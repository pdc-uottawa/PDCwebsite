import Axios from "axios";
import React, { useEffect, useState, useContext, Component } from "react";
import { Button, Form, Input, Table, Icon } from "semantic-ui-react";
import { config } from "../../common/config/config";
import { Link } from "react-router-dom";
import { Spinner } from "react-activity";
import UpdateForm from "./UpdateForm";
import { Helmet } from "react-helmet";
import "./student.css";
import { UserContext } from "../../common/context/UserProvider";

const UpdateCoordinators = (props) => {
  const path = config();
  const [ProgramCoordinatorsList, setProgramCoordinatorsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
  const adminList = [];
  const { user } = userInfo;

  useEffect(() => {
    Axios.get(path + "coordinators/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setProgramCoordinatorsList(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setProgramCoordinatorsList, path, ProgramCoordinatorsList]);

  useEffect(() => {
    Axios.get(path + "user/adminuserlist")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAdminUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [null]);

  function removeCoordinator(_id) {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      Axios.post(path + "coordinators/remove", { _id })
        .then((res) => {
          setLoading(false);
          Axios.get(path + "coordinators/all", {});
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  adminUsers.map((admin) => {
    adminList.push({
      key: admin._id,
      value: admin,
      text: admin.name,
    });
  });

  return (
    <>
      <Helmet>
        <title>
          Update Program Coordinators | Professional Development Club
        </title>
      </Helmet>
      {user && user.admin ? (
        loading ? (
          <div className="loadingState">
            <Spinner color="#727981" size={35} speed={1} animating={true} />
          </div>
        ) : (
          <>
            <h1>
              Update Coordinator Details
              <Link to="/AddForm">
                <Button color="teal" floated="right">
                  {" "}
                  Add coordinator
                </Button>
              </Link>
            </h1>
            <div>
              <Table>
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
                      <Table.Cell>
                        <Link to={`/UpdateForm/${programCoordinator._id}`}>
                          {/* <Button className="button" onClick={() => <UpdateForm/>}> */}
                          <Icon name="edit" color="blue" />
                          {/* </Button> */}
                        </Link>
                        {/* <Link to = {removeCoordinator()}> */}
                        <Button
                          className="buttonss"
                          onClick={() =>
                            removeCoordinator(programCoordinator._id)
                          }
                        >
                          <Icon name="delete" color="red" />
                        </Button>
                        {/* </Link> */}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </>
        )
      ) : (
        <>
          <center>
            <h1>Oops, Page Not Found!</h1>
            <h3>Please login as an admin to manage coordinator details!</h3>
          </center>
        </>
      )}
    </>
  );
};

export default UpdateCoordinators;
