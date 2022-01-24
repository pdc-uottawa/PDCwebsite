import React, {useEffect, useState} from 'react';
import {Form,Input,Button} from 'semantic-ui-react'
import Axios from 'axios'
import { config } from "../../common/config/config";
import ProgramCoordinators from './ProgramCoordinators';

const UpdateForm = (props) => {
    const path = config();
    const [thankYou, setThankYou] = useState(false)
    const [ProgramCoordinatorsList, setProgramCoordinatorsList]=useState([]);
    const [loading, setLoading] = useState(true);
    console.log(props)

    useEffect(() => {
        Axios.get(path + "coordinators/all", {})
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setProgramCoordinatorsList(data);
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
            });

    }, [setProgramCoordinatorsList,path]);

    function handleSubmit() {
        const name = document.getElementById('name').value;
        const program = document.getElementById('program').value;
        const email = document.getElementById('email').value;
 
        if(name && program && email){
            // (console.log(name, program, email))
            Axios.post(path + "coordinators/update", {
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
                <h1>Thank You. Details has been updates!</h1>
            </div>
        </>
        :
<><h1>Edit Coordinator details</h1>
{(ProgramCoordinatorsList).map((programCoordinator) => (
            <Form>  
                <Form.Field
                    control={Input}
                    label='Name'
                    placeholder={programCoordinator.name}
                    id='name'
                />
                <Form.Field
                    control={Input}
                    label='Program'
                    placeholder={programCoordinator.program}
                    id='program'
                />
                <Form.Field
                    id='email'
                    control={Input}
                    label='Email'
                    placeholder={programCoordinator.email}
                    
                />
                <Button type='submit' color="teal" onClick={handleSubmit}>Update</Button>
               
                </Form>
))}
            </>
)
}
export default UpdateForm;