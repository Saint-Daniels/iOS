'use client';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      title: "Customer Support",
      details: [
        "1-800-SAINT-DANIELS",
        "support@saintdaniels.com",
        "Available 24/7"
      ],
      icon: "📞"
    },
    {
      title: "Business Inquiries",
      details: [
        "1-888-BUSINESS",
        "business@saintdaniels.com",
        "Mon-Fri, 9AM-5PM EST"
      ],
      icon: "💼"
    },
    {
      title: "Main Office",
      details: [
        "123 Healthcare Avenue",
        "Suite 100",
        "Medical City, MC 12345"
      ],
      icon: "🏢"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <Container>
          <div className="contact-hero text-center">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              We're here to help! Reach out to us with any questions or concerns.
            </p>
          </div>

          <Row className="g-4 mb-5">
            {contactInfo.map((info, index) => (
              <Col md={4} key={index}>
                <div className="contact-info-card">
                  <div className="contact-icon">{info.icon}</div>
                  <h3 className="contact-info-title">{info.title}</h3>
                  <ul className="contact-details">
                    {info.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="contact-form-card">
                {!submitted ? (
                  <>
                    <h2 className="form-title">Send Us a Message</h2>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Enter your name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="Enter your email"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Enter subject"
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Enter your message"
                        />
                      </Form.Group>

                      <div className="text-center">
                        <Button type="submit" className="btn-royal-gold">
                          Send Message
                        </Button>
                      </div>
                    </Form>
                  </>
                ) : (
                  <div className="success-message text-center">
                    <div className="success-icon">✓</div>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                    <Button 
                      className="btn-royal-gold mt-3"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({name: '', email: '', subject: '', message: ''});
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </Col>
          </Row>

          <div className="map-section mt-5">
            <h2 className="section-title text-center">Visit Us</h2>
            <div className="map-placeholder">
              {/* Replace with actual map integration */}
              <div className="map-content">
                Interactive Map Coming Soon
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 