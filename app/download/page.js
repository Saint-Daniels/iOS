'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import Link from 'next/link';

export default function DownloadPage() {
  const downloadOptions = [
    {
      platform: 'iOS',
      icon: <FaApple size={48} />,
      description: 'Download for iPhone and iPad',
      buttonText: 'Download on App Store',
      buttonClass: 'btn-ios',
      link: '#'
    },
    {
      platform: 'Android',
      icon: <FaGooglePlay size={48} />,
      description: 'Download for Android devices',
      buttonText: 'Get it on Google Play',
      buttonClass: 'btn-android',
      link: '#'
    }
  ];


  return (
    <PageTransition>
      <Navbar />
      <div className="download-page">

        {/* Download Options */}
        <section className="download-options-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title">Choose Your Platform</h2>
                <p className="section-subtitle">
                  Available on all major platforms for your convenience
                </p>
              </Col>
            </Row>
            
            <Row className="justify-content-center g-4">
              {downloadOptions.map((option, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card className="download-card">
                    <Card.Body className="text-center">
                      <div className="platform-icon mb-4">
                        {option.icon}
                      </div>
                      <h3 className="platform-title">{option.platform}</h3>
                      <p className="platform-description">{option.description}</p>
                      <button className={`btn-download ${option.buttonClass}`}>
                        {option.buttonText}
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>


        {/* App Features Section */}
        <section className="app-features-immersive">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="features-title">Experience the Royal Treatment</h2>
                <p className="features-subtitle">
                  Our mobile app brings the full Saint Daniels experience to your fingertips. 
                  Track your health journey, earn rewards, play games, and access your personalized 
                  For You feed wherever you go.
                </p>
              </Col>
            </Row>
            
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="preview-content">
                  <div className="app-features">
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Watch ads and take surveys to earn money</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Play engaging games and compete with others</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Access your personalized For You feed</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Track your health and wellness progress</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="preview-visual">
                  <div className="phone-mockup">
                    <div className="phone-screen">
                      <div className="app-interface">
                        <div className="app-header">Saint Daniels</div>
                        <div className="app-content">
                          <div className="app-section">Premium Rewards</div>
                          <div className="app-section">Games</div>
                          <div className="app-section">For You Feed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Social Network Integration Section */}
        <section className="premium-feature-fullscreen immersive-section social-network-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="feature-visual">
                  <div className="3d-icon-container">
                    <div className="network-icon-3d">
                      <div className="icon-base">
                        <div className="connection-lines">
                          <div className="line line-1"></div>
                          <div className="line line-2"></div>
                          <div className="line line-3"></div>
                        </div>
                        <div className="network-nodes">
                          <div className="node node-1"></div>
                          <div className="node node-2"></div>
                          <div className="node node-3"></div>
                          <div className="node node-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="feature-content">
                  <div className="feature-header">
                    <div className="feature-icon-immersive">
                      <span className="check-3d">✓</span>
                    </div>
                    <h2 className="feature-title-immersive">Social Network Integration</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Connect your social media accounts to build professional relationships and expand your career network. 
                    Share your achievements, connect with industry professionals, and showcase your professional journey 
                    through integrated social platforms. This feature helps you maintain professional connections while 
                    building your personal brand in the healthcare industry.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🌐</div>
                      <span>Professional networking with industry peers</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🏆</div>
                      <span>Showcase your career achievements and milestones</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">👥</div>
                      <span>Connect with mentors and career coaches</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">⭐</div>
                      <span>Build your professional brand and reputation</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Interactive Learning & Development Section */}
        <section className="premium-feature-fullscreen immersive-section learning-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="feature-content">
                  <div className="feature-header">
                    <div className="feature-icon-immersive">
                      <span className="check-3d">✓</span>
                    </div>
                    <h2 className="feature-title-immersive">Interactive Learning & Development</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Engage with interactive learning modules designed to enhance your professional skills and career development. 
                    Track your progress through various educational games and assessments that help you master new healthcare concepts, 
                    improve your communication skills, and stay current with industry best practices. Compete with other professionals 
                    in friendly learning competitions while earning certifications and continuing education credits.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">📚</div>
                      <span>Interactive learning modules for skill development</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">📊</div>
                      <span>Progress tracking and achievement milestones</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🎓</div>
                      <span>Continuing education credits and certifications</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🔍</div>
                      <span>Professional skill assessments and feedback</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="feature-visual">
                  <div className="3d-icon-container">
                    <div className="learning-icon-3d">
                      <div className="icon-base">
                        <div className="book-stack">
                          <div className="book book-1"></div>
                          <div className="book book-2"></div>
                          <div className="book book-3"></div>
                        </div>
                        <div className="progress-ring">
                          <div className="ring ring-1"></div>
                          <div className="ring ring-2"></div>
                        </div>
                        <div className="certificate-badge">
                          <div className="badge-shine"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Professional Development Calendar Section */}
        <section className="premium-feature-fullscreen immersive-section calendar-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="feature-visual">
                  <div className="3d-icon-container">
                    <div className="calendar-icon-3d">
                      <div className="icon-base">
                        <div className="calendar-frame">
                          <div className="calendar-header"></div>
                          <div className="calendar-grid">
                            <div className="day-cell"></div>
                            <div className="day-cell"></div>
                            <div className="day-cell"></div>
                            <div className="day-cell event-day"></div>
                          </div>
                        </div>
                        <div className="progress-bars">
                          <div className="progress-bar bar-1"></div>
                          <div className="progress-bar bar-2"></div>
                          <div className="progress-bar bar-3"></div>
                        </div>
                        <div className="notification-badge">
                          <div className="notification-dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="feature-content">
                  <div className="feature-header">
                    <div className="feature-icon-immersive">
                      <span className="check-3d">✓</span>
                    </div>
                    <h2 className="feature-title-immersive">Professional Development Calendar</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Manage your professional development journey with our comprehensive calendar system that tracks your continuing education, 
                    training sessions, certification deadlines, and career milestones. Stay organized with automated reminders for important 
                    professional events, conference attendance, and skill development opportunities. Monitor your progress over time and 
                    ensure you're meeting your professional goals with detailed analytics and reporting features.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">📅</div>
                      <span>Track continuing education and training sessions</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">⏰</div>
                      <span>Automated reminders for certification deadlines</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">📈</div>
                      <span>Monitor professional development progress</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">📊</div>
                      <span>Detailed analytics and progress reporting</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Professional Profile Management Section */}
        <section className="premium-feature-fullscreen immersive-section profile-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="feature-content">
                  <div className="feature-header">
                    <div className="feature-icon-immersive">
                      <span className="check-3d">✓</span>
                    </div>
                    <h2 className="feature-title-immersive">Professional Profile Management</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Maintain a comprehensive digital portfolio that showcases your professional achievements, certifications, 
                    continuing education credits, and career milestones. Your secure profile cloud serves as a centralized hub 
                    for all your professional documentation, making it easy to share your credentials with employers, colleagues, 
                    and professional organizations. Keep your professional information organized and up-to-date with automated 
                    reminders and easy-to-use management tools.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">💼</div>
                      <span>Centralized storage for all professional documents</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🏆</div>
                      <span>Showcase achievements and certifications</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🔒</div>
                      <span>Secure sharing with employers and colleagues</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🔄</div>
                      <span>Automated updates and maintenance reminders</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="feature-visual">
                  <div className="3d-icon-container">
                    <div className="profile-icon-3d">
                      <div className="icon-base">
                        <div className="profile-card">
                          <div className="card-header"></div>
                          <div className="card-content">
                            <div className="profile-avatar"></div>
                            <div className="info-lines">
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                            </div>
                          </div>
                        </div>
                        <div className="cloud-storage">
                          <div className="cloud-icon"></div>
                          <div className="data-points">
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                          </div>
                        </div>
                        <div className="security-badge">
                          <div className="shield-icon"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Personalized Career Consultation Section */}
        <section className="premium-feature-fullscreen immersive-section consultation-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="feature-visual">
                  <div className="3d-icon-container">
                    <div className="consultation-icon-3d">
                      <div className="icon-base">
                        <div className="consultation-room">
                          <div className="desk"></div>
                          <div className="chairs">
                            <div className="chair chair-1"></div>
                            <div className="chair chair-2"></div>
                          </div>
                        </div>
                        <div className="strategy-documents">
                          <div className="document doc-1"></div>
                          <div className="document doc-2"></div>
                          <div className="document doc-3"></div>
                        </div>
                        <div className="growth-chart">
                          <div className="chart-line"></div>
                          <div className="chart-points">
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="feature-content">
                  <div className="feature-header">
                    <div className="feature-icon-immersive">
                      <span className="check-3d">✓</span>
                    </div>
                    <h2 className="feature-title-immersive">Personalized Career Consultation</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Work with certified career coaches who specialize in healthcare professional development to create a personalized 
                    career advancement strategy. Our experienced consultants provide one-on-one guidance for career transitions, 
                    salary negotiations, leadership development, and professional growth opportunities. Receive tailored advice 
                    based on your unique background, goals, and the current healthcare job market to maximize your career potential.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">👨‍💼</div>
                      <span>One-on-one sessions with certified career coaches</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🎯</div>
                      <span>Personalized career advancement strategies</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🚀</div>
                      <span>Guidance for career transitions and leadership development</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">📈</div>
                      <span>Industry-specific advice and market insights</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Resume Optimization & Career Placement Section */}
        <section className="premium-feature-fullscreen immersive-section resume-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="feature-content">
                  <div className="feature-header">
                    <div className="feature-icon-immersive">
                      <span className="check-3d">✓</span>
                    </div>
                    <h2 className="feature-title-immersive">Resume Optimization & Career Placement</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Get professional resume writing and optimization services tailored to the healthcare industry. Our expert team 
                    helps you create compelling resumes, cover letters, and LinkedIn profiles that stand out to employers. We also 
                    provide career placement assistance, connecting you with local healthcare opportunities based on your location, 
                    experience level, and career preferences. Our comprehensive job search support includes interview preparation, 
                    salary negotiation guidance, and networking opportunities in your area.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">📝</div>
                      <span>Professional resume writing and optimization</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">📍</div>
                      <span>Local job placement assistance and networking</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">💬</div>
                      <span>Interview preparation and salary negotiation guidance</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">🔍</div>
                      <span>Industry-specific job search strategies</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="feature-visual">
                  <div className="3d-icon-container">
                    <div className="resume-icon-3d">
                      <div className="icon-base">
                        <div className="resume-document">
                          <div className="document-header"></div>
                          <div className="document-content">
                            <div className="content-line"></div>
                            <div className="content-line"></div>
                            <div className="content-line"></div>
                            <div className="content-line"></div>
                          </div>
                        </div>
                        <div className="job-search-elements">
                          <div className="search-icon"></div>
                          <div className="location-pin"></div>
                          <div className="connection-lines">
                            <div className="line"></div>
                            <div className="line"></div>
                          </div>
                        </div>
                        <div className="success-badge">
                          <div className="checkmark"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      </div>
      <Footer />
    </PageTransition>
  );
}

