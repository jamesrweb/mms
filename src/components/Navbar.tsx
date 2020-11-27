import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">MMS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}