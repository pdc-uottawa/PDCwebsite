/* eslint-disable no-lone-blocks */
import React, { Fragment , Component, PropTypes} from "react";
import ProjectListItem from "./ProjectListItem";
import moment from "moment";
import {
  Segment,
  Item,
  Icon,
  List,
  Button,
  Label,
  Form,
  Grid, 
  Header,
  Search
} from "semantic-ui-react";
import _ from 'lodash';
import { render } from "react-dom";

/**
 * @author @binjiasata
 * @description This is project list component. Only show the projects
 * which are still before expire date.
 */




// const ProjectList = ({ projectsInfo }) => {
class ProjectList extends Component {

  constructor(props) {
    super(props);
  }

  // const currentDate = moment().format("YYYY-MM-DD");
  // const currentDateFourWeeksAgo = moment()
  //   .subtract(4, "weeks")
  //   .format("YYYY-MM-DD");

  //   console.log(projectsInfo.length+"......");

  //   if(projectsInfo.length>1)
  //   {

  //   {projectsInfo.map((project) => {

  //     if (
  //       !project.isDeleted &&
  //       project.expireDate 
  //     ) {
  //       // key=project._id,
  //       return project
  //       console.log(project.length);
  //     } else if (
  //       !project.isDeleted &&
  //       !project.expireDate
  //     ) {
  //       // key=project._id,
  //     return project
  //     } else {
  //       // key="",
  //     return  project=""
  //     }
  //   })}

  

  // }

  // const source = _.times(2, () => ({

  //   title: project.title,
  //   // description:project.description,
  //   description:project.description.substring(0, 100),
  //   // image: faker.internet.avatar(),
  //   // price: faker.finance.amount(0, 100, 2, '$'),
  // }))

  

   


  //   const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  // const { loading, results, value } = state



  // const timeoutRef = React.useRef()
  // const handleSearchChange = React.useCallback((e, data) => {
  //   clearTimeout(timeoutRef.current)
  //   dispatch({ type: 'START_SEARCH', query: data.value })

  //   timeoutRef.current = setTimeout(() => {
  //     if (data.value.length === 0) {
  //       dispatch({ type: 'CLEAN_QUERY' })
  //       return
  //     }

  //     const re = new RegExp(_.escapeRegExp(data.value), 'i')
  //     const isMatch = (result) => re.test(result.title)

  //     dispatch({
  //       type: 'FINISH_SEARCH',
  //       results: _.filter(source, isMatch),
  //     })
  //   }, 300)
  // }, [])

  // React.useEffect(() => {
  //   return () => {
  //     clearTimeout(timeoutRef.current)
  //   }
  // }, [])

  
render()
{


  const initialState = {
    loading: false,
    results: [],
    value: '',
  }
  
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

  const currentDate = moment().format("YYYY-MM-DD");
  const currentDateFourWeeksAgo = moment()
    .subtract(4, "weeks")
    .format("YYYY-MM-DD");


var project= {}
    if(this.props.projectsInfo)
    {

    {this.props.projectsInfo.map((project) => {

      return project

      // if (
      //   !project.isDeleted &&
      //   project.expireDate 
      // ) {
      //   // key=project._id,
      //   return project
      //   console.log(project.length);
      // } else if (
      //   !project.isDeleted &&
      //   !project.expireDate
      // ) {
      //   // key=project._id,
      // return project
      // } else {
      //   // key="",
      // return  project=""
      // }
    })}

  

  }

  const source = _.times(2, () => ({

    // title: project.title,
    // // description:project.description,
    // description:project.description.substring(0, 100),
    // image: faker.internet.avatar(),
    // price: faker.finance.amount(0, 100, 2, '$'),
  }))

  

   


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

</Grid.Column>
      </Grid>

      {this.props.projectsInfo.map((project) => {
        {
          /* If expireDate exist and after currentDate, show the project.
           * If expireDate does not exist, but startDate after currentDateFourWeeksAgo, show the project.
           * Except, does not show the project.
           */
        }
        if (
          !project.isDeleted &&
          project.expireDate &&
          moment(currentDate).isBefore(project.expireDate)
        ) {
          return <ProjectListItem key={project._id} project={project} />;
        } else if (
          !project.isDeleted &&
          !project.expireDate &&
          moment(project.startDate).isAfter(currentDateFourWeeksAgo)
        ) {
          return <ProjectListItem key={project._id} project={project} />;
        } else {
          return "";
        }
      })}

    </Fragment>
  );
  
};
}

// export default () => {
//     return (
//       <ProjectList/>
//   )
// }
export default ProjectList;
