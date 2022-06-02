import React, { Fragment, useState } from "react";
import { Grid } from "semantic-ui-react";
import StudentProfileEditView from "./StudentProfileEditView";
import StudentAppliedProjectList from "./StudentAppliedProjectList";
import StudentProfileSidebar from "./StudentProfileSidebar";
import { Helmet } from "react-helmet";

const StudentProfileDashboard = () => {
  const [activeItem, setActiveItem] = useState("Profile");

  return (
    <Fragment>
      <Helmet>
        <title>Student Profile Dashboard | Professional Development Club</title>
      </Helmet>
      <Grid>
        <Grid.Column width={12}>
          {activeItem === "Profile" && <StudentProfileEditView />}
          {activeItem === "Applied Projects" && <StudentAppliedProjectList />}
        </Grid.Column>
        <Grid.Column width={4}>
          <StudentProfileSidebar
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default StudentProfileDashboard;
