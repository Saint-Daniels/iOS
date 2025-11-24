'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaApple,
  FaGooglePlay,
  FaHospital,
  FaCreditCard,
  FaMobileAlt,
  FaSearch,
  FaChartLine,
  FaDollarSign,
  FaSync,
  FaChartBar,
  FaCalendarAlt,
  FaClock,
  FaBriefcase,
  FaTrophy,
  FaLock,
  FaUserTie,
  FaBullseye,
  FaRocket,
  FaFileAlt,
  FaMapMarkerAlt,
  FaComments,
} from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import Link from 'next/link';

export default function DownloadPage() {
  const downloadOptions = [
    {
      platform: 'iOS',
      icon: <FaApple size={48} />,
      description: 'Optimized for iPhone and iPad with Face ID ready checkout.',
      buttonText: 'Download on App Store',
      buttonClass: 'btn-ios',
      link: '#'
    },
    {
      platform: 'Android',
      icon: <FaGooglePlay size={48} />,
      description: 'Runs on every modern Android device with secure biometrics.',
      buttonText: 'Download from Google Play',
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
                <h2 className="features-title">Unlock Your Healthcare Rewards</h2>
                <p className="features-subtitle">
                  The Saint Daniels app is the secure gateway to earning brand-funded healthcare rewards, redeeming them in
                  pharmacies, and letting unused balances compound through the network treasury. Install it to manage
                  wallets, verify pharmacies, and authorize payments with confidence.
                </p>
              </Col>
            </Row>
            
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="preview-content">
                  <div className="app-features">
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Opt into sponsored health moments to earn private subsidies</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Unlock rewards instantly in your secure wallet</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Spend at pharmacies with tap-to-pay virtual cards</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Let unused balances compound daily in network vaults</span>
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
                          <div className="app-section">Rewards Wallet</div>
                          <div className="app-section">Pharmacy Network</div>
                          <div className="app-section">Compound Vaults</div>
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
                    <h2 className="feature-title-immersive">Pharmacy Network Integration</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Connect with thousands of independent and national pharmacies that settle subsidies through our ledger every day.
                    Show your virtual card at checkout, let the pharmacist process it, and watch your private subsidy cover prescriptions,
                    OTC kits, and preventative devices in seconds. Every receipt shows which advertiser funded the purchase.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaHospital size={24} />
                      </div>
                      <span>Tap-to-pay wallet at partner pharmacies</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaCreditCard size={24} />
                      </div>
                      <span>Benefit stacking with FSA/HSA cards</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaMobileAlt size={24} />
                      </div>
                      <span>Real-time settlement and receipts</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaSearch size={24} />
                      </div>
                      <span>Transparent brand funding visibility</span>
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
                    <h2 className="feature-title-immersive">Compound Growth Vaults</h2>
                  </div>
                  <p className="feature-description-immersive">
                    When you let rewards sit, they join a diversified healthcare treasury that produces daily compound interest.
                    Choose conservative, balanced, or accelerator tracks depending on how soon you plan to spend at the
                    pharmacy. The dashboard shows projected growth so you can schedule refills with confidence.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaChartLine size={24} />
                      </div>
                      <span>Goal-based vaults for different care needs</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaDollarSign size={24} />
                      </div>
                      <span>Transparent yield engine with daily statements</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaSync size={24} />
                      </div>
                      <span>Automated rebalancing across tracks</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaChartBar size={24} />
                      </div>
                      <span>Live projections for future care planning</span>
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
                    <h2 className="feature-title-immersive">Reward Activity Calendar</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Track your subsidy earnings, pharmacy redemptions, and compound interest accrual with our comprehensive
                    calendar system. Stay organized with automated reminders for refill schedules, vault rebalancing,
                    and new advertiser opportunities. Monitor your healthcare budget over time and ensure you're maximizing
                    your rewards potential with detailed analytics and reporting features.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaCalendarAlt size={24} />
                      </div>
                      <span>Track subsidy earnings and redemptions</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaClock size={24} />
                      </div>
                      <span>Automated reminders for refill schedules</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaChartLine size={24} />
                      </div>
                      <span>Monitor compound growth progress</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaChartBar size={24} />
                      </div>
                      <span>Detailed analytics and budget reporting</span>
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
                    <h2 className="feature-title-immersive">Secure Wallet Management</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Maintain a comprehensive digital wallet that tracks your private subsidies, pharmacy redemptions,
                    and compound interest earnings. Your secure wallet serves as a centralized hub for all your reward
                    documentation, making it easy to verify transactions, share receipts with tax preparers, and keep
                    your healthcare budget organized. Keep your reward information secure and up-to-date with encrypted
                    storage and easy-to-use management tools.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaBriefcase size={24} />
                      </div>
                      <span>Centralized storage for all reward transactions</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaTrophy size={24} />
                      </div>
                      <span>Showcase subsidy earnings and growth</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaLock size={24} />
                      </div>
                      <span>Secure sharing with tax preparers and advisors</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaSync size={24} />
                      </div>
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
                    <h2 className="feature-title-immersive">Personalized Reward Coaching</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Work with reward specialists who understand the healthcare subsidy marketplace to create a personalized
                    strategy for maximizing your earnings and compound growth. Our experienced consultants provide one-on-one
                    guidance for timing redemptions, optimizing vault allocations, and identifying high-value advertiser
                    opportunities. Receive tailored advice based on your unique care needs, pharmacy preferences, and
                    long-term wellness goals to maximize your subsidy potential.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaUserTie size={24} />
                      </div>
                      <span>One-on-one sessions with reward specialists</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaBullseye size={24} />
                      </div>
                      <span>Personalized subsidy maximization strategies</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaRocket size={24} />
                      </div>
                      <span>Guidance for vault optimization and timing</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaChartLine size={24} />
                      </div>
                      <span>Market-specific advice and advertiser insights</span>
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
                    <h2 className="feature-title-immersive">Pharmacy Network & Redemption Support</h2>
                  </div>
                  <p className="feature-description-immersive">
                    Get professional assistance connecting with partner pharmacies and optimizing your redemption strategy.
                    Our expert team helps you identify the best pharmacies for your location, understand benefit stacking
                    opportunities, and troubleshoot any settlement issues. We also provide comprehensive support for
                    understanding compound interest calculations, vault selection guidance, and maximizing your long-term
                    care budget through strategic reward management.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaFileAlt size={24} />
                      </div>
                      <span>Pharmacy network navigation and selection</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaMapMarkerAlt size={24} />
                      </div>
                      <span>Local pharmacy recommendations and verification</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaComments size={24} />
                      </div>
                      <span>Redemption troubleshooting and support</span>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon-3d">
                        <FaSearch size={24} />
                      </div>
                      <span>Compound interest and vault optimization strategies</span>
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
