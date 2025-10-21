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
        {/* Premium Rewards Section */}
        <section className="premium-rewards-section">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6}>
                <div className="section-content">
                  <h1 className="section-title-large">Premium Rewards</h1>
                  <p className="section-description">
                    Get paid to watch ads and take surveys. Earn money while you browse and share your opinions.
                  </p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaDollarSign size={32} />
                      </div>
                      <div>
                        <h4>Watch Ads & Earn</h4>
                        <p>Get paid for watching targeted advertisements that match your interests</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaClipboardList size={32} />
                      </div>
                      <div>
                        <h4>Take Surveys</h4>
                        <p>Share your opinions and earn rewards for valuable feedback</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaTarget size={32} />
                      </div>
                      <div>
                        <h4>Personalized Content</h4>
                        <p>Receive ads and surveys tailored to your preferences and lifestyle</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="section-visual">
                  <div className="visual-placeholder">
                    <div className="visual-icon">
                      <FaMobile size={64} />
                    </div>
                    <p>Premium Rewards Dashboard</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Royal Treatment Section */}
        <section className="royal-treatment-section">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6} className="order-lg-2">
                <div className="section-content">
                  <h1 className="section-title-large">Royal Treatment</h1>
                  <p className="section-description">
                    Discover exciting games available on the app. Play, compete, and earn rewards while having fun.
                  </p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaGamepad size={32} />
                      </div>
                      <div>
                        <h4>Casual Games</h4>
                        <p>Enjoy relaxing puzzle games, trivia, and brain teasers</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaTrophy size={32} />
                      </div>
                      <div>
                        <h4>Competitions</h4>
                        <p>Compete with other members in tournaments and leaderboards</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaGift size={32} />
                      </div>
                      <div>
                        <h4>Game Rewards</h4>
                        <p>Earn bonus points and exclusive prizes for gameplay achievements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="order-lg-1">
                <div className="section-visual">
                  <div className="visual-placeholder">
                    <div className="visual-icon">
                      <FaGames size={64} />
                    </div>
                    <p>Games Collection</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Wellness Incentives Section */}
        <section className="wellness-incentives-section">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6}>
                <div className="section-content">
                  <h1 className="section-title-large">Wellness Incentives</h1>
                  <p className="section-description">
                    Explore your personalized For You feed featuring curated content, health tips, and exclusive offers.
                  </p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaBook size={32} />
                      </div>
                      <div>
                        <h4>Health Articles</h4>
                        <p>Read expert-curated articles on wellness, nutrition, and fitness</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaLightbulb size={32} />
                      </div>
                      <div>
                        <h4>Personalized Tips</h4>
                        <p>Receive customized health and wellness recommendations</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaTarget size={32} />
                      </div>
                      <div>
                        <h4>Exclusive Offers</h4>
                        <p>Access special deals on health products and services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="section-visual">
                  <div className="visual-placeholder">
                    <div className="visual-icon">
                      <FaListUl size={64} />
                    </div>
                    <p>For You Feed</p>
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