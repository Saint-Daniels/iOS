'use client';

import { Container, Row, Col } from 'react-bootstrap';
import {
  FaDollarSign,
  FaClipboardList,
  FaBullseye,
  FaTrophy,
  FaGift,
  FaLightbulb,
  FaMobile,
  FaListUl,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaHeart,
  FaHeartbeat,
  FaBookOpen,
  FaShieldAlt,
  FaLock,
  FaEye,
  FaBolt,
  FaKey,
  FaBuilding,
  FaClipboardCheck,
  FaLeaf,
  FaArrowRight,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn, ScrollSlideIn } from '../../components/ScrollAnimation';

export default function LearnMore() {

  return (
    <PageTransition>
      <Navbar />
      <div className="learn-more-page" style={{ background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)', color: '#2c3e50' }}>
        {/* Hero Section */}
        <section className="learn-more-hero" style={{ 
          background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)',
          padding: '100px 0',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollFadeIn>
                  <h1 style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: '700', 
                    color: '#2c3e50',
                    marginBottom: '2rem'
                  }}>
                    How the Private Subsidy Works
                  </h1>
                  <p style={{ 
                    fontSize: '1.25rem', 
                    lineHeight: '1.8', 
                    color: '#6c757d',
                    marginBottom: '2rem'
                  }}>
                    Every reward travels through a transparent pipeline so you always know who funded it and how it can be spent.
                  </p>
                </ScrollFadeIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ 
                    borderRadius: '20px', 
                    padding: '3rem',
                    background: 'white',
                    border: '2px solid rgba(44, 62, 80, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                      {/* Transaction Flow Visualization */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '1.5rem',
                          background: 'rgba(0, 123, 255, 0.1)',
                          borderRadius: '15px',
                          border: '2px solid rgba(0, 123, 255, 0.3)'
                        }}>
                          <FaBolt style={{ fontSize: '2rem', color: '#007bff', marginBottom: '0.5rem' }} />
                          <div style={{ color: '#007bff', fontWeight: 'bold', fontSize: '1.1rem' }}>Advertiser</div>
                        </div>
                        <FaArrowRight style={{ fontSize: '1.5rem', color: '#6c757d' }} />
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '1.5rem',
                          background: 'rgba(0, 123, 255, 0.1)',
                          borderRadius: '15px',
                          border: '2px solid rgba(0, 123, 255, 0.3)'
                        }}>
                          <FaShieldAlt style={{ fontSize: '2rem', color: '#007bff', marginBottom: '0.5rem' }} />
                          <div style={{ color: '#007bff', fontWeight: 'bold', fontSize: '1.1rem' }}>Escrow</div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '1.5rem',
                          background: 'rgba(0, 123, 255, 0.1)',
                          borderRadius: '15px',
                          border: '2px solid rgba(0, 123, 255, 0.3)'
                        }}>
                          <FaMobile style={{ fontSize: '2rem', color: '#007bff', marginBottom: '0.5rem' }} />
                          <div style={{ color: '#007bff', fontWeight: 'bold', fontSize: '1.1rem' }}>Wallet</div>
                        </div>
                        <FaArrowRight style={{ fontSize: '1.5rem', color: '#6c757d' }} />
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '1.5rem',
                          background: 'rgba(0, 123, 255, 0.1)',
                          borderRadius: '15px',
                          border: '2px solid rgba(0, 123, 255, 0.3)'
                        }}>
                          <FaBuilding style={{ fontSize: '2rem', color: '#007bff', marginBottom: '0.5rem' }} />
                          <div style={{ color: '#007bff', fontWeight: 'bold', fontSize: '1.1rem' }}>Pharmacy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Opt In, Unlock, Grow Section */}
        <section style={{ 
          padding: '100px 0',
          background: 'white'
        }}>
          <Container>
            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <div style={{
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 123, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '2rem',
                      fontSize: '2.5rem',
                      color: 'white'
                    }}>
                      <FaBolt />
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>Opt In</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                      Choose sponsored health stories that match your conditions. Advertisers deposit real dollars into escrow the moment you complete an activity.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Verified brands</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Frequency caps</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Full transparency</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>

              <Col lg={4}>
                <ScrollFadeIn delay={0.2}>
                  <div style={{
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 123, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '2rem',
                      fontSize: '2.5rem',
                      color: 'white'
                    }}>
                      <FaMobile />
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>Unlock</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                      Rewards hit your private subsidy wallet instantly. Show your virtual card at checkout and we settle funds with the pharmacy on the spot.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Instant disbursement</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>OTC + Rx eligible</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Same-day settlement</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>

              <Col lg={4}>
                <ScrollFadeIn delay={0.3}>
                  <div style={{
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 123, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '2rem',
                      fontSize: '2.5rem',
                      color: 'white'
                    }}>
                      <FaChartLine />
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>Grow</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                      Skip a purchase and your unspent balance compounds daily inside our healthcare treasury, giving you more leverage for future care.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Daily interest</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Goal-based vaults</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Live projections</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Where You Can Spend Rewards */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    color: '#2c3e50'
                  }}>
                    Where You Can Spend Rewards
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
                    Thousands of independent and national pharmacies access our settlement ledger every day.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div style={{
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      <FaShieldAlt />
                    </div>
                    <h4 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#2c3e50' }}>Pharmacy-first Checkout</h4>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '1.5rem' }}>
                      Show your virtual card, let the pharmacist process it, and watch the private subsidy cover prescriptions, OTC kits, and preventative devices in seconds.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Tap-to-pay wallet</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Benefit stacking</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Instant receipts</span>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      <FaBuilding />
                    </div>
                    <h4 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#2c3e50' }}>Network Visibility</h4>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '1.5rem' }}>
                      Every receipt shows which advertiser funded the purchase and how much compound interest you preserved by leaving part of the subsidy untouched.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Brand transparency</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Care item catalog</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Audit-ready logs</span>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Compound Growth Vaults */}
        <section style={{ 
          padding: '100px 0',
          background: 'white'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    color: '#2c3e50'
                  }}>
                    Compound Growth Vaults
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
                    Pick the strategy that matches your refill schedule and risk tolerance.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <div style={{
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    height: '100%',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      <FaHeartbeat />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#2c3e50' }}>Essentials Track</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '1.5rem' }}>
                      Short-term growth tuned for weekly OTC trips, vitamins, and wellness kits.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Low volatility</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Weekly payouts</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.2}>
                  <div style={{
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    height: '100%',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      <FaLeaf />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#2c3e50' }}>Maintenance Track</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '1.5rem' }}>
                      Medium-term compounding aligned with 30/60/90-day prescription cycles.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Auto rebalancing</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Schedule reminders</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.3}>
                  <div style={{
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    height: '100%',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      <FaKey />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#2c3e50' }}>Future Care Track</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '1.5rem' }}>
                      Higher-yield strategy for elective procedures or emergency cushions.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Projected growth</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 123, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 123, 255, 0.3)',
                        color: '#007bff'
                      }}>Goal locking</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </PageTransition>
  );
}
