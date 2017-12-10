import React from "react"
// import "./../images"
import "./style.css"

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <div className="main-image">
          <h1>Actually Interested<br />
          =<br />
          Artificial Intelligence
          </h1>
        </div>
        <div className="wrapper">
          <div className="bio-image">
            {/* <img src="./../images/kaisa.jpg" alt="" /> */}
          </div>
          <div className="bio">
            <h2>Who am I?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Quae nostrum accusantium, facere aliquam sequi ducimus dolorum,
               ipsum eaque non, at harum dolor, voluptatibus! Laborum earum,
                exercitationem facere, laudantium animi architecto?</p>
          </div>
        </div>
      </div>
    )
  }

}

export default About
