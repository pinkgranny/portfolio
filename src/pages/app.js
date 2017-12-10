import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "./../library/navigation"

import Home from "./Home"
import About from "./About"
import Project from "./Project"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Project" component={Project} />
          <Navigation />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
