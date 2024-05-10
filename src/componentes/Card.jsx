import React from "react"
import SuperiorDetails from "./SuperiorDetails"
import TextSection from "./TextSection"
import "./Card.css";


function Card() {
  
  return (
    <div className="detallesCard">
        <SuperiorDetails/>
        <TextSection/>
    </div>

    

  )
}

export default Card;