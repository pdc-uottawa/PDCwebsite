import React, { Fragment, useEffect, useContext,useState } from "react";
import { UserContext } from "../../../common/context/UserProvider";
import { Table, Header } from "semantic-ui-react";
import Axios from "axios";
import useReactRouter from "use-react-router";
import { config } from "../../../common/config/config";

/**
 * @author @navpreetkaur051
 * @description This is student applied project list component. Only show the projects
 * which student applied for.
 */
const path = config();

const StudentAppliedProjectList = () => {
  const { history } = useReactRouter();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const studentInfo= userInfo.user;
  const [isLoading, setIsLoading] = useState(true);
  const [studentAppliedProjectsInfo, setStudentAppliedProjectsInfo] = useState([]);

  useEffect(() => {
    const fetchIDs = ()=>{
      
       Axios.get(path + "student/appliedprojects/" + studentInfo.email)
                            .then((res) =>{
                              let projData = res.data;
                              let projectIDs =[];
                                projData.forEach(project => {
                                    let projId = project.projectId;
                                    projectIDs.push(projId);
                                  });
                                  fetchProjects(projectIDs);
                            })
                            .catch((e) => {
                              console.log(e);
                            });
       }
    const fetchProjects = (projIDs)=>{
      Axios.post(path + "student/appliedprojectsDetails/", projIDs)
      .then((res)=>{
        setStudentAppliedProjectsInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
       setIsLoading(false);
    }
    fetchIDs();
  }, [null]); 

    return (
    <Fragment>
      <Header as="h2">Applied Projects List</Header>
      {isLoading ? ("Loading...") : 
        (<Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Project Title</Table.HeaderCell>
              <Table.HeaderCell>Posted On</Table.HeaderCell>
              <Table.HeaderCell>Hosted By</Table.HeaderCell>
              <Table.HeaderCell>Contact email</Table.HeaderCell>
              {/* <Table.HeaderCell>Status</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {studentAppliedProjectsInfo.length>0?(
              studentAppliedProjectsInfo.map((project) => {
                return (
                  <Table.Row key={project._id}>
                    <Table.Cell>
                      <a onClick={()=>history.push("/project-detail/" + project._id)}>
                        <Header  color="blue">{project.title}</Header>
                      </a>
                      </Table.Cell>
                    <Table.Cell>{project.postedOn}</Table.Cell>
                    <Table.Cell>{project.hostedBy}</Table.Cell>
                    <Table.Cell>{project.contactEmail}</Table.Cell>
                    {/* <Table.Cell>{project.status}</Table.Cell> */}
                  </Table.Row>
                );
              })):<div>No projects to show.</div>}
          </Table.Body>
        </Table>)
      }
    </Fragment>
  );
};

export default StudentAppliedProjectList;
