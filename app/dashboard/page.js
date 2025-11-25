'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Form, ProgressBar, Tab, Tabs, Alert } from 'react-bootstrap';
import { FaDollarSign, FaCreditCard, FaChartLine, FaGift, FaHospital, FaMobile, FaEye, FaLock, FaDownload, FaArrowUp, FaArrowDown, FaCalendarAlt, FaReceipt, FaStore, FaPercent, FaWallet, FaUser, FaCog, FaSignOutAlt, FaBell, FaHandshake, FaBullseye, FaUsers, FaShieldAlt, FaCheckCircle, FaClock, FaHistory } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Navbar from '../../components/Navbar';
import PageTransition from '../../components/PageTransition';

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('balance');
  const [showSettings, setShowSettings] = useState(false);
  const [showVirtualCard, setShowVirtualCard] = useState(false);

  // Check authentication
  useEffect(() => {
    const isLoggedIn = Cookies.get('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  // Dashboard data
  const subsidyBalance = 1247.50;
  const compoundInterest = 18;
  const monthlyEarnings = 89.25;
  const totalEarned = 2456.80;
  const totalSpent = 1209.30;
  const pharmacyCount = 3;

  // Balance history for chart (last 7 days)
  const balanceHistory = [
    { day: 0, balance: 1100 },
    { day: 1, balance: 1125 },
    { day: 2, balance: 1150 },
    { day: 3, balance: 1180 },
    { day: 4, balance: 1200 },
    { day: 5, balance: 1225 },
    { day: 6, balance: 1247.50 }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'earned',
      amount: 12.50,
      description: 'Ad Network Engagement - Health Brand Campaign',
      date: '2 hours ago',
      category: 'Earning',
      icon: <FaGift />
    },
    {
      id: 2,
      type: 'spent',
      amount: 45.30,
      description: 'CVS Pharmacy - Prescription & OTC Items',
      date: '1 day ago',
      category: 'Pharmacy',
      icon: <FaHospital />
    },
    {
      id: 3,
      type: 'earned',
      amount: 8.75,
      description: 'Ad Network Engagement - Wellness Content',
      date: '2 days ago',
      category: 'Earning',
      icon: <FaGift />
    },
    {
      id: 4,
      type: 'interest',
      amount: 3.42,
      description: 'Daily Compound Interest',
      date: '3 days ago',
      category: 'Growth',
      icon: <FaChartLine />
    },
    {
      id: 5,
      type: 'spent',
      amount: 28.90,
      description: 'Walgreens - Preventative Care Kit',
      date: '5 days ago',
      category: 'Pharmacy',
      icon: <FaHospital />
    }
  ];

  const adNetworkActivity = [
    {
      id: 1,
      brand: 'Health Brand A',
      campaign: 'Cardiovascular Health',
      earnings: 12.50,
      status: 'completed',
      date: 'Today'
    },
    {
      id: 2,
      brand: 'Wellness Brand B',
      campaign: 'Nutrition & Metabolism',
      earnings: 8.75,
      status: 'completed',
      date: '2 days ago'
    },
    {
      id: 3,
      brand: 'Pharma Brand C',
      campaign: 'Mental Health Awareness',
      earnings: 15.00,
      status: 'available',
      date: 'Available Now'
    },
    {
      id: 4,
      brand: 'Health Brand D',
      campaign: 'Preventive Care',
      earnings: 10.25,
      status: 'available',
      date: 'Available Now'
    }
  ];

  const pharmacyNetwork = [
    {
      id: 1,
      name: 'CVS Pharmacy',
      address: '123 Main St, Your City',
      lastUsed: '1 day ago',
      totalSpent: 234.50,
      status: 'connected'
    },
    {
      id: 2,
      name: 'Walgreens',
      address: '456 Oak Ave, Your City',
      lastUsed: '5 days ago',
      totalSpent: 156.80,
      status: 'connected'
    },
    {
      id: 3,
      name: 'Rite Aid',
      address: '789 Pine Rd, Your City',
      lastUsed: '2 weeks ago',
      totalSpent: 89.20,
      status: 'connected'
    }
  ];

  const quickStats = [
    {
      label: 'Private Subsidy Balance',
      value: `$${subsidyBalance.toFixed(2)}`,
      icon: <FaWallet />,
      color: '#2c5530',
      change: '+$12.50',
      changeType: 'positive'
    },
    {
      label: 'Compound Interest Rate',
      value: `${compoundInterest}%`,
      icon: <FaPercent />,
      color: '#C4A962',
      change: 'Daily',
      changeType: 'neutral'
    },
    {
      label: 'Monthly Earnings',
      value: `$${monthlyEarnings.toFixed(2)}`,
      icon: <FaDollarSign />,
      color: '#2c5530',
      change: '+$8.75',
      changeType: 'positive'
    },
    {
      label: 'Connected Pharmacies',
      value: pharmacyCount.toString(),
      icon: <FaHospital />,
      color: '#C4A962',
      change: 'Active',
      changeType: 'neutral'
    }
  ];

  const handleLogout = () => {
    Cookies.remove('isLoggedIn');
    Cookies.remove('userEmail');
    router.push('/');
  };

  return (
    <PageTransition>
      <Navbar />
      <div className="professional-dashboard">
        {/* Header */}
        <header className="dashboard-header" style={{
          background: 'linear-gradient(135deg, #1B392F 0%, #2c5530 100%)',
          color: 'white',
          padding: '1.5rem 0',
          marginBottom: '2rem'
        }}>
          <Container fluid>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="d-flex align-items-center">
                  <div className="header-icon me-3" style={{ color: '#C4A962' }}>
                    <FaWallet size={28} />
                  </div>
                  <div>
                    <h1 className="mb-0" style={{ color: 'white', fontSize: '1.75rem' }}>Saint Daniels Healthcare Rewards</h1>
                    <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Private Subsidy Dashboard</p>
                  </div>
                </div>
              </Col>
              <Col md={6} className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-3">
                  <Button variant="outline-light" size="sm" className="notification-btn">
                    <FaBell />
                    <span className="notification-badge">2</span>
                  </Button>
                  <Button variant="outline-light" size="sm" onClick={() => setShowSettings(true)}>
                    <FaCog />
                  </Button>
                  <div className="user-profile" style={{ color: 'white' }}>
                    <FaUser className="me-2" />
                    <span>Member Account</span>
                  </div>
                  <Button variant="outline-light" size="sm" onClick={handleLogout}>
                    <FaSignOutAlt />
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        <Container fluid style={{ padding: '1rem 0 2rem 0' }}>
          {/* Navigation Tabs */}
          <Row className="mb-4">
            <Col>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="professional-tabs"
              >
                <Tab eventKey="balance" title={
                  <span><FaWallet className="me-2" />Balance</span>
                }>
                  <Row>
                    <Col lg={8}>
                      <div style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                        padding: '5rem 3rem',
                        textAlign: 'center',
                        border: 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        marginBottom: '2rem'
                      }}>
                        <div style={{
                          fontSize: '0.75rem',
                          color: '#8e8e93',
                          fontWeight: 500,
                          letterSpacing: '1px',
                          marginBottom: '1.5rem',
                          textTransform: 'uppercase',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        }}>
                          Private Subsidy Balance
                        </div>
                        <div style={{
                          fontSize: '6rem',
                          fontWeight: 700,
                          color: '#000000',
                          lineHeight: '1',
                          marginBottom: '2rem',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: '-0.02em'
                        }}>
                          ${subsidyBalance.toFixed(2)}
                        </div>
                        <div style={{
                          fontSize: '0.9375rem',
                          color: '#8e8e93',
                          fontWeight: 400,
                          letterSpacing: '0.2px',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          marginBottom: '3rem'
                        }}>
                          Available to spend at participating pharmacies
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <Card style={{
                        border: 'none',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                        marginBottom: '1.5rem'
                      }}>
                        <Card.Body style={{ padding: '2rem' }}>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#8e8e93',
                            fontWeight: 500,
                            letterSpacing: '1px',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                          }}>
                            Balance Trend
                          </div>
                          <div style={{ width: '100%', height: '180px', position: 'relative' }}>
                            <svg width="100%" height="100%" viewBox="0 0 300 180" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                              <defs>
                                <linearGradient id="balanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#2c5530" stopOpacity="0.2" />
                                  <stop offset="100%" stopColor="#2c5530" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              {/* Calculate chart points */}
                              {(() => {
                                const minBalance = Math.min(...balanceHistory.map(b => b.balance));
                                const maxBalance = Math.max(...balanceHistory.map(b => b.balance));
                                const range = maxBalance - minBalance || 100;
                                const padding = range * 0.2;
                                const chartHeight = 140;
                                const chartWidth = 280;
                                const stepX = chartWidth / (balanceHistory.length - 1);
                                
                                const points = balanceHistory.map((item, index) => {
                                  const x = 10 + (index * stepX);
                                  const y = 170 - ((item.balance - minBalance + padding) / (range + padding * 2)) * chartHeight;
                                  return { x, y, balance: item.balance };
                                });
                                
                                const pathData = points.map((p, i) => 
                                  i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`
                                ).join(' ');
                                
                                const areaPath = `${pathData} L ${points[points.length - 1].x} 180 L ${points[0].x} 180 Z`;
                                
                                return (
                                  <>
                                    {/* Area fill */}
                                    <path
                                      d={areaPath}
                                      fill="url(#balanceGradient)"
                                    />
                                    {/* Line */}
                                    <path
                                      d={pathData}
                                      fill="none"
                                      stroke="#2c5530"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    {/* Data points */}
                                    {points.map((point, index) => (
                                      <circle
                                        key={index}
                                        cx={point.x}
                                        cy={point.y}
                                        r="3"
                                        fill="#2c5530"
                                      />
                                    ))}
                                  </>
                                );
                              })()}
                              {/* Grid lines */}
                              <line x1="10" y1="180" x2="290" y2="180" stroke="#e5e5e5" strokeWidth="1" />
                              <line x1="10" y1="140" x2="290" y2="140" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                              <line x1="10" y1="100" x2="290" y2="100" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                            </svg>
                          </div>
                          <div style={{
                            fontSize: '0.875rem',
                            color: '#8e8e93',
                            marginTop: '1rem',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            textAlign: 'center'
                          }}>
                            Last 7 days
                          </div>
                        </Card.Body>
                      </Card>
                      <Card style={{
                        border: 'none',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
                      }}>
                        <Card.Body style={{ padding: '2rem' }}>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#8e8e93',
                            fontWeight: 500,
                            letterSpacing: '1px',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                          }}>
                            Monthly Earnings
                          </div>
                          <div style={{
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            color: '#000000',
                            marginBottom: '1.5rem',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                          }}>
                            ${monthlyEarnings.toFixed(2)}
                          </div>
                          <div style={{
                            fontSize: '0.875rem',
                            color: '#8e8e93',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                          }}>
                            This month
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="pharmacy" title={
                  <span><FaHospital className="me-2" />Pharmacy Network</span>
                }>
                  <Card style={{
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                  }}>
                    <Card.Body style={{ padding: '2rem' }}>
                      {pharmacyNetwork.map((pharmacy) => (
                        <div key={pharmacy.id} className="mb-3 pb-3" style={{
                          borderBottom: '1px solid #e9ecef'
                        }}>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5 className="mb-1" style={{ color: '#1B392F' }}>{pharmacy.name}</h5>
                              <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>{pharmacy.address}</p>
                            </div>
                            <div className="text-end">
                              <Badge bg="success" className="mb-2">Connected</Badge>
                              <p className="mb-0" style={{ fontWeight: 600, color: '#2c5530' }}>${pharmacy.totalSpent.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Tab>

                <Tab eventKey="history" title={
                  <span><FaHistory className="me-2" />Transaction History</span>
                }>
                  <Card style={{
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                  }}>
                    <Card.Body style={{ padding: '2rem' }}>
                      {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="mb-3 pb-3" style={{
                          borderBottom: '1px solid #e9ecef'
                        }}>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>{transaction.description}</h6>
                              <small className="text-muted">{transaction.date}</small>
                            </div>
                            <div style={{
                              fontSize: '1.1rem',
                              fontWeight: 700,
                              color: transaction.type === 'earned' || transaction.type === 'interest' ? '#2c5530' : '#e74c3c'
                            }}>
                              {transaction.type === 'earned' || transaction.type === 'interest' ? '+' : '-'}${transaction.amount.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>

        {/* Virtual Card Modal */}
        <Modal show={showVirtualCard} onHide={() => setShowVirtualCard(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Virtual Card Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mb-4">
              <div style={{
                background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                borderRadius: '15px',
                padding: '2rem',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                <FaCreditCard size={60} style={{ color: '#C4A962', marginBottom: '1rem' }} />
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>**** **** **** 1234</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Expires: 12/25</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Available Balance: ${subsidyBalance.toFixed(2)}</p>
              </div>
              <Alert variant="info">
                <FaShieldAlt className="me-2" />
                Your virtual card is secure and ready to use at any participating pharmacy. Simply show this card at checkout.
              </Alert>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowVirtualCard(false)}>
              Close
            </Button>
            <Button variant="primary" style={{
              background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
              border: 'none'
            }}>
              <FaDownload className="me-2" />
              Download Card
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Settings Modal */}
        <Modal show={showSettings} onHide={() => setShowSettings(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Account Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email Notifications</Form.Label>
                <Form.Check type="switch" defaultChecked label="Receive earnings notifications" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Compound Interest Vault</Form.Label>
                <Form.Select>
                  <option>Essentials Track (Conservative)</option>
                  <option>Maintenance Track (Balanced)</option>
                  <option>Future Care Track (High-Yield)</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Preferred Pharmacy</Form.Label>
                <Form.Select>
                  <option>CVS Pharmacy</option>
                  <option>Walgreens</option>
                  <option>Rite Aid</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSettings(false)}>
              Cancel
            </Button>
            <Button variant="primary" style={{
              background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
              border: 'none'
            }} onClick={() => setShowSettings(false)}>
              Save Settings
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      
      {/* Minimal Footer */}
      <footer style={{
        background: '#f8f9fa',
        padding: '1.5rem 0',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef',
        marginTop: '3rem'
      }}>
        <Container>
          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
            © 2025 Saint Daniels Healthcare. All rights reserved.
          </p>
        </Container>
      </footer>
    </PageTransition>
  );
}
