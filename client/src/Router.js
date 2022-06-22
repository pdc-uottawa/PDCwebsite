import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import CreateProject from "./view/CreateProject/CreateProject";
import DownloadUserInfo from "./view/Users/UserInfoListCsv";
import Home from "./view/Home/Home";
import Student from "./view/Student/Student";
import CreateForm from "./view/Student/CreateForm";
import ProgramCoordinators from "./view/Student/ProgramCoordinators";
import OurPartners from "./view/OurPartners/OurPartners";
import Programs from "./view/Student/Programs";
import Fswep from "./view/Student/Fswep";
import StudentForm from "./view/Student/StudentForm";
import ResumeGuidelines from "./view/Student/ResumeGuidelines";
import GNG5299 from "./view/Student/GNG5299";
import UpdateCoordinators from "./view/Student/UpdateCoordinators";
import HireStudent from "./view/HireStudent/HireStudent";
import Covid19 from "./view/Covid19/Covid19";
import OurTeam from "./view/OurTeam/OurTeam";
import ManageTeam from "./view/OurTeam/ManageTeam";
import UpdateOurTeam from "./view/OurTeam/UpdateOurTeamForm";
import AddTeam from "./view/OurTeam/AddTeamForm";
import Alumni from "./view/Alumni/Alumni";
import Feedback from "./view/Feedback/Feedback";
import Header from "./view/Header/Header";
import Signin from "./view/Signin/Signin";
import register from "./view/Register/register";
import ProjectListInterface from "./view/ProjectList/ProjectListInterface";
import ProjectDeatiledPageV2 from "./view/ProjectDetailed/ProjectDetailedPageV2";
import Events from "./view/Events/Events";
import CreateEvent from "./view/Events/createEvent";
import CreateTicket from "./view/Events/createTicket";
import UploadLogo from "./view/Events/logoUpload";
import StudentProfileDashboard from "./view/Students/StudentProfile/StudentProfileDashboard";
import StudentProfileView from "./view/Students/StudentProfile/StudentProfileView";
import Admin from "./view/Admin/Admin";
import { Container } from "semantic-ui-react";
import CompanyDashboard from "./view/CompanyDashboard/CompanyDashboard";
import ApplyForm from "./view/Students/ApplyForm/ApplyForm";
import StudentAppliedList from "./view/Students/StudentAppliedList/StudentAppliedList";
import VoulnteerListInterface from "./view/Volunteers/VolunteerListInterface";
import AddForm from "./view/Student/AddForm";
import UpdateForm from "./view/Student/UpdateForm";
import Volunteers from "./view/Volunteers/Volunteers";
import OurAlumni from "./view/Alumni/OurAlumni";
import ManageAlumni from "./view/Alumni/ManageAlumni";
import UpdateAlumni from "./view/Alumni/UpdateAlumniForm";
import AddAlumni from "./view/Alumni/AddAlumniForm";
import CDCMainPage from "./view/CDC/CDCMainPage";
import HomePage from "./view/Home/HomePage";
import OurVolunteers from "./view/Volunteers/OurVolunteers";

import { useWindowDimensions } from "../src/common/context/WindowDimensionsProvider";
import ForStudents from "./view/Student/ForStudents";
import UsefulResources from "./view/Student/UsefulResources";

/**
 * This is routers for the website.
 *
 * Need to solve login authentication, user can input url directly to go to the page.
 */

const Routers = () => {
  const { width } = useWindowDimensions();
  return (
    <Fragment>
      <Header />
      <Switch>
        {width > 1024 ? (
          <Route exact path="/" component={HomePage} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        <Fragment>
          <Container className="main">
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/register" component={register} />
            <Route exact path="/OurTeam" component={OurTeam} />
            <Route exact path="/create-project" component={CreateProject} />
            <Route exact path="/cdc" component={CDCMainPage} />
            <Route exact path="/download-user-list" component={DownloadUserInfo} />
            <Route exact path="/project/manage/:id" component={CreateProject} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/create-form" component={CreateForm} />
            <Route exact path="/program-coordinators" component={ProgramCoordinators} />
            <Route exact path="/alumni" component={OurAlumni} />
            <Route exact path="/manage-alumni" component={ManageAlumni} />
            <Route exact path="/manage-ourteam" component={ManageTeam} />
            <Route exact path="/add-alumni" component={AddAlumni} />
            <Route exact path="/add-ourteam" component={AddTeam} />
            <Route exact path="/update-alumni/:id" component={UpdateAlumni} />
            <Route exact path="/update-ourTeam/:id" component={UpdateOurTeam} />
            <Route exact path="/volunteers" component={Volunteers} />
            <Route exact path="/our-partners" component={OurPartners} />
            <Route exact path="/programs" component={Programs} />
            <Route exact path="/fswep" component={Fswep} />
            <Route exact path="/student-form" component={StudentForm} />
            <Route exact path="/resume-guidelines" component={ResumeGuidelines} />
            <Route exact path="/useful-links" component={GNG5299} />
            <Route exact path="/update-coordinators" component={UpdateCoordinators} />
            <Route exact path="/hirestudent" component={HireStudent} />
            {/* <Route exact path="/alumni" component={Alumni} /> */}
            <Route exact path="/covid" component={Covid19} />
            <Route exact path="/upload" component={UploadLogo} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/student-profile" component={StudentProfileDashboard} />
            <Route exact path="/student/profile/:id" component={StudentProfileView} />
            <Route exact path="/students/apply/:id" component={ApplyForm} />
            <Route exact path="/AddForm" component={AddForm} />
            <Route exact path="/UpdateForm/:id" component={UpdateForm} />
            <Route exact path="/students/list" component={StudentAppliedList} />
            <Route exact path="/project-list" component={ProjectListInterface} />
            {/* <Route exact path="/Volunteers" component={VoulnteerListInterface} /> */}
            <Route exact path="/project-detail/:id" component={ProjectDeatiledPageV2} />
            <Route path="/company-dashboard" component={CompanyDashboard} />
            <Route exact path="/create-event" component={CreateEvent} />
            <Route exact path="/create-ticket" component={CreateTicket} />
            <Route exact path="/our-volunteers" component={OurVolunteers} />
            <Route exact path="/for-students" component={ForStudents} />
            <Route exact path="/useful-resources" component={UsefulResources} />
          </Container>
        </Fragment>
      </Switch>
    </Fragment>
  );
};

export default Routers;
