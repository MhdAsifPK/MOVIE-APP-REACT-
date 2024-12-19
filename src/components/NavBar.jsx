// NavBar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const searchHandlerButton = () => {
    navigate("/search");
  };

  return (
    <div className="bg-white sticky top-0 z-50">
      <Navbar bg="danger" data-bs-theme="danger" className="uppercase bg-red-500 " expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#popularmovie">Most Popular</Nav.Link>
            <Nav.Link href="#rated">Rated</Nav.Link>
            <Nav.Link href="#faverate">Favorite</Nav.Link>
            <button
              onClick={searchHandlerButton}
              className="bg-indigo-700 text-yellow-50 flex ju p-2 mx-11 rounded-3xl "
            >
              search here...
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;