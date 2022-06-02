import React, { useState, useEffect } from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import { config } from "../../../common/config/config";
import TextareaAutosize from "react-textarea-autosize";
import Axios from "axios";
import { Helmet } from "react-helmet";

/**
 * @author @navpreetkaur051
 * @description This is student profile to view by project owner
 **/
const path = config();

const StudentProfileView = (props) => {
  const studentId = props.match.params.id;
  const [studentProfileInfo, setStudentInfo] = useState([{}]);

  useEffect(() => {
    Axios.get(path + "student/profile/" + studentId)
      .then((res) => res.data)
      .then((data) => setStudentInfo(data));
  }, [null]);

  return (
    <Segment>
      <Helmet>
        <title>Student Profile View | Professional Development Club</title>
      </Helmet>
      <Header as="h2">
        <Header.Content>Student Profile</Header.Content>
      </Header>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            value={studentProfileInfo[0].name}
            placeholder="Name"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Student Number</label>
          <input
            name="studentNumber"
            value={studentProfileInfo[0].studentNumber}
            placeholder="Student Number"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={studentProfileInfo[0].email}
            placeholder="Email"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            value={studentProfileInfo[0].phoneNumber}
            placeholder="Phone Number"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Phone Number</label>
          <input
            name="linkedin"
            value={studentProfileInfo[0].linkedin}
            placeholder="Linkedin Url"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Program</label>
          <input
            name="program"
            value={studentProfileInfo[0].program}
            placeholder="Program of study"
            disabled
          />
        </Form.Field>

        <Form.Field
          control={TextareaAutosize}
          name="skills"
          label="List your skills"
          placeholder="skills"
          value={studentProfileInfo[0].skills}
          disabled
        ></Form.Field>
      </Form>
    </Segment>
  );
};

export default StudentProfileView;
