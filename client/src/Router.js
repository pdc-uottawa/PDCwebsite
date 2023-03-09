import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import CreateProject from "./view/Admin/CreateProject/CreateProject";
import DownloadUserInfo from "./view/Users/UserInfoListCsv";
import Home from "./view/Home/Home";
import Student from "./view/Student/Student";
import CreateForm from "./view/Student/CreateAssociation";
import ProgramCoordinators from "./view/Student/ProgramCoordinators";
import OurPartners from "./view/OurPartners/OurPartners";
import Programs from "./view/Student/Programs";
import Fswep from "./view/Student/Fswep";
import StudentForm from "./view/Student/StudentAssociations";
import ResumeGuidelines from "./view/Student/ResumeGuidelines";
import GNG5299 from "./view/Student/GNG5299";
import HireStudent from "./view/HireStudent/HireStudent";
import Covid19 from "./view/Covid19/Covid19";
import OurTeam from "./view/OurTeam/OurTeam";
import OurTeamV2 from "./view/OurTeam/OurTeamV2";
import AddTeam from "./view/Admin/Team/AddTeamMember";
import Alumni from "./view/Alumni/Alumni";
import Feedback from "./view/Feedback/Feedback";
import Header from "./view/Header/Header";
import HeaderV2 from "./view/HeaderV2/Header";
import HeaderMob from "./view/Header/HeaderMob";
import Signin from "./view/Signin/Signin";
import ProjectListInterface from "./view/ProjectList/ProjectListInterface";
import ProjectDeatiledPageV2 from "./view/ProjectDetailed/ProjectDetailedPageV2";
import Events from "./view/Events/Events";
import EventsV2 from "./view/Events/EventsV2";
import CreateEvent from "./view/Admin/Event/createEvent";
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
import UpdateForm from "./view/Student/UpdateForm";
import Volunteers from "./view/Volunteers/Volunteers";
import OurAlumni from "./view/Alumni/OurAlumni";
import OurAlumniV2 from "./view/AlumniV2/ourAlumni";
import ManageAlumni from "./view/Admin/Alumni/ManageAlumni";
import CDCMainPage from "./view/CDC/CDCMainPage";
import HomePage from "./view/Home/HomePage";
import OurVolunteers from "./view/Volunteers/OurVolunteers";
import { useWindowDimensions } from "../src/common/context/WindowDimensionsProvider";
import ForStudents from "./view/Student/ForStudents";
import UsefulResources from "./view/Student/UsefulResources";
import Footer from "./view/Footer/Footer";
import FAQs from "./view/Student/FAQs";
import IndustryInternship from "./view/Student/IndustryInternship";
import HomePageV2 from "./view/Home/HomePageV2";
//Admin
import AdminDashboard from "./view/Admin/Admin Dashboard/AdminDashboard";
import ManageFAQ from "./view/Admin/FAQ/Manage FAQ";
import AddFAQ from "./view/Admin/FAQ/AddFAQ";
import UpdateFAQ from "./view/Admin/FAQ/UpdateFAQ";
import ManageVolunteers from "./view/Admin/Volunteers/ManageVolunteers";
import AddAlumni from "./view/Admin/Alumni/AddAlumni";
import UpdateOurTeam from "./view/Admin/Team/UpdateOurTeamMember";
import UpdateCoordinators from "./view/Admin/Coordinators/UpdateCoordinators";
import ManageTeam from "./view/Admin/Team/ManageTeam";
import AddForm from "./view/Admin/Coordinators/AddCoordinator";
import UpdateVolunteerTeams from "./view/Admin/Volunteers/UpdateVolunteerTeams";
import UpdateTeamWiseVolunteer from "./view/Admin/Volunteers/UpdateTeamWiseVolunteer";
import AddVolunteer from "./view/Admin/Volunteers/AddVolunteer";
import UpdateAlumni from "./view/Admin/Alumni/UpdateAlumni";
import ManageOtherInfo from "./view/Admin/Other/ManageOtherInfo";
import ManageTestimonials from "./view/Admin/Testimonials/ManageTestimonials";
import AddTestimonial from "./view/Admin/Testimonials/AddTestimonial";
import UpdateTestimonial from "./view/Admin/Testimonials/UpdateTestimonial";
import UpdateJoinTeamLink from "./view/Admin/Other/UpdateJoinTeamLink";
import UpdateFeedbackFormLink from "./view/Admin/Other/UpdateFeedbackFormLink";
import UpdateMockInterviewLink from "./view/Admin/Other/UpdateMockInterviewLink";
import UpdateResumeLinkedInReviewLink from "./view/Admin/Other/UpdateResumeLinkedInReviewLink";

import "./index.css";

/**
 * This is routers for the website.
 *
 * Need to solve login authentication, user can input url directly to go to the page.
 */

const Routers = () => {
  const { width } = useWindowDimensions();
  return (
    <Fragment style=" min-height: 100vh;display: flex;flex-direction: column;">
      {width < 730 ? <HeaderMob /> : <Header />}
      <Route exact path="/" component={HomePageV2} />
      <div className="container marginTop10">
        <Route exact path="/for-students" component={ForStudents} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/OurTeam" component={OurTeam} />
        <Route exact path="/OurTeamV2" component={OurTeamV2} />
        <Route exact path="/create-project" component={CreateProject} />
        <Route exact path="/cdc" component={CDCMainPage} />
        <Route exact path="/download-user-list" component={DownloadUserInfo} />
        <Route exact path="/project/manage/:id" component={CreateProject} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/eventsV2" component={EventsV2} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/create-association" component={CreateForm} />
        <Route exact path="/program-coordinators" component={ProgramCoordinators} />
        <Route exact path="/alumni" component={OurAlumniV2} />
        {/* <Route exact path="/alumniV2" component={OurAlumniV2} /> */}
        <Route exact path="/manage-alumni" component={ManageAlumni} />
        <Route exact path="/manage-ourteam" component={ManageTeam} />
        <Route exact path="/add-alumni" component={AddAlumni} />
        <Route exact path="/add-ourteam" component={AddTeam} />
        <Route exact path="/update-ourTeam/:id" component={UpdateOurTeam} />
        <Route exact path="/volunteers" component={Volunteers} />
        <Route exact path="/our-partners" component={OurPartners} />
        <Route exact path="/programs" component={Programs} />
        <Route exact path="/fswep" component={Fswep} />
        <Route exact path="/student-association" component={StudentForm} />
        <Route exact path="/resume-guidelines" component={ResumeGuidelines} />
        <Route exact path="/useful-links" component={GNG5299} />
        <Route exact path="/update-coordinators" component={UpdateCoordinators} />
        <Route exact path="/hirestudent" component={HireStudent} />
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
        <Route exact path="/project-detail/:id" component={ProjectDeatiledPageV2} />
        <Route path="/company-dashboard" component={CompanyDashboard} />
        <Route exact path="/create-event" component={CreateEvent} />
        <Route exact path="/create-ticket" component={CreateTicket} />
        <Route exact path="/our-volunteers" component={OurVolunteers} />
        <Route exact path="/useful-resources" component={UsefulResources} />
        <Route exact path="/FAQs" component={FAQs} />
        <Route exact path="/industry-internship-info" component={IndustryInternship} />
{/* Admin */}
        <Route exact path="/admin-dashboard" component={AdminDashboard} />
        <Route exact path="/manage-FAQs" component={ManageFAQ} />
        <Route exact path="/add-FAQ" component={AddFAQ} />
        <Route exact path="/update-FAQ/:id" component={UpdateFAQ} />
        <Route exact path="/update-volunteers/:team" component={UpdateVolunteerTeams} />
        <Route exact path="/update-volunteer/:id" component={UpdateTeamWiseVolunteer} />
        <Route exact path="/manage-volunteers" component={ManageVolunteers} />
        <Route exact path="/add-volunteer" component={AddVolunteer} />
        <Route exact path="/update-alumni/:id" component={UpdateAlumni} />
        <Route exact path="/manage-other-info" component={ManageOtherInfo} />
        <Route exact path="/manage-testimonials" component={ManageTestimonials} />
        <Route exact path="/add-testimonial" component={AddTestimonial} />
        <Route exact path="/update-testimonial/:id" component={UpdateTestimonial} />
        <Route exact path="/update-link/joinOurTeamLink/:id" component={UpdateJoinTeamLink} />
        <Route exact path="/update-link/feedbackLink/:id" component={UpdateFeedbackFormLink} />
        <Route exact path="/update-link/mockInterviewLink/:id" component={UpdateMockInterviewLink} />
        <Route exact path="/update-link/ResumeLinkedInReviewLink/:id" component={UpdateResumeLinkedInReviewLink} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Routers;
