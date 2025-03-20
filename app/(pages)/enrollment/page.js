'use client';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Enrollment() {
  return (
    <>
      <Header />
      <main className="enrollment-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="enrollment-card">
                <h1 className="enrollment-title">Begin Your Royal Journey</h1>
                <p className="enrollment-subtitle">Join Saint Daniels and start earning rewards today.</p>
                
                <Form className="enrollment-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check 
                      type="checkbox"
                      label="I agree to the Terms of Service and Privacy Policy"
                    />
                  </Form.Group>

                  <Button className="btn-royal-gold w-100" size="lg">
                    CREATE YOUR ROYAL ACCOUNT
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  <p className="login-link">
                    Already have an account? <a href="/login">Login here</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
} 