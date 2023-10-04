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
                  <div className="col-lg col-md col-sm borderItem">
                    <div>
                      <ol type="1">
                       <li>
                          <h3>Use a Clean and Modern Design: </h3>
                          <p>
                            Employ a clean, professional, and easy-to-read layout.
                            Consider using a modern font and subtle colors to make your resume
                            visually appealing.
                          </p>
                       </li>
                       <li>
                          <h3>Highlight Relevant Skills: </h3>
                          <p>
                            Emphasize your key skills and qualifications prominently at the top
                            of your resume. This helps recruiters quickly identify what you bring
                             to the table.
                          </p>
                       </li>
                       <li>
                          <h3>Quantify Achievements: </h3>
                          <p>
                           Whenever possible, use quantifiable data to showcase your accomplishments.
                           For example, mention specific percentages, numbers, or results to demonstrate 
                           your impact.
                          </p>
                       </li>
                       <li>
                          <h3>Customize for Each Job Application: </h3>
                          <p>
                           Tailor your resume for each job you apply to by aligning your
                            qualifications and experiences with the specific job requirements.
                             Use keywords from the job description.
                          </p>
                       </li>
                       <li>
                          <h3>Use a Clean and Modern Design: </h3>
                          <p>
                            Employ a clean, professional, and easy-to-read layout.
                            Consider using a modern font and subtle colors to make your resume
                            visually appealing.
                          </p>
                       </li>
                       <li>
                          <h3>Include a Professional Summary:</h3>
                          <p>
                           Write a concise summary at the beginning of your resume, summarizing your career objectives and what you can bring to a potential employer.
                          </p>
                       </li>
                       <li>
                          <h3>Focus on Achievements, Not Just Duties:</h3>
                          <p>
                           Instead of listing job responsibilities, focus on your achievements and contributions in each role. Show how you added value to your previous employers.
                          </p>
                        </li>
                        <li>
                          <h3>Add a Skills Section:</h3>
                          <p>
                           Include a section that highlights your technical and soft skills relevant to the position you're applying for. This provides a quick overview of your capabilities.
                          </p>
                        </li>
                        <li>
                          <h3>Incorporate Keywords:</h3>
                          <p>
                           Use industry-specific keywords relevant to your field to ensure your resume passes through applicant tracking systems (ATS).
                          </p>
                        </li>
                        <li>
                          <h3>Include Education and Certifications:</h3>
                          <p>
                            List your educational background, including degrees, institutions, and graduation dates. Also, mention any relevant certifications and training.
                          </p>
                        </li>
                        <li>
                          <h3>Use Action Verbs: </h3>
                          <p>
                          Start bullet points with action verbs to make your accomplishments sound more dynamic and engaging.
                          </p>
                       </li>
                       <li>
                          <h3> Include a LinkedIn Profile:</h3>
                          <p>
                           If you have a LinkedIn profile, include the URL on your resume. Make sure your LinkedIn profile is up-to-date and complements your resume.
                          </p>
                       </li>
                       <li>
                          <h3>Keep it Concise: </h3>
                          <p>
                           Aim for a one- or two-page resume. Be concise and only include information directly related to the job you're applying for.
                          </p>
                       </li>
                       <li>
                          <h3>Proofread Carefully: </h3>
                          <p>
                          Eliminate typos and grammatical errors. Consider having someone else review your resume for feedback.
                          </p>
                       </li>
                       <li>
                          <h3>Use an ATS-Friendly Format:</h3>
                          <p>
                          If you're applying online, save your resume in a format that is compatible with applicant tracking systems, such as PDF or Word.
                          </p>
                       </li>
                       <li>
                          <h3>Include Relevant Volunteer Work and Side Projects: </h3>
                          <p>
                          If you have volunteer experience or side projects that demonstrate your skills, include them on your resume, especially if they're relevant to the job.
                          </p>
                       </li>
                       <li>
                          <h3> Update Contact Information: </h3>
                          <p>
                          Ensure your contact information, including phone number and email address, is accurate and up to date.
                          </p>
                       </li>
                       <li>
                          <h3>Consider a Professional Summary Video: </h3>
                          <p>
                            Depending on your industry, a short video summarizing your qualifications and enthusiasm for the role can be a unique addition.
                          </p>
                       </li>
                      </ol>
                      <p>
                      Remember, the key is to make your resume stand out while effectively communicating your qualifications and suitability for the job. Tailor it to each application, and regularly update it as your career progresses.
                      </p>
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
                      <br></br>
                    </ul>
                    <p><b>Note: </b>Remember that interviews are an opportunity for both you and the employer to assess each other. Be authentic, confident, and well-prepared to make a positive impression and increase your chances of landing the job.</p>

                    </div>
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
