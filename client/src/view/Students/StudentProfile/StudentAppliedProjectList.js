import React, { Fragment, useEffect, useContext,useState } from "react";
import { UserContext } from "../../../common/context/UserProvider";
import { Table, Header } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";

/**
 * @author @navpreetkaur051
 * @description This is student applied project list component. Only show the projects
 * which student applied for.
 */
const path = config();

const StudentAppliedProjectList = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const studentInfo= userInfo.user;

  const [studentAppliedProjectsInfo, setStudentAppliedProjectsInfo] = useState([]);

useEffect(() => {

  Axios.get(path + "student/appliedprojects/" + studentInfo.email)
    .then((res) => res.data)
    .then((data) => setStudentAppliedProjectsInfo(data));

},[null]);
////loading but not populating..
console.log("projects:::",studentAppliedProjectsInfo)
    return (
    <Fragment>
      <Header as="h2">Applied Projects List</Header>
      <Table celled padded>
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
          {studentAppliedProjectsInfo &&
            studentAppliedProjectsInfo.map((project) => {
              return (
                <Table.Row key={project._id}>
                  <Table.Cell><Header>{project.title}</Header></Table.Cell>
                  <Table.Cell>{project.postedOn}</Table.Cell>
                  <Table.Cell>{project.hostedBy}</Table.Cell>
                  <Table.Cell>{project.contactEmail}</Table.Cell>
                  {/* <Table.Cell>{project.status}</Table.Cell> */}
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default StudentAppliedProjectList;
