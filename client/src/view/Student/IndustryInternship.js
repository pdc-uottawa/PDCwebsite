import React from "react";
import { Helmet } from "react-helmet";
import { FcInfo, FcLibrary, FcTemplate } from "react-icons/fc";
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
                                    <a href="https://docs.google.com/document/d/1ugdBMP6jQrmtGy_1gVR79fU1QvPnluUd/edit?usp=sharing&ouid=118159311551123468177&rtpof=true&sd=true" target="_blank">
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
                                        Industry Iternship Project (ELG-5902) Course Details
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
