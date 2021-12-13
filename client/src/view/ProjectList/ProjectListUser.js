import React from "react";
import { List, Image } from "semantic-ui-react";
const img =require('../../assets/default.png')

/**
 * @author @binjiasata
 * @description This is project list user component.
 */
const ProjectListUser = ({ user }) => {
  return (
    <List.Item>
      {
        user.picture ?
        <Image as="" size="mini" circular src={user.picture} />
        :
        <Image as="" size="mini" circular src={img} />
      }
    </List.Item>
  );
};

export default ProjectListUser;
