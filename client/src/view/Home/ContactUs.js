import React, { useEffect, useState } from "react";
import { Segment, Form, Grid, Input, Button, Icon, Dropdown, Select } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import "./Home.css"
const img = require("../../assets/pdc_logo.png");

function ContactUs() {
  const path = config();
  const options = [
    { key: '1', text: 'Website', value: 'website' },
    { key: '2', text: 'CDC', value: 'cdc' },
    { key: '3', text: 'Projects', value: 'projects' },
    { key: '4', text: 'Other', value: 'other' },
  ];
  const [selectedOption, setSelectedOption] = useState("")
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
    console.log(selectedOption)
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
            console.log('Your query has been sent successfully.');
          })
          .catch((e) => {
            console.log(e);
          });
    } 
    else {
      alert('Please Enter all Details!')
    }
  }

  return (
    <div className="frag2">
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
              <Form.Button className="bt-sq" size="large" color="linkedin" onClick={handleSubmit}>Send Query</Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
};

export default ContactUs;