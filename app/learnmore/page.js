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

        {/* Healthcare Rewards Promise */}
        <section style={{ 
          padding: '120px 0',
          background: 'white'
        }}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}>
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
                  <div style={{ paddingLeft: '3rem' }}>
                    <h2 style={{ 
                      fontSize: '3rem', 
                      fontWeight: '700',
                      color: '#2c3e50',
                      marginBottom: '2rem'
                    }}>
                      Bank With Your Health
                    </h2>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '3rem' }}>
                      Saint Daniels Healthcare Rewards converts privacy-safe ad attention into a private subsidy. Every time you
                      engage with health brands inside our ad network, dollars flow into your reward wallet, ready to be spent at
                      any participating pharmacy. Skip a purchase and the unused balance compounds daily, so your care budget
                      grows automatically while you focus on feeling better.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        padding: '2rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#007bff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: 'white',
                          flexShrink: 0
                        }}>
                          <FaDollarSign />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#2c3e50' }}>Private Subsidy</h4>
                          <p style={{ fontSize: '1rem', color: '#6c757d' }}>Brand-funded dollars arrive in your secure wallet as soon as you complete a sponsored activity.</p>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        padding: '2rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#007bff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: 'white',
                          flexShrink: 0
                        }}>
                          <FaClipboardList />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#2c3e50' }}>Pharmacy Freedom</h4>
                          <p style={{ fontSize: '1rem', color: '#6c757d' }}>Show the app at checkout and spend rewards on prescriptions, OTC items, or preventative care kits.</p>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        padding: '2rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#007bff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: 'white',
                          flexShrink: 0
                        }}>
                          <FaChartLine />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#2c3e50' }}>Compound Growth</h4>
                          <p style={{ fontSize: '1rem', color: '#6c757d' }}>Unused dollars earn daily compound interest so the value of your subsidy keeps expanding.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* How Your Subsidy Flows */}
        <section style={{ 
          padding: '120px 0',
          background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)'
        }}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div>
                    <h2 style={{ 
                      fontSize: '3rem', 
                      fontWeight: '700',
                      color: '#2c3e50',
                      marginBottom: '2rem'
                    }}>
                      How Your Subsidy Flows
                    </h2>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '3rem' }}>
                      Advertisers place offers in our closed healthcare ad network. Members opt in, view personalized content,
                      and immediately unlock a private subsidy that can be routed to any verified pharmacy. Our treasury keeps
                      unused balances compounding, so every week you wait to spend, your total subsidy earns more interest.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
                      <div style={{
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 123, 255, 0.2)',
                        textAlign: 'center',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                      }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>$240</div>
                        <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Avg. annual subsidy</div>
                      </div>
                      <div style={{
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 123, 255, 0.2)',
                        textAlign: 'center',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                      }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>18%</div>
                        <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Compound rate</div>
                      </div>
                      <div style={{
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: '15px',
                        border: '1px solid rgba(0, 123, 255, 0.2)',
                        textAlign: 'center',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                      }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>1.2M</div>
                        <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Pharmacy SKUs</div>
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#2c3e50' }}>What powers the network</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'white',
                          borderRadius: '10px',
                          border: '1px solid rgba(0, 123, 255, 0.2)'
                        }}>
                          <FaBullseye style={{ fontSize: '1.5rem', color: '#007bff' }} />
                          <span style={{ color: '#6c757d' }}>Ad quality review</span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'white',
                          borderRadius: '10px',
                          border: '1px solid rgba(0, 123, 255, 0.2)'
                        }}>
                          <FaHandshake style={{ fontSize: '1.5rem', color: '#007bff' }} />
                          <span style={{ color: '#6c757d' }}>Pharmacy settlement</span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'white',
                          borderRadius: '10px',
                          border: '1px solid rgba(0, 123, 255, 0.2)'
                        }}>
                          <FaUsers style={{ fontSize: '1.5rem', color: '#007bff' }} />
                          <span style={{ color: '#6c757d' }}>Member care team</span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'white',
                          borderRadius: '10px',
                          border: '1px solid rgba(0, 123, 255, 0.2)'
                        }}>
                          <FaChartLine style={{ fontSize: '1.5rem', color: '#007bff' }} />
                          <span style={{ color: '#6c757d' }}>Compound treasury</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}>
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
            </Row>
          </Container>
        </section>

        {/* Your Reward Lifecycle */}
        <section style={{ 
          padding: '120px 0',
          background: 'white'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '1rem'
                  }}>
                    Your Reward Lifecycle
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
                    Earn, spend, and grow in one seamless experience
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}>
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
                  <div style={{ paddingLeft: '3rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>Earn, spend, and grow in one tap</h3>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                      Watch a sponsored insight, receive your private subsidy, and choose whether to spend it instantly at the
                      pharmacy counter or let it ride inside the compound rewards vault. Transparent receipts show how every
                      penny was funded, where it was redeemed, and how much interest accrued while you waited.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <FaListUl style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Ad tasks unlock cash</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <FaGift style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Instant pharmacy payments</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <FaChartLine style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Daily compounding ledger</span>
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
                    padding: '2.5rem',
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    height: '100%',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 123, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                  }}>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Earn</h4>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Complete curated ad experiences that prioritize clinical clarity over clickbait.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.2}>
                  <div style={{
                    padding: '2.5rem',
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    height: '100%',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 123, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                  }}>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Spend</h4>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Use your virtual card in-app or share your member ID to pay inside any partner pharmacy.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.3}>
                  <div style={{
                    padding: '2.5rem',
                    background: 'white',
                    border: '2px solid rgba(0, 123, 255, 0.2)',
                    borderRadius: '20px',
                    height: '100%',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 123, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                  }}>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Grow</h4>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Let unspent balances earn compound interest that can later cover higher-cost treatments.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Ad Network Marketplace */}
        <section style={{ 
          padding: '120px 0',
          background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '1rem'
                  }}>
                    Ad Network Marketplace
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
                    Brands fund your future care through verified health content
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>Brands fund your future care</h3>
                  <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                    Healthcare advertisers compete for attention inside our marketplace. When you opt in to their stories,
                    they deposit real dollars into your private subsidy. We cap frequency, protect data, and route every
                    campaign through pharmacists so what you watch translates to eligible products on the shelf.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'white',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 123, 255, 0.2)',
                      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                      <FaBullseye style={{ fontSize: '1.5rem', color: '#007bff' }} />
                      <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Verified health brands only</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'white',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 123, 255, 0.2)',
                      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                      <FaHandshake style={{ fontSize: '1.5rem', color: '#007bff' }} />
                      <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Transparent funding agreements</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'white',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 123, 255, 0.2)',
                      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                      <FaLightbulb style={{ fontSize: '1.5rem', color: '#007bff' }} />
                      <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Contextual education moments</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}>
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
                  padding: '2.5rem',
                  background: 'white',
                  border: '2px solid rgba(0, 123, 255, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Brand Wallets</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Every campaign reserves dollars in escrow so your rewards are guaranteed at redemption.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div style={{
                  padding: '2.5rem',
                  background: 'white',
                  border: '2px solid rgba(0, 123, 255, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Relevance Controls</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Preference centers keep content aligned to the conditions and pharmacies you actually use.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div style={{
                  padding: '2.5rem',
                  background: 'white',
                  border: '2px solid rgba(0, 123, 255, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Compliance Desk</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Pharmacists review every script before it reaches members, ensuring safe, useful guidance.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Pharmacy Spending Experience */}
        <section style={{ 
          padding: '120px 0',
          background: 'white'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '1rem'
                  }}>
                    Pharmacy Spending Experience
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
                    Use rewards where care happens
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}>
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
                <div style={{ paddingLeft: '3rem' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>Use rewards where care happens</h3>
                  <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                    Show your virtual card in your app, let the pharmacist process it, and watch your private subsidy cover the
                    bill. Every receipt explains which advertiser funded the purchase and how much compound interest you kept
                    by not spending everything at once.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'rgba(0, 123, 255, 0.05)',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 123, 255, 0.2)'
                    }}>
                      <FaMobile style={{ fontSize: '1.5rem', color: '#007bff' }} />
                      <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Tap-to-pay in store</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'rgba(0, 123, 255, 0.05)',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 123, 255, 0.2)'
                    }}>
                      <FaUsers style={{ fontSize: '1.5rem', color: '#007bff' }} />
                      <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Pharmacist verified pricing</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'rgba(0, 123, 255, 0.05)',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 123, 255, 0.2)'
                    }}>
                      <FaHeart style={{ fontSize: '1.5rem', color: '#007bff' }} />
                      <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>OTC + Rx eligible</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div style={{
                  padding: '2.5rem',
                  background: 'white',
                  border: '2px solid rgba(0, 123, 255, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Same-Day Settlement</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Pharmacies receive funds instantly so there is never a delay in filling critical meds.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div style={{
                  padding: '2.5rem',
                  background: 'white',
                  border: '2px solid rgba(0, 123, 255, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Benefit Stacking</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Combine your subsidy with FSA/HSA cards for maximum savings at checkout.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div style={{
                  padding: '2.5rem',
                  background: 'white',
                  border: '2px solid rgba(0, 123, 255, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Interest Insights</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Real-time projections show how much future care you can fund if you defer a purchase.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Eligibility & Enrollment */}
        <section style={{ 
          padding: '120px 0',
          background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '1rem'
                  }}>
                    Eligibility & Enrollment
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
                    Open to all U.S. adults, no insurance required
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>Who Can Join</h3>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                      Any U.S. adult with a phone number and pharmacy of choice can enroll. No insurance required. Create your
                      account, connect your preferred pharmacy, and begin earning within minutes. There are no fees—your subsidy
                      is 100% brand-funded and member-owned.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)',
                        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                      }}>
                        <FaUsers style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Open to all U.S. adults</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)',
                        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                      }}>
                        <FaMobile style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Instant setup in minutes</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)',
                        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                      }}>
                        <FaDollarSign style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Zero-cost membership</span>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}>
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

        {/* Privacy & Data Protections */}
        <section style={{ 
          padding: '120px 0',
          background: 'white'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '1rem'
                  }}>
                    Privacy & Data Protections
                  </h2>
                  <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
                    Your health data stays private and secure
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}>
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
                  <div style={{ paddingLeft: '3rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>Privacy First</h3>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
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
                        padding: '1.5rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <FaShieldAlt style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Privacy first architecture</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <FaLock style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>HIPAA-safe encryption</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'rgba(0, 123, 255, 0.05)',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}>
                        <FaEye style={{ fontSize: '1.5rem', color: '#007bff' }} />
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Full ad transparency</span>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Compound Growth Vaults */}
        <section style={{ 
          padding: '120px 0',
          background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)'
        }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <h2 style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '1rem'
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
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 123, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
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
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 123, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
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
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 123, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
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
