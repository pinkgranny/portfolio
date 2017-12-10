import React from "react"
import "./style.css"

class Highlight extends React.Component {

  render() {
    return (
      <div className="Highlight">
        {/* <a href src={this.props.url} alt=""> */}
        <div className="imageHolder" style={{ backgroundImage: `url(${this.props.image})` }} />
        {/* <img src={this.props.image} alt="" /> */}
        <div className="intro-text">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
        {/* </a> */}
      </div>
    )
  }

}

export default Highlight
