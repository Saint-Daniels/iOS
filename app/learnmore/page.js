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
  FaWallet,
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn, ScrollSlideIn } from '../../components/ScrollAnimation';
import BankWithHealthIllustration from '../../components/illustrations/BankWithHealth';
import SubsidyFlowIllustration from '../../components/illustrations/SubsidyFlow';
import RewardLifecycleIllustration from '../../components/illustrations/RewardLifecycle';
import AdNetworkMarketplaceIllustration from '../../components/illustrations/AdNetworkMarketplace';
import PharmacySpendingIllustration from '../../components/illustrations/PharmacySpending';
import EligibilityEnrollmentIllustration from '../../components/illustrations/EligibilityEnrollment';
import PrivacyProtectionIllustration from '../../components/illustrations/PrivacyProtection';

export default function LearnMore() {

  return (
    <PageTransition>
      <Navbar />
      <div className="learn-more-page" style={{ background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)', color: '#2c3e50' }}>
        {/* Healthcare Rewards Promise */}
        <section style={{ 
          padding: '120px 0',
          background: 'white'
        }}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ 
                    height: '600px', 
                    borderRadius: '20px', 
                    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '2rem'
                  }}>
                    <BankWithHealthIllustration />
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
                      any participating pharmacy. Skip a purchase and the unused balance stays in your wallet, ready for when you need it.
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
                          <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#2c3e50' }}>Secure Storage</h4>
                          <p style={{ fontSize: '1rem', color: '#6c757d' }}>Unused dollars stay safely in your wallet, ready for when you need them.</p>
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
                      unused balances stay in your wallet, ready for when you need them.
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
                        <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Network rate</div>
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
                          <span style={{ color: '#6c757d' }}>Network treasury</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ 
                    height: '600px', 
                    borderRadius: '20px', 
                    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '2rem'
                  }}>
                    <SubsidyFlowIllustration />
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
                  <div style={{ 
                    height: '600px', 
                    borderRadius: '20px', 
                    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '2rem'
                  }}>
                    <RewardLifecycleIllustration />
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <div style={{ paddingLeft: '3rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>Earn, spend, and grow in one tap</h3>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                      Watch a sponsored insight, receive your private subsidy, and choose whether to spend it instantly at the
                      pharmacy counter or keep it in your wallet. Transparent receipts show how every
                      penny was funded and where it was redeemed.
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
                        <span style={{ color: '#6c757d', fontSize: '1.1rem' }}>Daily balance tracking</span>
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
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Keep unspent balances in your wallet to save for higher-cost treatments when needed.</p>
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
                <div style={{ 
                  height: '600px', 
                  borderRadius: '20px', 
                  background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '2rem'
                }}>
                  <AdNetworkMarketplaceIllustration />
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
                <div style={{ 
                  height: '600px', 
                  borderRadius: '20px', 
                  background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '2rem'
                }}>
                  <PharmacySpendingIllustration />
                </div>
              </Col>
              <Col lg={6}>
                <div style={{ paddingLeft: '3rem' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>Use rewards where care happens</h3>
                  <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '2rem' }}>
                    Show your virtual card in your app, let the pharmacist process it, and watch your private subsidy cover the
                    bill. Every receipt explains which advertiser funded the purchase and how much of your subsidy remains available.
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
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Balance Insights</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}>Real-time tracking shows how much future care you can fund with your current balance.</p>
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
                  <div style={{ 
                    height: '600px', 
                    borderRadius: '20px', 
                    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '2rem'
                  }}>
                    <EligibilityEnrollmentIllustration />
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
                  <div style={{ 
                    height: '600px', 
                    borderRadius: '20px', 
                    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '2rem'
                  }}>
                    <PrivacyProtectionIllustration />
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
      </div>
      <Footer />
    </PageTransition>
  );
}
