import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Spinner } from "react-activity";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

const UpdateOurTeam = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [TeamList, setTeamList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
  const { user } = userInfo;
  const { id } = props.match.params;

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

  useEffect(() => {
    Axios.get(path + "ourTeam/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const finalData = data.find((datum) => datum._id === id);
        setTeamList(finalData);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setTeamList, path]);

  function handleReset() {
    document.getElementById("imageUrl").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("position").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("linkedIn").innerHTML = "";
  }

  function handleSubmit() {
    let image = document.getElementById("imageUrl").value;
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    let email = document.getElementById("email").value;
    let linkedIn = document.getElementById("linkedIn").value;
    let founder = TeamList.founder;

    if (!image && !name && !position && !email && !linkedIn) {
      alert("Please Enter Any Value To Update!");
    } else {
      if (
        (image && image === TeamList.image) ||
        (name && name === TeamList.name) ||
        (position && position === TeamList.program) ||
        (email && email === TeamList.email) ||
        (linkedIn && linkedIn === TeamList.linkedIn)
      ) {
        alert("Please do not enter same values!");
      } else {
        if (!image) {
          image = TeamList.image;
        }
        if (!name) {
          name = TeamList.name;
        }
        if (!position) {
          position = TeamList.position;
        }
        if (!email) {
          email = TeamList.email;
        }
        if (!linkedIn) {
          linkedIn = TeamList.linkedIn;
        }
        Axios.post(path + "ourTeam/update", {
          _id: id,
          image,
          name,
          position,
          email,
          linkedIn,
          founder,
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
        <title>Update Team Member | Professional Development Club</title>
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
                  <Link to="/manage-ourteam">
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
                <h2 className="admin-h2">Edit our Team details</h2>
                <h4 className="red">
                  Only fill the details that needs to be updated and leave the rest
                  fields blank!
                </h4>
                {/* <h4 className="red">Contact Website Team to update the picture.</h4> */}
                <Form>
                  <Form.Field
                    control={Input}
                    label="Name"
                    placeholder={TeamList.name}
                    id="name"
                  />
                  <Form.Field
                    control={Input}
                    label="Current Position"
                    placeholder={TeamList.position}
                    id="position"
                  />
                  {TeamList.founder ? null : (
                    <Form.Field
                      id="email"
                      control={Input}
                      label="Email"
                      placeholder={TeamList.email}
                    />
                  )}
                  <Form.Field
                    id="linkedIn"
                    control={Input}
                    label="LinkedIn"
                    placeholder={TeamList.linkedIn}
                  />
                  <Form.Field
                    id="imageUrl"
                    control={Input}
                    label="Image Url"
                    placeholder={TeamList.image}
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
                  <Link to="/manage-ourteam">
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
export default UpdateOurTeam;
