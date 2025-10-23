'use client';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaDollarSign, FaClipboardList, FaBullseye, FaGamepad, FaTrophy, FaGift, FaBook, FaLightbulb, FaBullseye as FaTarget, FaMobile, FaGamepad as FaGames, FaListUl, FaHandshake, FaUsers, FaBookOpen, FaChartLine, FaHeart, FaRocket, FaUserTie } from 'react-icons/fa';
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
                        <FaUserTie className="highlight-icon" />
                      </div>
                      <div className="highlight-content">
                        <h4>Personalized Development</h4>
                        <p>Tailored coaching programs designed for your unique career goals and professional aspirations.</p>
                      </div>
                    </div>
                    
                    <div className="highlight-card">
                      <div className="highlight-icon-wrapper">
                        <FaHandshake className="highlight-icon" />
                      </div>
                      <div className="highlight-content">
                        <h4>Community Support</h4>
                        <p>Access to a network of professionals and resources that enhance your career development journey.</p>
                      </div>
                    </div>
                    
                    <div className="highlight-card">
                      <div className="highlight-icon-wrapper">
                        <FaRocket className="highlight-icon" />
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
                  <h2 className="section-title-professional">Who We Are</h2>
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

        {/* Career Development Workshops Section */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <div className="service-icon-large">
                    <FaGamepad size={80} />
                  </div>
                  <h2 className="service-title-large">Career Development Workshops</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>
            
            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Career development workshop session"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Connect with Other Professionals</h3>
                  <p className="service-description-large">
                    Connect with other professionals and draw support from similar career journeys. Our career development 
                    workshops allow experiences to be exchanged in a collaborative learning environment.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaUsers className="feature-icon" />
                      <span>Peer Learning & Networking</span>
                    </div>
                    <div className="feature-item">
                      <FaBookOpen className="feature-icon" />
                      <span>Interactive Skill Building</span>
                    </div>
                    <div className="feature-item">
                      <FaHandshake className="feature-icon" />
                      <span>Collaborative Problem Solving</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4}>
                <div className="workshop-card">
                  <h4>Leadership Development</h4>
                  <p>Build essential leadership skills through hands-on exercises and real-world case studies.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="workshop-card">
                  <h4>Communication Excellence</h4>
                  <p>Master professional communication techniques for presentations, negotiations, and team collaboration.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="workshop-card">
                  <h4>Strategic Planning</h4>
                  <p>Learn to develop and execute strategic career plans with measurable outcomes and milestones.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* One-on-One Career Coaching Section */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <div className="service-icon-large">
                    <FaClipboardList size={80} />
                  </div>
                  <h2 className="service-title-large">One-on-One Career Coaching</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>
            
            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Personalized Career Coaching Sessions</h3>
                  <p className="service-description-large">
                    Personalized career coaching sessions tailored to your unique professional challenges and goals. Our certified 
                    career coaches provide a confidential, supportive space for career reflection, development, and growth.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaTarget className="feature-icon" />
                      <span>Goal Setting & Planning</span>
                    </div>
                    <div className="feature-item">
                      <FaLightbulb className="feature-icon" />
                      <span>Personalized Strategies</span>
                    </div>
                    <div className="feature-item">
                      <FaChartLine className="feature-icon" />
                      <span>Progress Tracking</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="One-on-one career coaching session"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4}>
                <div className="coaching-card">
                  <h4>Career Assessment</h4>
                  <p>Comprehensive evaluation of your skills, interests, and career aspirations to identify optimal career paths.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="coaching-card">
                  <h4>Resume & Interview Prep</h4>
                  <p>Professional guidance on resume optimization, interview techniques, and job search strategies.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="coaching-card">
                  <h4>Executive Coaching</h4>
                  <p>Advanced coaching for senior professionals focusing on leadership development and organizational impact.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Workplace Wellness Programs Section */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <div className="service-icon-large">
                    <FaGift size={80} />
                  </div>
                  <h2 className="service-title-large">Workplace Wellness Programs</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>
            
            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Workplace wellness team meeting"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Restore Team Harmony</h3>
                  <p className="service-description-large">
                    Workplace challenges can impact entire teams and organizations. Our workplace wellness programs aim 
                    to restore team harmony, rebuild workplace trust, and strengthen professional relationships.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaUsers className="feature-icon" />
                      <span>Team Building Activities</span>
                    </div>
                    <div className="feature-item">
                      <FaHandshake className="feature-icon" />
                      <span>Conflict Resolution</span>
                    </div>
                    <div className="feature-item">
                      <FaHeart className="feature-icon" />
                      <span>Stress Management</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4}>
                <div className="wellness-card">
                  <h4>Stress Reduction</h4>
                  <p>Evidence-based techniques for managing workplace stress and building resilience in high-pressure environments.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="wellness-card">
                  <h4>Team Dynamics</h4>
                  <p>Improve communication, collaboration, and trust within teams to enhance productivity and job satisfaction.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="wellness-card">
                  <h4>Work-Life Balance</h4>
                  <p>Strategies for maintaining healthy boundaries between work and personal life for long-term career sustainability.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Intensive Career Development Programs Section */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <div className="service-icon-large">
                    <FaMobile size={80} />
                  </div>
                  <h2 className="service-title-large">Intensive Career Development Programs</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>
            
            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Structured and Immersive Programs</h3>
                  <p className="service-description-large">
                    A structured and immersive program offering comprehensive career coaching in a supportive environment. 
                    Our intensive programs focus on career transformation and professional development.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaTrophy className="feature-icon" />
                      <span>Career Transformation</span>
                    </div>
                    <div className="feature-item">
                      <FaRocket className="feature-icon" />
                      <span>Accelerated Growth</span>
                    </div>
                    <div className="feature-item">
                      <FaChartLine className="feature-icon" />
                      <span>Measurable Results</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Intensive career development program"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4}>
                <div className="intensive-card">
                  <h4>Executive Leadership Program</h4>
                  <p>Comprehensive leadership development for senior professionals seeking to enhance their executive presence and strategic thinking.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="intensive-card">
                  <h4>Career Transition Program</h4>
                  <p>Structured support for professionals making significant career changes or industry transitions.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="intensive-card">
                  <h4>Entrepreneurship Bootcamp</h4>
                  <p>Intensive program for professionals launching their own businesses or consulting practices.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Public Health Education Section */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <div className="service-icon-large">
                    <FaBook size={80} />
                  </div>
                  <h2 className="service-title-large">Public Health Education</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>
            
            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Public health education session"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Evidence-Based Education</h3>
                  <p className="service-description-large">
                    Evidence-based public health education is a proven methodology for improving workplace wellness and 
                    professional development. Our educators skillfully guide professionals through evidence-based techniques.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaBookOpen className="feature-icon" />
                      <span>Research-Based Methods</span>
                    </div>
                    <div className="feature-item">
                      <FaLightbulb className="feature-icon" />
                      <span>Practical Applications</span>
                    </div>
                    <div className="feature-item">
                      <FaChartLine className="feature-icon" />
                      <span>Measurable Outcomes</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4}>
                <div className="education-card">
                  <h4>Health Promotion</h4>
                  <p>Learn to design and implement effective health promotion programs in workplace settings.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="education-card">
                  <h4>Disease Prevention</h4>
                  <p>Understand evidence-based strategies for preventing workplace-related health issues and promoting wellness.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="education-card">
                  <h4>Health Policy</h4>
                  <p>Navigate healthcare policy and regulations to create healthier workplace environments.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Community-Based Career Support Section */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <div className="service-icon-large">
                    <FaTarget size={80} />
                  </div>
                  <h2 className="service-title-large">Community-Based Career Support</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>
            
            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Building Professional Networks</h3>
                  <p className="service-description-large">
                    Building professional networks can lead to profound career growth. Our community-based career support 
                    covers networking, mentorship, and professional development through community resources.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaUsers className="feature-icon" />
                      <span>Professional Networking</span>
                    </div>
                    <div className="feature-item">
                      <FaHandshake className="feature-icon" />
                      <span>Mentorship Programs</span>
                    </div>
                    <div className="feature-item">
                      <FaBookOpen className="feature-icon" />
                      <span>Community Resources</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Community networking event"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4}>
                <div className="community-card">
                  <h4>Networking Events</h4>
                  <p>Regular networking events and meetups to connect with like-minded professionals in your industry.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="community-card">
                  <h4>Mentorship Matching</h4>
                  <p>Connect with experienced professionals who can guide your career development and provide industry insights.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="community-card">
                  <h4>Resource Library</h4>
                  <p>Access to comprehensive career development resources, templates, and tools shared by the community.</p>
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