import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contactform.css"

const ContactForm = () => {
  return (
    <div id="contact">
       <h3 className="pt-3 text-center  pb-3">CONTACT</h3>
      
      <div className="contact">
      
        
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:smitawebdev78@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="smitawebdev78@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/smita-deshpande-050045191/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
                </a>
              </div>

              <div className="m-2">
                <a href="https://github.com/smipra11" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                </Button>
                </a>
              </div>



            </Col>
          </Row>
        </Jumbotron>
      </div>
    </div>
  );
};

export default ContactForm;
