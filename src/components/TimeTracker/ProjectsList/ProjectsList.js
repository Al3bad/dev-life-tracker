import React from "react";
import "./ProjectsList.scss"

class ProjectsList extends React.Component {
  render() {
    return (
      <select onChange={this.props.projectsDropdownHandler} className={`projects-list ${this.props.isFetchingActivity && "disabled"}`} name="project" id="project">
        {this.props.projects.map(projectName => (
          <option key={projectName} value={projectName}>{projectName}</option>
        ))}
      </select>
    );
  }
}

export default ProjectsList;
