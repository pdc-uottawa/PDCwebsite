import React, { useEffect, useState } from "react";
import { Segment, Form, Grid, Input, Button, Icon, Dropdown, Select } from "semantic-ui-react";
import { config } from "../../common/config/config";
import Axios from "axios";
import "./Home.css"

function ContactUs() {
  const path = config();
  const options = [
    { key: '1', text: 'Website', value: 'website' },
    { key: '2', text: 'CDC', value: 'cdc' },
    { key: '3', text: 'Projects', value: 'projects' },
    { key: '4', text: 'Other', value: 'other' },
  ]

  function handleSubmit() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const category = document.getElementById('category').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (fname && lname && category && email && message) {
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
      alert('Please enter all details!')
    }
  }

  return (
    <div className="frag2">
      <h1 className="header">Contact Us</h1>
      <div>
        <Grid className="grid-col-1" columns={2}>
          <Grid.Column>
            <h3 className="cont-hd">Professional Development Club</h3>
            <Segment className="pdc-add">
              <Icon name='marker' />Address <br></br>
              <Icon name='phone' />Contact<br></br>
              <Icon name='envelope' /> Email Id
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  placeholder='Enter First Name'
                  id='fname'
                />
                <Form.Field
                  control={Input}
                  placeholder='Enter Last Name'
                  id='lname'
                />
              </Form.Group>
              <Form.Field
                control={Select}
                placeholder='Select Category for Query'
                id='category'
                options={options}
              />
              <Form.Field
                id='email'
                control={Input}
                placeholder='test012@uottawa.ca'

              />
              <Form.TextArea
                id='message'
                control={Input}
                placeholder='Enter Message'
              />
              <Form.Button className="bt-sq" size="large" color="google plus" onClick={handleSubmit}>Send Query</Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
};

export default ContactUs;