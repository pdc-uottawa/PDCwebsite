import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";
import { UserContext } from "../../../common/context/UserProvider";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import "../../Student/student.css";

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
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {loading ? (
              <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
              </div>
            ) : (
              <>
                <h3 className="admin-h3">
                  Update Coordinator Details
                  <Link to="/AddForm">
                    <Button color="teal" floated="right">
                      {" "}
                      Add coordinator
                    </Button>
                  </Link>
                </h3>
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
                              <Icon className="edit-icon" name="edit" color="blue" />
                            </Link>
                            <Button
                              className="buttonss"
                              onClick={() =>
                                removeCoordinator(programCoordinator._id)
                              }
                            >
                              <Icon name="delete" color="red" />
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>
              </>
            )
            }
          </div>
        </div>
      ) : (
        <>
          <center className="page-not-found">
            <h1>Oops, Page Not Found!</h1>
            <h3>Please login as an admin to view this page!</h3>
          </center>
        </>
      )}
    </>
  );
};

export default UpdateCoordinators;
