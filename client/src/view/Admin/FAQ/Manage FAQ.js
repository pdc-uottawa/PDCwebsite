import Axios from "axios";
import React, { useEffect, useState, useContext, Component } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";
import ReactHtmlParser from 'react-html-parser'
import { UserContext } from "../../../common/context/UserProvider";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import "../../OurTeam/OurTeam.css";
import "./../admin.css"

const ManageFAQ = (props) => {
  const path = config();
  const [FAQList, setFAQList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
  const adminList = [];
  const { user } = userInfo;

  useEffect(() => {
    Axios.get(path + "FAQs/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setFAQList(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setFAQList, path]);

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

  function removeFAQ(_id) {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      Axios.post(path + "FAQs/remove", { _id })
        .then((res) => {
          setLoading(false);
          Axios.get(path + "FAQs/all", {});
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  adminUsers.map((admin) => {
    adminList.push({
      key: admin._id,
      value: admin,
      text: admin.name,
    });
  });

  return (
    <>
      <Helmet>
        <title>Manage FAQs | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {loading ? (
              <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
              </div>
            ) : (
              <>
                <h3 className="admin-h3">
                  Update FAQs
                  <Link to="/add-FAQ">
                    <Button color="teal" floated="right">
                      {" "}
                      Add FAQ
                    </Button>
                  </Link>
                </h3>
                <div>
                  <Table className="admin-manage-team" pageSize={9} rowsPerPageOptions={[9]}>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Question</Table.HeaderCell>
                        <Table.HeaderCell>Answer</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {FAQList.map((faq) => (
                        <Table.Row>
                          <Table.Cell className="content-description">{faq.ques}</Table.Cell>
                          <Table.Cell className="content-description">{ReactHtmlParser(faq.ans)}</Table.Cell>
                          <Table.Cell>
                            <div className="row">
                              <div classname="col-md-6">
                                <Link to={`/update-FAQ/${faq._id}`}>
                                  <Icon className="edit-icon" name="edit" color="blue" />
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Button
                                  className="buttonn"
                                  onClick={() => removeFAQ(faq._id)}
                                >
                                  <Icon name="delete" color="red" />
                                </Button>
                              </div>
                            </div>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>
              </>
            )
            }
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

export default ManageFAQ;
