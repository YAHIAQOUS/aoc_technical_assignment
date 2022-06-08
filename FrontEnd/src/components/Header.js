/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href='/'>Online Store</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Nav.Link href='/stores'>Stores</Nav.Link>
            <Nav.Link href='/yourstore'>Your Store</Nav.Link>
            <Nav.Link href='/cart'>Cart</Nav.Link>
            <Nav.Link href='/orders'>Orders</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
