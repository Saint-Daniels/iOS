'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import Link from 'next/link';

export default function Contact() {
  const contactInfo = [
    {
      title: "Customer Support",
      icon: <FaPhone />,
      details: "888-324-6642",
      description: "Available Monday-Friday, 9am-5pm CST"
    },
    {
      title: "Main Office",
      icon: <FaBuilding />,
      details: "6000 Ross Perot Blvd",
      description: "Dallas, TX 75201"
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      <Container className="contact-page py-5">
        <h1 className="text-center mb-5">Contact Us</h1>
        
        <Row className="g-4 mb-5">
          {contactInfo.map((info, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 contact-card">
                <Card.Body className="text-center">
                  <div className="contact-icon mb-3">
                    {info.icon}
                  </div>
                  <h3>{info.title}</h3>
                  <p className="contact-details">{info.details}</p>
                  <p className="text-muted">{info.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mb-5">
          <Col>
            <Card className="map-card">
              <Card.Body>
                <div className="text-center mb-4">
                  <FaMapMarkerAlt size={48} className="text-primary mb-3" />
                  <h3>Our Location</h3>
                  <p className="text-muted">6000 Ross Perot Blvd, Dallas, TX 75201</p>
                </div>
                <div className="map-container">
                  <div className="map-placeholder">
                    <div className="map-coming-soon">
                      <h4>Interactive Map Coming Soon</h4>
                      <p className="text-muted">We're working on adding an interactive map to help you find us easily.</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer>
        <div className="footer-links">
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/newsletter">Newsletter</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Support</h5>
            <ul>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Connect</h5>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </Footer>
    </PageTransition>
  );
} 