import React, { useState, useEffect } from "react";
import { config } from "../../common/config/config";
import Axios from "axios";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import { FcMinus, FcPhone } from "react-icons/fc";
import { MdOutlineAdd } from "react-icons/md"
import './student.css'
import { Spinner } from "react-activity";
import { FaHeadphones } from "react-icons/fa";
import ContactUs from "../Home/ContactUs";
import { Button,Modal } from 'react-bootstrap';

function FAQs(props) {
    const path = config();
    const [FAQList, setFAQList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        Axios.get(path + "FAQs/all", {})
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setFAQList(data);
                console.log(data)
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
            });
    }, [setFAQList, path]);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const [showContactBtn, setShowContactBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 190) {
                setShowContactBtn(true);
            } else {
                setShowContactBtn(false);
            }
        });
    }, []);
    const [show, setShow] = useState();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <>
         <div className="top-to-btm">
            {showContactBtn && (
                <FaHeadphones
                    className="ic-position ic-style"
                    onClick={()=>
                        window.open("/").scrollTo({bottom: 0, left: 0, behavior: 'smooth'})
                    } 
                />
            )}
        </div>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Still Need Help??</Modal.Title>
        </Modal.Header>
        <Modal.Body>Go fill out our Contact-us form on Homepage
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            HomePage
          </Button>
        </Modal.Body>
      </Modal> */}
            <div class="container-fluid faq-hdr">
                <h1 class="center ft-style" >
                    How can we help you?
                </h1>
                <div className="col-md-12 center">
                    <input
                        type="text"
                        className="search-bar ft-style"
                        placeholder="Type keywords to find answers"
                        onChange={handleSearch}
                    />
                    <h4 class="ft-style">
                        You can also browse the questions below to find what you are looking for.
                    </h4>
                </div>
            </div>
            <div class="container-fluid faq-body">
                <h1 class="faq-bd-hd center">
                    Frequently Asked Questions
                </h1>
            </div>
            {loading ? (
                <div className="loadingState">
                    <Spinner color="#727981" size={35} speed={1} animating={true} />
                </div>
            ) : <>
                <hr />
                {searchTerm ?
                    FAQList.filter((faqdata) => {
                        const fdata = faqdata.ques.toLowerCase().includes(searchTerm) ||
                            faqdata.ans.toLowerCase().includes(searchTerm)
                        return (fdata)
                    }).map((faqqs) => {
                        const faqqans = faqqs.ans.split("\n");
                        return (
                            <>
                            
                                <Accordion allowZeroExpanded state>
                                    <AccordionItem className="faq-item">
                                        <AccordionItemHeading className="faq-ques">
                                            <AccordionItemButton className="faq-padding">
                                                {faqqs.ques}
                                                <AccordionItemState>
                                                    {
                                                        ({ expanded }) => (expanded ? <FcMinus color="#0a045e" class="down" /> : <MdOutlineAdd color="black" class="down" />)
                                                    }
                                                </AccordionItemState>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            {faqqans.map((fqans) => {
                                                return (
                                                    <div className=" row faq-ans justify">
                                                        {fqans}
                                                    </div>
                                                )
                                            })}
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                                <hr />
                            </>
                        )
                    })
                    : <>
                        <div>
                            {FAQList.map((faqs) => {
                                const faqans = faqs.ans.split("\n");
                                return (
                                    <>
                                        <Accordion allowZeroExpanded state>
                                            <AccordionItem className="faq-item">
                                                <AccordionItemHeading className="faq-ques">
                                                    <AccordionItemButton className="faq-padding">
                                                        {faqs.ques}
                                                        <AccordionItemState>
                                                            {
                                                                ({ expanded }) => (expanded ? <FcMinus color="black" class="down" /> : <MdOutlineAdd color="black" class="down" />)
                                                            }
                                                        </AccordionItemState>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    {faqans.map((fans) => {
                                                        return (
                                                            <div className=" row faq-ans justify">
                                                                {fans}
                                                            </div>
                                                        )
                                                    })}
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                        <hr />
                                    </>
                                )
                            })}
                        </div>
                    </>
                }
            </>
            }
            
        </>
    )
}
export default FAQs;