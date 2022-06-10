// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = (props) => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return props.children;
// };

// export default ScrollToTop;

import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    
      return (

        <div className="top-to-btm">
             {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                      }}
                />
            )}{" "}
        </div>
 );

};

export default ScrollToTop;