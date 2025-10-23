'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { FaUserTie, FaUsers, FaHeart, FaBookOpen, FaBullseye, FaComments, FaClipboardCheck, FaRocket, FaTrophy, FaGlobe, FaLightbulb, FaHandshake } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BootstrapClient from '../components/BootstrapClient';

export default function LearnMore() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="learn-more-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional career coaching session" 
                  className="img-fluid rounded"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-content">
                <h1 className="learn-more-title">Learn More About Our Career Coaching Services</h1>
                <p className="learn-more-description">
                  Discover how Saint Daniels Healthcare can help you achieve your professional goals through 
                  comprehensive career coaching, workplace solutions, and public health education.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <FaTrophy className="stat-icon" />
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                  <div className="stat-item">
                    <FaUsers className="stat-icon" />
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Professionals Served</span>
                  </div>
                  <div className="stat-item">
                    <FaRocket className="stat-icon" />
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Offer Section */}
      <section className="what-we-offer-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">What We Offer</h2>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaUserTie size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Career Development Coaching</h3>
                <p className="offer-description">
                  Personalized one-on-one coaching sessions to help you identify career goals, develop professional 
                  skills, and create actionable plans for career advancement.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">One-on-One Sessions</span>
                  <span className="feature-tag">Personalized Plans</span>
                  <span className="feature-tag">Skill Development</span>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaHeart size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Workplace Wellness Programs</h3>
                <p className="offer-description">
                  Comprehensive workplace wellness initiatives designed to improve team dynamics, reduce stress, 
                  and create healthier, more productive work environments.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Team Dynamics</span>
                  <span className="feature-tag">Stress Reduction</span>
                  <span className="feature-tag">Healthy Environment</span>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaBookOpen size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Public Health Education</h3>
                <p className="offer-description">
                  Evidence-based public health education resources and training programs to enhance workplace 
                  safety, wellness, and professional development.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Evidence-Based</span>
                  <span className="feature-tag">Safety Training</span>
                  <span className="feature-tag">Professional Development</span>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaBullseye size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Goal Setting & Planning</h3>
                <p className="offer-description">
                  Strategic goal-setting workshops and planning sessions to help you define clear objectives 
                  and develop step-by-step plans to achieve your professional aspirations.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Strategic Planning</span>
                  <span className="feature-tag">Clear Objectives</span>
                  <span className="feature-tag">Action Plans</span>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaComments size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Community Support</h3>
                <p className="offer-description">
                  Access to a supportive professional community where you can network, share experiences, 
                  and learn from others on similar career journeys.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Professional Network</span>
                  <span className="feature-tag">Peer Support</span>
                  <span className="feature-tag">Shared Learning</span>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaClipboardCheck size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Progress Tracking</h3>
                <p className="offer-description">
                  Regular progress assessments and tracking tools to monitor your career development journey 
                  and celebrate your achievements along the way.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Regular Assessments</span>
                  <span className="feature-tag">Progress Monitoring</span>
                  <span className="feature-tag">Achievement Celebration</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Why Choose Our Career Coaching Services?</h2>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={6}>
              <div className="benefit-card enhanced-benefit">
                <div className="benefit-visual">
                  <div className="benefit-icon-wrapper">
                    <FaGlobe className="benefit-icon" />
                    <div className="icon-background"></div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Evidence-Based Approach</h4>
                  <p className="benefit-description">
                    Our coaching methods are grounded in research and proven best practices in career development and workplace wellness.
                  </p>
                  <div className="benefit-highlights">
                    <span className="highlight-item dark-green-highlight">Research-Driven Methods</span>
                    <span className="highlight-item dark-green-highlight">Proven Best Practices</span>
                    <span className="highlight-item dark-green-highlight">Scientific Approach</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="benefit-card enhanced-benefit">
                <div className="benefit-visual">
                  <div className="benefit-icon-wrapper">
                    <FaUsers className="benefit-icon" />
                    <div className="icon-background"></div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Expert Team</h4>
                  <p className="benefit-description">
                    Our certified career coaches and public health educators bring years of experience and specialized knowledge to support your success.
                  </p>
                  <div className="benefit-highlights">
                    <span className="highlight-item dark-green-highlight">Certified Coaches</span>
                    <span className="highlight-item dark-green-highlight">Years of Experience</span>
                    <span className="highlight-item dark-green-highlight">Specialized Knowledge</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="benefit-card enhanced-benefit">
                <div className="benefit-visual">
                  <div className="benefit-icon-wrapper">
                    <FaLightbulb className="benefit-icon" />
                    <div className="icon-background"></div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Personalized Solutions</h4>
                  <p className="benefit-description">
                    Every coaching program is tailored to your unique needs, goals, and circumstances for maximum effectiveness.
                  </p>
                  <div className="benefit-highlights">
                    <span className="highlight-item dark-green-highlight">Tailored Programs</span>
                    <span className="highlight-item dark-green-highlight">Unique Needs Focus</span>
                    <span className="highlight-item dark-green-highlight">Maximum Effectiveness</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="benefit-card enhanced-benefit">
                <div className="benefit-visual">
                  <div className="benefit-icon-wrapper">
                    <FaHandshake className="benefit-icon" />
                    <div className="icon-background"></div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Community Support</h4>
                  <p className="benefit-description">
                    Access to a supportive network of professionals and ongoing community resources to enhance your career journey.
                  </p>
                  <div className="benefit-highlights">
                    <span className="highlight-item dark-green-highlight">Professional Network</span>
                    <span className="highlight-item dark-green-highlight">Community Resources</span>
                    <span className="highlight-item dark-green-highlight">Ongoing Support</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section enhanced-cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <div className="cta-content">
                <div className="cta-icon">
                  <FaRocket size={60} />
                </div>
                <h2 className="cta-title">Ready to Start Your Career Development Journey?</h2>
                <p className="cta-description">
                  Take the first step towards achieving your professional goals. Contact us today to learn more 
                  about our career coaching services and how we can help you succeed.
                </p>
                <div className="cta-stats">
                  <div className="cta-stat">
                    <FaUsers className="cta-stat-icon" />
                    <span className="cta-stat-text">Join 500+ Professionals</span>
                  </div>
                  <div className="cta-stat">
                    <FaTrophy className="cta-stat-icon" />
                    <span className="cta-stat-text">95% Success Rate</span>
                  </div>
                  <div className="cta-stat">
                    <FaRocket className="cta-stat-icon" />
                    <span className="cta-stat-text">10+ Years Experience</span>
                  </div>
                </div>
                <div className="cta-buttons">
                  <button className="btn-primary enhanced-btn" onClick={() => window.location.href = '/contact'}>
                    <FaUserTie className="btn-icon" />
                    Get Started Today
                  </button>
                  <button className="btn-secondary enhanced-btn" onClick={() => window.location.href = '/download'}>
                    <FaRocket className="btn-icon" />
                    Download Our App
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
      <BootstrapClient />
    </>
  );
}
