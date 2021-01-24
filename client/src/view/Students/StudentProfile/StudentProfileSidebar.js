import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";

const StudentProfileSidebar = ({activeItem, setActiveItem}) => {

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Fragment>
      <Menu size="large" vertical>
        <Menu.Item
          name="Profile"
          active={activeItem === "Profile"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Applied Projects"
          active={activeItem === "AppliedProjects"}
          onClick={handleItemClick}
        />
      </Menu>
    </Fragment>
  );
};

export default StudentProfileSidebar;
