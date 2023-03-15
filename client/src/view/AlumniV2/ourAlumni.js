import React, { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import DOMpurify from "dompurify";
import defimg from "./../../assets/default.png";
import { Helmet } from "react-helmet";
import "./AlumniV2.css";
//secured by Makwana Harsh

const OurAlumni = (props) => {
  const path = config();
  const [AlumniList, setAlumniList] = useState([]);
  const [loading, setLoading] = useState(true);
  const defaultImage = defimg;

  useEffect(() => {
    Axios.get(path + "alumni/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAlumniList(data);
        console.log(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setAlumniList, path]);

  return (
    <>
      <Helmet>
        <title>Our Alumni | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : (
        <>
          <p className="font row">Alumni</p>
          <p className="sfont row">PDC Founders</p>
          <div className="row ">
            {AlumniList.filter((alumnus) => alumnus.founder === true).map(
              (alumni) => {
                return (
                  <div key={alumni._id} className="col-md-3 cardss">
                    <div className="body">
                      {alumni.image === "default" ? (
                        <Image
                          circular
                          src={defimg}
                          alt={alumni.name}
                          className="photo"
                        />
                      ) : (
                        <Image
                          circular
                          src={alumni.image}
                          alt={alumni.name}
                          className="photo"
                        />
                      )}
                      <h2 className="titleFont">
                        {DOMpurify.sanitize(alumni.name)}
                      </h2>
                      <p className="subTitle ">
                        {DOMpurify.sanitize(alumni.currentPosition)}
                      </p>
                        <a
                          href={DOMpurify.sanitize(alumni.linkedIn)}
                          target="_blank"
                        >
                          <Image
                            src={"/assets/linkedinsquare.png"}
                            id="socialMediaIcon"
                          />
                        </a>
                      </div>
                  </div>
                );
              }
            )}
          </div>

          <p className="nfont">Notable Alumni</p>
          <div className="row ">
            {AlumniList.filter((alumnus) => alumnus.founder === false).map(
              (alumni) => {
                return (
                  <div key={alumni._id} className="col-md-3 cardss">
                    <div className="body">
                      {alumni.image === "default" ? (
                        <Image
                          circular
                          src={defimg}
                          alt={alumni.name}
                          className="photo"
                        />
                      ) : (
                        <Image
                          circular
                          src={alumni.image}
                          alt={alumni.name}
                          className="photo"
                        />
                      )}
                      <h2 className="titleFont">
                        {DOMpurify.sanitize(alumni.name)}
                      </h2>
                      <h5 className="subTitle">
                        {DOMpurify.sanitize(alumni.currentPosition)}
                      </h5>
                    
                      <div >
                        <a href={alumni.linkedIn} target="_blank">
                          <Image
                            src={"/assets/linkedinsquare.png"}
                            id="socialMediaIcon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </>
  );
};

export default OurAlumni;
