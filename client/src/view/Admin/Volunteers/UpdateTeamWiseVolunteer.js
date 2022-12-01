import React, { useContext, useEffect, useState } from "react";
import { Form, Input } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Spinner } from "react-activity";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

const UpdateTeamWiseVolunteer = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [VolunteerList, setVolunteerList] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const { id } = props.match.params;

  useEffect(() => {
    Axios.get(path + "ourVolunteers/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const finalData = data.find((datum) => datum._id === id);
        setVolunteerList(finalData);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setVolunteerList, path]);

  function handleReset() {
    document.getElementById("name").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("team").innerHTML = "";
  }

  function handleSubmit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let team = document.getElementById("team").value;

    if (!name && !email && !team) {
      alert("Please Enter Any Value To Update!");
    } else {
      if (
        (name && name === VolunteerList.name) ||
        (email && email === VolunteerList.email) ||
        (team && team === VolunteerList.team)
      ) {
        alert("Please do not enter same values!");
      } else {
        if (!name) {
          name = VolunteerList.name;
        }
        if (!email) {
          email = VolunteerList.email;
        }
        if (!team) {
          team = VolunteerList.team;
        }
        Axios.post(path + "ourVolunteers/update", {
          _id: id,
          name,
          email,
          team
        })
          .then((res) => {
            // console.log(res.data);
            setThankYou(true);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }
  return (
    <>
      <Helmet>
        <title>Update Volunteer | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {loading ? (
              <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
              </div>
            ) : thankYou ? (
              <>
                <div>
                  <h1 className="center marginTop">
                    Thank You. Details has been updated!
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
                <h2 className="admin-h2">Edit Volunteer details</h2>
                <h4 className="red">
                  Only fill the details that needs to be updated and leave the rest
                  fields blank!
                </h4>
                <Form>
                  <Form.Field
                    control={Input}
                    label="Name"
                    placeholder={VolunteerList.name}
                    id="name"
                  />
                  <Form.Field
                    id="email"
                    control={Input}
                    label="Email"
                    placeholder={VolunteerList.email}
                  />
                  <Form.Field
                    id="team"
                    control={Input}
                    label="Team"
                    placeholder={VolunteerList.team}
                  />
                  <input
                    type="submit"
                    className="submitButton"
                    onClick={handleSubmit}
                  />
                  <input
                    type="reset"
                    className="resetButton marginLeft"
                    onClick={handleReset}
                  />
                  <Link to="/manage-ourvolunteers">
                    <input
                      type="submit"
                      className="backButtonBlue marginLeft"
                      value="Back"
                    />
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
export default UpdateTeamWiseVolunteer;
