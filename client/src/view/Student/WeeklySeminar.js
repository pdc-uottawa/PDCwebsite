import React from "react";
import { Helmet } from "react-helmet";
import "./student.css"

const WeeklySeminar = (props) => {

    return (
        <>
            <Helmet>
                <title>Industry Internship Project Weekly Seminar | Professional Development Club</title>
            </Helmet>
            <div class="container-fluid">
                <div className="container-fluid lead all-data">
                    <h1 class="jumbotron center hdr">
                        Industry Internship Project Weekly Seminar
                    </h1>
                </div>
                <div class="faq-padding" style={{textAlign: 'center'}}>
                    <h2>
                        Summary
                    </h2>
                </div>
                <div class="faq-ans"  style={{margin: 1 + '%'}}>
                Exciting news! <strong>The Professional Development Club</strong> is thrilled to introduce the Industry Internship Project weekly seminars.
                If you're a graduate student, these sessions are tailor-made to address your concerns and help you grow.
                <br></br>
                <br></br>
                Our sessions will be interactive, providing you with a platform to ask questions and get valuable insights from the Professional Development Club.
                <br></br>
                <br/>
                <div style={{
                                textAlign: 'center',
                                fontSize: '125%'
                            }}>
                    Starting from August 2nd, 2023, these sessions will continue every Wednesday, from 7 PM to 8 PM.
                    <br/>
                    <br/>
                    <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTBiNmU3YjYtZWEzYS00Yjc5LTk3YjEtZTBhYzQxYjExMmQ2%40thread.v2/0?context=%7b%22Tid%22%3a%22d41fdab1-7e15-4cfd-b5fa-7200e54deb6b%22%2c%22Oid%22%3a%223f6ce6c0-916a-44f1-ac91-5c86a0f94774%22%7d" target="_blank">
                        <strong><u>Click here to join the meeting</u></strong>
                    </a>
                </div>
                {/* <div style={{
                    padding: '2%',
                    textAlign: 'center'
                }}>
                    <h2>
                        <a href='https://www.youtube.com/channel/UCW4nbiQF-186o9kjAoj6FvA' target="_blank">
                            <u>Click here to see weekly recording</u>
                        </a>
                    </h2>
                </div> */}
                </div>
            </div>
        </>
    )
};

export default WeeklySeminar