import React from "react"
import { Link } from "react-router-dom"

import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <nav className="Navigation">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Project">Project</Link>
      </nav>
    )
  }

}

export default Navigation
