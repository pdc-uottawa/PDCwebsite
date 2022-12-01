import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

const AddForm = (props) => {
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
    const name = document.getElementById("name").value;
    const program = document.getElementById("program").value;
    const email = document.getElementById("email").value;

    if (name && program && email) {
      Axios.post(path + "coordinators/add", {
        name,
        program,
        email,
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
        <title>Add New Coordinator | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {thankYou ? (
              <>
                <div>
                  <h1 className="center marginTop">
                    Thank You. Coordinator has been added!
                  </h1>
                  <Link to="/update-coordinators">
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
                <h2 className="admin-h2">Add New Coordinator</h2>
                <Form>
                  <Form.Field
                    control={Input}
                    label="Name"
                    placeholder="Enter Name"
                    id="name"
                  />
                  <Form.Field
                    control={Input}
                    label="Program"
                    placeholder="Electrical and Computer Engineering (ELG)"
                    id="program"
                  />
                  <Form.Field
                    id="email"
                    control={Input}
                    label="Email"
                    placeholder="test012@uottawa.ca"
                  />
                  <Button type="submit" color="teal" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Link to="/update-coordinators">
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
export default AddForm;
