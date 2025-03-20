'use client';

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3}>
            <h3 className="font-serif mb-4">SAINT DANIELS</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">IN</a>
              <a href="#" className="social-icon">SC</a>
              <a href="#" className="social-icon">TT</a>
              <a href="#" className="social-icon">IG</a>
            </div>
          </Col>
          <Col lg={3}>
            <h4 className="font-serif mb-4">MEMBERS</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-royal-cream text-decoration-none">Newsletter</a></li>
              <li><a href="#" className="text-royal-cream text-decoration-none">Partners</a></li>
              <li><a href="#" className="text-royal-cream text-decoration-none">Help Center</a></li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4 className="font-serif mb-4">RESOURCES</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-royal-cream text-decoration-none">Documents</a></li>
              <li><a href="#" className="text-royal-cream text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-royal-cream text-decoration-none">Terms of Service</a></li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4 className="font-serif mb-4">COMPANY</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-royal-cream text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-royal-cream text-decoration-none">Contact</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
} 