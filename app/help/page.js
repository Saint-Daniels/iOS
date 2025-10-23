'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card, Button, Form, Modal, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaGraduationCap, FaUsers, FaBook, FaChartLine, FaHeart, FaRocket, FaUserTie, FaLightbulb, FaHandshake, FaExclamationTriangle, FaSearch, FaFileAlt, FaVideo, FaDownload, FaCalendar, FaClock, FaMapMarkerAlt, FaShieldAlt, FaQuestionCircle, FaComments, FaBullhorn } from 'react-icons/fa';
import MainNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
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
      question: "How do I track my career development progress?",
      answer: "You can track your career development through our platform by logging your professional goals, skill development activities, and career milestones. Each achievement contributes to your overall career advancement score.",
      category: "Career Development"
    },
    {
      question: "How do I access career coaching sessions?",
      answer: "You can schedule one-on-one career coaching sessions through your dashboard. Our certified career coaches are available to help you develop strategies for professional growth and career advancement.",
      category: "Career Development"
    },
    {
      question: "What career development services are available?",
      answer: "We offer comprehensive career development services including one-on-one coaching, workplace wellness programs, public health education, intensive career development programs, and community-based career support.",
      category: "Services"
    },
    {
      question: "How do I find career development resources?",
      answer: "You can access our extensive library of career development resources through the Resources section, including guides, templates, educational videos, and professional development materials.",
      category: "Resources"
    },
    {
      question: "How do I update my professional profile?",
      answer: "Log in to your account, go to 'Profile Settings', and you can update your professional information, career goals, skills, and communication preferences to better match our career development services.",
      category: "Account"
    },
    {
      question: "What are the customer support hours?",
      answer: "Our career development support team is available Monday through Friday, from 9am to 5pm CST. You can reach us by phone at 888-324-6642 or through our contact form.",
      category: "Support"
    },
    {
      question: "How do I connect with the professional community?",
      answer: "You can connect with our professional community through our networking events, mentorship programs, and community-based career support groups. Access these features through your dashboard.",
      category: "Community"
    },
    {
      question: "What is the cost of career coaching sessions?",
      answer: "Career coaching sessions are included in your membership. Premium members get unlimited sessions, while basic members receive 2 sessions per month. Additional sessions can be purchased.",
      category: "Billing"
    },
    {
      question: "How do I report a concern or issue?",
      answer: "You can report concerns through our secure reporting system. Click the 'Report Concern' button above to submit your issue. All reports are confidential and reviewed within 24 hours.",
      category: "Support"
    },
    {
      question: "Can I get more information about specific programs?",
      answer: "Yes! Use our 'Get More Information' form above to request detailed information about any of our career development programs. We'll provide comprehensive details within 24 hours.",
      category: "Information"
    }
  ];

  const specificHelpSections = [
    {
      title: "Career Assessment & Planning",
      icon: <FaChartLine size={24} />,
      description: "Get personalized career assessments and development plans",
      resources: [
        { name: "Career Assessment Tool", type: "Interactive Tool", link: "#" },
        { name: "Skills Gap Analysis", type: "PDF Report", link: "#" },
        { name: "Career Planning Worksheet", type: "Template", link: "#" }
      ]
    },
    {
      title: "Resume & Interview Prep",
      icon: <FaFileAlt size={24} />,
      description: "Professional resume building and interview preparation",
      resources: [
        { name: "Resume Builder Tool", type: "Interactive Tool", link: "#" },
        { name: "Interview Question Bank", type: "PDF Guide", link: "#" },
        { name: "Salary Negotiation Guide", type: "Video Series", link: "#" }
      ]
    },
    {
      title: "Workplace Wellness",
      icon: <FaHeart size={24} />,
      description: "Stress management and workplace productivity tools",
      resources: [
        { name: "Stress Assessment", type: "Interactive Tool", link: "#" },
        { name: "Mindfulness Exercises", type: "Audio Guide", link: "#" },
        { name: "Work-Life Balance Planner", type: "Template", link: "#" }
      ]
    },
    {
      title: "Professional Development",
      icon: <FaGraduationCap size={24} />,
      description: "Skills development and continuing education",
      resources: [
        { name: "Skill Development Tracker", type: "Interactive Tool", link: "#" },
        { name: "Learning Path Creator", type: "PDF Guide", link: "#" },
        { name: "Certification Prep Materials", type: "Study Guide", link: "#" }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Schedule Coaching Session",
      icon: <FaCalendar size={20} />,
      description: "Book a one-on-one career coaching session",
      action: "Schedule Now",
      color: "#2c5530",
      link: "/contact"
    },
    {
      title: "Download Resources",
      icon: <FaDownload size={20} />,
      description: "Access our library of career development materials",
      action: "Browse Library",
      color: "#3498db",
      link: "/resources"
    },
    {
      title: "Join Community",
      icon: <FaUsers size={20} />,
      description: "Connect with other professionals in your field",
      action: "Join Network",
      color: "#9b59b6",
      link: "/join-network"
    },
    {
      title: "Report Issue",
      icon: <FaExclamationTriangle size={20} />,
      description: "Report concerns or technical issues",
      action: "Report Issue",
      color: "#e74c3c",
      link: "/report-issue"
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
      title: "Career Development",
      icon: <FaGraduationCap size={32} />,
      description: "Get help with career coaching, professional development, and career advancement strategies.",
      color: "#2c5530"
    },
    {
      title: "Workplace Wellness",
      icon: <FaHeart size={32} />,
      description: "Learn about workplace wellness programs and stress management techniques.",
      color: "#e74c3c"
    },
    {
      title: "Public Health Education",
      icon: <FaBook size={32} />,
      description: "Access educational resources and public health information for professionals.",
      color: "#3498db"
    },
    {
      title: "Community Support",
      icon: <FaUsers size={32} />,
      description: "Connect with our professional community and networking opportunities.",
      color: "#9b59b6"
    }
  ];

  return (
    <PageTransition>
      <MainNavbar />
      <div className="help-center-page">
        {/* Hero Section */}
        <section className="help-hero-section">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10}>
                <h1 className="help-hero-title">Help Center</h1>
                <p className="help-hero-subtitle">
                  Your comprehensive resource for career development support, guidance, and assistance
                </p>
                
                {/* Search Bar */}
                <div className="help-search-container mb-4">
                  <div className="search-input-wrapper">
                    <FaSearch className="search-icon" />
                    <Form.Control
                      type="text"
                      placeholder="Search for help topics, questions, or resources..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="help-search-input"
                    />
                  </div>
                </div>

                {/* Quick Actions */}
                <Row className="g-3 mb-5">
                  {quickActions.map((action, index) => (
                    <Col lg={3} md={6} key={index}>
                      <Button 
                        className="quick-action-btn w-100"
                        style={{ backgroundColor: action.color, borderColor: action.color }}
                        onClick={() => {
                          if (action.title === "Report Issue") window.location.href = action.link;
                          if (action.title === "Download Resources") window.location.href = action.link;
                          if (action.title === "Join Community") window.location.href = action.link;
                          if (action.title === "Schedule Coaching Session") window.location.href = action.link;
                        }}
                      >
                        <div className="d-flex align-items-center justify-content-center">
                          {action.icon}
                          <span className="ms-2">{action.action}</span>
                        </div>
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>



        {/* Contact Section */}
        <section className="contact-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title">Still Need Help?</h2>
                <p className="section-subtitle">
                  Our career development support team is here to assist you
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={6}>
                <Card className="contact-card">
                  <Card.Body className="text-center">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <h3 className="contact-title">Call Us</h3>
                    <p className="contact-info">888-324-6642</p>
                    <p className="contact-hours">Monday-Friday, 9am-5pm CST</p>
                    <p className="contact-description">
                      Speak directly with our career development specialists
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="contact-card">
                  <Card.Body className="text-center">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <h3 className="contact-title">Email Us</h3>
                    <p className="contact-info">support@saintdaniels.com</p>
                    <p className="contact-hours">Response within 24 hours</p>
                    <p className="contact-description">
                      Get detailed assistance via email for complex inquiries
                    </p>
                  </Card.Body>
                </Card>
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