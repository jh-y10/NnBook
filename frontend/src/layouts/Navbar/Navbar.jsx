import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/NnBook-Logo.png";
import "./Navbar.style.css";
function Navbar() {
  return (
    <BootstrapNavbar
      expand="lg"
      className="custom-navbar"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container className="custom-container">
        <BootstrapNavbar.Brand as={Link} to="/">
          <img src={LogoImg} alt="NnBook Logo" className="logo-img" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/library">
              내 서재
            </Nav.Link>
            <Nav.Link as={Link} to="/meeting">
              모임
            </Nav.Link>
            <Nav.Link as={Link} to="/rental">
              대여
            </Nav.Link>
            <Nav.Link as={Link} to="/mypage">
              마이페이지
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              로그인
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
