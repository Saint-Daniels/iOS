'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaApple, FaGooglePlay, FaDownload, FaMobile, FaDesktop, FaTablet } from 'react-icons/fa';
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
    },
    {
      platform: 'Web App',
      icon: <FaDesktop size={48} />,
      description: 'Access via web browser',
      buttonText: 'Open Web App',
      buttonClass: 'btn-web',
      link: '#'
    }
  ];

  const features = [
    {
      icon: <FaMobile size={32} />,
      title: 'Mobile Optimized',
      description: 'Seamless experience on all mobile devices'
    },
    {
      icon: <FaDownload size={32} />,
      title: 'Quick Download',
      description: 'Fast and secure app installation'
    },
    {
      icon: <FaTablet size={32} />,
      title: 'Tablet Support',
      description: 'Perfect for iPad and Android tablets'
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      <div className="download-page">
        {/* Hero Section */}
        <section className="download-hero">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="download-title">
                  <span className="royal-text">DOWNLOAD</span>
                  <br />
                  <span className="royal-text">SAINT DANIELS APP</span>
                </h1>
                <p className="download-subtitle">
                  Experience the full power of our royal healthcare platform with our mobile app. 
                  Access all features, earn rewards, and manage your health journey on the go.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

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
            
            <Row className="g-4">
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

        {/* Features Section */}
        <section className="download-features-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title">Why Download Our App?</h2>
                <p className="section-subtitle">
                  Unlock exclusive features and enhanced functionality
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              {features.map((feature, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="feature-card">
                    <div className="feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* App Preview Section */}
        <section className="app-preview-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="preview-content">
                  <h2 className="section-title">Experience the Royal Treatment</h2>
                  <p className="section-description">
                    Our mobile app brings the full Saint Daniels experience to your fingertips. 
                    Track your health journey, earn rewards, play games, and access your personalized 
                    For You feed wherever you go.
                  </p>
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

        {/* CTA Section */}
        <section className="download-cta-section">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h2 className="cta-title">Ready to Start Your Royal Journey?</h2>
                <p className="cta-subtitle">
                  Download the app now and join thousands of members earning rewards every day.
                </p>
                <div className="cta-buttons">
                  <Link href="/signup" className="btn-royal-gold">
                    Sign Up First
                  </Link>
                  <button className="btn-download-app">
                    Download Now
                  </button>
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
