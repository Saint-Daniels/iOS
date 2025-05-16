'use client';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaMobileAlt, FaGift, FaShoppingBag } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Rewards from '../components/Rewards';
import Testimonials from '../components/Testimonials';
import Link from 'next/link';

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <div className="home-page">
        <Hero />
        <Benefits />
        
        {/* How It Works Section */}
        <section className="how-it-works py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col md={8} className="text-center">
                <h2 className="section-title">ROYAL DECREE: HOW IT WORKS</h2>
                <p className="section-subtitle">
                  Join our kingdom of health and wellness, where your daily dedication leads to royal rewards.
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              <Col md={4}>
                <div className="step-card text-center">
                  <h3 className="step-number">1</h3>
                  <h4>Join The Kingdom</h4>
                  <p>
                    Register for a Saint Daniels account and link your healthcare providers to begin your journey to wellness.
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="step-card text-center">
                  <h3 className="step-number">2</h3>
                  <h4>Months of Coverage</h4>
                  <p>
                    Every month you stay active qualifies you for new rewards and benefits.
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="step-card text-center">
                  <h3 className="step-number">3</h3>
                  <h4>Claim Your Royal Rewards</h4>
                  <p>
                    Unlock coverage rewards and exclusive benefits as you maintain your health streak and reach new milestones.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Rewards Section */}
        <section className="rewards-section py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col md={8} className="text-center">
                <h2 className="section-title">ROYAL TREASURES</h2>
                <p className="section-subtitle">
                  Unlock these exclusive rewards through your health journey.
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              <Col md={4}>
                <div className="reward-card text-center">
                  <div className="reward-icon" style={{ fontSize: '5rem' }}>
                    <FaMobileAlt />
                  </div>
                  <h4>Phone</h4>
                  <p>Get a new phone as you maintain your health journey streak.</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="reward-card text-center">
                  <div className="reward-icon" style={{ fontSize: '5rem' }}>
                    <FaGift />
                  </div>
                  <h4>Krispy Kreme</h4>
                  <p>Enjoy sweet rewards with Krispy Kreme gift cards for maintaining your health streak.</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="reward-card text-center">
                  <div className="reward-icon" style={{ fontSize: '5rem' }}>
                    <FaShoppingBag />
                  </div>
                  <h4>Walgreens</h4>
                  <p>Redeem for Walgreens gift cards to use on health and wellness products.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Testimonials />
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