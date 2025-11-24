'use client';

import { Container, Row, Col } from 'react-bootstrap';
import {
  FaDollarSign,
  FaGift,
  FaChartLine,
  FaShieldAlt,
  FaMobile,
  FaHeartbeat,
  FaBolt,
  FaKey,
  FaBuilding,
  FaUsers,
  FaClipboardCheck,
  FaLeaf,
} from 'react-icons/fa';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BootstrapClient from '../components/BootstrapClient';

export default function LearnMore() {
  return (
    <>
      <Header />

      <section className="learn-more-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="hero-image">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                  alt="Member reviewing healthcare rewards"
                  className="img-fluid rounded"
                  width={600}
                  height={450}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-content">
                <h1 className="learn-more-title">Understand Your Healthcare Rewards</h1>
                <p className="learn-more-description">
                  Saint Daniels Healthcare Rewards turns privacy-safe ad attention into a private subsidy that you control.
                  Earn dollars, spend them instantly at the pharmacy, or let unused balances compound inside our rewards
                  vault so the value of your care budget keeps growing.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <FaDollarSign className="stat-icon" />
                    <span className="stat-number">$240</span>
                    <span className="stat-label">Avg. annual subsidy</span>
                  </div>
                  <div className="stat-item">
                    <FaChartLine className="stat-icon" />
                    <span className="stat-number">18%</span>
                    <span className="stat-label">Compound rate</span>
                  </div>
                  <div className="stat-item">
                    <FaGift className="stat-icon" />
                    <span className="stat-number">1.2M</span>
                    <span className="stat-label">Eligible pharmacy SKUs</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="what-we-offer-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">How the Private Subsidy Works</h2>
              <p className="section-subtitle">
                Every reward travels through a transparent pipeline so you always know who funded it and how it can be spent.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaBolt size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Opt In</h3>
                <p className="offer-description">
                  Choose sponsored health stories that match your conditions. Advertisers deposit real dollars into escrow the
                  moment you complete an activity.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Verified brands</span>
                  <span className="feature-tag">Frequency caps</span>
                  <span className="feature-tag">Full transparency</span>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaMobile size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Unlock</h3>
                <p className="offer-description">
                  Rewards hit your private subsidy wallet instantly. Show your virtual card at checkout and we settle funds
                  with the pharmacy on the spot.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Instant disbursement</span>
                  <span className="feature-tag">OTC + Rx eligible</span>
                  <span className="feature-tag">Same-day settlement</span>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaChartLine size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Grow</h3>
                <p className="offer-description">
                  Skip a purchase and your unspent balance compounds daily inside our healthcare treasury, giving you more
                  leverage for future care.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Daily interest</span>
                  <span className="feature-tag">Goal-based vaults</span>
                  <span className="feature-tag">Live projections</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="benefits-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Where You Can Spend Rewards</h2>
              <p className="section-subtitle">
                Thousands of independent and national pharmacies access our settlement ledger every day.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="benefit-card enhanced-benefit">
                <div className="benefit-visual">
                  <div className="benefit-icon-wrapper">
                    <FaShieldAlt className="benefit-icon" />
                    <div className="icon-background"></div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Pharmacy-first Checkout</h4>
                  <p className="benefit-description">
                    Show your virtual card, let the pharmacist process it, and watch the private subsidy cover prescriptions, OTC kits,
                    and preventative devices in seconds.
                  </p>
                  <div className="benefit-highlights">
                    <span className="highlight-item dark-green-highlight">Tap-to-pay wallet</span>
                    <span className="highlight-item dark-green-highlight">Benefit stacking</span>
                    <span className="highlight-item dark-green-highlight">Instant receipts</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="benefit-card enhanced-benefit">
                <div className="benefit-visual">
                  <div className="benefit-icon-wrapper">
                    <FaBuilding className="benefit-icon" />
                    <div className="icon-background"></div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Network Visibility</h4>
                  <p className="benefit-description">
                    Every receipt shows which advertiser funded the purchase and how much compound interest you preserved by
                    leaving part of the subsidy untouched.
                  </p>
                  <div className="benefit-highlights">
                    <span className="highlight-item dark-green-highlight">Brand transparency</span>
                    <span className="highlight-item dark-green-highlight">Care item catalog</span>
                    <span className="highlight-item dark-green-highlight">Audit-ready logs</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="service-fullpage-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Compound Growth Vaults</h2>
              <p className="section-subtitle">
                Pick the strategy that matches your refill schedule and risk tolerance.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaHeartbeat size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Essentials Track</h3>
                <p className="offer-description">
                  Short-term growth tuned for weekly OTC trips, vitamins, and wellness kits.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Low volatility</span>
                  <span className="feature-tag">Weekly payouts</span>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaLeaf size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Maintenance Track</h3>
                <p className="offer-description">
                  Medium-term compounding aligned with 30/60/90-day prescription cycles.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Auto rebalancing</span>
                  <span className="feature-tag">Schedule reminders</span>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="offer-card enhanced-card">
                <div className="offer-icon-wrapper">
                  <div className="offer-icon">
                    <FaKey size={48} />
                  </div>
                  <div className="icon-bg"></div>
                </div>
                <h3 className="offer-title">Future Care Track</h3>
                <p className="offer-description">
                  Higher-yield strategy for elective procedures or emergency cushions.
                </p>
                <div className="offer-features">
                  <span className="feature-tag">Projected growth</span>
                  <span className="feature-tag">Goal locking</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section enhanced-cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <div className="cta-content">
                <div className="cta-icon">
                  <FaClipboardCheck size={60} />
                </div>
                <h2 className="cta-title">Activate Your Subsidy</h2>
                <p className="cta-description">
                  Submit the rewards application, verify your pharmacy, and start turning ad attention into real healthcare
                  dollars that either pay for today or grow for tomorrow.
                </p>
                <div className="cta-stats">
                  <div className="cta-stat">
                    <FaUsers className="cta-stat-icon" />
                    <span className="cta-stat-text">Trusted by members nationwide</span>
                  </div>
                  <div className="cta-stat">
                    <FaDollarSign className="cta-stat-icon" />
                    <span className="cta-stat-text">Subsidy arrives in minutes</span>
                  </div>
                  <div className="cta-stat">
                    <FaChartLine className="cta-stat-icon" />
                    <span className="cta-stat-text">Track compound growth live</span>
                  </div>
                </div>
                <div className="cta-buttons">
                  <button className="btn-primary enhanced-btn" onClick={() => (window.location.href = '/application')}>
                    Start Application
                  </button>
                  <button className="btn-secondary enhanced-btn" onClick={() => (window.location.href = '/download')}>
                    Download the App
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
