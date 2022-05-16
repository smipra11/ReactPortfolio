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
                                <strong className="body-title-style ">  Skitter TV Atlanta GA</strong>


                            </Card.Text>

                            <div>
                                <Card.Text className="text-left style">
                                    <strong className="body-title-style ">Front End  Developer</strong>
                                    <br />
                                    <strong>Technology:</strong> React JS,React Native,XCode,Android Studio,Javascript,Node JS
                                    <br />
                                    <strong>Duration:</strong> Feburary 2022 - Present
                                     <br />
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                        <li>
                                        	Skitter TV is premier Application Based IPTV technology solution providing advance Pay TV services for broadband services.
<li>	Implemented a variety of new features including writing native java modules to handle the interaction of the app with the android operating system or designing new components and logic in react-native utilizing Redux for state management.</li>
 </li>
                                      

                                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}


                                    </ul>


                                </Card.Text>
                            </div>

                            <div>
                                <Card.Text className="text-left style">
                                    <strong className="body-title-style ">Benetech - Palo Alto CA </strong>
                                    <br />
                                    <strong>Technology:</strong> React JS,React Native,XCode,Android Studio,Javascript,Node JS
                                    <br />
                                    <strong>Duration:</strong> Feburary 2022 - Auguest 2022
                                     <br />
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                        <li>
                                       <li> 	Working on developing mobile app for BookShare reader for Benetech</li>
<li>		Creating multiple mobile screen UI using Nativebase library for React Native.
•	Created navigation and Tab interface for the whole app using React Navigation
•	Working on Epubjs and Text to speech React native libraries for rendering epub book and make them speak in Android and IOS devices.
.</li>
 </li>
                                      

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


