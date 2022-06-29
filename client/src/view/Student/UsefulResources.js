import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { FaAddressCard, FaBuilding, FaTelegramPlane, FaUniversity } from "react-icons/fa";
import { FcBusinessContact, FcCalendar, FcCollaboration, FcContacts, FcCurrencyExchange, FcDepartment, FcEditImage, FcLeave, FcLibrary, FcMindMap, FcOrganization } from "react-icons/fc";
import { MdPeople } from "react-icons/md";
import { Button, Grid, Segment, Image } from "semantic-ui-react";

const UsefulResources = (props) => {
    return (
        <>
            <Helmet>
                <title>Useful Resources | Professional Development Club</title>
            </Helmet>
            <div class="container-fluid">
                <div className="container-fluid lead all-data">
                    <h1 class="jumbotron center hdr">
                        Useful university resources for newly admitted students
                    </h1>
                    <div className="container-fluid">
                        <div className="row ct-rw" >
                            <div className="col-sm-3 ur-card">
                                <div class="ur-icon">
                                    <FcLibrary size={80} />
                                </div>
                                <div class="ur-name">
                                    <a class="item" href="https://international.uottawa.ca/en">
                                        International Office
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FaTelegramPlane color="green" size={80} />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://international.uottawa.ca/en/study-at-uottawa/current-students/immigration#1"
                                    >
                                        Immigration
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcCollaboration size={80} />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://international.uottawa.ca/en/study-at-uottawa/uoconnexion"
                                    >
                                        uOConnection

                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcBusinessContact size={80} />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://international.uottawa.ca/en/study-at-uottawa/uhip"
                                    >
                                        University Health Insurance Plan (UHIP)
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcCurrencyExchange size={80} />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://www.uottawa.ca/graduate-studies/students/awards"
                                    >
                                        Awards and Financial Support
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcMindMap size={80} />
                                </div>
                                <div class="ur-name">
                                    <a class="item" href="https://www.uottawa.ca/wellness/">
                                        Mental Health and Wellness
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcDepartment size={80} />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://www.uottawa.ca/career-development-centre/"
                                    >
                                        University's Career Development Centre
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcEditImage size={80} />
                                </div>
                                <div class="ur-name">
                                    <a class="item" href="https://sass.uottawa.ca/en/writing">
                                        Academic Writing Help Centre (AWHC)
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcOrganization size={80} />
                                </div>
                                <div class="ur-name">
                                    <a class="item" href="https://olbi.uottawa.ca/">
                                        Official Language and Bilingualism Institute (OLBI)
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcContacts size={80} />
                                </div>
                                <div class="ur-name">
                                    <a class="item" href="https://gsaed.ca/en/home/">
                                        Graduate Students Association of the University of Ottawa (GSAED)
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="ur-icon">
                                    <FcLeave size={80} rounded />
                                </div>
                                <div class="ur-name">
                                    <a
                                        class="item"
                                        href="https://www.uottawa.ca/important-academic-dates-and-deadlines/"
                                    >
                                        Important Academic Dates and Deadlines
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

export default UsefulResources;
