import Axios from "axios";
import React, { Fragment, useState, useEffect, useContext } from "react";
import { Image } from "semantic-ui-react";
import { config } from "../../../common/config/config";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import './../admin.css'
import { UserContext } from "../../../common/context/UserProvider";
const img = require("../../../assets/pdc-logo.png");

const AdminDashboard = (props) => {
  let path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
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

  const currUser = user && adminUsers.filter((admin) => admin._id === user._id)

  return (
    <Fragment>
      <Helmet>
        <title>Admin Dashboard| Professional Development Club</title>
      </Helmet>
      {user && currUser ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            <div className="container-fluid admin-container">
              <div className="row home-bg">
                <div className="col-md-3 paddingTop14">
                  <div className="logoImg">
                    <Image src={img} />
                  </div>
                </div>
                <div className="col-md-6 paddingTop16">
                  <p className="admin-home-text-small">Welcome to the</p>
                  <p className="admin-home-text-big">
                    Admin Dashboard!
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-12 admin-intro">
                    <p className="admin-home-text-small">
                      Here You Create Events, Projects, Manage Executives, Volunteers And Many More.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
    </Fragment>
  );
};

export default AdminDashboard;
