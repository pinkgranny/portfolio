import React from "react"
import "./style.css"

class Highlight extends React.Component {

  render() {
    return (
      <div className="Highlight">
        <a href src={this.props.url} alt="">
          <img src={this.props.image} alt="" />
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </a>
      </div>
    )
  }

}

export default Highlight
