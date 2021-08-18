//import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

//import SearchBox from './SeachBox.js';
//import { logout } from '../actions/userActions.js';
import React from 'react';

const Headerx = () => {
  //const dispatch = useDispatch();

  const userInfo = {};

  const logoutHandler = () => {
    console.log('logout');
  };

  return (
    <header>
      <Container>
        <div className='d-none d-md-flex justify-content-center px-3'>
          <LinkContainer to='/'>
            <h2 className='mt-2 mb-0 pb-0 text-dark cursor-pointer'>
              Forever Cooking
            </h2>
          </LinkContainer>
        </div>
        <Navbar variant='light' expand='sm' className='py-4' collapseOnSelect>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <div className='d-flex justify-content-center px-3 d-md-none'>
            <LinkContainer to='/'>
              <h2 className='my-0 text-dark cursor-pointer'>Forever Cooking</h2>
            </LinkContainer>
          </div>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              {userInfo ? (
                <NavDropdown
                  title={
                    <>
                      <i className='fas fa-user'></i>
                    </>
                  }
                  id='username'
                >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link href='/login'>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Headerx;
