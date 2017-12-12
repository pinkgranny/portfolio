import React from "react"
import "./style.css"

export default class Accordion extends React.Component {

  render() {
    return (
      <div className="Accordion">
        <h2>Info in checklist or accordion</h2>
        <button onClick="myFunction()">Try it!</button>
        <div className="AccordionHeader" id="aFirst" onClick="myFunction()">
          <h3>First accordion header</h3>
        </div>
        <div className="AccordionContent" id="aFirst" >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Accusamus delectus aperiam magnam, nemo sapiente veniam saepe
              provident dolorem beatae architecto fugit aliquid nobis doloremque
               hic, autem omnis odit obcaecati eligendi.
          </p>
        </div>
        <div className="AccordionHeader" id="aSecond">
          <h3>Second accordion header</h3>
        </div>
        <div className="AccordionContent" id="aSecond" >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Accusamus delectus aperiam magnam, nemo sapiente veniam saepe
              provident dolorem beatae architecto fugit aliquid nobis doloremque
               hic, autem omnis odit obcaecati eligendi.
          </p>
        </div>
      </div>
    )
  }
}
