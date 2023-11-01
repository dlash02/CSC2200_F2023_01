import './App.css';
import NavbarBS from "./NavbarBS"
import Home from "./Home"
import {Button, Col, Container, Row} from "react-bootstrap"
import Books from "./Books";
function App() {
    const myWarning = "The following is only my opinions";
    const likes = 500;
    const sHero = {
        name : 'Hulk',
        power : 'Smashes'
    }
    const mySchool = "http://www.aurora.edu"

    return (
        <Container>
            <NavbarBS/>
            <Row>
                <Col sm={2}>
                </Col>
                    <Col sm={10}>
                        <Home/>
                    </Col>
            </Row>
            <Row>
                <Col xs sm="6">
                    <p> I go to <a href={mySchool}> My University </a></p>
                </Col>
                <Col>
                <Button variant="primary">Primary</Button>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                </Col>
                <Col sm={10}>
                    <h2> Books For Sale</h2>
                    <Books/>
                </Col>
            </Row>
        </Container>
  );
}

export default App;
