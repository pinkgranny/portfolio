import React from "react"
import Highlight from "./../../library/highlight"
import "./style.css"

const projectsJson = require("./../../projects.json")

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

        <div className="top-two-highlight">
          {projectsJson.projects.map((item) => {
            return <Highlight
              key={item.id}
              image={item.image}
              url={item.url}
              name={item.name}
              description={item.description} />
          })}
        </div>
      </div>

    )
  }

}

export default Home
