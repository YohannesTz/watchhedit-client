import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
class AppNavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home"><img
                    alt=""
                    src={process.env.PUBLIC_URL + '/image/logo-small.png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}Watchhedit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/anime">Anime</Nav.Link>
                        <Nav.Link href="/movie">Movie</Nav.Link>
                        <Nav.Link href="/book">Book</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text> */}
                <Button variant="outline-primary">Login</Button>
            </Navbar>
        );
    }
}

export default AppNavBar;