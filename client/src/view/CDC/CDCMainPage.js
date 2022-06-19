import React, { useState, useEffect } from "react";
import Axios from "axios";
import CDCButtons from "./CDCButtons";
import ContactUs from "./ContactUs";
import TipsAndTricks from "./TipsAndTricks";
import AboutUs from "./AboutUs";
import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";
import { config } from "../../common/config/config";
import { Helmet } from "react-helmet";
import { useWindowDimensions } from "../../common/context/WindowDimensionsProvider";
import Footer from "../Footer/Footer";

const CDCMainPage = (props) => {
  const path = config();
  const [loading, setLoading] = useState(true);
  const [contactDetails, setContactDetails] = useState([]);
  const [resumeTips, setResumeTips] = useState([]);
  const [linkedInTips, setLinkedInTips] = useState([]);
  const [interviewTips, setInterviewTips] = useState([]);
  const [buttonLinks, setButtonLinks] = useState([]);

  useEffect(() => {
    Axios.all([
      Axios.get(path + "cdc/resumetips/all", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setResumeTips(data);
        })
        .catch((e) => {
          console.log(e);
        }),
      Axios.get(path + "cdc/linkedintips/all", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setLinkedInTips(data);
        })
        .catch((e) => {
          console.log(e);
        }),
      Axios.get(path + "cdc/interviewques/all", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setInterviewTips(data);
        })
        .catch((e) => {
          console.log(e);
        }),
      Axios.get(path + "cdc/links/all", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setButtonLinks(data);
        })
        .catch((e) => {
          console.log(e);
        }),
      Axios.get(path + "cdc/contact/all", {})
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setContactDetails(data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        }),
    ]);
  }, []);

  return (
    <>
      <Helmet>
        <title>CDC | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <div className="container">
          <AboutUs />
          <CDCButtons buttonLinks={buttonLinks} />
          <TipsAndTricks
            resumeTips={resumeTips}
            linkedInTips={linkedInTips}
            interviewTips={interviewTips}
          />
          <ContactUs contactDetails={contactDetails} />
        </div>
      )}
      <Footer/>
    </>
  );
};

export default CDCMainPage;
