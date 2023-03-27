import React, { Fragment, useEffect, useState } from "react";
import ProjectListItem from "./ProjectListItem";
import moment from "moment";
import _ from "lodash";
import Axios from "axios";
import { config } from "../../common/config/config";
import { FaSearch } from "react-icons/fa";
import "./projectList.css";
import Select from "react-select";

const ProjectList = ({ projectsInfo }) => {
  var project_data;
  const path = config();
  var source_copy = {};

  const [searchTerm, setSearchTerm] = useState("");
  const [projectTypeValue, setprojectTypeValue] = useState("ongoing");
  const [hostedByValue, sethostedByValue] = useState("");
  const [tagsValue, setTagsValue] = useState(null);
  const [projectsInfos, setProjectsInfo] = useState([]);

  if (projectsInfos[0]) {
    source_copy.title = projectsInfos[0].title;
    source_copy.description = projectsInfos[0].description;
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

  project_data = projectsInfo;

  const currentDate = moment().format("YYYY-MM-DD");

  const handleSearchBar = (e) => {
    setSearchTerm(e.target.value);
  };

  const projectTypeOptions = [
    { value: "past", label: "Past Projects" },
    { value: "ongoing", label: "Ongoing Projects" },
    { value: "all", label: "All Projects" },
  ];

  const uniqueHosts = projectsInfos
    .map((obj) => {
      return obj.hostedBy;
    })
    .filter((item, index, arr) => {
      return arr.indexOf(item) == index;
    });

  const hostedByOptions = [];

  uniqueHosts.map((uni) => {
    hostedByOptions.push({ value: uni, label: uni });
  });

  const uniqueTags = [];
  projectsInfos.map((data) => {
    data.category.map((cate) => {
      if (uniqueTags.indexOf(cate) === -1) {
        uniqueTags.push(cate);
      }
    });
  });

  const tagsOptions = [];
  uniqueTags.map((uni) => {
    tagsOptions.push({ value: uni, label: uni });
  });

  const projectTypeHandler = (e) => {
    e === null ? setprojectTypeValue("all") : setprojectTypeValue(e.value);
  };

  const hostedByHandler = (e) => {
    e === null ? sethostedByValue("") : sethostedByValue(e.value);
  };

  const tagsHandler = (e) => {
    const tempTagsValue = [];
    if (e.length === 0) {
      console.log("HEREE");
      setTagsValue(null);
    }
    e.map((val) => {
      tempTagsValue.push(val.value);
      setTagsValue(tempTagsValue);
    });
  };

  const testData = [];
  projectsInfos.map((test) => {
    tagsValue &&
      tagsValue.map((tags) => {
        return test.category.includes(tags)
          ? testData.indexOf(test) === -1
            ? testData.push(test)
            : null
          : null;
      });
  });

  const mapData = tagsValue ? testData : project_data;

  return (
    <>
      <div className="backWhite">
        <div className="row">
          <div className="col-md-6">
            <h1 className="header marginTop10 leftMargin">Projects</h1>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md mobCenter">
                
              </div>
              <div className="col-md mobCenter">
                <input
                  type="text"
                  id="searchbar-Projects"
                  className="searchbar"
                  placeholder="Search by keyword"
                  onChange={handleSearchBar}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row ">
          <div className="col-md-6">
            <div className="select">
             <p>Skills</p>
             <input
                type="checkbox"
                id="tagsFilter-Projects"
                placeholder="Select Tags"
                value={tagsOptions}
                onChange={tagsHandler}
              />
              <button > Apply</button>
              <button > Clear Filters</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          {mapData
            .filter((project) =>
              project.title.toLowerCase().includes(searchTerm)
            )
            .filter((pro) =>
              hostedByValue ? pro.hostedBy === hostedByValue : true
            )
            .sort((a,b) => {
              if (a.postedOn < b.postedOn) {
                return 1
              }
              if (a.postedOn > b.postedOn) {
                return -1
              }
              return 0
              }
            )
            .map((proj) => {
              if (projectTypeValue === "all") {
                return (
                  <div className="col-md-12">
                    <ProjectListItem key={proj._id} project={proj} />
                    <br />
                  </div>
                );
              } else if (projectTypeValue === "past") {
                if (
                  (proj.validUntil && currentDate > proj.validUntil) ||
                  proj.isDeleted === true
                ) {
                  return (
                    <div className="col-md-12">
                      <ProjectListItem key={proj._id} project={proj} />
                      <br />
                    </div>
                  );
                }
              } else if (projectTypeValue === "ongoing") {
                if (
                  (proj.validUntil &&
                    currentDate <= proj.validUntil &&
                    !proj.isDeleted) ||
                  (!proj.validUntil && !proj.isDeleted)
                ) {
                  return (
                    <div className="col-md-12">
                      <ProjectListItem key={proj._id} project={proj} />
                      <br />
                    </div>
                  );
                }
              }
            })}
        </div>
      </div>
    </>
  );
};

export default ProjectList;