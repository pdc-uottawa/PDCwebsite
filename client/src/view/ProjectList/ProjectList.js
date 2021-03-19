import React, { Fragment ,useEffect, useState} from "react";
import ProjectListItem from "./ProjectListItem";
import moment from "moment";
import _ from 'lodash'
import Axios from "axios";
import { Search, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'
import ProjectListInterface from "./ProjectListInterface";
import { config } from "../../common/config/config";

var project = {};
var project_data;

function data_value(projectsInfo) {
  project_data = projectsInfo;
  
  project_data.map((project) => {
    
{
  

  return project;
}

  }
)
}


// const source = _.times(5, () => ({

//    title:this.state.title,
//   description:description,
  
//   // image: faker.internet.avatar(),
//   // price: faker.finance.amount(0, 100, 2, '$'),
// }))



const initialState = {
  loading: false,
  results: [],
  value: '',

}

// function exampleReducer(state, action) {
//   switch (action.type) {
//     case 'CLEAN_QUERY':
//       return initialState
//     case 'START_SEARCH':
//       return { ...state, loading: true, value: action.query }
//     case 'FINISH_SEARCH':
//       return { ...state, loading: false, results: action.results }
//     case 'UPDATE_SELECTION':
//       return { ...state, value: action.selection }

//     default:
//       throw new Error()
//   }
// }


const ProjectList = ({ projectsInfo }) => {

  const path = config();
 var source_copy = {};

  const [projectsInfos, setProjectsInfo] = useState([]);

  console.log(projectsInfos[0]);


  if(projectsInfos[0])
  {
    source_copy.title = projectsInfos[0].title
    source_copy.description = projectsInfos[0].description


  }

  const source = _.times(5, () => ({

  
  
    title: source_copy.title,
    description: source_copy.description,
    // description:projectsInfos[0].description,
  

//   title:projectsInfos[0].title,
//  description:projectsInfos[0].description,
 
 // image: faker.internet.avatar(),
 // price: faker.finance.amount(0, 100, 2, '$'),
}))

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

  // when click create new project, jump to create-project page
  // const handleCreateNewProject = () => {
  //   props.history.push("/create-project");
  // };

  useEffect(() => {
    Axios.get(path + "project", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setProjectsInfo(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setProjectsInfo, path]);

  var project_filter;
  var project_filter_future;

  project_data = projectsInfo;


  // const [filteredEvents, setFilteredEvents] = useState([]);

  // const [project_filter_state, setproject_filter] = useState([]);

  const [project_filter_state, setproject_filter] = useState(3)

  const [project_data_valuess, setproject_data] = useState(projectsInfo)
  

  const showPastEvent = () => {
    // let currentTime = moment().format().slice(0,10);
   
    // setFilteredEvents(projectsInfo.filter((project) => project.expireDate < currentTime));
    // project_filter=true;
    // this.hooks[1].value.project_filter = true;
   
    project_filter_future=false;
    setproject_filter(4);
    

  };


  const showAllEvent = () => {
    // let currentTime = moment().format().slice(0,10);
    // setFilteredEvents(projectsInfo.filter((project) => project.expireDate < currentTime));
    setproject_filter(3);

    
    // return { ...state,  project_filter_future:true, project_filter:false }
  };

  const showFutureEvent = () => {
    // let currentTime = moment().format().slice(0,10);
    // setFilteredEvents(projectsInfo.filter((project) => project.expireDate < currentTime));

    setproject_filter(5);
    // return { ...state,  project_filter_future:true, project_filter:false }
  };
  // data_value(projectsInfo);
  // setproject_data(projectsInfo);

  const currentDate = moment().format("YYYY-MM-DD");
  const currentDateFourWeeksAgo = moment()
    .subtract(4, "weeks")
    .format("YYYY-MM-DD");

    const [state, dispatch] = React.useReducer(exampleReducer, initialState)
    const { loading, results, value } = state

    const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const eventsOptions = [
    {
      key: "Past Projects",
      text: "Past Projects",
      value: "Past Projects",
      onClick: showPastEvent,
    },
    {
      key: "Ongoing Projects",
      text: "Ongoing Projects",
      value: "Ongoing Projects",
      onClick: showFutureEvent,
    },
    {
      key: "All Projects",
      text: "All Projects",
      value: "All Projects",
      onClick: showAllEvent,
    }
  ];

  return (
    
    <Fragment>
<Grid>
<Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
          <Dropdown
        placeholder="Select Projects"
        fluid
        selection
        options={eventsOptions}
      />
      </Grid.Column>
      </Grid>

      {projectsInfo.map((project) => {
        {
          /* If expireDate exist and after currentDate, show the project.
           * If expireDate does not exist, but startDate after currentDateFourWeeksAgo, show the project.
           * Except, does not show the project.
           */
        }

       
        
        if (
          !project.isDeleted &&
          project.validUntil && (project_filter_state==4) &&
          (currentDate>project.validUntil)
        ) {
         
       
          return <ProjectListItem key={project._id} project={project} />;
        
        } else if (
          !project.isDeleted &&
          project.validUntil && (project_filter_state==5) &&
          (currentDate<project.validUntil)
        
        ) {
          
          return <ProjectListItem key={project._id} project={project} />;
        } 
        else if(project_filter_state==3) {
          console.log("all"+project_filter_state);
          return <ProjectListItem key={project._id} project={project} />;
        
        }
      })}
    </Fragment>
  );
};

export default ProjectList;
