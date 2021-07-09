import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import AppNavBar from './components/AppNavBar';
import AppCard from './components/Card';


function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Container className="navbar-app">
        <Row>
          <Col sm><AppCard /></Col>
          <Col sm><AppCard /></Col>
          <Col sm><AppCard /></Col>
          <Col sm><AppCard /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
