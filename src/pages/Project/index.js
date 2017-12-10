import React from "react"
// import projects from "data/projects"
import "./style.css"

export default class Project extends React.Component {

  render() {
    return (
      <div className="ProjectPage">
        <h1>H1 Title</h1>
        <h2>H2 Tech-Detail Title</h2>
        <div className="project-intro">
          <div className="project-image">
            project-image
          </div>
          <div className="project-description">
            project-description
          </div>
        </div>
      </div>
    )
  }

}
