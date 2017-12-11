import React from "react"
import projects from "data/projects"
import "./style.css"

export default class Project extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    const project = projects.find(p => (p.id === this.props.match.params.id))
    console.log(project)
    this.setProject(project)
  }

  setProject = (project) => {
    this.setState({
      project
    })
  }

  render() {
    return (
      <div className="ProjectPage">
        <h1>{this.state.project.name}</h1>
        <h2>{this.state.project.name2}</h2>
        <div className="project-intro">
          <div className="project-image">
            project-image
          </div>
          <div className="project-description">
            <p>{this.state.project.description}
              {this.state.project.url}
            </p>
          </div>
        </div>
      </div>
    )
  }

}
