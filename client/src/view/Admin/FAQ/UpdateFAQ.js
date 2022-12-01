import React, { useContext, useEffect, useState } from "react";
import { Form, Input } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import { Spinner } from "react-activity";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import reactTextareaAutosize from "react-textarea-autosize";
import AdminSideBar from "../Admin Dashboard/AdminSideBar";
import ReactHtmlParser from 'react-html-parser'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html'
import { UserContext } from "../../../common/context/UserProvider";

const UpdateFAQ = (props) => {
  const path = config();
  const [thankYou, setThankYou] = useState(false);
  const [FAQList, setFAQList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminUsers, setAdminUsers] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const { user } = userInfo;

  function onEditorStateChange(editorState) {
    setEditorState(editorState)
  }
  const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const { id } = props.match.params;

  const adminList = [];
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

  useEffect(() => {
    Axios.get(path + "FAQs/all", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const finalData = data.find((datum) => datum._id === id);
        setFAQList(finalData);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setFAQList, path]);

  function handleReset() {
    document.getElementById("ques").innerHTML = "";
    document.getElementById("ans").innerHTML = "";
  }

  function handleSubmit() {
    let ques = document.getElementById("ques").value;
    let ans = data;

    if (!ques && !ans) {
      alert("Please Enter Any Value To Update!");
    } else {
      if (
        (ques && ques === FAQList.ques) ||
        (ans && ans === FAQList.ans)
      ) {
        alert("Please do not enter same values!");
      } else {
        if (!ques) {
          ques = FAQList.ques;
        }
        if (!ans) {
          ans = FAQList.ans;
        }
        Axios.post(path + "FAQs/update", {
          _id: id,
          ques,
          ans,
        })
          .then((res) => {
            // console.log(res.data);
            setThankYou(true);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }
  return (
    <>
      <Helmet>
        <title>Update FAQ | Professional Development Club</title>
      </Helmet>
      {user && user.admin ? (
        <div className="admin-dashboard">
          <AdminSideBar />
          <div className="admin-home">
            {loading ? (
              <div className="loadingState">
                <Spinner color="#727981" size={35} speed={1} animating={true} />
              </div>
            ) : thankYou ? (
              <>
                <div>
                  <h1 className="center marginTop">
                    Thank You. Details has been updated!
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
                <h2 className="admin-h2">Edit FAQs</h2>
                <h4 className="red">
                  Only fill the details that needs to be updated and leave the rest
                  fields blank!
                </h4>
                <Form>
                  {/* <Form.Field
                  control={Input}
                  label="Question"
                  placeholder={FAQList.ques}
                  id="ques"
                />
                <Form.Field
                  control={reactTextareaAutosize}
                  label="Answer"
                  placeholder={FAQList.ans}
                  id="ans"
                /> */}
                  <div class="field">
                    <label for="ques">Question</label>
                    <div class="ui input">
                      <input className="questionn" placeholder={FAQList.ques} id="ques" type="text" />
                    </div>
                  </div>
                  <div className="field editor">
                    <label for="ans">Answer</label>
                    <Editor className="questionn" editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={onEditorStateChange}
                      placeholder={ReactHtmlParser(FAQList.ans)}
                    ></Editor>
                  </div>
                  <input
                    type="submit"
                    className="submitButton"
                    onClick={handleSubmit}
                  />
                  <input
                    type="reset"
                    className="resetButton marginLeft"
                    onClick={handleReset}
                  />
                  <Link to="/manage-FAQs">
                    <input
                      type="submit"
                      className="backButtonBlue marginLeft"
                      value="Back"
                    />
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
export default UpdateFAQ;
