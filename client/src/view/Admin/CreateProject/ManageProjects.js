// import Axios from "axios";
// import React, { useEffect, useState, useContext, Component } from "react";
// import { Button, Form, Input, Table, Icon } from "semantic-ui-react";
// import { config } from "../../../common/config/config";
// import { Link } from "react-router-dom";
// import { Spinner } from "react-activity";
// import { Helmet } from "react-helmet";
// import ReactHtmlParser from 'react-html-parser'
// // import UpdateOurTeamForm from "../UpdateOurTeamMember";
// import "../../OurTeam/OurTeam.css";
// import { UserContext } from "../../../common/context/UserProvider";
// import AdminSideBar from "../Admin Dashboard/AdminSideBar";
// import "./../admin.css"

// const ManageProjects = (props) => {
//   const path = config();
//   const [ProjectList, setProjectList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { userInfo, setUserInfo } = useContext(UserContext);
//   const [adminUsers, setAdminUsers] = useState([]);
//   const adminList = [];
//   const { user } = userInfo;

//   useEffect(() => {
//     Axios.get(path + "project", {})
//       .then((res) => {
//         return res.data;
//       })
//       .then((data) => {
//         setProjectList(data);
//         setLoading(false);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, [setProjectList, path]);
//   console.log(ProjectList);

//   useEffect(() => {
//     Axios.get(path + "user/adminuserlist")
//       .then((res) => {
//         return res.data;
//       })
//       .then((data) => {
//         setAdminUsers(data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, [null]);

//   function removeProject(_id) {
//     if (window.confirm("Are you sure?")) {
//       setLoading(true);
//       Axios.post(path + "project/delete", { _id })
//         .then((res) => {
//           setLoading(false);
//           Axios.get(path + "project", {});
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     }
//   }

//   adminUsers.map((admin) => {
//     adminList.push({
//       key: admin._id,
//       value: admin,
//       text: admin.name,
//     });
//   });

//   return (
//     <>
//       <Helmet>
//         <title>Manage FAQs | Professional Development Club</title>
//       </Helmet>
//       <div className="admin-dashboard">
//         <AdminSideBar />
//         <div className="admin-home">
//           {loading ? (
//             <div className="loadingState">
//               <Spinner color="#727981" size={35} speed={1} animating={true} />
//             </div>
//           ) : (
//             <>
//               <h3 className="admin-h3">
//                 Update Projects
//                 <Link to="/create-project">
//                   <Button color="teal" floated="right">
//                     {" "}
//                     Create Project
//                   </Button>
//                 </Link>
//               </h3>
//               <div>
//                 <Table className="admin-manage-team" pageSize={9} rowsPerPageOptions={[9]}>
//                   <Table.Header>
//                     <Table.Row>
//                       <Table.HeaderCell>Title</Table.HeaderCell>
//                       <Table.HeaderCell>Host</Table.HeaderCell>
//                       <Table.HeaderCell>Description</Table.HeaderCell>
//                       <Table.HeaderCell>Status</Table.HeaderCell>
//                       <Table.HeaderCell>Action</Table.HeaderCell>
//                     </Table.Row>
//                   </Table.Header>
//                   <Table.Body>
//                     {ProjectList.map((project) => (
//                       <Table.Row>
//                         <Table.Cell>{project.title}</Table.Cell>
//                         <Table.Cell>{project.user.map(host => (
//                           <ul>{host.name}</ul>))}</Table.Cell>
//                         <Table.Cell className="content-description">{project.description}</Table.Cell>
//                         {project.isDeleted === true ?
                          
//                             <Table.Cell >
//                               <div className=" center inactive-stats">
//                               InActive
//                               </div>
//                             </Table.Cell>
//                           : 
//                             <Table.Cell>
//                               <div className=" center active-stats">
//                               Active
//                               </div>
//                             </Table.Cell>
//                         }
//                         <Table.Cell>
//                           <div className="row">
//                             <div classname="col-md-6">
//                               <Link to={`/update-project/${project._id}`}>
//                                 <Icon className="edit-icon" name="edit" color="blue" />
//                               </Link>
//                             </div>
//                             <div className="col-md-6">
//                               <Button
//                                 className="buttonn"
//                                 onClick={() => removeProject(project._id)}
//                               >
//                                 <Icon name="delete" color="red" />
//                               </Button>
//                             </div>
//                           </div>
//                         </Table.Cell>
//                         {/* </Link> */}
//                       </Table.Row>
//                     ))}
//                   </Table.Body>
//                 </Table>
//               </div>
//             </>
//           )
//           }
//         </div></div>
//     </>
//   );
// };

// export default ManageProjects;
