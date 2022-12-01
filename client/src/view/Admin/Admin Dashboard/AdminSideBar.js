import Axios from "axios";
import React from "react";
import { MdOutlinePeople, MdOutlineEventAvailable } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { RiTeamLine, RiLogoutCircleLine } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { CgDockBottom, CgProfile } from "react-icons/cg";
import { BsInfoSquare } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { config } from "../../../common/config/config";
import useReactRouter from "use-react-router";
import { Link } from "react-router-dom";

const AdminSideBar = (props) => {
  let path = config();
  const { history } = useReactRouter();

  return (
    <>
      <div className="admin-sidebar">
        <div className="sidebar-top">
          <Link to="/admin-dashboard" color="">
            <b>
              Admin Dashboard</b>
          </Link>
        </div>
        <div className="sidebar-bottom">
          <ul className="admin-ul">
            <p className="sidebar-titles">
              MANAGE DATA
            </p>
            <Link to="/manage-testimonials">
              <li className="admin-sidebar-li">
                <HiUserCircle className="admin-sidebar-icons" />
                <span className="admin-span">
                  Testimonials</span>
              </li>
            </Link>
            <Link to="/create-event">
              <li className="admin-sidebar-li">
                <MdOutlineEventAvailable className="admin-sidebar-icons" />
                <span className="admin-span" > Events</span>
              </li>
            </Link>
            <Link to="/manage-ourteam">
              <li className="admin-sidebar-li">
                <RiTeamLine className="admin-sidebar-icons" />
                <span className="admin-span"> Team</span>
              </li>
            </Link>
            <Link to="/update-coordinators">
              <li className="admin-sidebar-li">
                <MdOutlinePeople className="admin-sidebar-icons" />
                <span className="admin-span"> Co-ordinators</span>
              </li>
            </Link>
            <Link to="/manage-alumni">
              <li className="admin-sidebar-li">
                <HiUserGroup className="admin-sidebar-icons" />
                <span className="admin-span"> Alumni</span>
              </li>
            </Link>
            <Link to="/manage-volunteers">
              <li className="admin-sidebar-li">
              <RiTeamLine className="admin-sidebar-icons" />
                <span className="admin-span"> Volunteers</span>
              </li>
            </Link>
            <Link to="/manage-FAQs">
              <li className="admin-sidebar-li">
                <FaQuestionCircle className="admin-sidebar-icons" />
                <span className="admin-span"> FAQ</span>
              </li>
            </Link>
            <Link to="/create-project">
              <li className="admin-sidebar-li">
                <CgDockBottom className="admin-sidebar-icons" />
                <span className="admin-span"> Projects</span>
              </li>
            </Link>
            <Link to="/manage-other-info">
              <li className="admin-sidebar-li">
                <BsInfoSquare className="admin-sidebar-icons" />
                <span className="admin-span"> Other Info</span>
              </li>
            </Link>
          </ul>
          {/* <ul className="admin-ul">
            <p className="sidebar-titles">
              USER
            </p>
            <li className="admin-sidebar-li">
              <CgProfile className="admin-sidebar-icons" />
              <span className="admin-span">
                Profile</span>
            </li>
            <li className="admin-sidebar-li">
              <RiLogoutCircleLine className="admin-sidebar-icons" />
              <span className="admin-span">
                Logout</span>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
