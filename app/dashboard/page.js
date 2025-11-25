'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Form, ProgressBar, Tab, Tabs, Alert } from 'react-bootstrap';
import { FaDollarSign, FaCreditCard, FaChartLine, FaGift, FaHospital, FaMobile, FaEye, FaLock, FaDownload, FaArrowUp, FaArrowDown, FaCalendarAlt, FaReceipt, FaStore, FaPercent, FaWallet, FaUser, FaCog, FaSignOutAlt, FaBell, FaHandshake, FaBullseye, FaUsers, FaShieldAlt, FaCheckCircle, FaClock, FaHistory, FaEnvelope, FaStar, FaTag } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Navbar from '../../components/Navbar';
import PageTransition from '../../components/PageTransition';

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('balance');
  const [showSettings, setShowSettings] = useState(false);
  const [showVirtualCard, setShowVirtualCard] = useState(false);
  const [chartPeriod, setChartPeriod] = useState('1W');

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

  // Balance history data for different time periods
  const getBalanceHistory = (period) => {
    switch(period) {
      case '1D':
        // Today - hourly data
        return [
          { time: 0, balance: 1240 },
          { time: 1, balance: 1242 },
          { time: 2, balance: 1243 },
          { time: 3, balance: 1244.5 },
          { time: 4, balance: 1245.5 },
          { time: 5, balance: 1246 },
          { time: 6, balance: 1247.50 }
        ];
      case '1W':
        // Last 7 days
        return [
          { time: 0, balance: 1100 },
          { time: 1, balance: 1125 },
          { time: 2, balance: 1150 },
          { time: 3, balance: 1180 },
          { time: 4, balance: 1200 },
          { time: 5, balance: 1225 },
          { time: 6, balance: 1247.50 }
        ];
      case '1M':
        // Last 30 days (weekly points)
        return [
          { time: 0, balance: 850 },
          { time: 1, balance: 920 },
          { time: 2, balance: 980 },
          { time: 3, balance: 1050 },
          { time: 4, balance: 1120 },
          { time: 5, balance: 1180 },
          { time: 6, balance: 1247.50 }
        ];
      case '3M':
        // Last 3 months (monthly points)
        return [
          { time: 0, balance: 600 },
          { time: 1, balance: 750 },
          { time: 2, balance: 900 },
          { time: 3, balance: 1100 },
          { time: 4, balance: 1247.50 }
        ];
      case '1Y':
        // Last year (monthly points)
        return [
          { time: 0, balance: 200 },
          { time: 1, balance: 350 },
          { time: 2, balance: 500 },
          { time: 3, balance: 650 },
          { time: 4, balance: 800 },
          { time: 5, balance: 950 },
          { time: 6, balance: 1100 },
          { time: 7, balance: 1150 },
          { time: 8, balance: 1200 },
          { time: 9, balance: 1220 },
          { time: 10, balance: 1235 },
          { time: 11, balance: 1247.50 }
        ];
      case '5Y':
        // Last 5 years (yearly points)
        return [
          { time: 0, balance: 0 },
          { time: 1, balance: 150 },
          { time: 2, balance: 400 },
          { time: 3, balance: 750 },
          { time: 4, balance: 1100 },
          { time: 5, balance: 1247.50 }
        ];
      case 'MAX':
        // All time (yearly points)
        return [
          { time: 0, balance: 0 },
          { time: 1, balance: 150 },
          { time: 2, balance: 400 },
          { time: 3, balance: 750 },
          { time: 4, balance: 1100 },
          { time: 5, balance: 1247.50 }
        ];
      default:
        return [
          { time: 0, balance: 1100 },
          { time: 1, balance: 1125 },
          { time: 2, balance: 1150 },
          { time: 3, balance: 1180 },
          { time: 4, balance: 1200 },
          { time: 5, balance: 1225 },
          { time: 6, balance: 1247.50 }
        ];
    }
  };

  const balanceHistory = getBalanceHistory(chartPeriod);

  // Ad data for mailbox
  const seenAds = [
    {
      id: 1,
      brand: 'Health Brand A',
      subject: 'Cardiovascular Health Education',
      preview: 'Learn about heart health and earn $12.50 in your private subsidy',
      earnings: 12.50,
      date: '2 hours ago',
      read: true,
      category: 'Cardiovascular'
    },
    {
      id: 2,
      brand: 'Wellness Brand B',
      subject: 'Nutrition & Metabolism Insights',
      preview: 'Discover how nutrition affects your metabolism and unlock $8.75',
      earnings: 8.75,
      date: '1 day ago',
      read: true,
      category: 'Nutrition'
    },
    {
      id: 3,
      brand: 'Pharma Brand C',
      subject: 'Mental Health Awareness Campaign',
      preview: 'Support mental health awareness and earn rewards',
      earnings: 15.00,
      date: '2 days ago',
      read: false,
      category: 'Mental Health'
    },
    {
      id: 4,
      brand: 'Health Brand D',
      subject: 'Preventive Care Information',
      preview: 'Learn about preventive care strategies and earn $10.25',
      earnings: 10.25,
      date: '3 days ago',
      read: true,
      category: 'Preventive Care'
    }
  ];

  const qualifiedAds = [
    {
      id: 5,
      brand: 'Pharma Brand E',
      subject: 'Diabetes Management Program',
      preview: 'Join our diabetes management program and earn $20.00',
      earnings: 20.00,
      category: 'Diabetes',
      expires: '3 days'
    },
    {
      id: 6,
      brand: 'Wellness Brand F',
      subject: 'Fitness & Exercise Guide',
      preview: 'Get personalized fitness recommendations and earn $15.50',
      earnings: 15.50,
      category: 'Fitness',
      expires: '5 days'
    },
    {
      id: 7,
      brand: 'Health Brand G',
      subject: 'Women\'s Health Initiative',
      preview: 'Access women\'s health resources and earn $18.75',
      earnings: 18.75,
      category: 'Women\'s Health',
      expires: '7 days'
    },
    {
      id: 8,
      brand: 'Pharma Brand H',
      subject: 'Chronic Pain Management',
      preview: 'Learn about chronic pain management and earn $22.00',
      earnings: 22.00,
      category: 'Pain Management',
      expires: '2 days'
    }
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
                  <Row className="justify-content-center">
                    <Col lg={10} xl={8}>
                      <Card style={{
                        border: 'none',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                        background: 'white'
                      }}>
                        <Card.Body style={{ padding: '2rem' }}>
                          {/* Chart Display */}
                          <div style={{ width: '100%', height: '300px', position: 'relative', marginBottom: '2rem' }}>
                            <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                              <defs>
                                <linearGradient id="balanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#2c5530" stopOpacity="0.15" />
                                  <stop offset="100%" stopColor="#2c5530" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              {(() => {
                                const minBalance = Math.min(...balanceHistory.map(b => b.balance));
                                const maxBalance = Math.max(...balanceHistory.map(b => b.balance));
                                const range = maxBalance - minBalance || 100;
                                const padding = range * 0.15;
                                const chartHeight = 260;
                                const chartWidth = 280;
                                const stepX = balanceHistory.length > 1 ? chartWidth / (balanceHistory.length - 1) : 0;
                                
                                const points = balanceHistory.map((item, index) => {
                                  const x = 10 + (index * stepX);
                                  const y = 290 - ((item.balance - minBalance + padding) / (range + padding * 2)) * chartHeight;
                                  return { x, y, balance: item.balance };
                                });
                                
                                const pathData = points.map((p, i) => 
                                  i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`
                                ).join(' ');
                                
                                const areaPath = `${pathData} L ${points[points.length - 1].x} 300 L ${points[0].x} 300 Z`;
                                
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
                                    {/* Grid lines */}
                                    <line x1="10" y1="300" x2="290" y2="300" stroke="#e5e5e5" strokeWidth="1" />
                                    <line x1="10" y1="230" x2="290" y2="230" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                                    <line x1="10" y1="160" x2="290" y2="160" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                                    <line x1="10" y1="90" x2="290" y2="90" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                                  </>
                                );
                              })()}
                            </svg>
                          </div>

                          {/* Stats Display */}
                          {(() => {
                            const firstBalance = balanceHistory[0].balance;
                            const lastBalance = balanceHistory[balanceHistory.length - 1].balance;
                            const change = lastBalance - firstBalance;
                            const changePercent = firstBalance > 0 ? ((change / firstBalance) * 100) : 0;
                            const isPositive = change >= 0;
                            
                            return (
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingBottom: '1.5rem',
                                marginBottom: '1.5rem',
                                borderBottom: '1px solid #f0f0f0'
                              }}>
                                <div>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: '#8e8e93',
                                    marginBottom: '0.5rem',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    Current Balance
                                  </div>
                                  <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 700,
                                    color: '#000000',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    letterSpacing: '-0.02em'
                                  }}>
                                    ${lastBalance.toFixed(2)}
                                  </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: '#8e8e93',
                                    marginBottom: '0.5rem',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    {chartPeriod === '1D' ? 'Today' : chartPeriod === '1W' ? 'This Week' : chartPeriod === '1M' ? 'This Month' : chartPeriod === '3M' ? '3 Months' : chartPeriod === '1Y' ? 'This Year' : chartPeriod === '5Y' ? '5 Years' : 'All Time'}
                                  </div>
                                  <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: isPositive ? '#2c5530' : '#e74c3c',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    {isPositive ? '+' : ''}${change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
                                  </div>
                                </div>
                              </div>
                            );
                          })()}

                          {/* Time Period Buttons */}
                          <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                          }}>
                            {['1D', '1W', '1M', '3M', '1Y', '5Y', 'MAX'].map((period) => (
                              <button
                                key={period}
                                onClick={() => setChartPeriod(period)}
                                style={{
                                  padding: '0.5rem 1rem',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                  borderRadius: '6px',
                                  border: 'none',
                                  background: chartPeriod === period ? '#000000' : '#f5f5f5',
                                  color: chartPeriod === period ? '#ffffff' : '#666666',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                  letterSpacing: '0.3px'
                                }}
                                onMouseEnter={(e) => {
                                  if (chartPeriod !== period) {
                                    e.target.style.background = '#e5e5e5';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (chartPeriod !== period) {
                                    e.target.style.background = '#f5f5f5';
                                  }
                                }}
                              >
                                {period}
                              </button>
                            ))}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="mailbox" title={
                  <span><FaEnvelope className="me-2" />Mailbox</span>
                }>
                  <Row>
                    {/* Seen Ads Section */}
                    <Col lg={6}>
                      <Card style={{
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                        marginBottom: '2rem',
                        background: 'white'
                      }}>
                        <Card.Header style={{
                          background: 'white',
                          border: 'none',
                          borderBottom: '1px solid #e5e5e5',
                          padding: '1rem 1.5rem',
                          borderRadius: '12px 12px 0 0'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <FaEye style={{ color: '#2c5530', fontSize: '1.1rem' }} />
                            <h5 style={{
                              margin: 0,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: '#1B392F',
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}>
                              Ads You've Seen
                            </h5>
                            <Badge bg="secondary" style={{
                              fontSize: '0.7rem',
                              padding: '0.25rem 0.5rem',
                              marginLeft: 'auto'
                            }}>
                              {seenAds.length}
                            </Badge>
                          </div>
                        </Card.Header>
                        <Card.Body style={{ padding: 0 }}>
                          {seenAds.map((ad, index) => (
                            <div
                              key={ad.id}
                              style={{
                                padding: '1rem 1.5rem',
                                borderBottom: index < seenAds.length - 1 ? '1px solid #f0f0f0' : 'none',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease',
                                background: ad.read ? 'white' : '#f8f9fa'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#f5f5f5';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = ad.read ? 'white' : '#f8f9fa';
                              }}
                            >
                              <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem'
                              }}>
                                <div style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                                  color: 'white',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '1rem',
                                  flexShrink: 0
                                }}>
                                  {ad.brand.charAt(0)}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '0.5rem'
                                  }}>
                                    <span style={{
                                      fontSize: '0.875rem',
                                      fontWeight: 600,
                                      color: '#1B392F',
                                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                    }}>
                                      {ad.brand}
                                    </span>
                                    {!ad.read && (
                                      <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#2c5530'
                                      }}></div>
                                    )}
                                    <Badge bg="success" style={{
                                      fontSize: '0.65rem',
                                      padding: '0.2rem 0.4rem',
                                      marginLeft: 'auto'
                                    }}>
                                      +${ad.earnings.toFixed(2)}
                                    </Badge>
                                  </div>
                                  <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: ad.read ? 400 : 600,
                                    color: '#333',
                                    marginBottom: '0.25rem',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    {ad.subject}
                                  </div>
                                  <div style={{
                                    fontSize: '0.8rem',
                                    color: '#666',
                                    marginBottom: '0.5rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                  }}>
                                    {ad.preview}
                                  </div>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    fontSize: '0.75rem',
                                    color: '#8e8e93'
                                  }}>
                                    <span>{ad.date}</span>
                                    <span>•</span>
                                    <FaTag style={{ fontSize: '0.7rem' }} />
                                    <span>{ad.category}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* Qualified Ads Section */}
                    <Col lg={6}>
                      <Card style={{
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                        marginBottom: '2rem',
                        background: 'white'
                      }}>
                        <Card.Header style={{
                          background: 'white',
                          border: 'none',
                          borderBottom: '1px solid #e5e5e5',
                          padding: '1rem 1.5rem',
                          borderRadius: '12px 12px 0 0'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <FaGift style={{ color: '#C4A962', fontSize: '1.1rem' }} />
                            <h5 style={{
                              margin: 0,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: '#1B392F',
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}>
                              Ads You Qualify For
                            </h5>
                            <Badge bg="warning" style={{
                              fontSize: '0.7rem',
                              padding: '0.25rem 0.5rem',
                              marginLeft: 'auto'
                            }}>
                              {qualifiedAds.length}
                            </Badge>
                          </div>
                        </Card.Header>
                        <Card.Body style={{ padding: 0 }}>
                          {qualifiedAds.map((ad, index) => (
                            <div
                              key={ad.id}
                              style={{
                                padding: '1rem 1.5rem',
                                borderBottom: index < qualifiedAds.length - 1 ? '1px solid #f0f0f0' : 'none',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease',
                                background: 'white'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#f5f5f5';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'white';
                              }}
                            >
                              <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem'
                              }}>
                                <div style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #C4A962 0%, #b39855 100%)',
                                  color: 'white',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '1rem',
                                  flexShrink: 0
                                }}>
                                  {ad.brand.charAt(0)}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '0.5rem'
                                  }}>
                                    <span style={{
                                      fontSize: '0.875rem',
                                      fontWeight: 600,
                                      color: '#1B392F',
                                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                    }}>
                                      {ad.brand}
                                    </span>
                                    <Badge bg="warning" style={{
                                      fontSize: '0.65rem',
                                      padding: '0.2rem 0.4rem',
                                      marginLeft: 'auto'
                                    }}>
                                      +${ad.earnings.toFixed(2)}
                                    </Badge>
                                  </div>
                                  <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: '#333',
                                    marginBottom: '0.25rem',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    {ad.subject}
                                  </div>
                                  <div style={{
                                    fontSize: '0.8rem',
                                    color: '#666',
                                    marginBottom: '0.5rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                  }}>
                                    {ad.preview}
                                  </div>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    fontSize: '0.75rem',
                                    color: '#8e8e93'
                                  }}>
                                    <FaTag style={{ fontSize: '0.7rem' }} />
                                    <span>{ad.category}</span>
                                    <span>•</span>
                                    <span style={{ color: '#C4A962', fontWeight: 600 }}>
                                      Expires in {ad.expires}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
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
