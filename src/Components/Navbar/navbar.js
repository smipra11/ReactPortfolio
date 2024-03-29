import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

import "./navbar.css"

function MYNavbar() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
    
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Nav >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MYNavbar
