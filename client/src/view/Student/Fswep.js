import React, { useState, useEffect } from "react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Helmet } from "react-helmet";
import { Spinner } from "react-activity";

const Fswep = (props) => {
  const path = config();
  const [fswepList, setFswepList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(path + "fswepPrograms/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setFswepList(data);
        console.log(data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setFswepList, path]);
  return (
    <>
      <Helmet>
        <title>FSWEP | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) :
        <div class="container-fluid">
          <div className="container-fluid all-data">
            <h1 class="jumbotron center hdr">
              Programs recognized by FSWEP
            </h1>
            <p>
              Following programs in University of Ottawa’s Faculty of Engineering have
              been registered in{" "}
              <a href="https://www.canada.ca/en/public-service-commission/jobs/services/recruitment/students/federal-student-work-program.html">
                FSWEP
              </a>{" "}
              as recognized for internship, co-op programs.
            </p>
            <table class="table table-striped center">
              {fswepList.filter((fsweplist => fsweplist.active === true)).map((fswep) => {
                console.log(fswep)
                return (
                  <tbody>
                    <tr>
                      <td class=" item ">
                        {fswep.name}
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
            <p>Duration of the co-op or internship term can be 4 or 8 months.</p>
            <p>
              Information about FSWEP can be found{" "}
              <a href="https://www.canada.ca/en/public-service-commission/jobs/services/recruitment/students/federal-student-work-program.html">
                here
              </a>
              .
            </p>
          </div>
        </div>
      }
    </>
  );
};

export default Fswep;
