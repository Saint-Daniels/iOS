'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaDollarSign, FaChartLine, FaLightbulb, FaExclamationTriangle, FaSearch, FaFileAlt, FaDownload, FaComments, FaMobile, FaHospital, FaFileInvoiceDollar, FaIdCard, FaHome, FaUniversity, FaPassport, FaCertificate, FaFileContract } from 'react-icons/fa';
import MainNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn, ScrollSlideIn } from '../../components/ScrollAnimation';
import Image from 'next/image';

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showReportModal, setShowReportModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [reportForm, setReportForm] = useState({
    type: '',
    subject: '',
    description: '',
    priority: 'medium',
    contact: ''
  });
  const [infoForm, setInfoForm] = useState({
    interest: '',
    experience: '',
    goals: '',
    timeline: '',
    contact: ''
  });
  const faqs = [
    {
      question: "How do I earn private subsidies?",
      answer: "You earn private subsidies by engaging with verified health brands in our ad network. When you opt in to sponsored health content and complete activities, advertisers deposit real dollars into your private subsidy wallet instantly.",
      category: "Earning Rewards"
    },
    {
      question: "Where can I spend my private subsidy?",
      answer: "You can spend your private subsidy at thousands of participating pharmacies nationwide. Simply show your virtual card at checkout, and your subsidy is instantly applied to eligible prescriptions, OTC items, or preventative care products.",
      category: "Spending Rewards"
    },
    {
      question: "How does compound interest work on unused rewards?",
      answer: "Unused private subsidies automatically earn daily compound interest through our healthcare treasury. You can choose from different vault strategies (Essentials, Maintenance, or Future Care) to align with your health goals and watch your balance grow over time.",
      category: "Compound Interest"
    },
    {
      question: "How do I access program documents?",
      answer: "You can access all program documentation through the Documents section, including healthcare rewards guides, application forms, privacy policies, and program documentation.",
      category: "Resources"
    },
    {
      question: "How do I update my account information?",
      answer: "Log in to your account, go to 'Account Settings', and you can update your personal information, pharmacy preferences, vault settings, and communication preferences.",
      category: "Account"
    },
    {
      question: "What are the customer support hours?",
      answer: "Our healthcare rewards support team is available Monday through Friday, from 9am to 5pm CST. You can reach us by phone at 888-324-6642 or through our contact form.",
      category: "Support"
    },
    {
      question: "How do I connect my preferred pharmacy?",
      answer: "You can connect your preferred pharmacy through the application form or by updating your account settings. Once connected, you can use your virtual card at that pharmacy location.",
      category: "Pharmacy Network"
    },
    {
      question: "Is there a cost to join the healthcare rewards program?",
      answer: "No, membership is completely free. Your private subsidy is 100% brand-funded and member-owned. There are no fees, premiums, or hidden costs.",
      category: "Billing"
    },
    {
      question: "How do I report a concern or issue?",
      answer: "You can report concerns through our secure reporting system. Click the 'Report Issue' button above to submit your issue. All reports are confidential and reviewed within 24 hours.",
      category: "Support"
    },
  ];


  const quickActions = [
    {
      title: "Start Application",
      icon: <FaFileAlt size={20} />,
      description: "Begin your healthcare rewards enrollment",
      action: "Apply Now",
      color: "#2c5530",
      link: "/application"
    },
    {
      title: "Browse Documents",
      icon: <FaDownload size={20} />,
      description: "Access program documentation and forms",
      action: "View Documents",
      color: "#C4A962",
      link: "/resources"
    },
    {
      title: "Learn More",
      icon: <FaLightbulb size={20} />,
      description: "Understand how the program works",
      action: "Learn More",
      color: "#2c5530",
      link: "/learnmore"
    },
    {
      question: "Contact Support",
      icon: <FaComments size={20} />,
      description: "Get help with your account or questions",
      action: "Contact Us",
      color: "#C4A962",
      link: "/contact"
    }
  ];

  const handleReportSubmit = (e) => {
    e.preventDefault();
    // Handle report submission
    console.log('Report submitted:', reportForm);
    setShowReportModal(false);
    setReportForm({ type: '', subject: '', description: '', priority: 'medium', contact: '' });
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    // Handle information request
    console.log('Info request submitted:', infoForm);
    setShowInfoModal(false);
    setInfoForm({ interest: '', experience: '', goals: '', timeline: '', contact: '' });
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const helpCategories = [
    {
      title: "Earning Rewards",
      icon: <FaDollarSign size={32} />,
      description: "Learn how to earn private subsidies through our ad network and sponsored content.",
      color: "#2c5530"
    },
    {
      title: "Pharmacy Network",
      icon: <FaHospital size={32} />,
      description: "Find participating pharmacies and learn how to redeem your private subsidy.",
      color: "#C4A962"
    },
    {
      title: "Compound Interest",
      icon: <FaChartLine size={32} />,
      description: "Understand how unused rewards grow through our compound network treasury.",
      color: "#2c5530"
    },
    {
      title: "Account Management",
      icon: <FaMobile size={32} />,
      description: "Manage your account, update preferences, and track your subsidy balance.",
      color: "#C4A962"
    }
  ];

  return (
    <PageTransition>
      <MainNavbar />
      <div className="help-center-page">
        {/* Hero Section */}
        <section className="mission-section-professional" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center text-center">
                <Col lg={10}>
                  <h1 className="mission-title-professional">Help Center</h1>
                  <div className="mission-divider" style={{ margin: '1.5rem auto' }}></div>
                  <p className="mission-description-professional" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    Your comprehensive resource for healthcare rewards support, guidance, and assistance
                  </p>
                  
                  {/* Search Bar */}
                  <div className="help-search-container mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="search-input-wrapper" style={{ position: 'relative' }}>
                      <FaSearch style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#C4A962',
                        fontSize: '1.2rem',
                        zIndex: 10
                      }} />
                      <Form.Control
                        type="text"
                        placeholder="Search for help topics, questions, or resources..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="help-search-input"
                        style={{
                          paddingLeft: '3rem',
                          borderRadius: '12px',
                          border: '2px solid #C4A962',
                          fontSize: '1rem',
                          padding: '0.75rem 1rem 0.75rem 3rem',
                          height: '50px'
                        }}
                      />
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <Row className="g-4 mb-5">
                    {quickActions.map((action, index) => (
                      <Col lg={3} md={6} key={index}>
                        <ScrollFadeIn delay={index * 0.15}>
                          <Button 
                            className="quick-action-btn w-100"
                            style={{ 
                              background: `linear-gradient(135deg, ${action.color} 0%, ${action.color === '#2c5530' ? '#4a7c59' : '#b39855'} 100%)`,
                              border: 'none',
                              borderRadius: '12px',
                              padding: '1.25rem',
                              fontWeight: 600,
                              fontSize: '1rem',
                              height: '100%',
                              minHeight: '80px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.75rem',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'translateY(-3px)';
                              e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                            onClick={() => window.location.href = action.link}
                          >
                            <div style={{ fontSize: '1.5rem' }}>{action.icon}</div>
                            <span>{action.action}</span>
                          </Button>
                        </ScrollFadeIn>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>



        {/* Required Documents Section */}
        <section className="service-fullpage-section">
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <div className="service-header">
                    <h2 className="service-title-large">Required Documents</h2>
                    <div className="service-divider"></div>
                    <p className="mission-description-professional" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
                      Access important documents needed to complete your healthcare rewards enrollment and verify your eligibility
                    </p>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.1}>
                  <Card style={{
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  >
                    <div style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      borderBottom: '1px solid #e9ecef',
                      padding: '20px'
                    }}>
                      <div style={{
                        width: '120px',
                        height: '160px',
                        background: 'white',
                        borderRadius: '2px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '40px',
                          background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                          borderRadius: '2px 2px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FaFileInvoiceDollar size={20} style={{ color: 'white' }} />
                        </div>
                        <div style={{
                          marginTop: '50px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '0 12px'
                        }}>
                          <div style={{
                            width: '100%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '80%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '90%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          width: '0',
                          height: '0',
                          borderLeft: '20px solid transparent',
                          borderTop: '20px solid rgba(196, 169, 98, 0.8)',
                          borderRadius: '0 2px 0 0'
                        }}></div>
                      </div>
                    </div>
                    <Card.Body style={{ padding: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1B392F',
                        marginBottom: '0.5rem'
                      }}>
                        Tax Documents
                      </h4>
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        color: '#666',
                        marginBottom: '0'
                      }}>
                        W-2 forms, 1099s, or tax returns for income verification
                      </p>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>

              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.2}>
                  <Card style={{
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  >
                    <div style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      borderBottom: '1px solid #e9ecef',
                      padding: '20px'
                    }}>
                      <div style={{
                        width: '120px',
                        height: '160px',
                        background: 'white',
                        borderRadius: '2px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '40px',
                          background: 'linear-gradient(135deg, #C4A962 0%, #b39855 100%)',
                          borderRadius: '2px 2px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FaIdCard size={20} style={{ color: '#1B392F' }} />
                        </div>
                        <div style={{
                          marginTop: '50px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '0 12px'
                        }}>
                          <div style={{
                            width: '100%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '80%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '90%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          width: '0',
                          height: '0',
                          borderLeft: '20px solid transparent',
                          borderTop: '20px solid rgba(44, 85, 48, 0.8)',
                          borderRadius: '0 2px 0 0'
                        }}></div>
                      </div>
                    </div>
                    <Card.Body style={{ padding: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1B392F',
                        marginBottom: '0.5rem'
                      }}>
                        Citizenship Verification
                      </h4>
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        color: '#666',
                        marginBottom: '0'
                      }}>
                        Birth certificate, passport, or naturalization certificate
                      </p>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>

              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.3}>
                  <Card style={{
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  >
                    <div style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      borderBottom: '1px solid #e9ecef',
                      padding: '20px'
                    }}>
                      <div style={{
                        width: '120px',
                        height: '160px',
                        background: 'white',
                        borderRadius: '2px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '40px',
                          background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                          borderRadius: '2px 2px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FaHome size={20} style={{ color: 'white' }} />
                        </div>
                        <div style={{
                          marginTop: '50px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '0 12px'
                        }}>
                          <div style={{
                            width: '100%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '80%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '90%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          width: '0',
                          height: '0',
                          borderLeft: '20px solid transparent',
                          borderTop: '20px solid rgba(196, 169, 98, 0.8)',
                          borderRadius: '0 2px 0 0'
                        }}></div>
                      </div>
                    </div>
                    <Card.Body style={{ padding: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1B392F',
                        marginBottom: '0.5rem'
                      }}>
                        Residence Verification
                      </h4>
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        color: '#666',
                        marginBottom: '0'
                      }}>
                        Utility bills, lease agreement, or mortgage statement
                      </p>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>

              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.4}>
                  <Card style={{
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  >
                    <div style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      borderBottom: '1px solid #e9ecef',
                      padding: '20px'
                    }}>
                      <div style={{
                        width: '120px',
                        height: '160px',
                        background: 'white',
                        borderRadius: '2px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '40px',
                          background: 'linear-gradient(135deg, #C4A962 0%, #b39855 100%)',
                          borderRadius: '2px 2px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FaUniversity size={20} style={{ color: '#1B392F' }} />
                        </div>
                        <div style={{
                          marginTop: '50px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '0 12px'
                        }}>
                          <div style={{
                            width: '100%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '80%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '90%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          width: '0',
                          height: '0',
                          borderLeft: '20px solid transparent',
                          borderTop: '20px solid rgba(44, 85, 48, 0.8)',
                          borderRadius: '0 2px 0 0'
                        }}></div>
                      </div>
                    </div>
                    <Card.Body style={{ padding: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1B392F',
                        marginBottom: '0.5rem'
                      }}>
                        Bank Information
                      </h4>
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        color: '#666',
                        marginBottom: '0'
                      }}>
                        Bank statements or account verification for direct deposit setup
                      </p>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>

              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.5}>
                  <Card style={{
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  >
                    <div style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      borderBottom: '1px solid #e9ecef',
                      padding: '20px'
                    }}>
                      <div style={{
                        width: '120px',
                        height: '160px',
                        background: 'white',
                        borderRadius: '2px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '40px',
                          background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                          borderRadius: '2px 2px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FaPassport size={20} style={{ color: 'white' }} />
                        </div>
                        <div style={{
                          marginTop: '50px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '0 12px'
                        }}>
                          <div style={{
                            width: '100%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '80%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '90%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          width: '0',
                          height: '0',
                          borderLeft: '20px solid transparent',
                          borderTop: '20px solid rgba(196, 169, 98, 0.8)',
                          borderRadius: '0 2px 0 0'
                        }}></div>
                      </div>
                    </div>
                    <Card.Body style={{ padding: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1B392F',
                        marginBottom: '0.5rem'
                      }}>
                        Identity Documents
                      </h4>
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        color: '#666',
                        marginBottom: '0'
                      }}>
                        Driver's license, state ID, or government-issued identification
                      </p>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>

              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.6}>
                  <Card style={{
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  >
                    <div style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      borderBottom: '1px solid #e9ecef',
                      padding: '20px'
                    }}>
                      <div style={{
                        width: '120px',
                        height: '160px',
                        background: 'white',
                        borderRadius: '2px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '40px',
                          background: 'linear-gradient(135deg, #C4A962 0%, #b39855 100%)',
                          borderRadius: '2px 2px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FaCertificate size={20} style={{ color: '#1B392F' }} />
                        </div>
                        <div style={{
                          marginTop: '50px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '0 12px'
                        }}>
                          <div style={{
                            width: '100%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '80%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                          <div style={{
                            width: '90%',
                            height: '3px',
                            background: '#e9ecef',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          width: '0',
                          height: '0',
                          borderLeft: '20px solid transparent',
                          borderTop: '20px solid rgba(44, 85, 48, 0.8)',
                          borderRadius: '0 2px 0 0'
                        }}></div>
                      </div>
                    </div>
                    <Card.Body style={{ padding: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1B392F',
                        marginBottom: '0.5rem'
                      }}>
                        Employment Verification
                      </h4>
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        color: '#666',
                        marginBottom: '0'
                      }}>
                        Pay stubs, employment letter, or employer verification forms
                      </p>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="service-fullpage-section" style={{ background: '#f8f9fa' }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <div className="service-header">
                    <h2 className="service-title-large">Still Need Help?</h2>
                    <div className="service-divider"></div>
                    <p className="mission-description-professional" style={{ marginTop: '1rem' }}>
                      Our healthcare rewards support team is here to assist you
                    </p>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <Card className="contact-card" style={{
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                  }}
                  >
                    <Card.Body className="text-center" style={{ padding: '3rem 2rem' }}>
                      <div className="contact-icon" style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        fontSize: '2rem'
                      }}>
                        <FaPhone />
                      </div>
                      <h3 className="contact-title" style={{
                        fontSize: '1.75rem',
                        fontWeight: 600,
                        color: '#1B392F',
                        marginBottom: '1rem'
                      }}>Call Us</h3>
                      <p className="contact-info" style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#C4A962',
                        marginBottom: '0.75rem'
                      }}>888-324-6642</p>
                      <p className="contact-hours" style={{
                        fontSize: '1rem',
                        color: '#666',
                        marginBottom: '1rem',
                        fontWeight: 500
                      }}>Monday-Friday, 9am-5pm CST</p>
                      <p className="contact-description" style={{
                        fontSize: '1rem',
                        color: '#666',
                        lineHeight: '1.6'
                      }}>
                        Speak directly with our healthcare rewards specialists
                      </p>
                    </Card.Body>
                  </Card>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <Card className="contact-card" style={{
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                  }}
                  >
                    <Card.Body className="text-center" style={{ padding: '3rem 2rem' }}>
                      <div className="contact-icon" style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #C4A962 0%, #b39855 100%)',
                        color: '#1B392F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        fontSize: '2rem'
                      }}>
                        <FaEnvelope />
                      </div>
                      <h3 className="contact-title" style={{
                        fontSize: '1.75rem',
                        fontWeight: 600,
                        color: '#1B392F',
                        marginBottom: '1rem'
                      }}>Email Us</h3>
                      <p className="contact-info" style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: '#2c5530',
                        marginBottom: '0.75rem',
                        wordBreak: 'break-word'
                      }}>support@saintdaniels.com</p>
                      <p className="contact-hours" style={{
                        fontSize: '1rem',
                        color: '#666',
                        marginBottom: '1rem',
                        fontWeight: 500
                      }}>Response within 24 hours</p>
                      <p className="contact-description" style={{
                        fontSize: '1rem',
                        color: '#666',
                        lineHeight: '1.6'
                      }}>
                        Get detailed assistance via email for complex inquiries
                      </p>
                    </Card.Body>
                  </Card>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      {/* Report Concern Modal */}
      <Modal show={showReportModal} onHide={() => setShowReportModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title><FaExclamationTriangle className="me-2" />Report a Concern</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleReportSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Label>Issue Type</Form.Label>
                <Form.Select 
                  value={reportForm.type} 
                  onChange={(e) => setReportForm({...reportForm, type: e.target.value})}
                  required
                >
                  <option value="">Select issue type</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing Problem</option>
                  <option value="service">Service Concern</option>
                  <option value="safety">Safety Concern</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Label>Priority Level</Form.Label>
                <Form.Select 
                  value={reportForm.priority} 
                  onChange={(e) => setReportForm({...reportForm, priority: e.target.value})}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </Form.Select>
              </Col>
              <Col md={12}>
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Brief description of the issue"
                  value={reportForm.subject}
                  onChange={(e) => setReportForm({...reportForm, subject: e.target.value})}
                  required
                />
              </Col>
              <Col md={12}>
                <Form.Label>Detailed Description</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4}
                  placeholder="Please provide detailed information about the concern..."
                  value={reportForm.description}
                  onChange={(e) => setReportForm({...reportForm, description: e.target.value})}
                  required
                />
              </Col>
              <Col md={12}>
                <Form.Label>Contact Information</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Your email address"
                  value={reportForm.contact}
                  onChange={(e) => setReportForm({...reportForm, contact: e.target.value})}
                  required
                />
              </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="secondary" className="me-2" onClick={() => setShowReportModal(false)}>
                Cancel
              </Button>
              <Button type="submit" style={{ backgroundColor: '#e74c3c', borderColor: '#e74c3c' }}>
                Submit Report
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Get More Information Modal */}
      <Modal show={showInfoModal} onHide={() => setShowInfoModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title><FaLightbulb className="me-2" />Get More Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleInfoSubmit}>
            <Row className="g-3">
              <Col md={12}>
                <Form.Label>What are you interested in?</Form.Label>
                <Form.Select 
                  value={infoForm.interest} 
                  onChange={(e) => setInfoForm({...infoForm, interest: e.target.value})}
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="career-coaching">One-on-One Career Coaching</option>
                  <option value="workplace-wellness">Workplace Wellness Programs</option>
                  <option value="public-health">Public Health Education</option>
                  <option value="intensive-program">Intensive Career Development</option>
                  <option value="community-support">Community-Based Career Support</option>
                  <option value="all">All Services</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Label>Your Experience Level</Form.Label>
                <Form.Select 
                  value={infoForm.experience} 
                  onChange={(e) => setInfoForm({...infoForm, experience: e.target.value})}
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-7 years)</option>
                  <option value="senior">Senior Level (8+ years)</option>
                  <option value="executive">Executive Level</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Label>Timeline</Form.Label>
                <Form.Select 
                  value={infoForm.timeline} 
                  onChange={(e) => setInfoForm({...infoForm, timeline: e.target.value})}
                  required
                >
                  <option value="">When do you want to start?</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="3-months">Within 3 months</option>
                  <option value="6-months">Within 6 months</option>
                  <option value="flexible">Flexible</option>
                </Form.Select>
              </Col>
              <Col md={12}>
                <Form.Label>Career Goals</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  placeholder="Tell us about your career goals and what you hope to achieve..."
                  value={infoForm.goals}
                  onChange={(e) => setInfoForm({...infoForm, goals: e.target.value})}
                  required
                />
              </Col>
              <Col md={12}>
                <Form.Label>Contact Information</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Your email address"
                  value={infoForm.contact}
                  onChange={(e) => setInfoForm({...infoForm, contact: e.target.value})}
                  required
                />
              </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="secondary" className="me-2" onClick={() => setShowInfoModal(false)}>
                Cancel
              </Button>
              <Button type="submit" style={{ backgroundColor: '#2c5530', borderColor: '#2c5530' }}>
                Request Information
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </PageTransition>
  );
} 