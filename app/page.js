'use client';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaDollarSign, FaClipboardList, FaBullseye, FaGamepad, FaTrophy, FaGift, FaBook, FaLightbulb, FaBullseye as FaTarget, FaMobile, FaGamepad as FaGames, FaListUl, FaHandshake, FaUsers, FaBookOpen, FaChartLine } from 'react-icons/fa';
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
        {/* Mission Section */}
        <section className="mission-section-professional">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="mission-header">
                  <div className="mission-icon">
                    <FaBullseye size={60} />
                  </div>
                  <h2 className="mission-title-professional">Our Mission</h2>
                  <div className="mission-divider"></div>
                </div>
              </Col>
            </Row>
            
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="mission-image-wrapper-professional">
                  <Image 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Professional team meeting and collaboration"
                    width={600}
                    height={450}
                    className="mission-image-professional"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mission-content-professional">
                  <p className="mission-description-professional">
                    Saint Daniels Healthcare is committed to providing comprehensive career coaching and workplace solutions 
                    through public health educational resources and community support. We believe in personalized career 
                    development, evidence-based coaching practices, and creating a supportive environment where professional 
                    growth thrives.
                  </p>
                  
                  <div className="mission-highlights-professional">
                    <div className="highlight-card">
                      <div className="highlight-icon-wrapper">
                        <FaBullseye className="highlight-icon" />
                      </div>
                      <div className="highlight-content">
                        <h4>Personalized Development</h4>
                        <p>Tailored coaching programs designed for your unique career goals and professional aspirations.</p>
                      </div>
                    </div>
                    
                    <div className="highlight-card">
                      <div className="highlight-icon-wrapper">
                        <FaUsers className="highlight-icon" />
                      </div>
                      <div className="highlight-content">
                        <h4>Community Support</h4>
                        <p>Access to a network of professionals and resources that enhance your career development journey.</p>
                      </div>
                    </div>
                    
                    <div className="highlight-card">
                      <div className="highlight-icon-wrapper">
                        <FaChartLine className="highlight-icon" />
                      </div>
                      <div className="highlight-content">
                        <h4>Professional Growth</h4>
                        <p>Evidence-based strategies and continuous support to accelerate your career advancement.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Who Are We Section */}
        <section className="who-we-section-professional">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="section-header-professional">
                  <div className="section-icon">
                    <FaUsers size={60} />
                  </div>
                  <h2 className="section-title-professional">Who Are We?</h2>
                  <div className="section-divider"></div>
                </div>
              </Col>
            </Row>
            
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="team-image-wrapper-professional">
                  <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80&crop=top"
                    alt="Professional healthcare team consultation"
                    width={600}
                    height={450}
                    className="team-image-professional"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="team-content-professional">
                  <div className="team-description-professional">
                    <p>With over 10 years of experience, the team at Saint Daniels Healthcare provides career coaching 
                    with compassion, tailored to the unique professional journey of each individual.</p>
                  </div>
                  
                  <div className="team-stats-professional">
                    <div className="stat-card">
                      <div className="stat-number">10+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Professionals Served</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">95%</div>
                      <div className="stat-label">Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="team-expertise-professional">
                    <h4>Our Expertise</h4>
                    <div className="expertise-grid">
                      <div className="expertise-item">
                        <FaBullseye className="expertise-icon" />
                        <span>Certified Career Coaches</span>
                      </div>
                      <div className="expertise-item">
                        <FaHandshake className="expertise-icon" />
                        <span>Workplace Wellness Specialists</span>
                      </div>
                      <div className="expertise-item">
                        <FaBookOpen className="expertise-icon" />
                        <span>Public Health Educators</span>
                      </div>
                      <div className="expertise-item">
                        <FaChartLine className="expertise-icon" />
                        <span>Evidence-Based Programs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Services Section */}
        <section className="services-section-lonestar">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title-lonestar">Comprehensive Career Coaching Services</h2>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaGamepad size={48} />
                  </div>
                  <h4 className="service-title">Career Development Workshops</h4>
                  <p className="service-description">
                    Connect with other professionals and draw support from similar career journeys. Our career development 
                    workshops allow experiences to be exchanged in a collaborative learning environment.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaClipboardList size={48} />
                  </div>
                  <h4 className="service-title">One-on-One Career Coaching</h4>
                  <p className="service-description">
                    Personalized career coaching sessions tailored to your unique professional challenges and goals. Our certified 
                    career coaches provide a confidential, supportive space for career reflection, development, and growth.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaGift size={48} />
                  </div>
                  <h4 className="service-title">Workplace Wellness Programs</h4>
                  <p className="service-description">
                    Workplace challenges can impact entire teams and organizations. Our workplace wellness programs aim 
                    to restore team harmony, rebuild workplace trust, and strengthen professional relationships.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaMobile size={48} />
                  </div>
                  <h4 className="service-title">Intensive Career Development Programs</h4>
                  <p className="service-description">
                    A structured and immersive program offering comprehensive career coaching in a supportive environment. 
                    Our intensive programs focus on career transformation and professional development.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaBook size={48} />
                  </div>
                  <h4 className="service-title">Public Health Education</h4>
                  <p className="service-description">
                    Evidence-based public health education is a proven methodology for improving workplace wellness and 
                    professional development. Our educators skillfully guide professionals through evidence-based techniques.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaTarget size={48} />
                  </div>
                  <h4 className="service-title">Community-Based Career Support</h4>
                  <p className="service-description">
                    Building professional networks can lead to profound career growth. Our community-based career support 
                    covers networking, mentorship, and professional development through community resources.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section-lonestar">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title-lonestar">Why Choose Saint Daniels Healthcare?</h2>
                <p className="why-choose-subtitle">
                  Sometimes, all it takes is the right guidance and support. Saint Daniels Healthcare takes a comprehensive 
                  approach to career development: professional growth, workplace wellness, and community resources in one 
                  inclusive coaching approach.
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <div className="why-choose-icon">
                    <FaTarget size={48} />
                  </div>
                  <h4 className="why-choose-title">Comprehensive Approach to Career Development</h4>
                  <p className="why-choose-description">
                    We firmly believe in supporting the whole professional: career goals, workplace wellness, and community 
                    connections. Our comprehensive approach gets to the root of career challenges and empowers professionals 
                    to achieve success and workplace well-being.
                  </p>
                  </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <div className="why-choose-icon">
                    <FaUsers size={48} />
                  </div>
                  <h4 className="why-choose-title">Professional and Confidential Coaching</h4>
                  <p className="why-choose-description">
                    We value the privacy and confidentiality of every professional. Our coaching environment is designed 
                    to provide a safe, confidential space where professionals can work on career development without 
                    bias or pressure from workplace politics.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <div className="why-choose-icon">
                    <FaTrophy size={48} />
                  </div>
                  <h4 className="why-choose-title">Certified Career Coaches</h4>
                  <p className="why-choose-description">
                    Our certified career coaches and workplace wellness specialists have specialized training and many years of 
                    experience, so that each coaching session is held with expertise and attention during the process.
                  </p>
                  </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <div className="why-choose-icon">
                    <FaDollarSign size={48} />
                  </div>
                  <h4 className="why-choose-title">Flexible Coaching Options</h4>
                  <p className="why-choose-description">
                    We know that career coaching can be an investment. Our team can help guide you through various coaching 
                    options, explaining what may be covered by employer benefits, while developing a coaching plan that 
                    works for your budget and schedule.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <div className="why-choose-icon">
                    <FaLightbulb size={48} />
                  </div>
                  <h4 className="why-choose-title">Personalized Career Development</h4>
                  <p className="why-choose-description">
                    Your career path is unique, and your coaching plan is designed with that in mind. 
                    Our personalized approach to career development ensures that every professional gets exactly what 
                    they need to succeed long-term.
                  </p>
                  </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <div className="why-choose-icon">
                    <FaBook size={48} />
                  </div>
                  <h4 className="why-choose-title">Public Health Education Resources</h4>
                  <p className="why-choose-description">
                    Public health education may have an important place in your career development and workplace wellness. 
                    Our educational resources can be integrated and monitored by our public health educators throughout 
                    the course of your professional development.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Premium Network Section */}
        <section className="premium-network-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="premium-cta-content">
                  <h2 className="premium-cta-title">Join Our Premium Network</h2>
                  <p className="premium-cta-description">
                    Connect with elite professionals, access exclusive resources, and accelerate your career development through our comprehensive coaching programs.
                  </p>
                  <div className="premium-cta-buttons">
                    <button className="btn-premium-primary" onClick={() => window.location.href = '/download'}>
                      Download App
                    </button>
                    <button className="btn-premium-secondary" onClick={() => window.location.href = '/learn-more'}>
                      Learn More
                    </button>
                  </div>
                </div>
              </Col>
              
              <Col lg={6}>
                <div className="network-cards-vertical">
                  <div className="network-card-horizontal">
                    <div className="network-card-content">
                      <div className="network-icon">
                        <FaUsers size={48} />
                      </div>
                      <div className="network-text">
                        <h4 className="network-title">Elite Professional Network</h4>
                        <p className="network-description">
                          Connect with top-tier professionals across various industries who have successfully advanced their careers through our programs.
                        </p>
                      </div>
                    </div>
                    <div className="network-cta">
                      <button className="btn-network-learn-more" onClick={() => window.location.href = '/learn-more'}>
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="network-card-horizontal">
                    <div className="network-card-content">
                      <div className="network-icon">
                        <FaTrophy size={48} />
                      </div>
                      <div className="network-text">
                        <h4 className="network-title">Success Stories</h4>
                        <p className="network-description">
                          Access to exclusive case studies and success stories from professionals who have achieved significant career milestones.
                        </p>
                      </div>
                    </div>
                    <div className="network-cta">
                      <button className="btn-network-learn-more" onClick={() => window.location.href = '/learn-more'}>
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="network-card-horizontal">
                    <div className="network-card-content">
                      <div className="network-icon">
                        <FaHandshake size={48} />
                      </div>
                      <div className="network-text">
                        <h4 className="network-title">Exclusive Events</h4>
                        <p className="network-description">
                          Invitation-only networking events, workshops, and masterclasses with industry leaders and career development experts.
                        </p>
                      </div>
                    </div>
                    <div className="network-cta">
                      <button className="btn-network-learn-more" onClick={() => window.location.href = '/learn-more'}>
                        Learn More
                      </button>
                    </div>
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