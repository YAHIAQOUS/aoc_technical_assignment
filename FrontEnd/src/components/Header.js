/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  // const { isSignIn, user } = useSelector((state) => state.authReducer);

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

          <div>
            {/* {!isSignIn && (
              <Button onClick={() => navigate('/signin')}>SignIn</Button>
            )} */}
            {/* {isSignIn && (
              <span>
                <Chip
                  avatar={
                    <Avatar>{user.username.slice(0, 1).toUpperCase()}</Avatar>
                  }
                  label={user.username}
                />
              </span>
            )} */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
