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
      <div className="learn-more-page" style={{ background: '#000', color: '#fff' }}>
        {/* Hero Section */}
        <section className="learn-more-hero" style={{ 
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
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
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '2rem'
                  }}>
                    How the Private Subsidy Works
                  </h1>
                  <p style={{ 
                    fontSize: '1.25rem', 
                    lineHeight: '1.8', 
                    color: '#ccc',
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
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    boxShadow: '0 20px 60px rgba(0, 255, 136, 0.3)'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                      {/* Transaction Flow Visualization */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '1.5rem',
                          background: 'rgba(0, 255, 136, 0.2)',
                          borderRadius: '15px',
                          border: '2px solid rgba(0, 255, 136, 0.5)'
                        }}>
                          <FaBolt style={{ fontSize: '2rem', color: '#00ff88', marginBottom: '0.5rem' }} />
                          <div style={{ color: '#00ff88', fontWeight: 'bold', fontSize: '1.1rem' }}>Advertiser</div>
                        </div>
                        <FaArrowRight style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '1.5rem',
                          background: 'rgba(0, 136, 255, 0.2)',
                          borderRadius: '15px',
                          border: '2px solid rgba(0, 136, 255, 0.5)'
                        }}>
                          <FaShieldAlt style={{ fontSize: '2rem', color: '#0088ff', marginBottom: '0.5rem' }} />
                          <div style={{ color: '#0088ff', fontWeight: 'bold', fontSize: '1.1rem' }}>Escrow</div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '1.5rem',
                          background: 'rgba(255, 136, 0, 0.2)',
                          borderRadius: '15px',
                          border: '2px solid rgba(255, 136, 0, 0.5)'
                        }}>
                          <FaMobile style={{ fontSize: '2rem', color: '#ff8800', marginBottom: '0.5rem' }} />
                          <div style={{ color: '#ff8800', fontWeight: 'bold', fontSize: '1.1rem' }}>Wallet</div>
                        </div>
                        <FaArrowRight style={{ fontSize: '1.5rem', color: '#ff8800' }} />
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '1.5rem',
                          background: 'rgba(255, 0, 136, 0.2)',
                          borderRadius: '15px',
                          border: '2px solid rgba(255, 0, 136, 0.5)'
                        }}>
                          <FaBuilding style={{ fontSize: '2rem', color: '#ff0088', marginBottom: '0.5rem' }} />
                          <div style={{ color: '#ff0088', fontWeight: 'bold', fontSize: '1.1rem' }}>Pharmacy</div>
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
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
        }}>
          <Container>
            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 136, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '2rem',
                      fontSize: '2.5rem',
                      color: '#000'
                    }}>
                      <FaBolt />
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00ff88' }}>Opt In</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                      Choose sponsored health stories that match your conditions. Advertisers deposit real dollars into escrow the moment you complete an activity.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 136, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.5)'
                      }}>Verified brands</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 136, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.5)'
                      }}>Frequency caps</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 136, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.5)'
                      }}>Full transparency</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>

              <Col lg={4}>
                <ScrollFadeIn delay={0.2}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 204, 255, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%)',
                    border: '2px solid rgba(0, 204, 255, 0.3)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 204, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00ccff 0%, #ff8800 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '2rem',
                      fontSize: '2.5rem',
                      color: '#000'
                    }}>
                      <FaMobile />
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00ccff' }}>Unlock</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                      Rewards hit your private subsidy wallet instantly. Show your virtual card at checkout and we settle funds with the pharmacy on the spot.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 204, 255, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 204, 255, 0.5)'
                      }}>Instant disbursement</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 204, 255, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 204, 255, 0.5)'
                      }}>OTC + Rx eligible</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 204, 255, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 204, 255, 0.5)'
                      }}>Same-day settlement</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>

              <Col lg={4}>
                <ScrollFadeIn delay={0.3}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255, 136, 0, 0.1) 0%, rgba(255, 0, 136, 0.1) 100%)',
                    border: '2px solid rgba(255, 136, 0, 0.3)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 136, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ff8800 0%, #ff0088 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '2rem',
                      fontSize: '2.5rem',
                      color: '#000'
                    }}>
                      <FaChartLine />
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff8800' }}>Grow</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                      Skip a purchase and your unspent balance compounds daily inside our healthcare treasury, giving you more leverage for future care.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 136, 0, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(255, 136, 0, 0.5)'
                      }}>Daily interest</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 136, 0, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(255, 136, 0, 0.5)'
                      }}>Goal-based vaults</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 136, 0, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(255, 136, 0, 0.5)'
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
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Where You Can Spend Rewards
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#ccc' }}>
                    Thousands of independent and national pharmacies access our settlement ledger every day.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: '#000'
                    }}>
                      <FaShieldAlt />
                    </div>
                    <h4 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#00ff88' }}>Pharmacy-first Checkout</h4>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                      Show your virtual card, let the pharmacist process it, and watch the private subsidy cover prescriptions, OTC kits, and preventative devices in seconds.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 136, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.5)'
                      }}>Tap-to-pay wallet</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 136, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.5)'
                      }}>Benefit stacking</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 136, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.5)'
                      }}>Instant receipts</span>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 204, 255, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%)',
                    border: '2px solid rgba(0, 204, 255, 0.3)',
                    borderRadius: '20px',
                    padding: '3rem',
                    height: '100%'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00ccff 0%, #ff8800 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: '#000'
                    }}>
                      <FaBuilding />
                    </div>
                    <h4 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#00ccff' }}>Network Visibility</h4>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                      Every receipt shows which advertiser funded the purchase and how much compound interest you preserved by leaving part of the subsidy untouched.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 204, 255, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 204, 255, 0.5)'
                      }}>Brand transparency</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 204, 255, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 204, 255, 0.5)'
                      }}>Care item catalog</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 204, 255, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 204, 255, 0.5)'
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
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Compound Growth Vaults
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#ccc' }}>
                    Pick the strategy that matches your refill schedule and risk tolerance.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    height: '100%'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: '#000'
                    }}>
                      <FaHeartbeat />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#00ff88' }}>Essentials Track</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                      Short-term growth tuned for weekly OTC trips, vitamins, and wellness kits.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 136, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.5)'
                      }}>Low volatility</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 136, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.5)'
                      }}>Weekly payouts</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.2}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 204, 255, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%)',
                    border: '2px solid rgba(0, 204, 255, 0.3)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    height: '100%'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00ccff 0%, #ff8800 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: '#000'
                    }}>
                      <FaLeaf />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#00ccff' }}>Maintenance Track</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                      Medium-term compounding aligned with 30/60/90-day prescription cycles.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 204, 255, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 204, 255, 0.5)'
                      }}>Auto rebalancing</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 204, 255, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 204, 255, 0.5)'
                      }}>Schedule reminders</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.3}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255, 136, 0, 0.1) 0%, rgba(255, 0, 136, 0.1) 100%)',
                    border: '2px solid rgba(255, 136, 0, 0.3)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    height: '100%'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ff8800 0%, #ff0088 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      color: '#000'
                    }}>
                      <FaKey />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#ff8800' }}>Future Care Track</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                      Higher-yield strategy for elective procedures or emergency cushions.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 136, 0, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(255, 136, 0, 0.5)'
                      }}>Projected growth</span>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 136, 0, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(255, 136, 0, 0.5)'
                      }}>Goal locking</span>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Healthcare Rewards Promise - From Homepage */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Bank With Your Health
                  </h2>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden' }}>
                    <Image
                      src="/images/broker.jpeg"
                      alt="Modern banking and healthcare technology"
                      width={600}
                      height={600}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem' }}>
                      Saint Daniels Healthcare Rewards converts privacy-safe ad attention into a private subsidy. Every time you
                      engage with health brands inside our ad network, dollars flow into your reward wallet, ready to be spent at
                      any participating pharmacy. Skip a purchase and the unused balance compounds daily, so your care budget
                      grows automatically while you focus on feeling better.
                    </p>

                    <div className="g-4">
                      <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'rgba(0, 255, 136, 0.05)',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 255, 136, 0.2)'
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: '#000',
                          flexShrink: 0
                        }}>
                          <FaDollarSign />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#00ff88' }}>Private Subsidy</h4>
                          <p style={{ fontSize: '1rem', color: '#ccc' }}>Brand-funded dollars arrive in your secure wallet as soon as you complete a sponsored activity.</p>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'rgba(0, 204, 255, 0.05)',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 204, 255, 0.2)'
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #00ccff 0%, #ff8800 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: '#000',
                          flexShrink: 0
                        }}>
                          <FaClipboardList />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#00ccff' }}>Pharmacy Freedom</h4>
                          <p style={{ fontSize: '1rem', color: '#ccc' }}>Show the app at checkout and spend rewards on prescriptions, OTC items, or preventative care kits.</p>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        padding: '1.5rem',
                        background: 'rgba(255, 136, 0, 0.05)',
                        borderRadius: '15px',
                        border: '1px solid rgba(255, 136, 0, 0.2)'
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #ff8800 0%, #ff0088 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: '#000',
                          flexShrink: 0
                        }}>
                          <FaChartLine />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ff8800' }}>Compound Growth</h4>
                          <p style={{ fontSize: '1rem', color: '#ccc' }}>Unused dollars earn daily compound interest so the value of your subsidy keeps expanding.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* How Subsidies Work - From Homepage */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    How Your Subsidy Flows
                  </h2>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden' }}>
                    <Image
                      src="/images/river.jpg"
                      alt="Financial data and healthcare analytics"
                      width={600}
                      height={600}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem' }}>
                      Advertisers place offers in our closed healthcare ad network. Members opt in, view personalized content,
                      and immediately unlock a private subsidy that can be routed to any verified pharmacy. Our treasury keeps
                      unused balances compounding, so every week you wait to spend, your total subsidy earns more interest.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
                      <div style={{
                        padding: '1.5rem',
                        background: 'rgba(0, 255, 136, 0.1)',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 255, 136, 0.3)',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00ff88', marginBottom: '0.5rem' }}>$240</div>
                        <div style={{ fontSize: '0.9rem', color: '#ccc' }}>Avg. annual subsidy</div>
                      </div>
                      <div style={{
                        padding: '1.5rem',
                        background: 'rgba(0, 204, 255, 0.1)',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 204, 255, 0.3)',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00ccff', marginBottom: '0.5rem' }}>18%</div>
                        <div style={{ fontSize: '0.9rem', color: '#ccc' }}>Compound rate</div>
                      </div>
                      <div style={{
                        padding: '1.5rem',
                        background: 'rgba(255, 136, 0, 0.1)',
                        borderRadius: '15px',
                        border: '1px solid rgba(255, 136, 0, 0.3)',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff8800', marginBottom: '0.5rem' }}>1.2M</div>
                        <div style={{ fontSize: '0.9rem', color: '#ccc' }}>Pharmacy SKUs</div>
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#00ff88' }}>What powers the network</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'rgba(0, 255, 136, 0.05)',
                          borderRadius: '10px'
                        }}>
                          <FaBullseye style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                          <span style={{ color: '#ccc' }}>Ad quality review</span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'rgba(0, 255, 136, 0.05)',
                          borderRadius: '10px'
                        }}>
                          <FaHandshake style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                          <span style={{ color: '#ccc' }}>Pharmacy settlement</span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'rgba(0, 255, 136, 0.05)',
                          borderRadius: '10px'
                        }}>
                          <FaUsers style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                          <span style={{ color: '#ccc' }}>Member care team</span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'rgba(0, 255, 136, 0.05)',
                          borderRadius: '10px'
                        }}>
                          <FaChartLine style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                          <span style={{ color: '#ccc' }}>Compound treasury</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Reward Lifecycle - From Homepage */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Your Reward Lifecycle
                  </h2>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden' }}>
                    <Image
                      src="/images/ranch.jpeg"
                      alt="Member tracking healthcare rewards timeline"
                      width={600}
                      height={600}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#00ff88' }}>Earn, spend, and grow in one tap</h3>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                      Watch a sponsored insight, receive your private subsidy, and choose whether to spend it instantly at the
                      pharmacy counter or let it ride inside the compound rewards vault. Transparent receipts show how every
                      penny was funded, where it was redeemed, and how much interest accrued while you waited.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(0, 255, 136, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaListUl style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Ad tasks unlock cash</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(0, 204, 255, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaGift style={{ fontSize: '1.5rem', color: '#00ccff' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Instant pharmacy payments</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(255, 136, 0, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaChartLine style={{ fontSize: '1.5rem', color: '#ff8800' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Daily compounding ledger</span>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <div style={{
                    padding: '2rem',
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: '20px',
                    height: '100%'
                  }}>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ff88' }}>Earn</h4>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Complete curated ad experiences that prioritize clinical clarity over clickbait.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.2}>
                  <div style={{
                    padding: '2rem',
                    background: 'linear-gradient(135deg, rgba(0, 204, 255, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%)',
                    border: '2px solid rgba(0, 204, 255, 0.3)',
                    borderRadius: '20px',
                    height: '100%'
                  }}>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ccff' }}>Spend</h4>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Use your virtual card in-app or share your member ID to pay inside any partner pharmacy.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.3}>
                  <div style={{
                    padding: '2rem',
                    background: 'linear-gradient(135deg, rgba(255, 136, 0, 0.1) 0%, rgba(255, 0, 136, 0.1) 100%)',
                    border: '2px solid rgba(255, 136, 0, 0.3)',
                    borderRadius: '20px',
                    height: '100%'
                  }}>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff8800' }}>Grow</h4>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Let unspent balances earn compound interest that can later cover higher-cost treatments.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Ad Network Marketplace - From Homepage */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Ad Network Marketplace
                  </h2>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#00ff88' }}>Brands fund your future care</h3>
                  <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                    Healthcare advertisers compete for attention inside our marketplace. When you opt in to their stories,
                    they deposit real dollars into your private subsidy. We cap frequency, protect data, and route every
                    campaign through pharmacists so what you watch translates to eligible products on the shelf.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(0, 255, 136, 0.05)',
                      borderRadius: '10px'
                    }}>
                      <FaBullseye style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                      <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Verified health brands only</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(0, 204, 255, 0.05)',
                      borderRadius: '10px'
                    }}>
                      <FaHandshake style={{ fontSize: '1.5rem', color: '#00ccff' }} />
                      <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Transparent funding agreements</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(255, 136, 0, 0.05)',
                      borderRadius: '10px'
                    }}>
                      <FaLightbulb style={{ fontSize: '1.5rem', color: '#ff8800' }} />
                      <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Contextual education moments</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden' }}>
                  <Image
                    src="/images/marketplace.jpeg"
                    alt="Healthcare advertiser meeting"
                    width={600}
                    height={600}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div style={{
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                  border: '2px solid rgba(0, 255, 136, 0.3)',
                  borderRadius: '20px',
                  height: '100%'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ff88' }}>Brand Wallets</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Every campaign reserves dollars in escrow so your rewards are guaranteed at redemption.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div style={{
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(0, 204, 255, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%)',
                  border: '2px solid rgba(0, 204, 255, 0.3)',
                  borderRadius: '20px',
                  height: '100%'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ccff' }}>Relevance Controls</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Preference centers keep content aligned to the conditions and pharmacies you actually use.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div style={{
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(255, 136, 0, 0.1) 0%, rgba(255, 0, 136, 0.1) 100%)',
                  border: '2px solid rgba(255, 136, 0, 0.3)',
                  borderRadius: '20px',
                  height: '100%'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff8800' }}>Compliance Desk</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Pharmacists review every script before it reaches members, ensuring safe, useful guidance.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Pharmacy Experience - From Homepage */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Pharmacy Spending Experience
                  </h2>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden' }}>
                  <Image
                    src="/images/pharamcy.jpeg"
                    alt="Pharmacist scanning app"
                    width={600}
                    height={600}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#00ff88' }}>Use rewards where care happens</h3>
                  <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                    Show your virtual card in your app, let the pharmacist process it, and watch your private subsidy cover the
                    bill. Every receipt explains which advertiser funded the purchase and how much compound interest you kept
                    by not spending everything at once.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(0, 255, 136, 0.05)',
                      borderRadius: '10px'
                    }}>
                      <FaMobile style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                      <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Tap-to-pay in store</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(0, 204, 255, 0.05)',
                      borderRadius: '10px'
                    }}>
                      <FaUsers style={{ fontSize: '1.5rem', color: '#00ccff' }} />
                      <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Pharmacist verified pricing</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(255, 136, 0, 0.05)',
                      borderRadius: '10px'
                    }}>
                      <FaHeart style={{ fontSize: '1.5rem', color: '#ff8800' }} />
                      <span style={{ color: '#ccc', fontSize: '1.1rem' }}>OTC + Rx eligible</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div style={{
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                  border: '2px solid rgba(0, 255, 136, 0.3)',
                  borderRadius: '20px',
                  height: '100%'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ff88' }}>Same-Day Settlement</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Pharmacies receive funds instantly so there is never a delay in filling critical meds.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div style={{
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(0, 204, 255, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%)',
                  border: '2px solid rgba(0, 204, 255, 0.3)',
                  borderRadius: '20px',
                  height: '100%'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ccff' }}>Benefit Stacking</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Combine your subsidy with FSA/HSA cards for maximum savings at checkout.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div style={{
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(255, 136, 0, 0.1) 0%, rgba(255, 0, 136, 0.1) 100%)',
                  border: '2px solid rgba(255, 136, 0, 0.3)',
                  borderRadius: '20px',
                  height: '100%'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff8800' }}>Interest Insights</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#ccc' }}>Real-time projections show how much future care you can fund if you defer a purchase.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Eligibility & Enrollment - From Homepage */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Eligibility & Enrollment
                  </h2>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#00ff88' }}>Who Can Join</h3>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                      Any U.S. adult with a phone number and pharmacy of choice can enroll. No insurance required. Create your
                      account, connect your preferred pharmacy, and begin earning within minutes. There are no fees—your subsidy
                      is 100% brand-funded and member-owned.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(0, 255, 136, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaUsers style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Open to all U.S. adults</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(0, 204, 255, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaMobile style={{ fontSize: '1.5rem', color: '#00ccff' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Instant setup in minutes</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(255, 136, 0, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaDollarSign style={{ fontSize: '1.5rem', color: '#ff8800' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Zero-cost membership</span>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden' }}>
                    <Image
                      src="/images/Eligibility.jpeg"
                      alt="Simple enrollment process"
                      width={600}
                      height={600}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Privacy & Data Protections - From Homepage */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Privacy & Data Protections
                  </h2>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden' }}>
                    <Image
                      src="/images/cat.jpeg"
                      alt="Data security and privacy protection"
                      width={600}
                      height={600}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#00ff88' }}>Privacy First</h3>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                      We never sell your health data or share your identity with advertisers. All insights are anonymized and
                      aggregated before campaigns run. Your prescription information stays encrypted on your device and is never
                      transmitted without explicit consent. See exactly which offers you viewed, what they funded, and how they
                      influenced your wallet.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(0, 255, 136, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaShieldAlt style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Privacy first architecture</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(0, 204, 255, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaLock style={{ fontSize: '1.5rem', color: '#00ccff' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>HIPAA-safe encryption</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(255, 136, 0, 0.05)',
                        borderRadius: '10px'
                      }}>
                        <FaEye style={{ fontSize: '1.5rem', color: '#ff8800' }} />
                        <span style={{ color: '#ccc', fontSize: '1.1rem' }}>Full ad transparency</span>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10}>
                <ScrollFadeIn>
                  <div style={{
                    padding: '4rem',
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: '30px'
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 2rem',
                      fontSize: '3rem',
                      color: '#000'
                    }}>
                      <FaClipboardCheck />
                    </div>
                    <h2 style={{ 
                      fontSize: '3rem', 
                      marginBottom: '1.5rem',
                      background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Activate Your Healthcare Rewards
                    </h2>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem' }}>
                      Unlock your private subsidy, spend it instantly at pharmacies, or let unused dollars earn compound
                      interest through our ad network treasury. One tap turns attention into a lifelong care budget.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <button 
                        style={{
                          padding: '1rem 2.5rem',
                          background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                          border: 'none',
                          borderRadius: '50px',
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          color: '#000',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => (window.location.href = '/download')}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 136, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        Download App
                      </button>
                      <button 
                        style={{
                          padding: '1rem 2.5rem',
                          background: 'transparent',
                          border: '2px solid #00ff88',
                          borderRadius: '50px',
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          color: '#00ff88',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => (window.location.href = '/application')}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        Start Application
                      </button>
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
