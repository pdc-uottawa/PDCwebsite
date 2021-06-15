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




const initialState = {
  loading: false,
  results: [],
  value: '',

}


const ProjectList = ({ projectsInfo }) => {

  const path = config();
 var source_copy = {};


  const [projectsInfos, setProjectsInfo] = useState([]);




  if(projectsInfos[0])
  {
    source_copy.title = projectsInfos[0].title
    source_copy.description = projectsInfos[0].description


  }

var source =  ({

  
  
  title: source_copy.title,
  description: source_copy.description,
})


function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      console.log(action.results+"finish search");
      return { ...state, loading: false, results: action.results }   
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

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

  const [project_filter_state, setproject_filter] = useState(3)

  const [project_data_valuess, setproject_data] = useState(projectsInfo)

  const [filterType,setFilterType] =useState({});


  const showPastEvent = () => {
  
   
    project_filter_future=false;
    setproject_filter(4);
    

  };


  const showAllEvent = () => {
  
    setproject_filter(3);

    
   
  };

  const showFutureEvent = () => {
    
    setproject_filter(5);
    
  };

  useEffect(()=>{

    switch (filterType.value){
      case "past": showPastEvent();
        break;
      case "future": showFutureEvent();
        break;
      case "all": showAllEvent();
        break;
      default: break;
    }
  },[filterType])


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
  

      const value_projects = [
        {
          title: "Food Deserts",
          text: "Data Analytics,",
          value: "Past Projects",
         
        },
        {
          title: "Mitigating traffic related air pollution through trees and shrubs",
          text: "Data Engineering",
          value: "Ongoing Projects",
          
        },
        {
          title: "Quality of connections",
          text: ",Machine Learning Models",
          value: "All Projects",
          
        },
        {
          title: "Identify wind tunnels that affect pedestrian comfort",
          text: "AI Models",
          value: "All Projects",
          
        },
        {
          title: "Buildings and Parks Assets (BPA) Unit",
          text: "Data Analytics",
          value: "All Projects",
          
        },
      ]

    

    
        var re = new RegExp(_.escapeRegExp(data.value), 'i')
        for(var i = 0; i<value_projects.length;i++)
        {
        var isMatch =  re.test(value_projects[i].text)

        console.log(value_projects[i].text+"value projectss");
        console.log(isMatch+"isMatch value");


        if(isMatch == true)
        {
          dispatch({
            type: 'FINISH_SEARCH',
            results: value_projects[i].title,
          }
          )

       
        }
        else{
          console.log("no match found");
        }
        console.log(value_projects[i].title+"isMatch data");

      }

      }, 300)
    }, [])

  var source =  ({

  
  
    title: source_copy.title,
    description: source_copy.description,
  })

  const eventsOptions = [
    {
      key: "Past Projects",
      text: "Past Projects",
      value: "past",
      onClick:((e, data)=>setFilterType(data)),
    },
    {
      key: "Ongoing Projects",
      text: "Ongoing Projects",
      value: "future",
      onClick: ((e, data)=>setFilterType(data)),
    },
    {
      key: "All Projects",
      text: "All Projects",
      value: "all",
      onClick: ((e, data)=>setFilterType(data)),
    }
  ];

  var data_results = JSON.stringify({results});
 

  return (

    <Fragment>
<Grid>
<Grid.Row columns={2}>
<Grid.Column>
  <h1>Project Results</h1>
</Grid.Column>
    
      </Grid.Row>
  <Grid.Row columns={1}>
    <Grid.Column>

          <Dropdown
        placeholder="Select Projects"
        fluid
        selection
        options={eventsOptions}
        value={filterType.value}
        text={filterType.text}
      />

    </Grid.Column>

  </Grid.Row>
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
         ( !project.isDeleted &&
          project.validUntil && (project_filter_state==5) &&
          (currentDate<project.validUntil))|| (!project.isDeleted && (project_filter_state==5)
          && !project.validUntil)
        
        ) {
          
          return <ProjectListItem key={project._id} project={project} />;
        } 
        else if(project_filter_state==3) {
         
          return <ProjectListItem key={project._id} project={project} />;
        
        }
      })}
    </Fragment>
  );
};

export default ProjectList;

