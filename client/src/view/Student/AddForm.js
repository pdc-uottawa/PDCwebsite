import React, {useState} from 'react';
import {Form,Input,Button} from 'semantic-ui-react'
import Axios from 'axios'
import { config } from "../../common/config/config";

const AddForm = (props) => {
    const path = config();
    const [thankYou, setThankYou] = useState(false)
    function handleSubmit() {
        const name = document.getElementById('name').value;
        const program = document.getElementById('program').value;
        const email = document.getElementById('email').value;
        
        
        if(name && program && email){
            // (console.log(name, program, email))
            Axios.post(path + "coordinators/add", {
                name,
                program,
                email
            })
                .then((res) => {
                    // console.log(res.data);
                    setThankYou(true)
                })
                .catch((e) => {
                    console.log(e);
                });
        } 
        else {
            alert('Please enter all details!')
        }
        

    };
return(
    thankYou ?
        <>
            <div>
                <h1>Thank You. Coordinator has been added!</h1>
            </div>
        </>
        :
<><h1>Add New Coordinator</h1>
            <Form>
                <Form.Field
                    control={Input}
                    label='Name'
                    placeholder='Enter Name'
                    id='name'
                />
                <Form.Field
                    control={Input}
                    label='Program'
                    placeholder='Electrical and Computer Engineering (ELG)'
                    id='program'
                />
                <Form.Field
                    id='email'
                    control={Input}
                    label='Email'
                    placeholder='khushpreet@uottawa.ca'
                    
                />
                <Button type='submit' color="teal" onClick={handleSubmit}>Submit</Button>
            </Form>
            </>
)
}
export default AddForm;