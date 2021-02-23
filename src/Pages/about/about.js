import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/profile.jpeg"
import Button from "react-bootstrap/Button";
import "./about.css"

const About = () => {
    return (
        <div id="about">
              <h3 className="pt-3 text-center  pb-3 ">ABOUT ME</h3>
            <div className="about">
              
                <Container>
                    <Row>
                        <Col xs={12} md={6}>

                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Smita Deshpande</strong>
                                <br />
                                Full Stack Web Developer with a background in Computer Science. Certificate in Full stack Web Development Program from Georgia Tech. Extensive experience in Web and Mobile app development Passionate about learning new technologies and building impactful products. 

                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                                         </Button>
                                        </a>
                                    </div>

                                    

                                    <div>
                                        <a href="https://github.com/smipra11" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/smita-deshpande-050045191/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                       </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
            </div>
    )
}

export default About
