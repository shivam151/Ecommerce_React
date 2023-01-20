import "./AboutStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
function About() {
  return (
    <div className="about">
    <div className="left">
      <h1>WHO AM I?</h1>
      <p>I am the react full-stack developer.
           I create responsive secure websites for clients.
           </p>
      <Link to="/contact">
          <button className="btn">Contact</button>
      </Link>

    </div>
    <div className="right">
      <div className="img-container"> 
      <div className="img-stack top"> 
      <img src="https://cdn.pixabay.com/photo/2014/08/15/06/15/imprint-418593__340.jpg" className="img" alt="true"/>
      </div>
      <div className="img-stack bottom"> 
      <img src="https://cdn.pixabay.com/photo/2014/08/15/06/16/business-card-418600__340.jpg" className="img" alt="true"/>
      </div>
      </div>
    </div>

  </div>
  )
}

export default About
