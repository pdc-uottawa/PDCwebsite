import React, { Fragment, useContext, useState, useEffect } from "react";
import useReactRouter from "use-react-router";
import { Image, Menu, Dropdown } from "semantic-ui-react";
import { UserContext } from "../../../common/context/UserProvider";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Spinner } from "react-activity";


/**
 * @author @binjiasata
 * @description After user login, this menu will be shown in Header.
 */
const LogedInMenu = ({ logOut, username, userPicture }) => {
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { history } = useReactRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.post(path + "user/one", {
      id: userInfo.user._id
    })
      .then((res) => {
        if(res!= null)
        return res.data;
      })
      .then((data) => {
        setUser({ data });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [null]);

  return (
    <>
      {
        loading ? (
          <div className="loadingStateHeader">
            <Spinner color="#727981" size={20} speed={1} animating={true} />
          </div >
        ) : (
          <>
            <Menu.Item position="right">
              <Image avatar spaced="right" src={userPicture} />
              <Dropdown pointing="top left" text={username}>
                {/* if a user is admin, show create project button, dashboard,csv download */}
                <Dropdown.Menu>
                  {console.log('USER FROM : ', user)}
                  {user.data && (user.data.admin) && (
                    <Fragment>
                      {/* <Dropdown.Item
                onClick={() => {
                  history.push("/create-event");
                }}
                text="Post events"
                icon="plus"
              />
              <Dropdown.Item
                onClick={() => {
                  history.push("/create-project");
                }}
                text="Create Project"
                icon="plus"
              />
              <Dropdown.Item
                onClick={() => {
                  history.push("/update-coordinators");
                }}
                text="Manage Coordinators"
                icon="settings"
              />
              <Dropdown.Item
                onClick={() => {
                  history.push("/manage-alumni");
                }}
                text="Manage Alumni"
                icon="settings"
              />
              <Dropdown.Item
                onClick={() => {
                  history.push("/manage-ourteam");
                  console.log()
                }}
                text="Manage Team"
                icon="settings"
              />

              
              <Dropdown.Item
                onClick={() => {
                  history.push("/download-user-list");
                }}
                text="Download User Information"
                icon="download"
              >
              </Dropdown.Item> */}
                      <Dropdown.Item
                        onClick={() => {
                          history.push("/admin-dashboard");
                        }}
                        text="Admin Dashboard"
                        icon="dashboard"
                      />
                    </Fragment>
                  )}
                  {/* {userInfo.user && (userInfo.user.company) && (
                    <Fragment>
                      <Dropdown.Item
                        onClick={() => {
                          history.push("/create-event");
                        }}
                        text="Post events"
                        icon="plus"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          history.push("/create-project");
                        }}
                        text="Create Project"
                        icon="plus"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          history.push("/company-dashboard");
                        }}
                        text="Dashboard"
                        icon="dashboard"
                      />
                    </Fragment>
                  )} */}
                  {user.data && !(user.data.admin || user.data.company) && (
                    <Fragment>
                      <Dropdown.Item
                        onClick={() => {
                          history.push("/student-profile");
                        }}
                        text="My Profile"
                        icon="dashboard"
                      />
                    </Fragment>
                  )}
                  <Dropdown.Item onClick={logOut} text="Log Out" icon="power" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </>
        )}
    </>
  );
};

export default LogedInMenu;
