import React from 'react'
import {
    Container,
    Form,
    FormControl,
    Navbar,
    NavDropdown,
    Nav,
  } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="./">
                        Notes
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav>
                            <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                            </Nav>
                            <Nav.Link>
                                <Link to="./">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="./mynotes">My Notes</Link>
                            </Nav.Link>
                            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
