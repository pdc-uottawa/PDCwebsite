import React, { useState, useEffect } from "react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Helmet } from "react-helmet";
import './student.css'
import { Spinner } from "react-activity";

const StudentForm = (props) => {
  const path = config();
  const [studentAssociationsList, setStudentAssociationsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(path + "studentAssociations/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setStudentAssociationsList(data);
        console.log(data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setStudentAssociationsList, path]);
  return (
    <>
      <Helmet>
        <title>Student Form | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) :
        <div className="container-fluid">
          <div className="container-fluid all-data">
            <h1 className=" jumbotron hdr center">
              Student associations
            </h1>
            <h3>All the associations in University of Ottawa can be found&nbsp;
              <a href="https://gsaed.ca/en/about-us/structure/departmental-associations/">here</a>.
            </h3>
            <table class="table table-striped st-tb">
              <thead class="st-tb-hd">
                <tr>
                  <th>ASSOCIATION</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {studentAssociationsList
                  .filter((stAssociationsList) => stAssociationsList.status === true)
                  .map((AssociationsList) => {
                    return (
                      <tr>
                        <td><a class="item" href={AssociationsList.link}>
                          {AssociationsList.name}
                        </a>
                        </td>
                        <td>
                          <div className=" col-md-5 center active-status">Active</div>
                        </td>
                      </tr>
                    )
                  })}
                {studentAssociationsList
                  .filter((stAssociationsList) => stAssociationsList.status === false)
                  .map((AssociationsList) => {
                    return (
                      <tr>
                        <td><a class="item" href={AssociationsList.link}>
                          {AssociationsList.name}
                        </a>
                        </td>
                        <td>
                          <div className=" col-md-5 center inactive-status">Inactive</div>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      }
    </>
  );
};

export default StudentForm;
