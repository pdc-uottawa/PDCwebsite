import React, { useContext, useEffect, useState } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Spinner } from "react-activity";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

const UpdateVolunteerTeams = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [VolunteerList, setVolunteerList] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
  const adminList = [];
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { user } = userInfo;

  const { team } = props.match.params;

  useEffect(() => {
    Axios.get(path + "ourVolunteers/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setVolunteerList(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setVolunteerList, path]);

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

  function removeVolunteer(_id) {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      Axios.post(path + "ourVolunteers/remove", { _id })
        .then((res) => {
          setLoading(false);
          Axios.get(path + "ourVolunteers/all", {});
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
        <title>Update {team} | Professional Development Club</title>
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
                  Update {team}
                </h3>
                <div>
                  <Table className="admin-manage-team" pageSize={9} rowsPerPageOptions={[9]}>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {VolunteerList.filter((volunteerteamsdata) => {
                        const teamWiseVolunteers = volunteerteamsdata.team === team
                        return (teamWiseVolunteers)
                      }).map((volunteer) => (
                        <Table.Row>
                          <Table.Cell>{volunteer.name}</Table.Cell>
                          <Table.Cell>{volunteer.email}</Table.Cell>
                          <Table.Cell>
                            <div className="row">
                              <div classname="col-md-6">
                                <Link to={`/update-volunteer/${volunteer._id}`}>
                                  <Icon name="edit" color="blue" />
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Button
                                  className="buttonn"
                                  onClick={() => removeVolunteer(volunteer._id)}
                                >
                                  <Icon name="delete" color="red" />
                                </Button>
                              </div>
                            </div>
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
export default UpdateVolunteerTeams;
