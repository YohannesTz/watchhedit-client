import { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import AppCard from '../components/AppNavBar';

class Book extends Component {
    render() {
        return (
            <Container className="navbar-app">
                <Row>
                    <Col sm><AppCard /></Col>
                    <Col sm><AppCard /></Col>
                    <Col sm> <AppCard /></Col>
                    <Col sm><AppCard /></Col>
                </Row>
            </Container>
        );
    }
}

export default Book;