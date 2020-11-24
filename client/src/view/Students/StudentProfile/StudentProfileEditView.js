import React, { useState,useContext } from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import { UserContext } from "../../../common/context/UserProvider";
import { config } from "../../../common/config/config";
import Axios from "axios";
import TextareaAutosize from "react-textarea-autosize";

/**
 * @author @navpreetkaur051
 * @description This is student profile to view and edit by student
 **/
const path = config();

const StudentProfileEditView = () => {

  const { userInfo, setUserInfo } = useContext(UserContext);
  const studentInfo= userInfo.user;

  //need to provide some time lapse to load
  const [studentProfileInfo, setStudentInfo] = useState({
    studentId:studentInfo._id?studentInfo._id:"",
    name: studentInfo.name?studentInfo.name:"",
    email: studentInfo.email,
    studentNumber: studentInfo.studentNumber?studentInfo.studentNumber:"",
    skills: studentInfo.skills?studentInfo.skills:"",
    phoneNumber:studentInfo.phoneNumber?studentInfo.phoneNumber:"",
    program:studentInfo.program?studentInfo.program:"",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    Axios.post(path + "student/profile/edit/", studentProfileInfo)
      .then((res) => {
        if (res.data.message === "updated successfully") {
            alert("Your profile is updated!");
            //return res.data;
        }
      })
      ///this not working properly, need to consult with team
      // .then((data) => {
      //   setUserInfo({
      //     ...userInfo,
      //     user: data.user
      //   });     
      // })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setStudentInfo({
      ...studentProfileInfo,
      [name]: value,
    });
  };
  return (
    <Segment>
      <Header as="h2">
        <Header.Content>Student Profile</Header.Content>
      </Header>
        <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            value={studentProfileInfo.name}
            onChange={handleFormChange}
            placeholder="Name"
          />
        </Form.Field>

        <Form.Field>
          <label>Student Number</label>
          <input
            name="studentNumber"
            value={studentProfileInfo.studentNumber}
            onChange={handleFormChange}
            placeholder="Student Number"
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={studentProfileInfo.email}
            onChange={handleFormChange}
            placeholder="Email"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            value={studentProfileInfo.phoneNumber}
            onChange={handleFormChange}
            placeholder="Phone Number"
          />
        </Form.Field>

        <Form.Field>
          <label>Program</label>
          <input
            name="program"
            value={studentProfileInfo.program}
            onChange={handleFormChange}
            placeholder="Program of study"
          />
        </Form.Field>

        <Form.Field
          control={TextareaAutosize}
          name="skills"
          label="List your skills"
          placeholder="skills"
          onChange={handleFormChange}
          value={studentProfileInfo.skills}
        ></Form.Field>

        <Button positive type="submit">
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default StudentProfileEditView;
