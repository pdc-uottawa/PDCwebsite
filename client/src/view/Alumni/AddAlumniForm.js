import React, {useState} from 'react';
import {Form,Input,Button} from 'semantic-ui-react'
import Axios from 'axios'
import { config } from "../../common/config/config";
import { Link } from 'react-router-dom'

const AddAlumni = (props) => {
    const path = config();
    const [thankYou, setThankYou] = useState(false)
    function handleSubmit() {
        const name = document.getElementById('name').value;
        const image = document.getElementById('image').value;
        const currentPostion = document.getElementById('currentPostion').value;
        const email = document.getElementById('email').value;
        const linkedIn = document.getElementById('linkedIn').value;
        
        
        if(name && email){
            Axios.post(path + "alumni/add", {
                name,
                image,
                currentPostion,
                email,
                linkedIn
            })
                .then((res) => {
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
                <h1 className='center marginTop'>Thank You. Coordinator has been added!</h1>
                <Link to='/update-alumni'>
                    <input type='submit' className='backButton marginLeft marginTop' value='Back' />
                </Link>
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
                    label='Current Position'
                    placeholder='Developer at AedoAI Inc.'
                    id='currentPostion'
                />
                <Form.Field
                    id='email'
                    control={Input}
                    label='Email'
                    placeholder='test012@uottawa.ca'
                    
                />
                <Form.Field
                    id='linkedIn'
                    control={Input}
                    label='LinkedIn'
                    placeholder='https://www.linkedin.com/in/test012' 
                />
                <Button type='submit' color="teal" onClick={handleSubmit}>Submit</Button>
            </Form>
            </>
)
}
export default AddAlumni;