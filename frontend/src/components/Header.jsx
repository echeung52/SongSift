import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Image
          src="/assets/music-QbupV7QD.png"
          style={{ width: "3.5%", height: "auto", marginRight: "10px" }}
        />
        <Navbar.Brand href="/">SongSift</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
