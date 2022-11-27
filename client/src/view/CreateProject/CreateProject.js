import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Form,
  Segment,
  Dropdown,
  Checkbox,
  Input,
} from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import UploadLogo from "./UploadLogo";
import DOMpurify from "dompurify";
import TextareaAutosize from "react-textarea-autosize";
import { Helmet } from "react-helmet";
import "./CreateProject.css";
//secured by Makwana Harsh
const CreateProject = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  // get state from project detail manage button
  const { state } = props.location;
  const { id } = props.match.params;
  const { user } = userInfo;
  const path = config();
  const [isDisable, setIsDisable] = useState(true);
  const [adminUsers, setAdminUsers] = useState([]);

  // project information
  const [info, setInfo] = useState({
    title: state ? state.title : "",
    postedOn: state ? state.postedOn : "",
    validUntil: state ? state.validUntil : "",
    description: state ? state.description : "",
    //skills: state ? state.skills : "",
    hostedBy: state
      ? state.hostedBy
      : user && user.admin
      ? "GES-PDC"
      : user && user.company
      ? "Company Name"
      : "",
    logoUrl: state ? state.logoUrl : "",
    category: state ? state.category : [],
    user: state ? state.user : [user],
    contactEmail: state ? state.contactEmail : "",
    contactPhone: state ? state.contactPhone : "",
    linkedinProfile: state ? state.linkedinProfile : "",
    isDeleted: state ? state.isDeleted : false,
    uploadStatus: "none",
  });

  /**
   * Category options:
   * include Machine Learning, Web Development, Game Development for now.
   */
  const categoryOptions = [
    {
      key: "machinelearning",
      text: "Machine Learning",
      value: "Machine Learning",
    },
    { key: "web", text: "Web Development", value: "Web Development" },
    { key: "game", text: "Game Development", value: "Game Development" },
    {
      key: "SoftwareDevelopment",
      text: "Software Development",
      value: "Software Development",
    },
    {
      key: "BackendDevelopment",
      text: "Backend Development",
      value: "Back-end Development",
    },
    {
      key: "Front-endDevelopment",
      text: "Front-end Development",
      value: "Front-end Development",
    },
    {
      key: "Full-stackDevelopment",
      text: "Full-stack Development",
      value: "Full-stack Development",
    },
    {
      key: "QualityAssurance",
      text: "Quality Assurance",
      value: "Quality Assurance",
    },
    { key: "Testing", text: "Testing", value: "Testing" },
    { key: "DataAnalytics", text: "Data Analytics", value: "Data Analytics" },
    {
      key: "ProjectManagement",
      text: "Project Management",
      value: "Project Management",
    },
    {
      key: "VirtualReality",
      text: "Virtual Reality",
      value: "Virtual Reality",
    },
    {
      key: "ArtificialIntelligence",
      text: "Artificial Intelligence",
      value: "Artificial Intelligence",
    },
    { key: "CivilProject", text: "Civil Project", value: "Civil Project" },
    {
      key: "MechanicalProject",
      text: "Mechanical Project",
      value: "Mechanical Project",
    },
    { key: "Infrastructure", text: "Infrastructure", value: "Infrastructure" },
    {
      key: "Research-oriented",
      text: "Research-oriented",
      value: "Research-oriented",
    },
    {
      key: "CloudComputing",
      text: "Cloud Computing",
      value: "Cloud Computing",
    },
    { key: "BigData", text: "Big Data", value: "Big Data" },
    { key: "Chatbot", text: "Chatbot", value: "Chatbot" },
    { key: "Blockchain", text: "Blockchain", value: "Blockchain" },
    {
      key: "RoboticDevelopment",
      text: "Robotic Development",
      value: "Robotic Development",
    },
    { key: "GIS", text: "GIS", value: "GIS" },
    { key: "Microservices", text: "Microservices", value: "Microservices" },
    {
      key: "CriticalThinking",
      text: "Critical Thinking",
      value: "Critical Thinking",
    },
    { key: "DataAnalysis", text: "Data Analysis", value: "Data Analysis" },
    { key: "FormalWriting", text: "Formal Writing", value: "Formal Writing" },
    {
      key: "ObservationalStudy",
      text: "Observational Study",
      value: "Observational Study",
    },
    {
      key: "StatisticalAnalysis",
      text: "Statistical Analysis",
      value: "Statistical Analysis",
    },
    { key: "DataGathering", text: "Data Gathering", value: "Data Gathering" },
    {
      key: "StatisticalAnalysis",
      text: "Statistical Analysis",
      value: "Statistical Analysis",
    },
    {
      key: "EvaluationOfCredibility",
      text: "Evaluation Of Credibility",
      value: "Evaluation Of Credibility",
    },
    {
      key: "ExperimentDesign",
      text: "Experiment Design",
      value: "Experiment Design",
    },
    {
      key: "BuildingTypes",
      text: "Building Types/Ages",
      value: "Building Types/Ages",
    },
    { key: "AIModels", text: "AI Models", value: "AI Models" },
  ];

  // handle dropdown category
  const handleCategoryChange = (e, data) => {
    setInfo({
      ...info,
      category: data.value,
    });
  };

  // post project info to server
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // if does not have logoUrl, use a default one
    if (!info.logoUrl) {
      info.logoUrl = "https://img.icons8.com/carbon-copy/2x/company.png";
    }

    if (info.category.length < 3) {
      alert("Please Add Atleast 3 Categories.");
    } else {
      
      //XSS sanitizer
      info.title=DOMpurify.sanitize(info.title);
      info.category=DOMpurify.sanitize(info.category);
      info.contactEmail=DOMpurify.sanitize(info.contactEmail);
      info.hostedBy=DOMpurify.sanitize(info.hostedBy);
      info.description=DOMpurify.sanitize(info.description);
      info.linkedinProfile=DOMpurify.sanitize(info.linkedinProfile);
      info.contactPhone=DOMpurify.sanitize(info.contactPhone);

      if (id) {
        Axios.post(path + "project/manage/" + id, info).then((res) => {
          props.history.push("/project-list");
        });
      } else {
        Axios.post(path + "project", info)
          .then((res) => {
            props.history.push("/project-list");
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  // when click cancel, go back to the project list page
  const handleFormCancel = () => {
    props.history.push("/project-list");
  };

  // handle form field change
  const handleFormChange = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };

  //handle form title validation
  const handleFormValidationTitle = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
    //title validation
    var title = document.getElementById("project_title").value;
    if (title === "") {
      document.getElementById("project_title").style.border = " 1px solid red";
      document.getElementById("project_title_error_msg").style.display =
        "block";
      document.getElementById("project_title_error_msg").style.color = "red";
    } else {
      document.getElementById("project_title_error_msg").style.display = "none";
      document.getElementById("project_title").style.border = "";
    }
  };

  //handle form email validation
  const handleFormValidationEmail = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
    //email validation
    var email_id = document.getElementById("email_id").value;
    var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email_id.match(mailformat)) {
      document.getElementById("project_email_error_msg").style.display = "none";
      document.getElementById("email_id").style.border = "";
    } else {
      document.getElementById("email_id").style.border = " 1px solid red";
      document.getElementById("project_email_error_msg").style.display =
        "block";
      document.getElementById("project_email_error_msg").style.color = "red";
    }
  };

  //handle form phone validation
  const handleFormValidationtel = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
    //phone validation
    var tel = document.getElementById("contact_tel").value;
    var telformat = /^\d{10}$/;
    if (tel.match(telformat)) {
      document.getElementById("project_tel_error_msg").style.display = "none";
      document.getElementById("contact_tel").style.border = "";
    } else {
      document.getElementById("contact_tel").style.border = " 1px solid red";
      document.getElementById("project_tel_error_msg").style.display = "block";
      document.getElementById("project_tel_error_msg").style.color = "red";
    }
  };

  //handle form date validation
  const handleFormValidationdate = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
    //from date validation
    var date = new Date();
    var today_date_date = date.getUTCDate();
    var today_date_month = date.getMonth();
    var today_date_year = date.getFullYear();
    var frm_date = document.getElementById("from_date").value;
    var date1 = new Date(frm_date);
    var frm_date_date = date1.getUTCDate() + 1;
    var frm_date_month = date1.getMonth();
    var frm_date_year = date1.getFullYear();
    if (frm_date !== "") {
      document.getElementById(
        "project_frm_date_blank_error_msg"
      ).style.display = "none";
      if (
        frm_date_date >= today_date_date &&
        frm_date_month >= today_date_month &&
        frm_date_year >= today_date_year
      ) {
        document.getElementById("project_frm_date_error_msg").style.display =
          "none";
        document.getElementById("from_date").style.border = "";
      } else {
        document.getElementById("from_date").style.border = " 1px solid red";
        document.getElementById("project_frm_date_error_msg").style.display =
          "block";
        document.getElementById("project_frm_date_error_msg").style.color =
          "red";
      }
    } else {
      document.getElementById("from_date").style.border = " 1px solid red";
      document.getElementById(
        "project_frm_date_blank_error_msg"
      ).style.display = "block";
      document.getElementById("project_frm_date_blank_error_msg").style.color =
        "red";
    }
  };

  //handle To date validation
  const handleFormValidationtodate = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
    //To date validation
    var frm_date = document.getElementById("from_date").value;
    var date1 = new Date(frm_date);
    var frm_date_date = date1.getUTCDate();
    var frm_date_month = date1.getMonth();
    var frm_date_year = date1.getFullYear();
    var to_date = document.getElementById("to_date").value;
    var date2 = new Date(to_date);
    var to_date_date = date2.getUTCDate();
    var to_date_month = date2.getMonth();
    var to_date_year = date2.getFullYear();
    if (document.getElementById("to_date_check").checked === true) {
      if (to_date !== "") {
        document.getElementById(
          "project_to_date_blank_error_msg"
        ).style.display = "none";
        if (
          to_date_date >= frm_date_date &&
          to_date_month >= frm_date_month &&
          to_date_year >= frm_date_year
        ) {
          document.getElementById("project_to_date_error_msg").style.display =
            "none";
          document.getElementById("to_date").style.border = "";
        } else {
          document.getElementById("to_date").style.border = " 1px solid red";
          document.getElementById("project_to_date_error_msg").style.display =
            "block";
          document.getElementById("project_to_date_error_msg").style.color =
            "red";
        }
      } else {
        document.getElementById("to_date").style.border = " 1px solid red";
        document.getElementById(
          "project_to_date_blank_error_msg"
        ).style.display = "block";
        document.getElementById("project_to_date_blank_error_msg").style.color =
          "red";
      }
    } else {
      document.getElementById("project_to_date_blank_error_msg").style.display =
        "none";
      document.getElementById("to_date").style.border = "";
    }
  };

  //handle form host validation
  const handleFormValidationhost = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
    //form host validation
    var host = document.getElementById("project_host").value;
    if (host === "") {
      document.getElementById("project_host").style.border = " 1px solid red";
      document.getElementById("project_host_error_msg").style.display = "block";
      document.getElementById("project_host_error_msg").style.color = "red";
    } else {
      document.getElementById("project_host_error_msg").style.display = "none";
      document.getElementById("project_host").style.border = "";
    }
  };

  //handle form host validation
  const handleFormValidationdesc = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
    //desc host validation
    var desc = document.getElementById("project_description").value;
    if (desc === "") {
      document.getElementById("project_description").style.border =
        " 1px solid red";
      document.getElementById("project_description_error_msg").style.display =
        "block";
      document.getElementById("project_description_error_msg").style.color =
        "red";
    } else {
      document.getElementById("project_description_error_msg").style.display =
        "none";
      document.getElementById("project_description").style.border = "";
    }
  };

  //handle form validations
  const handleFormValdiation = (e) => {
    //title validation
    var title = document.getElementById("project_title").value;
    if (title === "") {
      document.getElementById("project_title").style.border = " 1px solid red";
      document.getElementById("project_title_error_msg").style.display =
        "block";
      document.getElementById("project_title_error_msg").style.color = "red";
      e.preventDefault();
    } else {
      document.getElementById("project_title_error_msg").style.display = "none";
      document.getElementById("project_title").style.border = "";
    }
    //email validation
    var email_id = document.getElementById("email_id").value;
    var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email_id.match(mailformat)) {
      document.getElementById("project_email_error_msg").style.display = "none";
      document.getElementById("email_id").style.border = "";
    } else {
      document.getElementById("email_id").style.border = " 1px solid red";
      document.getElementById("project_email_error_msg").style.display =
        "block";
      document.getElementById("project_email_error_msg").style.color = "red";
      e.preventDefault();
    }
    //phone validation
    var tel = document.getElementById("contact_tel").value;
    var telformat = /^\d{10}$/;
    if (tel.match(telformat)) {
      document.getElementById("project_tel_error_msg").style.display = "none";
      document.getElementById("contact_tel").style.border = "";
    } else {
      document.getElementById("contact_tel").style.border = " 1px solid red";
      document.getElementById("project_tel_error_msg").style.display = "block";
      document.getElementById("project_tel_error_msg").style.color = "red";
      e.preventDefault();
    }
    //from date validation
    var date = new Date();
    var today_date_date = date.getUTCDate();
    var today_date_month = date.getMonth();
    var today_date_year = date.getFullYear();
    var frm_date = document.getElementById("from_date").value;
    var date1 = new Date(frm_date);
    var frm_date_date = date1.getUTCDate() + 1;
    var frm_date_month = date1.getMonth();
    var frm_date_year = date1.getFullYear();
    if (frm_date !== "") {
      document.getElementById(
        "project_frm_date_blank_error_msg"
      ).style.display = "none";
      if (
        frm_date_date >= today_date_date &&
        frm_date_month >= today_date_month &&
        frm_date_year >= today_date_year
      ) {
        document.getElementById("project_frm_date_error_msg").style.display =
          "none";
        document.getElementById("from_date").style.border = "";
      } else {
        document.getElementById("from_date").style.border = " 1px solid red";
        document.getElementById("project_frm_date_error_msg").style.display =
          "block";
        document.getElementById("project_frm_date_error_msg").style.color =
          "red";
        e.preventDefault();
      }
    } else {
      document.getElementById("from_date").style.border = " 1px solid red";
      document.getElementById(
        "project_frm_date_blank_error_msg"
      ).style.display = "block";
      document.getElementById("project_frm_date_blank_error_msg").style.color =
        "red";
      e.preventDefault();
    }
    //To date validation
    var to_date = document.getElementById("to_date").value;
    var date2 = new Date(to_date);
    var to_date_date = date2.getUTCDate();
    var to_date_month = date2.getMonth();
    var to_date_year = date2.getFullYear();
    if (document.getElementById("to_date_check").checked === true) {
      if (to_date !== "") {
        document.getElementById(
          "project_to_date_blank_error_msg"
        ).style.display = "none";
        if (
          to_date_date >= frm_date_date &&
          to_date_month >= frm_date_month &&
          to_date_year >= frm_date_year
        ) {
          document.getElementById("project_to_date_error_msg").style.display =
            "none";
          document.getElementById("to_date").style.border = "";
        } else {
          document.getElementById("to_date").style.border = " 1px solid red";
          document.getElementById("project_to_date_error_msg").style.display =
            "block";
          document.getElementById("project_to_date_error_msg").style.color =
            "red";
          e.preventDefault();
        }
      } else {
        document.getElementById("to_date").style.border = " 1px solid red";
        document.getElementById(
          "project_to_date_blank_error_msg"
        ).style.display = "block";
        document.getElementById("project_to_date_blank_error_msg").style.color =
          "red";
        e.preventDefault();
      }
    }
    //form host validation
    var host = document.getElementById("project_host").value;
    if (host === "") {
      document.getElementById("project_host").style.border = " 1px solid red";
      document.getElementById("project_host_error_msg").style.display = "block";
      document.getElementById("project_host_error_msg").style.color = "red";
      e.preventDefault();
    } else {
      document.getElementById("project_host_error_msg").style.display = "none";
      document.getElementById("project_host").style.border = "";
    }
    //desc host validation
    var desc = document.getElementById("project_description").value;
    if (desc === "") {
      document.getElementById("project_description").style.border =
        " 1px solid red";
      document.getElementById("project_description_error_msg").style.display =
        "block";
      document.getElementById("project_description_error_msg").style.color =
        "red";
      e.preventDefault();
    } else {
      document.getElementById("project_description_error_msg").style.display =
        "none";
      document.getElementById("project_description").style.border = "";
    }
  };

  const handleOwnerChange = (e, data) => {
    setInfo({
      ...info,
      user: data.value ? data.value : user,
    });
  };

  useEffect(() => {
    Axios.get(path + "user/adminuserlist")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAdminUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [null]);

  const adminList = [];

  const validateCategory = (e, data) => {
    if (data.defaultValue.length < 3) {
      document.getElementById("project_category").style.color = "red";
      document.getElementById("project_category_error_msg").style.display =
        "block";
      document.getElementById("project_category_error_msg").style.color = "red";
      e.preventDefault();
    } else {
      document.getElementById("project_category_error_msg").style.display =
        "none";
      document.getElementById("project_category").style.border = "";
    }
  };

  adminUsers.map((admin) => {
    adminList.push({
      key: admin._id,
      value: admin,
      text: admin.name,
    });
  });

  return (
    <>
      <Helmet>
        <title>Create Project | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <Form onSubmit={handleFormSubmit} autoComplete="off">
          <Form.Field>
            <label>Project Title</label>
            <Input
              id="project_title"
              name="title"
              value={info.title}
              maxLength={50}
              onChange={handleFormValidationTitle}
              placeholder="Project Title"
            />
            <div id="project_title_error_msg">
              <p>* please provide a project title </p>
            </div>
          </Form.Field>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Contact Email</label>
              <input
                id="email_id"
                name="contactEmail"
                value={info.contactEmail}
                onChange={handleFormValidationEmail}
                placeholder="Contact Email"
              />
              <div id="project_email_error_msg">
                <p>* please provide a proper contact email </p>
              </div>
            </Form.Field>

            <Form.Field>
              <label>Contact Phone</label>
              <input
                id="contact_tel"
                name="contactPhone"
                value={info.contactPhone}
                onChange={handleFormValidationtel}
                placeholder="Contact Phone"
              />
              <div id="project_tel_error_msg">
                <p>*should be a 10-digit number only</p>
              </div>
            </Form.Field>

            <Form.Field>
              <label>LinkedIn Profile</label>
              <input
                name="linkedinProfile"
                value={info.linkedinProfile}
                onChange={handleFormChange}
                placeholder="Your LinkedIn URL"
              />
            </Form.Field>
          </Form.Group>

          <Form.Field>
            <Checkbox
              id="to_date_check"
              onClick={() => setIsDisable(!isDisable)}
              onChange={handleFormValidationtodate}
              label="Set a expire date on project (Default is 4 weeks)"
            />
          </Form.Field>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Posted On</label>
              <input
                id="from_date"
                name="postedOn"
                value={info.postedOn}
                onChange={handleFormValidationdate}
                type="date"
                placeholder="Posted On"
              />
              <div id="project_frm_date_error_msg">
                <p>* please select a future date or today's date</p>
              </div>
              <div id="project_frm_date_blank_error_msg">
                <p>* date cannot be blank</p>
              </div>
            </Form.Field>

            <Form.Field>
              <label>Valid Until</label>
              <input
                id="to_date"
                name="validUntil"
                value={info.validUntil}
                onChange={handleFormValidationtodate}
                disabled={isDisable}
                type="date"
                placeholder="Valid Until"
              />
              <div id="project_to_date_error_msg">
                <p>* Selected date cannot be less than posted date</p>
              </div>
              <div id="project_to_date_blank_error_msg">
                <p>* date cannot be blank</p>
              </div>
            </Form.Field>
          </Form.Group>

          {/* <Form.Field>
          <label>Skills</label>
          <input
            name="skills"
            value={info.skills}
            onChange={handleFormChange}
            placeholder="Required Skills"
          />
        </Form.Field> */}
          <Form.Group widths="equal">
            <Form.Field>
              <label>Hosted By</label>
              <input
                id="project_host"
                name="hostedBy"
                value={info.hostedBy}
                onChange={handleFormValidationhost}
                placeholder="Enter the name of company hosting"
              />
              <div id="project_host_error_msg">
                <p>* please provide a project host </p>
              </div>
            </Form.Field>
            <Form.Field>
              <label>Project Owner</label>
              <Dropdown
                name="project owner"
                placeholder="Project Owner"
                fluid
                multiple
                selection
                onChange={handleOwnerChange}
                options={adminList}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Category</label>
            <div id="project_category">
              <Dropdown
                name="category"
                placeholder="Category"
                fluid
                multiple
                selection
                onChange={handleCategoryChange}
                defaultValue={info.category}
                options={categoryOptions}
                onBlur={validateCategory}
              />
            </div>
            <div id="project_category_error_msg">
              <p>* Please Select a Minimum of Three Categories</p>
            </div>
          </Form.Field>

          <Form.Field>
            <label>Upload your logo</label>
            <UploadLogo info={info} setInfo={setInfo} />
          </Form.Field>

          <Form.Field
            id="project_description"
            control={TextareaAutosize}
            name="description"
            label="Description"
            placeholder="Enter description of the project"
            onChange={handleFormValidationdesc}
            value={info.description}
          ></Form.Field>
          <Form.Field>
            <div id="project_description_error_msg">
              <p>* please provide a project description </p>
            </div>
          </Form.Field>

          <Button positive type="submit" onClick={handleFormValdiation}>
            {state ? "Update" : "Submit"}
          </Button>
          <Button onClick={handleFormCancel} type="button">
            Cancel
          </Button>
        </Form>
      ) : (
        <>
          <center>
            <h1>Oops, Page Not Found!</h1>
            <h3>Please login as an admin to create a project!</h3>
          </center>
        </>
      )}
    </>
  );
};
export default CreateProject;
