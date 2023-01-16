// import React, { useEffect, useState } from "react";
// import { Form, Input, Button, Radio } from "semantic-ui-react";
// import Axios from "axios";
// import { config } from "../../../common/config/config";
// import { Spinner } from "react-activity";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import AdminSideBar from "../Admin Dashboard/AdminSideBar";
// import TextareaAutosize from "react-textarea-autosize";

// const UpdateProject = (props) => {
//   const path = config();
//   const [thankYou, setThankYou] = useState(false);
//   const [ProjectList, setProjectList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { id } = props.match.params;

//   useEffect(() => {
//     Axios.get(path + "project", {})
//       .then((res) => {
//         return res.data;
//       })
//       .then((data) => {
//         const finalData = data.find((datum) => datum._id === id);
//         setProjectList(finalData);
//         setLoading(false);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, [setProjectList, path]);

//   function handleReset() {
//     document.getElementById("title").innerHTML = "";
//     document.getElementById("description").innerHTML = "";
//     document.getElementById("isDeleted").innerHTML = "";
//   }

//   function handleSubmit() {
//     let title = document.getElementById("title").value;
//     let description = document.getElementById("description").value;
//     let isDeleted = document.getElementById("isDeleted").value;

//     if (!title && !description && !isDeleted) {
//       alert("Please Enter Any Value To Update!");
//     } else {
//       if (
//         (title && title === ProjectList.title) ||
//         (description && description === ProjectList.description) ||
//         (isDeleted && isDeleted === ProjectList.isDeleted)
//       ) {
//         alert("Please do not enter same values!");
//       } else {
//         if (!title) {
//           title = ProjectList.title;
//         }
//         if (!description) {
//           description = ProjectList.description;
//         }
//         if (!isDeleted) {
//           isDeleted = ProjectList.isDeleted;
//         }
//         Axios.post(path + "project/manage", {
//           _id: id,
//           title,
//           description,
//           isDeleted,
//         })
//           .then((res) => {
//             // console.log(res.data);
//             setThankYou(true);
//           })
//           .catch((e) => {
//             console.log(e);
//           });
//       }
//     }
//   }
//   return (
//     <>
//       <Helmet>
//         <title>Update Project Details| Professional Development Club</title>
//       </Helmet>
//       <div className="admin-dashboard">
//         <AdminSideBar />
//         <div className="admin-home">
//           {loading ? (
//             <div className="loadingState">
//               <Spinner color="#727981" size={35} speed={1} animating={true} />
//             </div>
//           ) : thankYou ? (
//             <>
//               <div>
//                 <h1 className="center marginTop">
//                   Thank You. Details has been updated!
//                 </h1>
//                 <Link to="/manage-projects">
//                   <input
//                     type="submit"
//                     className="backButton marginLeft marginTop"
//                     value="Back"
//                   />
//                 </Link>
//               </div>
//             </>
//           ) : (
//             <>
//               <h2 className="admin-h2">Edit Project details</h2>
//               <h4 className="red">
//                 Only fill the details that needs to be updated and leave the rest
//                 fields blank!
//               </h4>
//               <Form>
//               <Form.Field
//                   control={Input}
//                   label="Title"
//                   placeholder={ProjectList.title}
//                   id="title"
//                 />
//                 <Form.Field
//                   id="description"
//                   control={TextareaAutosize}
//                   label="Description"
//                   placeholder={ProjectList.description}
//                 />
//                                   <Form.Field
//                     id="isDeleted"
//                     control={Radio}
//                     label="Disable Project"
//                     placeholder={ProjectList.isDeleted}
//                   />
//                 <input
//                   type="submit"
//                   className="submitButton"
//                   onClick={handleSubmit}
//                 />
//                 <input
//                   type="reset"
//                   className="resetButton marginLeft"
//                   onClick={handleReset}
//                 />
//                 <Link to="/manage-projects">
//                   <input
//                     type="submit"
//                     className="backButtonBlue marginLeft"
//                     value="Back"
//                   />
//                 </Link>
//               </Form>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
// export default UpdateProject;
