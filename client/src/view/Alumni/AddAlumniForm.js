import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../common/config/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import img from "./../../assets/default.png";

const AddAlumni = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);

  function handleSubmit() {
    const image = "default";
    const name = document.getElementById("name").value;
    const currentPosition = document.getElementById("currentPosition").value;
    const linkedIn = document.getElementById("linkedIn").value;
    const email = document.getElementById("email").value;
    const founder = false;

    if (image && name && currentPosition && email && linkedIn) {
      Axios.post(path + "alumni/add", {
        image,
        name,
        currentPosition,
        linkedIn,
        email,
        founder,
      })
        .then((res) => {
          setThankYou(true);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Please enter all details!");
    }
  }
  return (
    <>
      <Helmet>
        <title>Add Alumni | Professional Development Club</title>
      </Helmet>
      {thankYou ? (
        <>
          <div>
            <h1 className="center marginTop">
              Thank You. Coordinator has been added!
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
          <h1>Add New Alumni </h1>
          <h4 className="red">Contact Website Team to add the picture.</h4>
          <Form>
            <Form.Field
              control={Input}
              label="Name"
              placeholder="Enter Name"
              id="name"
            />
            <Form.Field
              control={Input}
              label="Current Position"
              placeholder="Developer at AedoAI Inc."
              id="currentPosition"
            />
            <Form.Field
              id="email"
              control={Input}
              label="Email"
              placeholder="test012@uottawa.ca"
            />
            <Form.Field
              id="linkedIn"
              control={Input}
              label="LinkedIn"
              placeholder="https://www.linkedin.com/in/test012"
            />
            <Button type="submit" color="green" onClick={handleSubmit}>
              Submit
            </Button>
            <Link to="/manage-alumni">
              <Button type="submit" color="blue">
                Back{" "}
              </Button>
            </Link>
          </Form>
        </>
      )}
    </>
  );
};
export default AddAlumni;
