import React, { Fragment, useState, useEffect, useContext } from "react";
import { Grid } from "semantic-ui-react";
import ProjectList from "./ProjectList";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import { Spinner } from "react-activity";
import { Helmet } from "react-helmet";
import "react-activity/dist/Spinner.css";
import "./projectList.css";

/**
 * @author @binjiasata
 * @description This page shows a project list and a create new project button.
 *              The project list is got from server.
 *
 */
const ProjectListInterface = (props) => {
  // path config http://localhost:8080/
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [projectsInfo, setProjectsInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  // when click create new project, jump to create-project page
  // const handleCreateNewProject = () => {
  //   props.history.push("/create-project");
  // };

  useEffect(() => {
    Axios.get(path + "project", {})
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        setProjectsInfo(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setProjectsInfo, path]);

  return (
    <>
      <Helmet>
        <title>Project List | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <div className="container">
          <ProjectList projectsInfo={projectsInfo} />
        </div>
      )}
    </>
  );
};

export default ProjectListInterface;
