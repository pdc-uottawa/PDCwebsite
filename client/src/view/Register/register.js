import React, {useState,useContext} from "react";
import { Segment, Form, Button, Header,Dropdown } from "semantic-ui-react";
import { config } from "../../common/config/config";
import { UserContext } from "../../common/context/UserProvider";
import TextareaAutosize from "react-textarea-autosize";
import useReactRouter from "use-react-router";

import Axios from "axios";
/**
 * @author @harmanbhutani
 * @description This is student registration page
 **/
const path = config();

const Register = () => {
 
  const { userInfo, setUserInfo } = useContext(UserContext);
  const studentInfo= userInfo.user;
  const { history } = useReactRouter();

  const [studentProfileInfo, setStudentInfo] = useState({
    studentId:studentInfo._id?studentInfo._id:"",
    name: studentInfo.name?studentInfo.name:"",
    email: studentInfo.email,
    linkedin : studentInfo.linkedin?studentInfo.linkedin:"",
    studentNumber: studentInfo.studentNumber?studentInfo.studentNumber:"",
    skills: studentInfo.skills?studentInfo.skills:"",
    phoneNumber:studentInfo.phoneNumber?studentInfo.phoneNumber:"",
    program:studentInfo.program?studentInfo.program:"",
  });

  
  // useEffect(() => {

  //   Axios.get(path + "student/profile/" + studentId)
  //     .then((res) => res.data)
  //     .then((data) => setStudentInfo(data));
    
  // },[null]);
 
  // const { data_value } = this.props.location;
  // console.log(data_value+".......");

  // handle dropdown category
  const handleProgramChange = (e, data) => {
    setStudentInfo({
      ...studentProfileInfo,
      program : data.value,
    });
  };

  // const categoryOptions = [
  //    text: "Machine Learning", value: "Machine Learning"
  // ];

  const categoryOptions = [
    { key: "DTI", text: "DTI(UI/UX,Data Science)", value: "DTI(UI/UX,Data Science)"},
    { key: "SystemSciences", text: "System Science", value: "System Science" },
    { key: "AMM", text: "AMM and Mechanical Engineering", value: "AMM and Mechanical Engineering" },
    { key: "ELG", text: "Electrical and Computer(ELG)", value: "Electrical and Computer(ELG)" },
    { key: "CS", text: "Computer Science", value: "Computer Science" },
    { key: "Engineeringmanagement", text: "Engineering Project Management", value: "Engineering Project Management" },
    { key: "ECivil", text: "Environment and Civil Engineering", value: "Environment and Civil Engineering" },
    { key: "BioChem", text: "Bio-Medical and Chemical Engineering", value: "Bio-Medical and Chemical Engineering" },
    
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    Axios.post(path + "student/profile/edit/", studentProfileInfo)
      .then((res) => {
        if (res.data.message === "updated successfully") {
            alert("Your profile is updated!");
            return res.data;
        }
      })
      .then((data) => {
        setUserInfo({
          ...userInfo,
          user: data.user
        });     
      })
      .catch((e) => {
        console.log(e);
      });

      history.push("/");
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
        <Header.Content>Registration Form</Header.Content>
      </Header>
        <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            id="name"
            placeholder="Name"
            value={studentProfileInfo.name}
            type="text"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Student Number</label>
          <input
            name="studentNumber"
            placeholder="Student Number"
            value={studentProfileInfo.studentNumber}
            onChange={handleFormChange}
            id="studentnumber"
           
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            id="email"
            value={studentProfileInfo.email}
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
            id="phonenumber"
          />
        </Form.Field>
        <Form.Field>
          <label>LinkedIn URL</label>
          <input
            name="linkedin"
            id="linkedin"
            value={studentProfileInfo.linkedin}
            onChange={handleFormChange}
            placeholder="Linkedin URL"
           
          />
        </Form.Field>


        <Form.Field>
          <label>Program</label>
          <Dropdown
            name="program"
            placeholder="Program of study"
            fluid
            selection
            onChange={handleProgramChange}
            options={categoryOptions}
          />
        </Form.Field>

        <Form.Field
          control={TextareaAutosize}
          name="skills"
          label="List your skills"
          id="skills"
          placeholder="skills"
          onChange={handleFormChange}
          value={studentProfileInfo.skills}
         
        ></Form.Field>

<Button positive type="submit" >
         Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default Register;
