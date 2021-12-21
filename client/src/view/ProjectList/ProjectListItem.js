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
  } = project;

  const [readMore, setReadMore] = useState(false);
  const [ellipsisText, setEllipsisText] = useState("Read More");
  const [clamped, setClamped] = useState(false);

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
      <Segment.Group className="cursor">
        <div className="heightSetting">
          <Segment className="HeaderHeight">
            <Item.Group>
              <Item>
                <Item.Image rounded size="tiny" src={logoUrl} />
                <Item.Content>
                  <Item.Header
                    className="nameHeader"
                    as={Link}
                    to={`/project-detail/${_id}`}
                  >
                    {title}
                  </Item.Header>
                  <Item.Description className="hostedByHeader">
                    Hosted By: <strong>{hostedBy}</strong>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>

          <div className="mobTagsHeight">
            {/*Tags Section*/}
            {category !== []
              ? category.map((cate, index) => {
                  return (
                    <ul>
                      {index <= 1 ? (
                        <li>{cate}</li>
                      ) : index === 2 ? (
                        `And ${cnt} More...`
                      ) : null}
                    </ul>
                  );
                })
              : null}
          </div>
        </div>
        
        {/*Posted On and Valid Until Section*/}
        <Segment>
          <p className="mobTextSmall">
            <b>
              <Icon name="clock" /> Posted: {postedOn}
              &nbsp;
              {validUntil ? "| Valid Till: " + validUntil : ""}
            </b>
          </p>
        </Segment>

        {/*User Section*/}
        <Segment secondary>
          <List horizontal>
            {user &&
              user.map((user, index) => (
                <ProjectListUser key={index} user={user} />
              ))}
          </List>
        </Segment>

        {/*Description Section*/}
        <Segment clearing>
          <LinesEllipsis
            style={{ whiteSpace: "pre-wrap", padding: "2%" }}
            text={description}
            ellipsis="..."
            maxLine={3}
            trimRight
            basedOn="letters"
            onReflow={handleReflow}
          />
          {clamped || ellipsisText === "Collapse" ? (
            <Button
              as={Link}
              to={`/project-detail/${_id}`}
              basic
              floated="right"
              content={ellipsisText}
            />
          ) : (
            ""
          )}
        </Segment>
      </Segment.Group>
    </div>
  );
};

export default ProjectListItem;
