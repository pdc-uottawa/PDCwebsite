import React, { useEffect, useState, useContext } from "react";
import { Grid } from "semantic-ui-react";
import ProjectName from "./ProjectName";
import ProjectInfo from "./ProjectInfo";
import ProjectDates from "./ProjectDates";
import ProjectSkills from "./ProjectSkills"
import { Helmet } from "react-helmet";
import ProjectHost from "./ProjectHost";
import Axios from "axios";
import { config } from "../../common/config/config";
import ProjectDetailedAppliedStudents from "./ProjectDetailedAppliedStudents";
import { UserContext } from "../../common/context/UserProvider";

/**
 * @author @binjiasata
 * @description Project details page, get project details from server.
 *
 */

const path = config();

const ProjectDeatiledPageNeww = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [projectDetails, setProjectDetails] = useState({});
  const [appliedStudentsList, setAppliedStudentsList] = useState([]);
  const [width, setWidth] = useState(null);

  const { id } = props.match.params;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // get project details according to project id
  useEffect(() => {
    Axios.get(path + "project/" + id)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        //return projectDetails;
        setProjectDetails(data);
      });

    Axios.get(path + "student/apply/" + id)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAppliedStudentsList(data);
      });
  }, [setProjectDetails, id]);

  function chckadmin(ad) {
    return ad.email === userInfo.user.email;
  }

  return (
    <Grid>
      <Helmet>
        <title>Project Detail | Professional Development Club</title>
      </Helmet>
      {width < 768 ? (
        <>
          <ProjectName
            id={id}
            path={path}
            project={projectDetails}
            userInfo={userInfo}
            appliedStudentsList={appliedStudentsList}
          />
          <ProjectInfo project={projectDetails} />
          <Grid.Column width={16}>
            <ProjectDates project={projectDetails} />
            <ProjectHost project={projectDetails} />
            <>
              {userInfo.user &&
              (userInfo.user.company || userInfo.user.admin) &&
              projectDetails.user &&
              projectDetails.user.findIndex(chckadmin) !== -1 ? (
                <ProjectDetailedAppliedStudents
                  appliedStudentsList={appliedStudentsList}
                />
              ) : (
                ""
              )}
            </>
          </Grid.Column>
        </>
      ) : (
        <Grid>
          <ProjectName
            id={id}
            path={path}
            project={projectDetails}
            userInfo={userInfo}
            appliedStudentsList={appliedStudentsList}
           
          /> 
          
          <ProjectInfo project={projectDetails} />
          {/* <ProjectDates project={projectDetails} /> */}
          
          <Grid.Column width={7}>
          <ProjectSkills project={projectDetails} />
          <ProjectHost project={projectDetails} />
          
          </Grid.Column>
          <Grid.Row>
            {userInfo.user &&
            (userInfo.user.company || userInfo.user.admin) &&
            projectDetails.user &&
            projectDetails.user.findIndex(chckadmin) !== -1 ? (
              <ProjectDetailedAppliedStudents
                appliedStudentsList={appliedStudentsList}
              />
            ) : (
              ""
            )}
          </Grid.Row>
        </Grid>
      )}
    </Grid>
  );
};

export default ProjectDeatiledPageNeww;
