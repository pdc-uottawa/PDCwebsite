import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../common/config/config";
import { Spinner } from "react-activity";
import { Link } from "react-router-dom";
import DOMpurify from "dompurify";
import { Helmet } from "react-helmet";
//secured by Makwana Harshk
const UpdateAlumni = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [AlumniList, setAlumniList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = props.match.params;

  useEffect(() => {
    Axios.get(path + "alumni/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const finalData = data.find((datum) => datum._id === id);
        setAlumniList(finalData);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setAlumniList, path]);

  function handleReset() {
    document.getElementById("name").innerHTML = "";
    document.getElementById("currentPosition").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("linkedIn").innerHTML = "";
  }

  function handleSubmit() {
    let name = document.getElementById("name").value;
    let currentPosition = document.getElementById("currentPosition").value;
    let email = document.getElementById("email").value;
    let linkedIn = document.getElementById("linkedIn").value;
    let founder = AlumniList.founder;

    if (!name && !currentPosition && !email && !linkedIn) {
      alert("Please Enter Any Value To Update!");
    } else {
      if (
        (name && name === AlumniList.name) ||
        (currentPosition && currentPosition === AlumniList.program) ||
        (email && email === AlumniList.email) ||
        (linkedIn && linkedIn === AlumniList.linkedIn)
      ) {
        alert("Please do not enter same values!");
      } else {
        if (!name) {
          name = AlumniList.name;
        }
        if (!currentPosition) {
          currentPosition = AlumniList.currentPosition;
        }
        if (!email) {
          email = AlumniList.email;
        }
        if (!linkedIn) {
          linkedIn = AlumniList.linkedIn;
        }
        //XSS sanitizer
        name = DOMpurify.sanitize(name);
        email = DOMpurify.sanitize(email);
        linkedIn = DOMpurify.sanitize(linkedIn);
        currentPosition = DOMpurify.sanitize(currentPosition);
        Axios.post(path + "alumni/update", {
          _id: id,
          name,
          currentPosition,
          email,
          linkedIn,
          founder,
        })
          .then((res) => {
            // console.log(res.data);
            setThankYou(true);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }
  return (
    <>
      <Helmet>
        <title>Update Alumni | Professional Development Club</title>
      </Helmet>
      {loading ? (
        <div className="loadingState">
          <Spinner color="#727981" size={35} speed={1} animating={true} />
        </div>
      ) : thankYou ? (
        <>
          <div>
            <h1 className="center marginTop">
              Thank You. Details has been updated!
            </h1>
            <Link to="/manage-alumni">
              <input
                type="submit"
                className="backButton marginLeft marginTop"
                value="Back"
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1>Edit Alumni details</h1>
          <h4 className="red">
            Only fill the details that needs to be updated and leave the rest
            fields blank!
          </h4>
          <h4 className="red">Contact Website Team to update the picture.</h4>
          <Form>
            <Form.Field
              control={Input}
              label="Name"
              placeholder={AlumniList.name}
              id="name"
            />
            <Form.Field
              control={Input}
              label="Current Position"
              placeholder={AlumniList.currentPosition}
              id="currentPosition"
            />
            {AlumniList.founder ? null : (
              <Form.Field
                id="email"
                control={Input}
                label="Email"
                placeholder={AlumniList.email}
              />
            )}
            <Form.Field
              id="linkedIn"
              control={Input}
              label="LinkedIn"
              placeholder={AlumniList.linkedIn}
            />
            <input
              type="submit"
              className="submitButton"
              onClick={handleSubmit}
            />
            <input
              type="reset"
              className="resetButton marginLeft"
              onClick={handleReset}
            />
            <Link to="/manage-alumni">
              <input
                type="submit"
                className="backButtonBlue marginLeft"
                value="Back"
              />
            </Link>
          </Form>
        </>
      )}
    </>
  );
};
export default UpdateAlumni;
