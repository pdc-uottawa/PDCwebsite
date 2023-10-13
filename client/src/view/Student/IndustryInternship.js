import React from "react";
import { Helmet } from "react-helmet";
import { FcInfo, FcLibrary, FcTemplate, FcCollaboration, FcDocument } from "react-icons/fc";
import "./student.css"

const IndustryInternship = (props) => {
    return (
        <>
            <Helmet>
                <title>Industry Internship Project  | Professional Development Club</title>
            </Helmet>
            <div class="container-fluid">
                <div className="container-fluid lead all-data">
                    <h1 class="jumbotron center hdr">
                        Industry Internship Project Information
                    </h1>
                    <div className="container-fluid">
                        <div className="row ct-rw" >
                            <div className="col-md-6 ur-card">
                                <div class="ur-icon">
                                    <FcTemplate size={80} />
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/1NeoAlweipUsJplD-cWuhNgmd9L7b8Rs6/view?usp=sharing" target="_blank">
                                        Download Project Proposal template
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 ur-card">
                                <div class="ur-icon">
                                    <FcInfo size={80} />
                                </div>
                                <div>
                                    <a href="https://catalogue.uottawa.ca/en/courses/gng/" target="_blank">
                                        Industry Internship Project (ELG-5902) Course Details
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 ur-card">
                                <div class="ur-icon">
                                    <FcCollaboration size={80} />
                                </div>
                                <div>
                                    <a href="#/weekly-seminar">
                                        Industry Internship Project Weekly Seminar
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 ur-card">
                                <div class="ur-icon">
                                    <FcDocument size={80} />
                                </div>
                                <div>
                                    <a href="https://docs.google.com/document/d/1oFnUDR9do-GucifcPOjaJxt7iZj8Wp3Z/edit?usp=sharing&ouid=101306041920964046409&rtpof=true&sd=true" target="_blank">
                                        5902 FAQ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndustryInternship;
