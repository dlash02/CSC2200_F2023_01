import {Button, Container, Navbar, Nav} from "react-bootstrap"

const NavbarBS = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">New Book</Nav.Link>
                </Nav>
        </Navbar>
    );
}
export default NavbarBS;