import React, { useState, useContext, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import UploadResume from "./UploadResume";
import { UserContext } from "../../../common/context/UserProvider";
import { Helmet } from "react-helmet";
import TextareaAutosize from "react-textarea-autosize";
import "./Applyform.css";

const ApplyForm = (props) => {
  const path = config();
  const projectId = props.match.params.id;
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [projectDetails, setProjectDetails] = useState({});
  var applieddate = new Date();
  var applieddate_string = applieddate.toString();

  //need to insert some time lapse for loading
  const [applyInfo, setApplyInfo] = useState({
    projectId: projectId,
    studentId: userInfo.user._id ? userInfo.user._id : "",
    name: userInfo.user.name ? userInfo.user.name : "",
    email: userInfo.user.email,
    //studentNumber: userInfo.user.studentNumber?userInfo.user.studentNumber:"",
    description: "",
    resume: "",
    isApplied: true, // isApplied do not use for now
    AppliedDate: applieddate_string,
  });

  const handleFormSubmit = (event) => {
    var desc = document.getElementById("studentapplydesciption").value;
    var desclen = desc.length;
    if (desc === "" || desclen < 50) {
      document.getElementById("studentapplydesciption").style.border =
        " 1px solid red";
      document.getElementById(
        "studentapplydesciption_error_msg"
      ).style.display = "block";
      document.getElementById("studentapplydesciption_error_msg").style.color =
        "red";
      event.preventDefault();
    } else {
      document.getElementById(
        "studentapplydesciption_error_msg"
      ).style.display = "none";
      document.getElementById("studentapplydesciption").style.border = "";
      Axios.post(path + "student/apply", applyInfo)
        .then((res) => {
          if (res.data === "You have already applied") {
            alert("You have already applied for this project!");
          } else if (res.data === "added successfully") {
            sendEmailToProjectOwner(applyInfo.projectId);
          }
        })
        .catch((e) => {
          console.log(e);
        });
      props.history.push("/project-list");
    }
  };

  const sendEmailToProjectOwner = () => {
    var emails = [];
    var names = [];
    for (var i = 0; i < projectDetails.user.length; i++) {
      emails.push(projectDetails.user[i].email);
      names.push(projectDetails.user[i].name);
    }
    const emailOptions = {
      emailToAddress: emails,
      emailToName: names,
      emailForProject: projectDetails.title,
      // emailSubject:"Application Received for Project:"+ projectDetails.title,
      emailApplicant: userInfo.user.email,
    };
    //send email to owner
    Axios.post(path + "email/send", emailOptions).catch((e) => {
      console.log(e);
    });
  };

  // const handleFormChange = ({ target: { name, value } }) => {
  //   setApplyInfo({
  //     ...applyInfo,
  //     [name]: value,
  //   });
  // };

  const StudentApplyDescription = ({ target: { name, value } }) => {
    setApplyInfo({
      ...applyInfo,
      [name]: value,
    });
    var desc = document.getElementById("studentapplydesciption").value;
    var desclen = desc.length;
    if (desc === "" || desclen < 50) {
      document.getElementById("studentapplydesciption").style.border =
        " 1px solid red";
      document.getElementById(
        "studentapplydesciption_error_msg"
      ).style.display = "block";
      document.getElementById("studentapplydesciption_error_msg").style.color =
        "red";
    } else {
      document.getElementById(
        "studentapplydesciption_error_msg"
      ).style.display = "none";
      document.getElementById("studentapplydesciption").style.border = "";
    }
  };
  useEffect(() => {
    Axios.get(path + "project/" + applyInfo.projectId)
      .then((res) => {
        setProjectDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [null]);

  return (
    <Segment>
      <Helmet>
        <title>Apply Form | Professional Development Club</title>
      </Helmet>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Form.Field>
          <label>Your Name</label>
          <input
            name="name"
            value={applyInfo.name}
            //onChange={handleFormChange}
            placeholder="Your Name"
            disabled
          />
        </Form.Field>

        {/* <Form.Field>
          <label>Student Number</label>
          <input
            name="studentNumber"
            value={userInfo.user.studentNumber}
            //onChange={handleFormChange}
            placeholder="Student Number"
            disabled
          />
        </Form.Field> */}

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={applyInfo.email}
            placeholder="Your email"
            disabled
          />
        </Form.Field>

        <Form.Field
          id="studentapplydesciption"
          control={TextareaAutosize}
          name="description"
          label="Description explaining why you're interested in this project"
          placeholder="Enter your description"
          onChange={StudentApplyDescription}
          value={applyInfo.description}
        ></Form.Field>
        <Form.Field>
          <div id="studentapplydesciption_error_msg">
            <p>* please provide a brief description of atleast 50 characters</p>
          </div>
        </Form.Field>

        <Form.Field>
          <label>Upload your resume</label>
          <UploadResume applyInfo={applyInfo} setApplyInfo={setApplyInfo} />
        </Form.Field>

        <Button positive type="submit">
          Submit
        </Button>
        <Button type="button" onClick={() => props.history.goBack()}>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default ApplyForm;
