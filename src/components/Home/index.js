import React from "react"
import Highlight from "./../../library/highlight"
import Navigation from "./../../library/navigation"
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

        <div className="top-one-highlight">
          {projectsJson.projects.map((item) => {
            return <Highlight
              key={item.id}
              image={item.image}
              url={item.url}
              name={item.name}
              description={item.description} />
          })}
        </div>

        {/* <BrowserRouter>

        <Link to="/Project">Project site link text</Link>

        <Route path="components/Project" component={Project} /> */}

        {/* <div className="top-two-wrapper">
          <Highlight
            className="top-two-highlight"
            text="left-highlight" />

          <Highlight
            className="top-two-highlight"
            text="right-highlight" />
        </div>

        <Highlight
          className="top-one-highlight"
          text="group-highlight" /> */}

        <Navigation />
      {/* </<BrowserRouter> */}
      </div>

    )
  }

}

export default Home
