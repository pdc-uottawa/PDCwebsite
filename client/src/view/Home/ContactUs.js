import React, { useEffect, useState } from "react";
import { Segment, Form, Grid, Input, Button, Icon, Dropdown, Select } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import "./Home.css"
import { Spinner } from "react-activity";
const img = require("../../assets/logo.png");

function ContactUs() {
  const path = config();
  const options = [
    { key: '1', text: 'Website', value: 'website' },
    { key: '2', text: 'CDC', value: 'cdc' },
    { key: '3', text: 'Projects', value: 'projects' },
    { key: '4', text: 'Other', value: 'other' },
  ];
  const [selectedOption, setSelectedOption] = useState("")
  const [loading, setLoading] = useState(false);
  const [other, setOther] = useState(false)

  function handleOptionChange (e, val) {
    setSelectedOption(val)
    if (val === 'other') {
      setOther(true)
    }
    else {
      setOther(false)
    }
  }

  function handleSubmit() {
    setLoading(true)
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const category = selectedOption;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(category) {
      Axios.post(path + "home/contact", {
          fname,
          lname,
          category,
          email,
          message
        })
          .then((res) => {
            setLoading(false)
            document.getElementById('fname').value = null;
            document.getElementById('lname').value = null;
            document.getElementById('category').innerHTML = null;
            document.getElementById('email').value = null;
            document.getElementById('message').value = null;
            alert('Your query has been sent successfully!');
          })
          .catch((e) => {
            console.log(e);
          });
    } 
    else {
      alert('Please Enter all Details!')
      setLoading(false)
    }
  }

  return (
    <div className="frag1">
      <h1 className="header">CONTACT US</h1>
      <div>
        <Grid className="grid-col-1" columns={2}>
          <Grid.Column>
            <div className="row">
              <img className="col-md-4 logo" src={img} />
              <h3 className="cont-hd col-md-6">Professional Development Club, uOttawa</h3>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  placeholder='Enter First Name'
                  id='fname'
                  required={true}
                />
                <Form.Field
                  control={Input}
                  placeholder='Enter Last Name'
                  id='lname'
                  required={true}
                />
              </Form.Group>
              <Form.Select
                placeholder='Select Category for Query'
                id='category'
                options={options}
                onChange={(e, {value}) => handleOptionChange(e, value?.toString())}
                required={true}
              />
              {
                other ?
                <Form.Field
                  id='other'
                  control={Input}
                  placeholder='Enter Subject'
                  required={true}
                />
                :
                null
              }
              <Form.Field
                id='email'
                control={Input}
                placeholder='Enter Email'
                required={true}
              />
              <Form.TextArea
                id='message'
                control={Input}
                placeholder='Enter Message'
                required={true}
              />
              {
                loading ?
                <Form.Button className="bt-sq" size="large" color="linkedin" disabled>
                  <Spinner color="white" size={15} speed={1} animating={true} />
                </Form.Button>
                :
                <Form.Button className="bt-sq" size="large" color="#ccc" onClick={handleSubmit}>
                  Send Message
                </Form.Button>
              }
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
};

export default ContactUs;