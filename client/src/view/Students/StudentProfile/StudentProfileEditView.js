import React, { useState,useContext } from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import { UserContext } from "../../../common/context/UserProvider";
import { config } from "../../../common/config/config";
import Axios from "axios";
import TextareaAutosize from "react-textarea-autosize";
import "./studentprofileeditview.css"

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
    linkedin : studentInfo.linkedin?studentInfo.linkedin:"",
    studentNumber: studentInfo.studentNumber?studentInfo.studentNumber:"",
    skills: studentInfo.skills?studentInfo.skills:"",
    phoneNumber:studentInfo.phoneNumber?studentInfo.phoneNumber:"",
    program:studentInfo.program?studentInfo.program:"",
  });

  const handleFormSubmit = (event) => {

      
      var studentnumber = document.getElementById("student_number").value;
      var tel = document.getElementById("student_phoneno").value;
      var telformat = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{4}/;
      var studentprogram = document.getElementById("student_program").value;
      var studentskills = document.getElementById("student_skills").value;
      if((studentnumber==="")||(!tel.match(telformat))||(studentprogram==="")||(studentskills===""))
      {
      document.getElementById("student_number").style.border = " 1px solid red";
      document.getElementById("student_number_error_msg").style.display = "block";
      document.getElementById("student_number_error_msg").style.color = "red";
      document.getElementById("student_phoneno").style.border = " 1px solid red";
      document.getElementById("student_phoneno_error_msg").style.display = "block";
      document.getElementById("student_phoneno_error_msg").style.color = "red";
      document.getElementById("student_program").style.border = " 1px solid red";
      document.getElementById("student_program_error_msg").style.display = "block";
      document.getElementById("student_program_error_msg").style.color = "red";
      document.getElementById("student_skills").style.border = " 1px solid red";
      document.getElementById("student_skills_error_msg").style.display = "block";
      document.getElementById("student_skills_error_msg").style.color = "red";
      event.preventDefault();
      } 
      else
      {
      document.getElementById("student_number_error_msg").style.display = "none";
      document.getElementById("student_number").style.border = "";
      document.getElementById("student_phoneno_error_msg").style.display = "none";
      document.getElementById("student_phoneno").style.border = "";
      document.getElementById("student_program_error_msg").style.display = "none";
      document.getElementById("student_program").style.border = "";
      document.getElementById("student_skills_error_msg").style.display = "none";
      document.getElementById("student_skills").style.border = "";
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
      }
  };

  const StudentNumberValidation = ({ target: { name, value } }) => {
    setStudentInfo({
      ...studentProfileInfo,
      [name]: value,
    });
    var studentnumber = document.getElementById("student_number").value;
    if(studentnumber==="")
    {
    document.getElementById("student_number").style.border = " 1px solid red";
    document.getElementById("student_number_error_msg").style.display = "block";
    document.getElementById("student_number_error_msg").style.color = "red";
    } 
    else
    {
    document.getElementById("student_number_error_msg").style.display = "none";
    document.getElementById("student_number").style.border = "";
    }
  };

  const StudentPhoneValidation = ({ target: { name, value } }) =>
{
  setStudentInfo({
    ...studentProfileInfo,
    [name]: value,
  });
  
  var tel = document.getElementById("student_phoneno").value;
  var telformat = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{4}/;
  if(tel.match(telformat))
  {
    document.getElementById("student_phoneno_error_msg").style.display = "none";
    document.getElementById("student_phoneno").style.border = "";
  }
  else
  {
    document.getElementById("student_phoneno").style.border = " 1px solid red";
    document.getElementById("student_phoneno_error_msg").style.display = "block";
    document.getElementById("student_phoneno_error_msg").style.color = "red";
  } 
};

const StudentProgramValidation = ({ target: { name, value } }) =>
{
  setStudentInfo({
    ...studentProfileInfo,
    [name]: value,
  });
 
  var studentprogram = document.getElementById("student_program").value;
  if(studentprogram!=="")
  {
    document.getElementById("student_program_error_msg").style.display = "none";
    document.getElementById("student_program").style.border = "";
  }
  else
  {
    document.getElementById("student_program").style.border = " 1px solid red";
    document.getElementById("student_program_error_msg").style.display = "block";
    document.getElementById("student_program_error_msg").style.color = "red";
  } 
};

const StudentSkillsValidation = ({ target: { name, value } }) =>
{
  setStudentInfo({
    ...studentProfileInfo,
    [name]: value,
  });
 
  var studentskills = document.getElementById("student_skills").value;
  if(studentskills!=="")
  {
    document.getElementById("student_skills_error_msg").style.display = "none";
    document.getElementById("student_skills").style.border = "";
  }
  else
  {
    document.getElementById("student_skills").style.border = " 1px solid red";
    document.getElementById("student_skills_error_msg").style.display = "block";
    document.getElementById("student_skills_error_msg").style.color = "red";
  } 
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
            id="student_name"
            name="name"
            value={studentProfileInfo.name}
            placeholder="Name"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Student Number</label>
          <input
            id="student_number"
            name="studentNumber"
            value={studentProfileInfo.studentNumber}
            onChange={StudentNumberValidation}
            placeholder="Student Number"
          />
          <div id="student_number_error_msg"><p>* please provide a student number</p></div>
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={studentProfileInfo.email}
            //onChange={handleFormChange}
            placeholder="Email"
            disabled
          />
        </Form.Field>

        <Form.Field>
          <label>Phone Number</label>
          <input
            id="student_phoneno"
            name="phoneNumber"
            value={studentProfileInfo.phoneNumber}
            onChange={StudentPhoneValidation}
            placeholder="Phone Number"
          />
          <div id="student_phoneno_error_msg"><p>* please provide a valid student phone number</p></div>
        </Form.Field>

        {/* <Form.Field>
          <label>LinkedIn URL</label>
          <input
            name="linkedin"
            id="linkedin"
            value={studentProfileInfo.linkedin}
            onChange={handleFormChange}
            placeholder="Linkedin URL"
          />
        </Form.Field> */}

        <Form.Field>
          <label>Program</label>
          <input
            id="student_program"
            name="program"
            value={studentProfileInfo.program}
            onChange={StudentProgramValidation}
            placeholder="Program of study"
          />
          <div id="student_program_error_msg"><p>* please provide a student program</p></div>
        </Form.Field>

        <Form.Field
          id="student_skills"
          control={TextareaAutosize}
          name="skills"
          label="List your skills"
          placeholder="skills"
          onChange={StudentSkillsValidation}
          value={studentProfileInfo.skills}
        ></Form.Field>
        <Form.Field><div id="student_skills_error_msg"><p>* please provide student skills</p></div></Form.Field>

        <Button positive type="submit">
          Update
        </Button>
      </Form>
    </Segment>
  );
};

export default StudentProfileEditView;
