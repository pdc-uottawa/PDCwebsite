import React, { useEffect } from "react";
import HeaderMob from "../Header/HeaderMob";
import { Icon } from "semantic-ui-react";
import img from "./../../assets/pdc-logo.png";
import circles from "./../../assets/cornerCircles.png";

const HomeHeader = () => {
  return (
    <>
      <div className="row homeHeadBg verticallyCenter">
        <div className="headerMob">
          <HeaderMob />
        </div>
        <img className="circles" src={circles} />
        <div className="col-md-6 center marginTop100">
          <img className="padding10 pdcLogoHomeHead" src={img} />
        </div>
        <div className="col-md-6 marginBottom100">
          <p className="white font20 center">
            Welcome to the <br />
            <br />
            <span className="font25">University of Ottawa's </span>
            <br />
            <span className="font25 ">Professional Development Club</span>
          </p>
          <br />
          <br />
          <div className="horizontalLine" />
          <br />
          <p className="font20 padding9">
            A graduate student club of the students, by the students, and for
            the students.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
