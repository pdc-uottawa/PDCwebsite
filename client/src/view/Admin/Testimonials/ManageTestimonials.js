import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Button, Table, Icon, Image } from "semantic-ui-react";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";
import "../../OurTeam/OurTeam.css";
import { UserContext } from "../../../common/context/UserProvider";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import "./../admin.css"

const ManageTestimonials = (props) => {
  const path = config();
  const [VolunteerList, setVolunteerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
  const adminList = [];
  const [testimonialData, setTestimonialData] = useState([]);
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

  useEffect(() => {
    Axios.get(path + "home/testimonials", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setLoading(false);
        setTestimonialData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function removeTestimonial(_id) {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      Axios.post(path + "home/testimonials/delete", { _id })
        .then((res) => {
          setLoading(false);
          Axios.get(path + "home/testimonials", {});
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

  const uniqueTeams = [...new Set(VolunteerList.map(volunteerData => volunteerData.team))]
  console.log(uniqueTeams)
  return (
    <>
      <Helmet>
        <title>Manage Volunteers | Professional Development Club</title>
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
                  Update Testimonials
                  <Link to="/add-testimonial">
                    <Button color="teal" floated="right">
                      {" "}
                      Add Testimonial
                    </Button>
                  </Link>
                </h3>
                <div>
                  <Table className="admin-manage-team" pageSize={9} rowsPerPageOptions={[9]}>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Designation</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {testimonialData.map((testimonials) => (
                        <Table.Row>
                          <Table.Cell><Image src={testimonials.image} style={{ width: 40, height: 40, borderRadius: 400 / 2 }} /></Table.Cell>
                          <Table.Cell>{testimonials.name}</Table.Cell>
                          <Table.Cell>{testimonials.designation}</Table.Cell>
                          <Table.Cell className="content-description">{testimonials.description}</Table.Cell>
                          <Table.Cell>
                            <div className="row">
                              <div classname="col-md-6">
                                <Link to={`/update-testimonial/${testimonials._id}`}>
                                  <Icon className="edit-icon" name="edit" color="blue" />
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Button
                                  className="buttonn"
                                  onClick={() => removeTestimonial(testimonials._id)}
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

export default ManageTestimonials;
