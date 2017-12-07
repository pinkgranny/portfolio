import React from "react"
import Highlight from "./../../library/highlight"
import Navigation from "./../../library/navigation"
import "./style.css"

class Home extends React.Component {

  render() {
    return (
      <div className="Home">

        <div className="main-image">
          <div className="people">
            <h2>&lt;people&gt;</h2>
          </div>
          <div className="ai">
            <h1>AI</h1>
          </div>
        </div>

        <Highlight className="top-two-highlight"
          text="left-highlight" />

        <Highlight className="top-two-highlight"
          text="right-highlight" />

        <Highlight className="top-one-highlight"
          text="group-highlight" />

        <Navigation />

      </div>
    )
  }

}

export default Home
