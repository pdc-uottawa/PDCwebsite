import React, { Fragment, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import "react-activity/dist/Spinner.css";
import { Container, Icon } from "semantic-ui-react";
import "./style.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const TipsAndTricks = (props) => {
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const resumeTips = props.resumeTips;
  const linkedInTips = props.linkedInTips;
  const interviewTips = props.interviewTips;

  return (
    <>
      <Container fluid>
        <div></div>
        <div className="accordionDivTips">
          <Accordion allowZeroExpanded state>
            <AccordionItem className="accordionItem">
              <AccordionItemHeading className="accordionHeadNewCDC">
                <AccordionItemButton className="padding">
                  Resume Tips
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded ? (
                        <Icon
                          name="angle up"
                          id="resumeTipsCollapsed-CDC"
                          color="white"
                          size="large"
                          className="down"
                        />
                      ) : (
                        <Icon
                          name="angle down"
                          id="resumeTipsExpanded-CDC"
                          color="white"
                          size="large"
                          className="down"
                        />
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="row centerItems">
                  <div className="bgColorGray borderItem">
                    <div>
                      <h1 className="marginTop">Do's</h1>
                    </div>
                    <div>
                      <ul>
                        {resumeTips
                          .filter((cat) => cat.category == "do")
                          .map((tip) => {
                            return <li className="marginBottom">{tip.tip}</li>;
                          })}
                      </ul>
                    </div>
                    <h1 className="marginTop">Dont's</h1>

                    <div>
                      <ul>
                        {resumeTips
                          .filter((cat) => cat.category == "dont")
                          .map((tip) => {
                            return <li className="marginBottom">{tip.tip}</li>;
                          })}
                      </ul>
                    </div>

                    <h1 className="marginTop">Top 6 Resume Mistakes</h1>

                    <div>
                      <ul>
                        {resumeTips
                          .filter((cat) => cat.category == "mistakes")
                          .map((tip) => {
                            return <li className="marginBottom">{tip.tip}</li>;
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
              <AccordionItemHeading className="accordionHeadNewCDC">
                <AccordionItemButton className="padding">
                  LinkedIn Tips
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded ? (
                        <Icon
                          name="angle up"
                          id="linkedInTipsCollapsed-CDC"
                          color="white"
                          size="large"
                          className="down"
                        />
                      ) : (
                        <Icon
                          name="angle down"
                          id="linkedInTipsExpanded-CDC"
                          color="white"
                          size="large"
                          className="down"
                        />
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="row centerItems">
                  <div className="linkedinDesc bgColorGray borderItem">
                    <p>
                      Almost{" "}
                        65-85 per cent of the jobs are not posted online
                
                      . This is why building your network is crucial and{" "}
                      is an
                      excellent tool to get you started on your job search
                      journey in Canada.
                      <br>
                      </br>
                      Treat your LinkedIn profile differently from your resume.<br></br>
                       Resumes are typically customized to a specific position you are applying for. 
                      Your LinkedIn profile, on the other hand, is <br></br>universal and speaks to not just one, but all potential employers. 
                      <br></br><b></b>Use a professional headshot Members with profile photos receive up to 21x more views and 9x more connection requests. 
                    </p>
                 
                    <div>
                      <ul>
                        {linkedInTips.map((tip) => {
                          return (
                            <li>
                              <h4>{tip.heading}</h4>
                              <p>{tip.description}</p>
                              <br />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
              <AccordionItemHeading className="accordionHeadNewCDC">
                <AccordionItemButton className="padding">
                  Interview Tips
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded ? (
                        <Icon
                          name="angle up"
                          id="interviewTipsCollapsed-CDC"
                          color="white"
                          size="large"
                          className="down"
                        />
                      ) : (
                        <Icon
                          name="angle down"
                          id="interviewTipsExpanded-CDC"
                          color="white"
                          size="large"
                          className="down"
                        />
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="row centerItems">
                  <div className="interviewDesc bgColorGray borderItem">
                    <h4>Preparing for Job Interviews</h4>
                    <p>
                      Job interview practice is important because it will help
                      you feel confident and comfortable during your real
                      interview and will ensure you are prepared to answer
                      questions the interviewer asks. <br />
                      Follow these steps to use job interview practice to
                      prepare for an interview:
                      <ul>
                        <li>Prepare your interview space</li>
                        <li>
                          Decide whether you will practice alone or with someone
                          else
                        </li>
                        <li>Gather a list of practice questions</li>
                        <li>Dress for the interview</li>
                        <li>Practice answering questions</li>
                        <li>
                          Ask for feedback If you choose the practice questions
                          yourself, you can ask the person you are practicing
                          with to ask the questions in a random order, so you
                          won't know when to expect each question.
                        </li>
                      </ul>
                      If you are practicing alone, you can write each interview
                      question on a flashcard and shuffle the cards for the same
                      effect.
                      <br />
                      Some of the common questions that will help you to prepare
                      and practice are:
                      <br />
                    </p>
                  
                    <div>
                      <h1 className="marginTop">Common Interview Questions</h1>
                    </div>
                    <div>
                      <ul>
                        {interviewTips
                          .filter((cat) => cat.category == "common")
                          .map((tip) => {
                            return <li className="marginBottom">{tip.ques}</li>;
                          })}
                      </ul>
                    </div>
                  
             
                    <div>
                      <h1 className="marginTop">
                        Situational Interview Questions
                      </h1>
                    </div>
                    <div>
                      <ul>
                        {interviewTips
                          .filter((cat) => cat.category == "situational")
                          .map((tip) => {
                            return <li className="marginBottom">{tip.ques}</li>;
                          })}
                      </ul>
                  
                    <div>
                      <h1 className="marginTop">
                        Behavioural Interview Questions
                      </h1>
                    </div>
                    <div>
                      <ul>
                        {interviewTips
                          .filter((cat) => cat.category == "behavioural")
                          .map((tip) => {
                            return <li className="marginBottom">{tip.ques}</li>;
                          })}
                      </ul>
                    </div>
                  
                    <p>
                      You should practice answering general interview questions,
                      behavioural interview questions and questions that are
                      specific to the position you are applying for. Even if you
                      are practicing alone, you should practice answering
                      questions out loud to help you prepare for the real
                      interview. You can also take notes while you answer each
                      question of ways to improve your answer. <br />
                      Finally, you should ask the person who is practicing with
                      you to provide you with feedback. Hopefully, this person
                      will be able to find areas in which you can continue to
                      practice improving before your real interview. If you are
                      practicing alone, you can watch yourself in a mirror or
                      record yourself and provide yourself with honest feedback
                      as you go through your practice interview.
                    </p>
                  </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <br />
       
      </Container>
    </>
  );
};

export default TipsAndTricks;
