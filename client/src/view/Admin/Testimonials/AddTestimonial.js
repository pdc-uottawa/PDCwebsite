import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

const AddTestimonial = (props) => {
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
    const designation = document.getElementById("designation").value;
    const description = document.getElementById("description").value;

    if (image && name && designation && description) {
      Axios.post(path + "home/testimonials/add", {
        image,
        name,
        designation,
        description,
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
        <title>Add Testimonial | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {thankYou ? (
              <>
                <div>
                  <h1 className="center marginTop">
                    Thank You. Testimonial has been added!
                  </h1>
                  <Link to="/manage-testimonials">
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
                <h2 className="admin-h2">Add New Testimonial </h2>
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
                    label="Designation"
                    placeholder="Designation"
                    id="designation"
                  />
                  <Form.Field
                    id="description"
                    control={Input}
                    label="Description"
                    placeholder="Description"
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
                  <Link to="/manage-testimonials">
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
export default AddTestimonial;
