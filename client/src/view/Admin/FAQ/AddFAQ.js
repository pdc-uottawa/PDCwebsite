import { EditorState, convertToRaw } from "draft-js";
import React, { useState, useEffect, useContext } from "react";
import { Editor } from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import "./../admin.css"
import { Form, Input, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import { UserContext } from "../../../common/context/UserProvider";

function AddFAQ() {
    const path = config();
    const [thankYou, setThankYou] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [adminUsers, setAdminUsers] = useState([]);
    const adminList = [];
    const { user } = userInfo;

    useEffect(() => {
        Axios.get(path + "user/adminuserlist")
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setAdminUsers(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [null]);

    adminUsers.map((admin) => {
        adminList.push({
            key: admin._id,
            value: admin,
            text: admin.name,
        });
    });
    function onEditorStateChange(editorState) {
        setEditorState(editorState)
    }
    const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    function handleSubmit() {
        const ques = document.getElementById("ques").value;
        const ans = data;

        if (ques && ans) {
            Axios.post(path + "FAQs/add", {
                ques,
                ans,
            })
                .then((res) => {
                    setThankYou(true)
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
                <title>Add FAQ | Professional Development Club</title>
            </Helmet>
            {user && user.admin ? (
                <div className="admin-dashboard">
                    <AdminSideBar />
                    <div className="admin-home">
                        {thankYou ? (
                            <>
                                <div>
                                    <h1 className="center marginTop">
                                        Thank You. FAQ has been added!
                                    </h1>
                                    <Link to="/manage-FAQs">
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
                                <h2 className="admin-h2">Add New FAQ </h2>
                                <Form>
                                    <div class="field">
                                        <label for="ques">Question</label>
                                        <div class="ui input">
                                            <input className="questionn" placeholder="Enter Question" id="ques" type="text" />
                                        </div>
                                    </div>
                                    <div className="field editor">
                                        <label for="ans">Answer</label>
                                        <Editor className="questionn" editorState={editorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                            onEditorStateChange={onEditorStateChange}
                                            placeholder="   Enter Answer"
                                        ></Editor>
                                    </div>
                                    <Button type="submit" color="green" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                    <Link to="/manage-FAQs">
                                        <Button type="submit" color="blue">
                                            Back{" "}
                                        </Button>
                                    </Link>
                                </Form>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <>
                    <center className="page-not-found">
                        <h1>Oops, Page Not Found!</h1>
                        <h3>Please login as an admin to view this page!</h3>
                    </center>
                </>
            )}
        </>
    );
};
export default AddFAQ;
