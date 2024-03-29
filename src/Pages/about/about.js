import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/profile.jpeg";
import Smita from "../../assets/img/projects/smita.png"
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { Github, Linkedin, Twitter } from "react-bootstrap-icons";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={6}>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "#ababab",
                boxShadow: "1px 3px 1px rgba(0,0,0,0.19)",
              }}
            >
              <Card.Img variant="top" className="profile" src={Smita} />
              <Row className="justify-content-center">
                <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Smita Deshpande
                </p>
              </Row>
              <hr
                style={{
                  backgroundColor: "lightgrey",
                  height: "1px",
                }}
              />
              <Row className="justify-content-center">
                <p>React/React Native Developer</p>
              </Row>
             
              <Card.Body
                style={{
                  backgroundColor: "white",
                  height: "7rem",
                  
                }}
               
              >

                <Card.Text >
                  <a
                    href="https://github.com/smipra11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={30}  style={{marginRight:'1.7rem',marginLeft:'1.6rem', }}/>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/smita-deshpande-050045191/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={30}  style={{marginRight:'1.7rem',marginLeft:'1.6rem'}}/>
                   
                  </a>
                  <a
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fmernstackdiva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Twitter size={30}  style={{marginRight:'1.7rem',marginLeft:'1.6rem'}}/>
                  </a>
                </Card.Text>
              </Card.Body>
             
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Row className="align-items-start p-2  rounded">
              <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
                I'm Smita
              </h1>
              Front End Developer with 4 years of React/React Native expereince
              having  background in Computer Science Completed Certificate in
              Full stack Web Development Program from Georgia Tech. Extensive
              experience in Web and Mobile app development. Passionate about
              learning new technologies and building impactful products.
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
