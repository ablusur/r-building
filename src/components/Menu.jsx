import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Logo from "../assets/logo.png"
import "./menu.css"

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="menu_bg">
    <Container>
      <Navbar.Brand href="#home">
    <img src={Logo}alt="logo" />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About us</Nav.Link>
          <Nav.Link href="#pricing">Features</Nav.Link>
          <Nav.Link href="#pricing">FAQ</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
        </Nav>
        <div className="btn"><a href="#">Contact Us</a></div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu