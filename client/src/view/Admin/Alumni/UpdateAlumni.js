import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Spinner } from "react-activity";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

const UpdateAlumni = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [AlumniList, setAlumniList] = useState([]);
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
    Axios.get(path + "alumni/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const finalData = data.find((datum) => datum._id === id);
        setAlumniList(finalData);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setAlumniList, path]);

  function handleReset() {
    document.getElementById("name").innerHTML = "";
    document.getElementById("currentPosition").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("linkedIn").innerHTML = "";
  }

  function handleSubmit() {
    let image = document.getElementById("imageUrl").value;
    let name = document.getElementById("name").value;
    let currentPosition = document.getElementById("currentPosition").value;
    let email = document.getElementById("email").value;
    let linkedIn = document.getElementById("linkedIn").value;
    let founder = AlumniList.founder;

    if (!image && !name && !currentPosition && !email && !linkedIn) {
      alert("Please Enter Any Value To Update!");
    } else {
      if (
        (image && image === AlumniList.image) ||
        (name && name === AlumniList.name) ||
        (currentPosition && currentPosition === AlumniList.program) ||
        (email && email === AlumniList.email) ||
        (linkedIn && linkedIn === AlumniList.linkedIn)
      ) {
        alert("Please do not enter same values!");
      } else {
        if (!image) {
          image = AlumniList.image;
        }
        if (!name) {
          name = AlumniList.name;
        }
        if (!currentPosition) {
          currentPosition = AlumniList.currentPosition;
        }
        if (!email) {
          email = AlumniList.email;
        }
        if (!linkedIn) {
          linkedIn = AlumniList.linkedIn;
        }
        Axios.post(path + "alumni/update", {
          _id: id,
          image,
          name,
          currentPosition,
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
        <title>Update Alumni | Professional Development Club</title>
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
                  <Link to="/manage-alumni">
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
                    placeholder={AlumniList.name}
                    id="name"
                  />
                  <Form.Field
                    control={Input}
                    label="Current Position"
                    placeholder={AlumniList.currentPosition}
                    id="currentPosition"
                  />
                  {AlumniList.founder ? null : (
                    <Form.Field
                      id="email"
                      control={Input}
                      label="Email"
                      placeholder={AlumniList.email}
                    />
                  )}
                  <Form.Field
                    id="linkedIn"
                    control={Input}
                    label="LinkedIn"
                    placeholder={AlumniList.linkedIn}
                  />
                  <Form.Field
                    id="imageUrl"
                    control={Input}
                    label="Enter Image Url"
                    placeholder={AlumniList.image}
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
                  <Link to="/manage-alumni">
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
export default UpdateAlumni;