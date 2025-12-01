'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUser, FaFileAlt, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageTransition from '../../../components/PageTransition';

export default function EnrollmentPage() {
  const router = useRouter();

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
                <h1 style={{ color: '#2c5530', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Enrollment
                </h1>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                  Manage your enrollment information and application status
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', height: '100%' }}>
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    margin: '0 auto 1.5rem'
                  }}>
                    <FaFileAlt />
                  </div>
                  <h4 style={{ color: '#2c5530', marginBottom: '1rem' }}>Application Status</h4>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                    View your current enrollment application status and progress
                  </p>
                  <Button 
                    variant="primary" 
                    style={{ 
                      background: '#2c5530', 
                      border: 'none',
                      padding: '0.75rem 2rem'
                    }}
                    onClick={() => router.push('/application')}
                  >
                    View Application
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', height: '100%' }}>
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    margin: '0 auto 1.5rem'
                  }}>
                    <FaCheckCircle />
                  </div>
                  <h4 style={{ color: '#2c5530', marginBottom: '1rem' }}>Enrollment Documents</h4>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                    Access and download your enrollment documents and forms
                  </p>
                  <Button 
                    variant="primary" 
                    style={{ 
                      background: '#2c5530', 
                      border: 'none',
                      padding: '0.75rem 2rem'
                    }}
                    onClick={() => router.push('/resources')}
                  >
                    View Documents
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', height: '100%' }}>
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    margin: '0 auto 1.5rem'
                  }}>
                    <FaUser />
                  </div>
                  <h4 style={{ color: '#2c5530', marginBottom: '1rem' }}>Update Information</h4>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                    Update your personal information and enrollment details
                  </p>
                  <Button 
                    variant="primary" 
                    style={{ 
                      background: '#2c5530', 
                      border: 'none',
                      padding: '0.75rem 2rem'
                    }}
                    onClick={() => router.push('/register')}
                  >
                    Update Info
                  </Button>
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

