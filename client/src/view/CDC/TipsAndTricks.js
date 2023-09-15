import React, { Fragment, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import "react-activity/dist/Spinner.css";
import { Icon } from "semantic-ui-react";
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
      <div className="container">
        <div>
          <h1 className="head">REFINE YOUR PROFILE</h1>
        </div>
        <div className="accordionDiv">
          <Accordion allowZeroExpanded state>
            <AccordionItem className="accordionItem">
              <AccordionItemHeading className="accordionHeadResume">
                <AccordionItemButton className="padding">
                  RESUME TIPS
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
                  <div className="col-md borderItem">
                    <div>
                      <h1 className="marginTop">DO's</h1>
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
                  </div>
                  <div className="col-md borderItem">
                    <div>
                      <h1 className="marginTop">DONT's</h1>
                    </div>
                    <div>
                      <ul>
                        {resumeTips
                          .filter((cat) => cat.category == "dont")
                          .map((tip) => {
                            return <li className="marginBottom">{tip.tip}</li>;
                          })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md borderItem">
                    <div>
                      <h1 className="marginTop">Top 6 Resume Mistakes</h1>
                    </div>
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
              <AccordionItemHeading className="accordionHeadLinkedIn">
                <AccordionItemButton className="padding">
                  LINKEDIN TIPS
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
                  <div className="linkedinDesc">
                    <p>
                      Almost{" "}
                      <a href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/">
                        65-85 per cent of the jobs are not posted online
                      </a>
                      . This is why building your network is crucial and{" "}
                      <a href="https://www.linkedin.com/">LinkedIn</a> is an
                      excellent tool to get you started on your job search
                      journey in Canada.
                    </p>
                  </div>
                  <div className="col-md borderItem">
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
              <AccordionItemHeading className="accordionHeadInterview">
                <AccordionItemButton className="padding">
                  INTERVIEW TIPS
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
                  <div className="interviewDesc">
                    
                    {/* <h4>Preparing for Job Interviews</h4> */}
                    <ul>
                      <li>
                          <h3>Research the Company</h3>
                          <p>Thoroughly research the company you're interviewing with. Understand its mission, values, products/services, recent news, and culture. This knowledge will allow you to tailor your responses to align with the company's goals and values.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Review the Job Description</h3>
                          <p>Revisit the job posting to understand the specific requirements and responsibilities of the role. Prepare examples from your experience that demonstrate your ability to meet these requirements.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Practice Common Interview Questions</h3>
                          <p>Prepare for common interview questions like "Tell me about yourself," "Why do you want to work here?" and "What are your strengths and weaknesses?" Practice your responses to these questions but avoid sounding rehearsed</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Behavioral Interview Questions</h3>
                          <p>Many interviews include behavioral questions that ask about specific situations you've faced in the past. Use the STAR method (Situation, Task, Action, Result) to structure your responses.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Prepare Questions</h3>
                          <p>Have a list of thoughtful questions to ask the interviewer. Questions should demonstrate your interest in the role and company while also helping you evaluate if the company is a good fit for you.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Dress Professionally</h3>
                          <p>Choose appropriate attire based on the company's dress code. When in doubt, it's better to be slightly overdressed than underdressed.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Arrive Early or Join on Time</h3>
                          <p>If the interview is in person, arrive early to allow time for unexpected delays. For virtual interviews, log in a few minutes ahead of the scheduled time.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Body Language</h3>
                          <p>Maintain good posture, make eye contact (even in virtual interviews), and offer a firm handshake (if in person). Non-verbal cues are important in conveying confidence and professionalism.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Technology Check (for Virtual Interviews)</h3>
                          <p>Ensure that your internet connection, camera, microphone, and any necessary software are working correctly before the interview.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Tell Compelling Stories</h3>
                          <p>When answering questions, use real-life examples and stories from your experiences to illustrate your skills and accomplishments.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Be Concise</h3>
                          <p>Avoid rambling responses. Be concise and focused on your answers while providing enough detail to answer the question effectively.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Stay Positive</h3>
                          <p>Maintain a positive attitude throughout the interview. Even if asked about challenges or weaknesses, frame your responses in a positive light and discuss what you learned or how you improved.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Show Enthusiasm</h3>
                          <p>Express your enthusiasm for the role and the company. Employers want to hire candidates who are genuinely excited about the opportunity.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Follow-up</h3>
                          <p>Send a personalized thank-you email within 24 hours of the interview. Reiterate your interest in the position and express gratitude for the opportunity to interview.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Handle Salary Discussions Wisely</h3>
                          <p>If asked about salary expectations, be prepared with a well-researched range based on your skills, experience, and industry standards. Consider discussing compensation at a later stage if possible.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Stay Updated on Industry Trends</h3>
                          <p>Be prepared to discuss current trends, technologies, or changes in your industry, demonstrating your commitment to staying informed.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Practice Interview Etiquette</h3>
                          <p>Be polite and professional to everyone you encounter during the interview process, from receptionists to interviewers.</p>
                      </li>
                      <br></br>
                      <li>
                          <h3>Reflect and Improve</h3>
                          <p>After each interview, reflect on what went well and where you can improve. Use this feedback to enhance your performance in future interviews.</p>
                      </li>
                    </ul>

                    {/* <p>
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
                    </p> */}
                  </div>
                  {/* <div className="col-md borderItem">
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
                  </div>
                  <div className="col-md borderItem">
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
                    </div>
                  </div>
                  <div className="col-md borderItem">
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
                  </div>
                  <div className="interviewDesc">
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
                  </div> */}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
};

export default TipsAndTricks;
