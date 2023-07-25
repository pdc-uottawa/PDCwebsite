import React from "react";
import { Helmet } from "react-helmet";
import { FcSettings, FcBiotech , FcCamcorderPro, FcBriefcase} from "react-icons/fc";
import "./student.css"

const FacultyDirectories = (props) => {
    return (
        <>
            <Helmet>
                <title>Faculty Directories | Professional Development Club</title>
            </Helmet>
            <div class="container-fluid">
                <div className="container-fluid lead all-data">
                    <h1 class="jumbotron center hdr">
                        Access Your Faculty Directory here:
                    </h1>
                    <div className="container-fluid">
                        <div className="row ct-rw" >
                            <div className="col-sm-3 ur-card">
                                <div class="ur-icon">
                                    <FcSettings size={80} />
                                </div>
                                <div class="ur-name">
                                    <a class="item" href="https://engineering.uottawa.ca/people">
                                        Engineering
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcBiotech color="green" size={80} />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://www.uottawa.ca/faculty-science/professors"
                                    >
                                        Science
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcCamcorderPro size={80} />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://www.uottawa.ca/faculty-arts/communication/faculty"
                                    >
                                        Communication

                                    </a>
                                </div>
                            </div>
                            
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcBriefcase size={80} />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://www.uottawa.ca/faculty-law/common-law/about/staff"
                                    >
                                        Law

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

export default  FacultyDirectories;
