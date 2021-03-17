import React from 'react'
import Card from "react-bootstrap/Card";

import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/profile.jpeg"
import Button from "react-bootstrap/Button";
import L_Stock from "../../assets/img/projects/Stock.png"
//import L_Foodie from "../../assets/img/projects/food.png"
import L_amazon from "../../assets/img/projects/amazon.png"
import L_book from "../../assets/img/projects/new3.png"
import L_cart from "../../assets/img/projects/cart.png"
import L_client from "../../assets/img/projects/Techsmite.png"


import "./project.css"


const Project = () => {
  return (
    <div id="project">
      <h3 className="pt-3 text-center  pb-3">PROJECT</h3>
      <div className="project">


        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={L_Stock} className="book" />
          <Card.Body>
            <Card.Text>
              Stockabily-Stock search Application
              </Card.Text>
            <Card.Text>

              <strong> Technology Stack</strong> - HTML,  JavaScript, Query Alpha Vantage API,  firebase, Trading View JavaScript Library.
             </Card.Text>

            <div >
              <a href="https://github.com/miklotov/Stockabily" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SOURCE CODE
                </Button>
              </a>
              <a href="https://miklotov.github.io/Stockabily/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SEE LIVE
                </Button>
              </a>
            </div>

          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={L_book} className="book" />
          <Card.Body>
            <Card.Text>
              React Native -BookLibrary App
      </Card.Text>
            <Card.Text>

              <strong> Technology Stack</strong> - React Native,Expo Cli,React Router,Material Icon,Firebase for Authetication,Firebase firestore ,Firebase Storage
             </Card.Text>

            <div >
              <a href="https://github.com/smipra11/ReactNative-BookSearchApp" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SOURCE CODE
                </Button>
              </a>
              <a href=" https://github.com/smipra11/ReactNative-BookSearchApp " target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SEE LIVE
                </Button>
              </a>
            </div>

          </Card.Body>


        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={L_amazon} className="book" />
          <Card.Body>
            <Card.Text>
              React-Ecommerce App
      </Card.Text>
            <Card.Text>

              <strong> Technology Stack</strong> - React,Material UI,Contex App for State Mangment,Firebase Auth,Firebase Real Time database
      </Card.Text>


            <div >
              <a href="https://github.com/smipra11/crwn-ecommerce" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" className="button" size="sm">
                  SOURCE CODE
                </Button>
              </a>
              <a href="https://shopify-ecommerce.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" className="button" size="sm">
                  SEE LIVE
                </Button>
              </a>
            </div>

          </Card.Body>
        </Card>
      </div>

      <div className="project">


        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={"https://user-images.githubusercontent.com/45401868/61585807-f645e100-ab32-11e9-8c3e-cd51977cfb5a.png"} className="book" />
          <Card.Body>
            <Card.Text>
              MERN Stack App
      </Card.Text>
            <Card.Text>

              <strong> Technology Stack</strong> -React React Router MongoDB React Bootrap Express Node JS
      </Card.Text>


            <div >
              <a href="https://github.com/smipra11/Find-my-Fev" target="_blank" rel="noopener noreferrer">

                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SOURCE CODE
                </Button>
              </a>
              <a href="https://find-my-fav.herokuapp.com/Restaurant" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SEE LIVE
                </Button>
              </a>
            </div>

          </Card.Body>
        </Card>






        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={L_cart} className="book" />
          <Card.Body>
            <Card.Text>
              React Native E-Commerce App
      </Card.Text>
            <Card.Text>

              <strong> Technology Stack</strong> -React Native,React Router,Redux for State Managment,Material Ui
      </Card.Text>


            <div >
              <a href="https://github.com/smipra11/ReactNative-Shopify" target="_blank" rel="noopener noreferrer">

                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SOURCE CODE
                </Button>
              </a>
              <a href="https://github.com/smipra11/ReactNative-Shopify" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SEE LIVE
                </Button>
              </a>
            </div>

          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={L_client} className="book" />
          <Card.Body>
            <Card.Text>
             TechSmite Landing Page
      </Card.Text>
            <Card.Text>

              <strong> Technology Stack</strong> -HTML,CSS,Bootstrap,font-awsome,PHP
      </Card.Text>


            <div >
              <a href="https://github.com/smipra11/TechSmite-Landingpage" target="_blank" rel="noopener noreferrer">

                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SOURCE CODE
                </Button>
              </a>
              <a href="https://www.techsmite.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="View Code" className="button" size="sm">
                  SEE LIVE
                </Button>
              </a>
            </div>

          </Card.Body>
        </Card>



      </div>

    </div>
  )
}

export default Project
