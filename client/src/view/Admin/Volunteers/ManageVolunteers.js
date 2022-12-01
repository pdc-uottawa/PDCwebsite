import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Button, Icon, Card } from "semantic-ui-react";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";
import "../../OurTeam/OurTeam.css";
import { UserContext } from "../../../common/context/UserProvider";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import "./../admin.css"

const ManageVolunteers = (props) => {
  const path = config();
  const [VolunteerList, setVolunteerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
  const adminList = [];
  const { user } = userInfo;

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

  const uniqueTeams = [...new Set(VolunteerList.map(volunteerData => volunteerData.team))]
  console.log(uniqueTeams)
  return (
    <>
      <Helmet>
        <title>Manage Volunteers | Professional Development Club</title>
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
                  Update Volunteer Details
                  <Link to="/add-volunteer">
                    <Button color="teal" floated="right">
                      {" "}
                      Add Volunteer
                    </Button>
                  </Link>
                </h3>
                <div className="row center flex" >
                  {uniqueTeams.map((team) => (
                    // <div class="container overflow-hidden">
                    <div className="col-md-4 select">
                      <Card>
                        <Card.Content>
                          <Card.Header>{team} </Card.Header>
                          <Card.Description className="right aligned description">
                            <Link to={`/update-volunteers/${team}`}>
                              <Icon name="edit" color="blue" />
                              Edit Team Members
                            </Link>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </div>
                    // </div>
                  ))}
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

export default ManageVolunteers;
