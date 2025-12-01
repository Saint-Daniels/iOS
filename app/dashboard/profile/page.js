'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaUser, FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageTransition from '../../../components/PageTransition';

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: Cookies.get('userEmail') || 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main Street',
    city: 'Dallas',
    state: 'TX',
    zipCode: '75201'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Save profile data (in production, this would call an API)
    setIsEditing(false);
    // Show success message
    alert('Profile updated successfully!');
  };

  return (
    <PageTransition>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)', padding: '4rem 0' }}>
        <Container>
          <Row>
            <Col xs={12}>
              <div style={{ marginBottom: '2rem' }}>
                <Link href="/dashboard" style={{ textDecoration: 'none', color: '#2c5530' }}>
                  <Button variant="link" style={{ color: '#2c5530', padding: 0, marginBottom: '1rem' }}>
                    <FaArrowLeft className="me-2" />
                    Back to Dashboard
                  </Button>
                </Link>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h1 style={{ color: '#2c5530', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Profile
                    </h1>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>
                      Manage your personal information and account settings
                    </p>
                  </div>
                  <Button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    style={{
                      background: isEditing ? '#28a745' : '#2c5530',
                      border: 'none',
                      padding: '0.75rem 2rem'
                    }}
                  >
                    {isEditing ? (
                      <>
                        <FaSave className="me-2" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <FaEdit className="me-2" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={8}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <Card.Header style={{ background: 'white', borderBottom: '2px solid #f0f0f0', padding: '1.5rem' }}>
                  <h4 style={{ margin: 0, color: '#2c5530', fontWeight: 600 }}>
                    <FaUser className="me-2" />
                    Personal Information
                  </h4>
                </Card.Header>
                <Card.Body style={{ padding: '2rem' }}>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={{ padding: '0.75rem' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={{ padding: '0.75rem' }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaEnvelope className="me-2" />
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={{ padding: '0.75rem' }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaPhone className="me-2" />
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={{ padding: '0.75rem' }}
                      />
                    </Form.Group>

                    <hr style={{ margin: '2rem 0' }} />

                    <h5 style={{ color: '#2c5530', marginBottom: '1.5rem' }}>
                      <FaMapMarkerAlt className="me-2" />
                      Address
                    </h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Street Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={{ padding: '0.75rem' }}
                      />
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={{ padding: '0.75rem' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3">
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={{ padding: '0.75rem' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3">
                          <Form.Label>ZIP Code</Form.Label>
                          <Form.Control
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={{ padding: '0.75rem' }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', height: 'fit-content' }}>
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    margin: '0 auto 1.5rem',
                    fontWeight: 700
                  }}>
                    {formData.firstName[0]}{formData.lastName[0]}
                  </div>
                  <h4 style={{ color: '#2c5530', marginBottom: '0.5rem' }}>
                    {formData.firstName} {formData.lastName}
                  </h4>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>{formData.email}</p>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{formData.phone}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </PageTransition>
  );
}

