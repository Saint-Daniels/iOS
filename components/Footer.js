'use client';

import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">SAINT DANIELS</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">FB</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">IN</a>
              <a href="#" className="social-icon" aria-label="Snapchat">SC</a>
              <a href="#" className="social-icon" aria-label="Twitter">TT</a>
              <a href="#" className="social-icon" aria-label="Instagram">IG</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">MEMBERS</h4>
            <ul className="footer-links">
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">RESOURCES</h4>
            <ul className="footer-links">
              <li><a href="#">Documents</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Saint Daniels. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
} 