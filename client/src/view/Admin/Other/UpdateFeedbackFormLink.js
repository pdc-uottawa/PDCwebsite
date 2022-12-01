import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Spinner } from "react-activity";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import reactTextareaAutosize from "react-textarea-autosize";
import { UserContext } from "../../../common/context/UserProvider";

const UpdateFeedbackFormLink = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [LinksList, setLinksList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminUsers, setAdminUsers] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { id } = props.match.params;
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

  useEffect(() => {
    Axios.get(path + "form/feedbackLink", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const finalData = data.find((datum) => datum._id === id);
        setLinksList(finalData);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setLinksList, path]);

  function handleReset() {
    document.getElementById("link").innerHTML = "";
  }

  function handleSubmit() {
    let link = document.getElementById("link").value;

    if (!link) {
      alert("Please Enter the link to update!");
    } else {
      if (
        (link && link === LinksList.link)
      ) {
        alert("Please do not enter same value!");
      } else {
        if (!link) {
          link = LinksList.link;
        }
        Axios.post(path + "form/feedbackLink/update", {
          _id: id,
          link,
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
        <title>Update Join Team Link | Professional Development Club</title>
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
                  <Link to="/manage-other-info">
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
                <h2 className="admin-h2">Edit Join Team Link</h2>
                <h4 className="red">
                  Only fill the link if needs to be updated!
                </h4>
                <Form>
                  <Form.Field
                    control={reactTextareaAutosize}
                    label="Feedback Form Link"
                    placeholder={LinksList.link}
                    id="link"
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
                  <Link to="/manage-other-info">
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
          <center  className="page-not-found">
            <h1>Oops, Page Not Found!</h1>
            <h3>Please login as an admin to view this page!</h3>
          </center>
        </>
      )}
    </>
  );
};
export default UpdateFeedbackFormLink;
