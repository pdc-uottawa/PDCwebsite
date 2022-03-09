import React, { Fragment,useState, useEffect, useContext } from "react";
import { CSVLink} from "react-csv";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import { UserContext } from "../../common/context/UserProvider";

const path = config();

const UserInfoListCsv =() => {
  const [completeUsersList, setCompleteUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [adminUsers, setAdminUsers] = useState([]);
  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Program', key: 'program'},
    // { label: 'IsGoogleAccount', key: 'googleId'},
    // { label: 'IsLinkedInAccount', key: 'linkedinId'},
    // { label: 'IsOutlookAccount', key: 'outlookId'},
    { label: 'IsAdmin', key: 'admin'},
    { label: 'IsCompany', key: 'company'},
  ];
  const adminList = [];
  const { user } = userInfo;
 
  useEffect(() => {
    Axios.get(path + "user/completeuserlist")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setCompleteUsersList(data);
        setLoading(false)
      })
      .catch((e) => {
        console.log(e);
      });
  },[null]);
  
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
      
  let userList = [
   ];

  completeUsersList.map((user)=>{
    userList.push(
      {
        name:user.name,
        email:user.email,
        admin:user.admin,
        company:user.company,
        program:user.program
      });
  });

  adminUsers.map((admin) => {
        adminList.push(
          {
            key: admin._id,
            value: admin,
            text: admin.name
          });
      });

  return (
    user && user.admin ? 
        loading ?
            <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
            </div>
            :
            <>
                <CSVLink headers={headers} data={userList} filename="User info list.csv">
                  Download User Information Here
                </CSVLink>
            </>
            :
            <>
          <center>
            <h1>Oops, Page Not Found!</h1> 
            <h3>Please login as an admin to download User List!</h3> 
          </center>
        </>
  );
};

export default UserInfoListCsv;
