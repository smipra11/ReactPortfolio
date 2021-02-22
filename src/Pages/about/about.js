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
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
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
                                <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                             <br />
                              In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                                <br />

                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                                         </Button>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
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
