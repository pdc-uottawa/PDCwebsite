import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import "./projectdetail.css"

/**
 * @author @binjiasata
 * @description project details included date, description, skills
 *
 */


const ProjectDetailedInfo = ({ project }) => {
 
  

  window.onload = (event) => {
  var nlprojectdesc = project.description;  
  var projectdesc = nlprojectdesc.toLowerCase();
  var lenofdesc = projectdesc.length;
  var indexofskills = projectdesc.indexOf("skills:");
  var indexofprojecttype = projectdesc.indexOf("project type:");
  var indexofdomain = projectdesc.indexOf("domains:");
  var prjct;
  if(indexofprojecttype!==-1&&indexofdomain!==-1&&indexofskills!==-1)
  {
  prjct = nlprojectdesc.slice(0,indexofprojecttype);
  var prjct_type = nlprojectdesc.slice(indexofprojecttype,indexofdomain);
  var prjct_domain = nlprojectdesc.slice(indexofdomain,indexofskills);
  var prjct_skill = nlprojectdesc.slice(indexofskills,lenofdesc);
  }
  else
  {
  prjct= nlprojectdesc;
  }
  document.getElementById("prjct_desc").innerHTML="<p>"+prjct+"</p>";
  if(indexofprojecttype===-1)
  {
    document.getElementById("prjct_type").style.display="none";
  }
  else
  {
    document.getElementById("prjct_type").style.display="block";
    document.getElementById("prjct_type").innerHTML="<hr><p>"+prjct_type+"</p>";
  }
  if(indexofdomain===-1)
  {
    document.getElementById("prjct_domain").style.display="none";
  }
  else
  {
    document.getElementById("prjct_domain").style.display="block";
    document.getElementById("prjct_domain").innerHTML="<hr><p>"+prjct_domain+"</p>";
  }
  if(indexofskills===-1)
  {
    document.getElementById("prjct_skill").style.display="none";
  }
  else
  {
    document.getElementById("prjct_skill").style.display="block";
    document.getElementById("prjct_skill").innerHTML="<hr><p>"+prjct_skill+"</p>";
  }
};

  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>
              {project.postedOn}
              {project.postedOn ? "  To  " + project.validUntil : ""}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <div id="prjct_desc"></div>
            <div id="prjct_type"></div>
            <div id="prjct_domain"></div>
            <div id="prjct_skill"></div>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="code branch" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{project.skills}</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
};

export default ProjectDetailedInfo;
