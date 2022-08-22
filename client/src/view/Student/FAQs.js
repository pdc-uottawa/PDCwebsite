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
import { FcMinus } from "react-icons/fc";
// import { BsFillChatDotsFill } from "react-icons/bs"
import { MdOutlineAdd } from "react-icons/md"
import './student.css'
import { Spinner } from "react-activity";
import ReactHtmlParser from 'react-html-parser'
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

    // const [showContactBtn, setShowContactBtn] = useState(false);
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 200) {
    //             setShowContactBtn(true);
    //         } else {
    //             setShowContactBtn(false);
    //         }
    //     });
    // }, []);
    return (
        <>
            <div class="container-fluid faq-body">
                <h1 class="faq-bd-hd center">
                    Frequently Asked Questions
                </h1>
            </div>
            {/* <div className="top-to-btm">
                {showContactBtn && (
                    <BsFillChatDotsFill
                        className="ic-position ic-style"
                        onClick={() =>
                            window.open("/").scrollTo({ bottom: 0, left: 0, behavior: 'smooth' })
                        }
                    />
                )}
            </div> */}
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
            {loading ? (
                <div className="loadingState">
                    <Spinner color="#727981" size={35} speed={1} animating={true} />
                </div>
            ) : <>
                {searchTerm ?
                    FAQList.filter((faqdata) => {
                        const fdata = faqdata.ques.toLowerCase().includes(searchTerm) ||
                            faqdata.ans.toLowerCase().includes(searchTerm)
                        return (fdata)
                    }).map((faqqs) => {
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
                                            <div className=" row faq-ans justify">
                                                {ReactHtmlParser(faqqs.ans)}
                                            </div>
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
                                                    <div className=" row faq-ans justify">
                                                        {ReactHtmlParser(faqs.ans)}
                                                    </div>
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