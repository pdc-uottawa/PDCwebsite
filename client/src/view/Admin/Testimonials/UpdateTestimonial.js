import React, { useContext, useEffect, useState } from "react";
import { Form, Input } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Spinner } from "react-activity";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import reactTextareaAutosize from "react-textarea-autosize";
import { UserContext } from "../../../common/context/UserProvider";

const UpdateTestimonial = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [TestimonialList, setTestimonialList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
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
    Axios.get(path + "home/testimonials", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const finalData = data.find((datum) => datum._id === id);
        setTestimonialList(finalData);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setTestimonialList, path]);

  function handleReset() {
    document.getElementById("imageUrl").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("description").innerHTML = "";
    document.getElementById("designation").innerHTML = "";
  }

  function handleSubmit() {
    let image = document.getElementById("imageUrl").value;
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let designation = document.getElementById("designation").value;

    if (!image && !name && !description && !designation) {
      alert("Please Enter Any Value To Update!");
    } else {
      if (
        (image && image === TestimonialList.image) ||
        (name && name === TestimonialList.name) ||
        (description && description === TestimonialList.description) ||
        (designation && designation === TestimonialList.designation)
      ) {
        alert("Please do not enter same values!");
      } else {
        if (!image) {
          image = TestimonialList.image;
        }
        if (!name) {
          name = TestimonialList.name;
        }
        if (!description) {
          description = TestimonialList.description;
        }
        if (!designation) {
          designation = TestimonialList.designation;
        }
        Axios.post(path + "home/testimonials/update", {
          _id: id,
          image,
          name,
          description,
          designation,
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
        <title>Update Testimonial | Professional Development Club</title>
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
                <h2 className="admin-h2">Edit Testimonial details</h2>
                <h4 className="red">
                  Only fill the details that needs to be updated and leave the rest
                  fields blank!
                </h4>
                {/* <h4 className="red">Contact Website Team to update the picture.</h4> */}
                <Form>
                  <Form.Field
                    control={Input}
                    label="Name"
                    placeholder={TestimonialList.name}
                    id="name"
                  />
                  <Form.Field
                    control={Input}
                    label="Designation"
                    placeholder={TestimonialList.designation}
                    id="designation"
                  />
                  <Form.Field
                    id="description"
                    control={reactTextareaAutosize}
                    label="Description"
                    placeholder={TestimonialList.description}
                  />
                  <Form.Field
                    control={Input}
                    label="Image Url"
                    placeholder={TestimonialList.image}
                    id="imageUrl"
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
                  <Link to="/manage-testimonials">
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
export default UpdateTestimonial;
