import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import LogoImg from "../assets/NnBook-Logo.png";
import "../styles/AppLayout.style.css";
import Footer from'./Footer'

const AppLayout = () => {
  return (
    <div className="app-container">
      <Navbar
        expand="lg"
        className="custom-navbar"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container className="custom-container">
          <Navbar.Brand as={Link} to="/">
            <img src={LogoImg} alt="NnBook Logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
