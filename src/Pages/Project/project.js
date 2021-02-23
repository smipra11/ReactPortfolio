import React from 'react'
import Card from "react-bootstrap/Card";

import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/profile.jpeg"
import Button from "react-bootstrap/Button";
import  L_Stock from  "../../assets/img/projects/Stock.png"
import L_Foodie from  "../../assets/img/projects/foodie.png"
import L_amazon from "../../assets/img/projects/amazon.png"
import "./project.css"


const Project = () => {
    return (
        <div id="project">
             <h1 className="pt-3 text-center font-details pb-3">PROJECT</h1>
            <div className="project">
               

                <Card  style={{ width: '20rem' }}>
    <Card.Img variant="top" src= {L_Stock} />
    <Card.Body>
      <Card.Text>
      Stockabily-Stock search Application  
      </Card.Text>
      <Card.Text>
      
      <strong> Technology Stack</strong> - HTML,  JavaScript, Query Alpha Vantage API,  firebase, Trading View JavaScript Library.
      </Card.Text>
      
    </Card.Body>
  </Card>

  <Card  style={{ width: '20rem' }}>
    <Card.Img variant="top" src= {L_Foodie} />
    <Card.Body>
      <Card.Text>
      FoodieReview-MERN Stack Application  
      </Card.Text>
      <Card.Text>
      
      <strong> Technology Stack</strong> - React,Node JS,Express,MongoDB,Material UI, React Router,React Bootstrap.
      </Card.Text>
      
    </Card.Body>
  </Card>
  <Card  style={{ width: '20rem' }}>
    <Card.Img variant="top" src= {L_amazon} />
    <Card.Body>
      <Card.Text>
     React-Ecommerce App 
      </Card.Text>
      <Card.Text>
      
      <strong> Technology Stack</strong> - React,Material UI,Contex App for State Mangment,Firebase Auth,Firebase Real Time database
      </Card.Text>
      
    </Card.Body>
  </Card>
                
            </div>
            </div>
    )
}

export default Project
