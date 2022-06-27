import React from "react";
import "./Home.css";
import { Image } from "semantic-ui-react";
const img = require('../../assets/new.png')

function PopUp(props) {
  const handleClose = () => {
    props.toggle();
  };

  const handleClick = () => {
      window.location.href = "/#/events";
      props.toggle();
  };

  return (
    <>
      <div className="popup ">
        <div className="popup-content">
          <span className="close" onClick={handleClose}>
            &#10006;
          </span>
          <div>
            <p className="popUpTextMain">
                <Image className="NewIcon" size="tiny" circular src={img} />
                A new event is posted on the Events Page.
            </p>
            <br />
            <button class="takeMeThereButton" onClick={handleClick}>
              <span>Check It Out!</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
