import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Button, Table, Icon, Image } from "semantic-ui-react";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";
import "../../Alumni/Alumni.css";
import { UserContext } from "../../../common/context/UserProvider";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";

const ManageAlumni = (props) => {
  const path = config();
  const [AlumniList, setAlumniList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
  const adminList = [];
  const { user } = userInfo;

  useEffect(() => {
    Axios.get(path + "alumni/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAlumniList(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setAlumniList, path]);

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

  function removeAlumni(_id) {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      Axios.post(path + "alumni/remove", { _id })
        .then((res) => {
          setLoading(false);
          Axios.get(path + "alumni/all", {});
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
        <title>Manage Alumni | Professional Development Club</title>
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
                  Update Alumni Details
                  <Link to="/add-alumni">
                    <Button color="teal" floated="right">
                      {" "}
                      Add Alumni
                    </Button>
                  </Link>
                </h3>
                <div>
                  <Table>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Current Position</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>LinkedIn</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {AlumniList.map((alumni) => (
                        <Table.Row>
                          <Table.Cell><Image src={alumni.image} style={{ width: 40, height: 40, borderRadius: 400 / 2 }} /></Table.Cell>
                          <Table.Cell>{alumni.name}</Table.Cell>
                          <Table.Cell>{alumni.currentPosition}</Table.Cell>
                          <Table.Cell>{alumni.email}</Table.Cell>
                          <Table.Cell>{alumni.linkedIn}</Table.Cell>
                          <Table.Cell>
                            <div className="row">
                              <div classname="col-md-6">
                                <Link to={`/update-alumni/${alumni._id}`}>
                                  <Icon className="edit-icon" name="edit" color="blue" />
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Button
                                  className="buttonn"
                                  onClick={() => removeAlumni(alumni._id)}
                                >
                                  <Icon name="delete" color="red" />
                                </Button>
                              </div>
                            </div>
                          </Table.Cell>
                          {/* </Link> */}
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>
              </>
            )}
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

export default ManageAlumni;
