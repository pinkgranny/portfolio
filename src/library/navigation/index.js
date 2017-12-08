import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from "./../../components/Home"
import About from "./../../components/About"
import Project from "./../../components/Project"
import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="Navigation">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Project">Project</Link>

          <Route path="components/Home" component={Home} />
          <Route path="components/About" component={About} />
          <Route path="components/Project" component={Project} />
        </div>
      </BrowserRouter>
    )
  }

}

export default Navigation
