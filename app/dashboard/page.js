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
  const [activeTab, setActiveTab] = useState('overview');
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
                <Tab eventKey="overview" title={
                  <span><FaChartLine className="me-2" />Overview</span>
                }>
                  <Row>
                    {/* Main Dashboard Stats */}
                    <Col lg={8}>
                      <Card className="metrics-card mb-3" style={{
                        border: 'none',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                      }}>
                        <Card.Header style={{
                          background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '15px 15px 0 0'
                        }}>
                          <div className="d-flex justify-content-between align-items-center">
                            <h3 className="mb-0">Private Subsidy Balance</h3>
                            <Badge bg="light" text="dark" style={{ fontSize: '0.9rem' }}>Live Data</Badge>
                          </div>
                        </Card.Header>
                        <Card.Body style={{ padding: '1.5rem' }}>
                          <Row>
                            {quickStats.map((stat, index) => (
                              <Col md={6} lg={3} key={index} className="mb-2">
                                <div className="metric-item" style={{
                                  textAlign: 'center',
                                  padding: '1.5rem',
                                  background: '#f8f9fa',
                                  borderRadius: '12px',
                                  height: '100%'
                                }}>
                                  <div className="metric-icon" style={{
                                    color: stat.color,
                                    fontSize: '2rem',
                                    marginBottom: '1rem'
                                  }}>
                                    {stat.icon}
                                  </div>
                                  <div className="metric-content">
                                    <h6 className="metric-label" style={{
                                      fontSize: '0.85rem',
                                      color: '#666',
                                      marginBottom: '0.5rem',
                                      fontWeight: 500
                                    }}>{stat.label}</h6>
                                    <h4 className="metric-value" style={{
                                      fontSize: '1.75rem',
                                      fontWeight: 700,
                                      color: stat.color,
                                      marginBottom: '0.5rem'
                                    }}>{stat.value}</h4>
                                    <Badge bg={stat.changeType === 'positive' ? 'success' : 'secondary'} style={{ fontSize: '0.75rem' }}>
                                      {stat.change}
                                    </Badge>
                                  </div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Card.Body>
                      </Card>

                    </Col>

                    {/* Sidebar */}
                    <Col lg={4}>
                      {/* Virtual Card */}
                      <Card className="resources-card mb-3" style={{
                        border: 'none',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                        background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                        color: 'white'
                      }}>
                        <Card.Header style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'white'
                        }}>
                          <h5 className="mb-0">Virtual Card</h5>
                        </Card.Header>
                        <Card.Body style={{ padding: '1.5rem' }}>
                          <div className="text-center mb-2">
                            <FaCreditCard size={50} style={{ color: '#C4A962', marginBottom: '0.75rem' }} />
                            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>**** **** **** 1234</h4>
                            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Available Balance: ${subsidyBalance.toFixed(2)}</p>
                          </div>
                          <Button 
                            variant="light" 
                            className="w-100"
                            onClick={() => setShowVirtualCard(true)}
                            style={{
                              background: 'white',
                              color: '#2c5530',
                              border: 'none',
                              fontWeight: 600
                            }}
                          >
                            <FaEye className="me-2" />
                            View Card Details
                          </Button>
                        </Card.Body>
                      </Card>

                      {/* Ad Network Activity */}
                      <Card className="progress-card mb-3" style={{
                        border: 'none',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                      }}>
                        <Card.Header style={{
                          background: 'white',
                          border: 'none',
                          borderBottom: '2px solid #e9ecef',
                          borderRadius: '15px 15px 0 0'
                        }}>
                          <h5 className="mb-0">Ad Network Activity</h5>
                        </Card.Header>
                        <Card.Body style={{ padding: '1.5rem 1.5rem 1rem 1.5rem' }}>
                          {adNetworkActivity.map((activity, index, array) => (
                            <div key={activity.id} className="activity-item" style={{
                              padding: '1rem',
                              marginBottom: index === array.length - 1 ? '0' : '0.75rem',
                              background: activity.status === 'available' ? '#f0f7f4' : '#f8f9fa',
                              borderRadius: '10px',
                              border: activity.status === 'available' ? '2px solid #2c5530' : '1px solid #e9ecef'
                            }}>
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                  <h6 className="mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>{activity.brand}</h6>
                                  <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>{activity.campaign}</p>
                                </div>
                                <Badge bg={activity.status === 'completed' ? 'success' : 'primary'}>
                                  {activity.status === 'completed' ? 'Completed' : 'Available'}
                                </Badge>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <span style={{ fontWeight: 600, color: '#2c5530' }}>${activity.earnings.toFixed(2)}</span>
                                <small className="text-muted">{activity.date}</small>
                              </div>
                            </div>
                          ))}
                        </Card.Body>
                      </Card>

                      {/* Compound Interest Info */}
                      <Card className="analytics-card" style={{
                        border: 'none',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                      }}>
                        <Card.Header style={{
                          background: 'transparent',
                          border: 'none'
                        }}>
                          <h5 className="mb-0">Compound Interest</h5>
                        </Card.Header>
                        <Card.Body style={{ padding: '1.5rem' }}>
                          <div className="text-center mb-3">
                            <FaChartLine size={40} style={{ color: '#C4A962', marginBottom: '1rem' }} />
                            <h3 style={{ color: '#2c5530', marginBottom: '0.5rem' }}>{compoundInterest}%</h3>
                            <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>Daily compound rate on unused balance</p>
                          </div>
                          <div className="interest-info">
                            <div className="d-flex justify-content-between mb-2">
                              <span style={{ fontSize: '0.9rem' }}>Current Balance:</span>
                              <span style={{ fontWeight: 600, color: '#2c5530' }}>${subsidyBalance.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                              <span style={{ fontSize: '0.9rem' }}>Daily Interest:</span>
                              <span style={{ fontWeight: 600, color: '#C4A962' }}>+${(subsidyBalance * compoundInterest / 100 / 365).toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span style={{ fontSize: '0.9rem' }}>Projected 30-Day Growth:</span>
                              <span style={{ fontWeight: 600, color: '#2c5530' }}>+${(subsidyBalance * compoundInterest / 100 / 12).toFixed(2)}</span>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="pharmacy" title={
                  <span><FaHospital className="me-2" />Pharmacy Network</span>
                }>
                  <Row>
                    <Col lg={8}>
                      <Card className="mb-4" style={{
                        border: 'none',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                      }}>
                        <Card.Header style={{
                          background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '15px 15px 0 0'
                        }}>
                          <h3 className="mb-0">Connected Pharmacies</h3>
                        </Card.Header>
                        <Card.Body style={{ padding: '2rem' }}>
                          {pharmacyNetwork.map((pharmacy) => (
                            <div key={pharmacy.id} className="pharmacy-item mb-4" style={{
                              padding: '1.5rem',
                              background: '#f8f9fa',
                              borderRadius: '12px',
                              border: '1px solid #e9ecef'
                            }}>
                              <div className="d-flex align-items-start">
                                <div className="pharmacy-icon me-3" style={{
                                  width: '60px',
                                  height: '60px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                                  color: 'white',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '1.5rem'
                                }}>
                                  <FaHospital />
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between align-items-start mb-2">
                                    <div>
                                      <h5 className="mb-1" style={{ color: '#1B392F' }}>{pharmacy.name}</h5>
                                      <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>{pharmacy.address}</p>
                                    </div>
                                    <Badge bg="success">Connected</Badge>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                      <small className="text-muted">Last Used:</small>
                                      <p className="mb-0" style={{ fontWeight: 500 }}>{pharmacy.lastUsed}</p>
                                    </div>
                                    <div className="text-end">
                                      <small className="text-muted">Total Spent:</small>
                                      <p className="mb-0" style={{ fontWeight: 600, color: '#2c5530' }}>${pharmacy.totalSpent.toFixed(2)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <Button 
                            variant="primary" 
                            className="w-100 mt-3"
                            style={{
                              background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                              border: 'none'
                            }}
                          >
                            <FaHospital className="me-2" />
                            Connect New Pharmacy
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col lg={4}>
                      <Card style={{
                        border: 'none',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                      }}>
                        <Card.Header style={{
                          background: 'white',
                          border: 'none',
                          borderBottom: '2px solid #e9ecef',
                          borderRadius: '15px 15px 0 0'
                        }}>
                          <h5 className="mb-0">Spending Summary</h5>
                        </Card.Header>
                        <Card.Body style={{ padding: '1.5rem' }}>
                          <div className="summary-stats">
                            <div className="stat-item mb-3" style={{
                              padding: '1rem',
                              background: '#f8f9fa',
                              borderRadius: '10px'
                            }}>
                              <div className="d-flex justify-content-between align-items-center">
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>Total Earned</span>
                                <span style={{ fontWeight: 700, color: '#2c5530', fontSize: '1.1rem' }}>${totalEarned.toFixed(2)}</span>
                              </div>
                            </div>
                            <div className="stat-item mb-3" style={{
                              padding: '1rem',
                              background: '#f8f9fa',
                              borderRadius: '10px'
                            }}>
                              <div className="d-flex justify-content-between align-items-center">
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>Total Spent</span>
                                <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>${totalSpent.toFixed(2)}</span>
                              </div>
                            </div>
                            <div className="stat-item" style={{
                              padding: '1rem',
                              background: 'linear-gradient(135deg, #f0f7f4 0%, #e8f5ea 100%)',
                              borderRadius: '10px',
                              border: '2px solid #2c5530'
                            }}>
                              <div className="d-flex justify-content-between align-items-center">
                                <span style={{ fontSize: '0.9rem', color: '#1B392F', fontWeight: 600 }}>Available Balance</span>
                                <span style={{ fontWeight: 700, color: '#2c5530', fontSize: '1.25rem' }}>${subsidyBalance.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="history" title={
                  <span><FaHistory className="me-2" />Transaction History</span>
                }>
                  <Card style={{
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                  }}>
                    <Card.Header style={{
                      background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '15px 15px 0 0'
                    }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="mb-0">Complete Transaction History</h3>
                        <Button variant="light" size="sm">
                          <FaDownload className="me-2" />
                          Export
                        </Button>
                      </div>
                    </Card.Header>
                    <Card.Body style={{ padding: '2rem' }}>
                      <div className="transactions-list">
                        {[...recentTransactions, ...recentTransactions.map(t => ({ ...t, id: t.id + 10 }))].map((transaction) => (
                          <div key={transaction.id} className="transaction-item" style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.25rem',
                            marginBottom: '1rem',
                            background: '#f8f9fa',
                            borderRadius: '10px',
                            border: '1px solid #e9ecef'
                          }}>
                            <div className="transaction-icon" style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '50%',
                              background: transaction.type === 'earned' ? 'rgba(44, 85, 48, 0.1)' : transaction.type === 'spent' ? 'rgba(231, 76, 60, 0.1)' : 'rgba(196, 169, 98, 0.1)',
                              color: transaction.type === 'earned' ? '#2c5530' : transaction.type === 'spent' ? '#e74c3c' : '#C4A962',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '1rem',
                              fontSize: '1.25rem'
                            }}>
                              {transaction.icon}
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>{transaction.description}</h6>
                              <div className="d-flex align-items-center gap-3">
                                <Badge bg={transaction.category === 'Earning' ? 'success' : transaction.category === 'Pharmacy' ? 'primary' : 'warning'}>
                                  {transaction.category}
                                </Badge>
                                <small className="text-muted">{transaction.date}</small>
                              </div>
                            </div>
                            <div className="transaction-amount" style={{
                              fontSize: '1.25rem',
                              fontWeight: 700,
                              color: transaction.type === 'earned' || transaction.type === 'interest' ? '#2c5530' : '#e74c3c'
                            }}>
                              {transaction.type === 'earned' || transaction.type === 'interest' ? '+' : '-'}${transaction.amount.toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
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
