import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

import "./experience.css"

const Experience = () => {
    return (
        <div id="experience">
             <h3 className="pt-3 text-center  pb-3">EXPERIENCE</h3>
            <div>
               

                <Container>

                    <Card>

                        <Card.Body className="d-flex justify-content-center flex-column">

                            <Card.Text className="text-left style">
                                <strong className="body-title-style ">  TechSmite India Pvt LTD</strong>


                            </Card.Text>

                            <div>
                                <Card.Text className="text-left style">
                                    <strong className="body-title-style ">Junior React-Native Developer</strong>
                                    <br />
                                    <strong>Technology:</strong> React JS,React Native,Firebase,HTML,CSS,Javascript,Node JS
                                    <br />
                                    <strong>Duration:</strong> August 2020 - Present
                                     <br />
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                        <li>
                                            Working in startup environment on React and React-Native project, Responsible for creating efficient design and developing User Interaction screens for Car Parking Mobile App using React Native. </li>
                                        <li>Work on Both React Native Expo and React Native cli</li>

                                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}


                                    </ul>


                                </Card.Text>
                            </div>


                            <div>
                                <Card.Text className="text-left style">

                                    <strong className="body-title-style ">Georgia Tech Professional Development – Full Stack Web Development  </strong> </Card.Text>
                            </div>
                            <div>
                                <Card.Text className="text-left style">
                                    <strong className="body-title-style ">Full Stack Web Developer</strong>
                                    <br />
                                    <strong>Technology:</strong> React JS,Firebase,HTML,CSS,Javascript,Node JS,Express,Node JS
                                    <br />
                                    <strong>Duration:</strong> 2019
                                     <br />
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                        <li>6+ Month intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, React JS,Firebase, Node Js, MySQL, MongoDB, Express, Handelbars</li>

                                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                                        
                                    </ul>
                                    



                                </Card.Text>
                            </div>



                        </Card.Body>
                    </Card>

                </Container>

            </div>
        </div>
    );
};

export default Experience


