import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../common/config/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddForm = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  function handleSubmit() {
    const name = document.getElementById("name").value;
    const program = document.getElementById("program").value;
    const email = document.getElementById("email").value;

    if (name && program && email) {
      Axios.post(path + "coordinators/add", {
        name,
        program,
        email,
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
        <title>Add New Coordinator | Professional Development Club</title>
      </Helmet>
      {thankYou ? (
        <>
          <div>
            <h1 className="center marginTop">
              Thank You. Coordinator has been added!
            </h1>
            <Link to="/update-coordinators">
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
          <h1>Add New Coordinator</h1>
          <Form>
            <Form.Field
              control={Input}
              label="Name"
              placeholder="Enter Name"
              id="name"
            />
            <Form.Field
              control={Input}
              label="Program"
              placeholder="Electrical and Computer Engineering (ELG)"
              id="program"
            />
            <Form.Field
              id="email"
              control={Input}
              label="Email"
              placeholder="test012@uottawa.ca"
            />
            <Button type="submit" color="teal" onClick={handleSubmit}>
              Submit
            </Button>
            <Link to="/update-coordinators">
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
export default AddForm;
