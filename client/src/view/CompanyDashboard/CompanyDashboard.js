import React, { Fragment, useEffect, useContext, useState } from "react";
import { Grid, GridColumn, Header, Icon, Segment, SegmentGroup, Statistic } from "semantic-ui-react";
import CompanyDashboardItem from "./CompanyDashboardItem";
import CompanyDashboardSidebar from "./CompanyDashboardSidebar";
import { UserContext } from "../../common/context/UserProvider";
import Axios from "axios";
import { config } from "../../common/config/config";
import CompanyDashboardProfile from "./CompanyDashboardProfile";
import CompanyDashboardSetting from "./CompanyDashboardSetting";
import useReactRouter from "use-react-router";

const path = config();

const CompanyDashboard = () => {
  const { history } = useReactRouter();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { _id: userId } = userInfo.user;
  const studentInfo= userInfo.user;
  const [projectList, setProjectList] = useState([]);
  const [activeItem, setActiveItem] = useState("Projects");
  const [isLoading, setIsLoading] = useState(true);
  const [studentAppliedProjectsInfo, setStudentAppliedProjectsInfo] = useState([]);
  var studentlist = [];


  useEffect(() => {
    Axios.get(path + "project/user/" + userId)
      .then((res) => res.data)
      .then((data) => setProjectList(data));
  }, [userId]);

  console.log(projectList);

  // This should be the function for the applied student list... (currently not working)
  useEffect(() => {
    let projid = []
    Axios.get(path + "project/user/" + userId)
      .then((res) => {
       let projdetail = res.data
       projdetail.forEach(project => {
        let projId = project._id;
        projid.push(projId);
      });
      console.log(projid);
      })
    for(var i=0;projid.length;i++)
    {
    Axios.get(path + "student/apply" +projid[i])
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        setStudentAppliedProjectsInfo(data);
        studentlist.push(data);
      });
    }
  }, [null]);
  
  console.log(studentlist);
  return (
    <Fragment>
      <Header as="h1">
        <Icon name="dashboard" />
        <Header.Content>Dashboard</Header.Content>
      </Header>
      <Grid>
        <Grid.Column width={12}>
        <Grid container columns={2}>
            <Grid.Row columns={2}>
            <Grid.Column>  
            <Segment padded="very" inverted textAlign='center' raised>
            <Statistic inverted size="huge">
            <Statistic.Label>Applied Students For Projects</Statistic.Label>
            <Statistic.Value>{studentAppliedProjectsInfo.length}</Statistic.Value>
            </Statistic>
            </Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment padded="very" inverted textAlign='center' raised>
            <Statistic inverted size="huge">
            <Statistic.Label>Active Projects</Statistic.Label>
            <Statistic.Value>{projectList.length}</Statistic.Value>
            </Statistic>
            </Segment>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          {projectList &&
            activeItem === "Projects" &&
            projectList.map((project) => {
              return <CompanyDashboardItem project={project} />;
            })}
          
          {activeItem === "Profile" && <CompanyDashboardProfile />}
          {activeItem === "Setting" && <CompanyDashboardSetting />}
        </Grid.Column>


        <Grid.Column width={4}>
          <CompanyDashboardSidebar
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default CompanyDashboard;
