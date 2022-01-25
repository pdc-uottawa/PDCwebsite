import React, {useEffect, useState} from 'react';
import {Form,Input,Button} from 'semantic-ui-react'
import Axios from 'axios'
import { config } from "../../common/config/config";
import ProgramCoordinators from './ProgramCoordinators';
import { Spinner } from "react-activity";
import { Link } from 'react-router-dom'
import './student.css'

const UpdateForm = (props) => {
    const path = config();
    const [thankYou, setThankYou] = useState(false)
    const [ProgramCoordinatorsList, setProgramCoordinatorsList]=useState([]);
    const [loading, setLoading] = useState(true);
    
    const { id } = props.match.params;

    useEffect(() => {
        Axios.get(path + "coordinators/all", {})
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                const finalData = data.find(datum => datum._id === id)
                setProgramCoordinatorsList(finalData);
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
            });

    }, [setProgramCoordinatorsList,path]);

    function handleReset() {
        document.getElementById('name').innerHTML = "";
        document.getElementById('program').innerHTML = "";
        document.getElementById('email').innerHTML = "";
    }

    function handleSubmit() {
        let name = document.getElementById('name').value;
        let program = document.getElementById('program').value;
        let email = document.getElementById('email').value;
        if(!name && !program && !email) {
            alert('Please Enter Any Value To Update!')
        }
        else {
            if((name && name === ProgramCoordinatorsList.name) || (program && program === ProgramCoordinatorsList.program) || (email && email === ProgramCoordinatorsList.email)) {
                alert('Please do not enter same values!')
            }
            else {
                if(!name) {
                    name = ProgramCoordinatorsList.name
                }
                if(!program) {
                    program = ProgramCoordinatorsList.program
                }
                if(!email) {
                    email = ProgramCoordinatorsList.email
                }
                Axios.post(path + "coordinators/update", {
                    _id: id,
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
        }
    };
return(
    loading ?
            <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
            </div>
            :
    thankYou ?
        <>
            <div>
                <h1 className='center marginTop'>Thank You. Details has been updated!</h1>
                <Link to='/update-coordinators'>
                    <input type='submit' className='backButton marginLeft marginTop' value='Back' />
                </Link>
            </div>
        </>
        :
        <>
            <h1>Edit Coordinator details</h1>
            <h4 className='red'>Only fill the details that needs to be updated and leave the rest fields blank!</h4>
            <Form>  
                <Form.Field
                    control={Input}
                    label='Name'
                    placeholder={ProgramCoordinatorsList.name}
                    id='name'
                />
                <Form.Field
                    control={Input}
                    label='Program'
                    placeholder={ProgramCoordinatorsList.program}
                    id='program'
                />
                <Form.Field
                    id='email'
                    control={Input}
                    label='Email'
                    placeholder={ProgramCoordinatorsList.email}
                    
                />
                <input type='submit' className='submitButton' onClick={handleSubmit} />
                <input type='reset' className='resetButton marginLeft' onClick={handleReset} />
                <Link to='/update-coordinators'>
                    <input type='submit' className='backButtonBlue marginLeft' value='Back' />
                </Link>
            </Form>
        </>
)
}
export default UpdateForm;