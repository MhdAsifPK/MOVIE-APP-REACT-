import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-72 ">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2023 Movie Website. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <Nav className="justify-content-end">
              <Nav.Link href="/about" className="text-light">About Us</Nav.Link>
              <Nav.Link href="/contact" className="text-light">Contact</Nav.Link>
              <Nav.Link href="/privacy-policy" className="text-light">Privacy Policy</Nav.Link>
              <Nav.Link href="/terms-of-service" className="text-light">Terms of Service</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">Instagram</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;