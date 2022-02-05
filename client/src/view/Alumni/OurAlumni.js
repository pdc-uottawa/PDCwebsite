import React, { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import { Spinner } from "react-activity";
import defimg from './../../assets/default.png'

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
                console.log(data)
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
            });
    }, [setAlumniList, path]);

    return (
        <>
            {
                loading ?
                    <div className="loadingState">
                        <Spinner color="#727981" size={35} speed={1} animating={true} />
                    </div>
                    :
                    <>
                        <div>
                            <h1 className="center ourTeamHead">FOUNDER ALUMNI</h1>
                            <div className="row cardsCenter">


                                {AlumniList
                                    .filter((alumnus) => alumnus.founder === true)
                                    .map((alumni) => {
                                        return (
                                            <div key={alumni._id} className="cursor col-md-3">
                                                <div className="body">
                                                    <Image
                                                        circular
                                                        src={`https://drive.google.com/thumbnail?id=${alumni.image}`}
                                                        alt={alumni.name}
                                                        className="photo"
                                                    />
                                                    <h2 className="titleName">{alumni.name}</h2>

                                                    <h4 className="titlePosition">{alumni.currentPosition}</h4>
                                                    <div className="btn">
                                                        <a
                                                            href={alumni.linkedIn}
                                                            target="_blank"
                                                        >
                                                            <Image
                                                                src={"/assets/linkedin.png"}
                                                                id="socialMediaIcon"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                        <div>
                            <h1 className="center ourTeamHead">OUR NOTABLE ALUMNI</h1>
                            <div className="row cardsCenter">


                                {AlumniList
                                    .filter((alumnus) => alumnus.founder === false)
                                    .map((alumni) => {
                                        return (
                                            <div key={alumni._id} className="cursor col-md-3">
                                                <div className="body">
                                                    {
                                                        alumni.image === 'default' ?
                                                        <Image
                                                            circular
                                                            src={defimg}
                                                            alt={alumni.name}
                                                            className="photo"
                                                        />
                                                        :
                                                        <Image
                                                            circular
                                                            src={`https://drive.google.com/thumbnail?id=${alumni.image}`}
                                                            alt={alumni.name}
                                                            className="photo"
                                                        />
                                                    }
                                                    <h2 className="titleName">{alumni.name}</h2>

                                                    <h4 className="titlePosition">{alumni.currentPosition}</h4>
                                                    <div className="btn">
                                                        <a
                                                            href={alumni.linkedIn}
                                                            target="_blank"
                                                        >
                                                            <Image
                                                                src={"/assets/linkedin.png"}
                                                                id="socialMediaIcon"
                                                            />
                                                        </a>
                                                        <a
                                                            href={"mailto:" + alumni.email}
                                                            target="_blank"
                                                        >
                                                            <Image
                                                                src={"/assets/outlook.png"}
                                                                id="socialMediaIcon"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default OurAlumni;
