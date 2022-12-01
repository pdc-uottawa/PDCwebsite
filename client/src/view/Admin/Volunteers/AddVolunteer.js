import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button, Dropdown, Select } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

const AddVolunteer = () => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [loading, setLoading] = useState(true);
  const [volunteerList, setVolunteerList] = useState([]);
  const [teamOptionsValue, setTeamOptionsValue] = useState(null);
  const [adminUsers, setAdminUsers] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { user } = userInfo;
  const adminList = [];

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

  adminUsers.map((admin) => {
    adminList.push({
      key: admin._id,
      value: admin,
      text: admin.name,
    });
  });

  const teamsOptionHandler = (e) => {
    e === null ? setTeamOptionsValue("") : setTeamOptionsValue(e.value);
  };

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
  }, [volunteerList, setVolunteerList, path]);

  function handleSubmit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const team = document.getElementById("team").value;

    if (name && email && team) {
      Axios.post(path + "ourVolunteers/add", {
        name,
        email,
        team,
      })
        .then((res) => {
          setThankYou(true);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Please enter all details!");
    }
  }
  const uniqueTeams = [...new Set(volunteerList.map(volunteerData => volunteerData.team))]

  const TeamOptions = [];

  uniqueTeams.map((teams) => {
    TeamOptions.push({ key: teams, text: teams, value: teams });
  });
  return (
    <>
      <Helmet>
        <title>Add Volunteer | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {thankYou ? (
              <>
                <div>
                  <h1 className="center marginTop">
                    Thank You. Volunteer has been added!
                  </h1>
                  <Link to="/manage-volunteers">
                    <input
                      type="submit"
                      className="backButton marginLeft marginTop"
                      value="Back"
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 className="admin-h2">Add New Volunteer </h2>
                <Form>
                  <Form.Field
                    control={Input}
                    label="Name"
                    placeholder="Enter Name"
                    id="name"
                  />
                  <Form.Field
                    id="email"
                    control={Input}
                    label="Email"
                    placeholder="test012@uottawa.ca"
                  />
                  <Form.Select
                    id="team"
                    control={Input}
                    label="Team"
                    // options={TeamOptions}
                    placeholder="Select Team"
                  // onChange={teamsOptionHandler}
                  />
                  <Button type="submit" color="green" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Link to="/manage-volunteers">
                    <Button type="submit" color="blue">
                      Back{" "}
                    </Button>
                  </Link>
                </Form>
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
export default AddVolunteer;
