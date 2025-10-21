'use client';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaDollarSign, FaClipboardList, FaBullseye, FaGamepad, FaTrophy, FaGift, FaBook, FaLightbulb, FaBullseye as FaTarget, FaMobile, FaGamepad as FaGames, FaListUl } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <div className="home-page">
        <Hero />
        {/* Purpose Section */}
        <section className="purpose-section">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6}>
                <div className="section-content">
                  <h1 className="section-title-large">Our Purpose</h1>
                  <p className="section-description">
                    Cognitive health, placement, and agency services for individuals in need. 
                    We focus on crisis management, nutrition, housing, and life coaching.
                  </p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaTarget size={32} />
                      </div>
                      <div>
                        <h4>Crisis Management</h4>
                        <p>Immediate support and intervention during critical life situations</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaBook size={32} />
                      </div>
                      <div>
                        <h4>Nutrition Services</h4>
                        <p>Comprehensive nutritional guidance and meal planning support</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaMobile size={32} />
                      </div>
                      <div>
                        <h4>Housing Assistance</h4>
                        <p>Housing placement and support services for stable living</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="section-visual">
                  <div className="visual-placeholder">
                    <div className="visual-icon">
                      <FaTrophy size={64} />
                    </div>
                    <p>Comprehensive Care</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Core Features Section */}
        <section className="core-features-section">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6} className="order-lg-2">
                <div className="section-content">
                  <h1 className="section-title-large">Core Features</h1>
                  <p className="section-description">
                    Professional-grade platform with HIPAA-compliant security, comprehensive case management, 
                    and seamless integration for all your service needs.
                  </p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaClipboardList size={32} />
                      </div>
                      <div>
                        <h4>HIPAA-Compliant Login</h4>
                        <p>Secure user authentication with full privacy protection for sensitive information</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaGift size={32} />
                      </div>
                      <div>
                        <h4>Profile & Dashboard</h4>
                        <p>Comprehensive profile management and personalized service dashboard</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaGamepad size={32} />
                      </div>
                      <div>
                        <h4>Case Management</h4>
                        <p>Integrated tracking for life coaching, nutrition, and housing assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="order-lg-1">
                <div className="section-visual">
                  <div className="visual-placeholder">
                    <div className="visual-icon">
                      <FaListUl size={64} />
                    </div>
                    <p>Service Platform</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Membership Tiers Section */}
        <section className="membership-section">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6}>
                <div className="section-content">
                  <h1 className="section-title-large">Membership Tiers</h1>
                  <p className="section-description">
                    Flexible access to our services with tiered membership options. 
                    General access is free, while premium one-on-one services require insurance or out-of-pocket payment.
                  </p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaDollarSign size={32} />
                      </div>
                      <div>
                        <h4>Free General Access</h4>
                        <p>Basic platform features and resources available at no cost</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaLightbulb size={32} />
                      </div>
                      <div>
                        <h4>Premium Services</h4>
                        <p>One-on-one coaching and consultations with insurance or direct payment</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaTarget size={32} />
                      </div>
                      <div>
                        <h4>Secure Document Upload</h4>
                        <p>Box.com integration for secure document tracking and audit trails</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="section-visual">
                  <div className="visual-placeholder">
                    <div className="visual-icon">
                      <FaGames size={64} />
                    </div>
                    <p>Membership Options</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>


      </div>
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