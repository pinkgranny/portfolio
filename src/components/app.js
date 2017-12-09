import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "./../library/navigation"

import Home from "./Home"
import About from "./About"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Navigation />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
