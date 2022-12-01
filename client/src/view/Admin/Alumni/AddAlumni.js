import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

const AddAlumni = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [adminUsers, setAdminUsers] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const adminList = [];
  const { user } = userInfo;

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

  function handleSubmit() {
    const image = document.getElementById("imageUrl").value;
    const name = document.getElementById("name").value;
    const currentPosition = document.getElementById("currentPosition").value;
    const linkedIn = document.getElementById("linkedIn").value;
    const email = document.getElementById("email").value;
    const founder = false;

    if (image && name && currentPosition && email && linkedIn) {
      Axios.post(path + "alumni/add", {
        image,
        name,
        currentPosition,
        linkedIn,
        email,
        founder,
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
  return (
    <>
      <Helmet>
        <title>Add Alumni | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {thankYou ? (
              <>
                <div>
                  <h1 className="center marginTop">
                    Thank You. Alumni has been added!
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
                <h2 className="admin-h2">Add New Alumni </h2>
                {/* <h4 className="red">Contact Website Team to add the picture.</h4> */}
                <Form>
                  <Form.Field
                    control={Input}
                    label="Name"
                    placeholder="Enter Name"
                    id="name"
                  />
                  <Form.Field
                    control={Input}
                    label="Current Position"
                    placeholder="Developer at AedoAI Inc."
                    id="currentPosition"
                  />
                  <Form.Field
                    id="email"
                    control={Input}
                    label="Email"
                    placeholder="test012@uottawa.ca"
                  />
                  <Form.Field
                    id="linkedIn"
                    control={Input}
                    label="LinkedIn"
                    placeholder="https://www.linkedin.com/in/test012"
                  />
                  <Form.Field
                    id="imageUrl"
                    control={Input}
                    label="Image Url"
                    placeholder="Enter Image Url"
                  />
                  <Button type="submit" color="green" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Link to="/manage-alumni">
                    <Button type="submit" color="blue">
                      Back{" "}
                    </Button>
                  </Link>
                </Form>
              </>
            )}
          </div></div>
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
export default AddAlumni;
