import React from "react";

export default function Modal(props) {
  return (
    <section id="modal" className={`modal ${!props.showModal && "hide-modal"}`} >
      <div className="content">
        {props.mapDocumentation.map((value, index) => (
          <li className="modalInnerText" key={index}>{value}</li>
        ))}
      </div>
      <div className="actions">
        <button className="toggle-button" onClick={props.flipModal} >
          Close
        </button>
      </div>
    </section>
  )
}