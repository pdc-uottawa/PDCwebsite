import React, { Fragment, useState } from "react";
import {
  Segment,
  Item,
  Icon,
  List,
  Button,
  Label,
  Form,
  Grid,
  Header,
  Search,
} from "semantic-ui-react";
import _ from "lodash";
import moment from "moment";
import ProjectListUser from "./ProjectListUser";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

const ProjectListItem = ({ project }) => {
  const {
    logoUrl,
    title,
    postedOn,
    validUntil,
    description,
    hostedBy,
    user,
    category,
    _id,
    isDeleted,
  } = project;

  const [readMore, setReadMore] = useState(false);
  const [ellipsisText, setEllipsisText] = useState("Read More");
  const [clamped, setClamped] = useState(false);
  var currentDate = moment().format("YYYY-MM-DD");
  var postedOnFormat = moment(postedOn);
  var timeDiff = Math.abs(postedOnFormat.diff(currentDate) / 86400000);
  const cnt = category.length - 2;

  // if click Read More button, show content and Collapse button.
  const handleReadMore = () => {
    if (readMore) {
      setReadMore(false);
      setEllipsisText("Read More");
    } else {
      setReadMore(true);
      setEllipsisText("Collapse");
    }
  };

  // if description is clamped, show Read More button,
  // if not, does not show anything.
  const handleReflow = (rleState) => {
    const { clamped, text } = rleState;
    setClamped(clamped);
  };

  return (
    <div className="marginBottom">
      {/*Logo + Name + Hosted By Section*/}
      <Segment.Group className=" projectBox">
        <div className="heightSetting">
          <Segment className="HeaderHeight">
            {isDeleted || (validUntil ? validUntil < currentDate : null) ? (
              <div className="view">
                <div class="banner">CLOSED</div>
              </div>
            ) : timeDiff < 31 ? (
              <div className="view">
                <div class="newBanner">NEW!</div>
              </div>
            ) : null}
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item
                    className="nameHeader leftalign"
                    as={Link}
                    to={`/project-detail/${_id}`}
                  >
                    {title}
                  </Item>
                  <p className="mobTextSmall rightAlign">
                    <b>
                      <Icon /> Posted: {postedOn}
                      {validUntil ? "| Valid Till: " + validUntil : ""}
                    </b>
                  </p>
                  <Item.Description className="hostedByHeader">
                    Hosted By: {hostedBy}
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>

            <div className="mobTagsHeight row col-md-12">
              {/*Tags Section*/}
              {category !== []
                ? category.map((cate, index) => {
                    return <p className="roundedTags col-md-2">{cate}</p>;
                  })
                : null}
            </div>
            {/*Posted On and Valid Until Section*/}
          </Segment>
        </div>
      </Segment.Group>
    </div>
  );
};

export default ProjectListItem;
