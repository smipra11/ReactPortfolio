import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

import "./experience.css"

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>

                    <Card>

                        <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                                <Card.Title className="text-center">TechSmite India Pvt LTD</Card.Title>
                            </div>
                            <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Junior React React-Native Developer</strong>
                                    <br />
                                    <strong>Technology:</strong> React JS,React Native,Firebase,HTML,CSS,Javascript,Node JS
                                    <br/>
                                     <strong>Duration:</strong> August 2020 - Present
                                     <br />
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                        <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                                        <li><strong>Developed</strong> automation system to create SQL bulk query scripts that
                                          increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                                        </li>
                                        <li><strong>Provided</strong> application maintenance while working as `Production Support`.
                                       </li>
                                        <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according
                                        to the business requirements.</li>
                                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                                    </ul>


                                </Card.Text>
                            </div>


                            <div>
                                <Card.Title className="text-center">TechSmite India Pvt LTD</Card.Title>
                            </div>
                            <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Junior React React-Native Developer</strong>
                                    <br />
                                    <strong>Technology:</strong> React JS,React Native,Firebase,HTML,CSS,Javascript,Node JS
                                    <br/>
                                     <strong>Duration:</strong> August 2020 - Present
                                     <br />
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                        <li>
                                        Working in startup environment on React and React-Native project Responsible for creating efficient design and developing User Interaction screens for Car Parking Mobile App using React Native. </li>
                                        <li>Work on Both React Native Expo and React Native cli</li>
                                      
                                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                                    </ul>


                                </Card.Text>
                            </div>



                        </Card.Body>
                    </Card>

                </Container>
            </Jumbotron>
        </div>
    );
};

export default Experience


