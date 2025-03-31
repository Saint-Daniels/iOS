'use client';

import { useState } from 'react';
import { Container, Form, Button, Row, Col, Navbar, Alert } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Dummy credentials
const VALID_CREDENTIALS = {
  email: 'user@example.com',
  password: 'password123'
};

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check credentials
    if (formData.email === VALID_CREDENTIALS.email && 
        formData.password === VALID_CREDENTIALS.password) {
      // Set login status and redirect to dashboard
      sessionStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <Navbar bg="transparent" expand="lg" className="px-5 py-3">
        <Container>
          <Link href="/" className="navbar-brand ms-5">
            <Image 
              src="/images/saintdanielslogo.jpeg" 
              alt="Saint Daniels Logo" 
              width={60} 
              height={60} 
              className="header-logo"
            />
          </Link>
        </Container>
      </Navbar>
      <div className="login-container">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <div className="login-bubble">
                <div className="castle-tower-left"></div>
                <div className="castle-tower-right"></div>
                <div className="bubble-content">
                  <div className="text-center mb-4">
                    <h2>Welcome Back</h2>
                    <p className="text-muted">Please sign in to your account</p>
                  </div>
                  
                  {error && (
                    <Alert variant="danger" className="mb-4">
                      {error}
                    </Alert>
                  )}
                  
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <Form.Label>Password</Form.Label>
                        <Link href="/forgot-password" className="text-primary text-decoration-none small">
                          Forgot password?
                        </Link>
                      </div>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        id="remember-me"
                        label="Remember me"
                      />
                    </Form.Group>

                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-3 mb-4"
                    >
                      Sign In
                    </Button>

                    <div className="text-center">
                      <p className="mb-0">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-primary text-decoration-none">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
} 