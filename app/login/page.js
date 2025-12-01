'use client';

import { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Navbar, Alert, Modal } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaLock, FaCheckCircle } from 'react-icons/fa';
import Cookies from 'js-cookie';

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [codeAttempts, setCodeAttempts] = useState(0);
  const [lastCodeSent, setLastCodeSent] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = Cookies.get('isLoggedIn') === 'true';
    if (isLoggedIn) {
      const redirectPath = searchParams.get('from') || '/dashboard';
      router.push(redirectPath);
    }
  }, [router, searchParams]);

  const canSendCode = () => {
    if (codeAttempts >= 3) {
      const timeSinceLastCode = Date.now() - lastCodeSent;
      return timeSinceLastCode >= 5 * 60 * 1000; // 5 minutes in milliseconds
    }
    return true;
  };

  const getTimeUntilNextCode = () => {
    if (codeAttempts >= 3) {
      const timeSinceLastCode = Date.now() - lastCodeSent;
      const timeRemaining = 5 * 60 * 1000 - timeSinceLastCode;
      if (timeRemaining > 0) {
        const minutes = Math.ceil(timeRemaining / (60 * 1000));
        return minutes;
      }
    }
    return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Accept any email/password combination
    if (formData.email && formData.password) {
      // Set cookies for authentication
      Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day
      Cookies.set('userEmail', formData.email, { expires: 1 });
      
      // Redirect to dashboard
      const redirectPath = searchParams.get('from') || '/dashboard';
      router.push(redirectPath);
    } else {
      setError('Please enter both email and password.');
    }
  };

  const handleSendVerificationCode = () => {
    if (canSendCode()) {
      // Here you would typically make an API call to send the verification code
      setCodeSent(true);
      setCodeAttempts(prev => prev + 1);
      setLastCodeSent(Date.now());
      setVerificationError('');
    }
  };

  const handleVerifyCode = () => {
    if (!verificationCode.trim()) {
      setVerificationError('Please enter the verification code.');
      return;
    }

    // Here you would typically verify the code with your backend
    // For demo purposes, we'll assume any non-empty code is valid
    setIsVerifying(false);
    setShow2FAModal(false);
    
    // Set cookies for authentication
    Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day
    Cookies.set('userEmail', formData.email, { expires: 1 });
    
    // Redirect to the original requested page or dashboard
    const redirectPath = searchParams.get('from') || '/dashboard';
    router.push(redirectPath);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page" style={{ background: '#1B392F' }}>
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
                      <div className="d-flex justify-content-between align-items-center">
                        <Form.Check
                          type="checkbox"
                          id="remember-me"
                          label="Remember me"
                        />
                        <Link 
                          href="/contact" 
                          className="text-decoration-none"
                          style={{
                            color: '#C4A962',
                            fontSize: '0.95rem',
                            fontWeight: '500',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#b39855';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#C4A962';
                          }}
                        >
                          Contact Us
                        </Link>
                      </div>
                    </Form.Group>

                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-3 mb-4"
                      disabled={isVerifying}
                    >
                      {isVerifying ? 'Verifying...' : 'Sign In'}
                    </Button>
                  </Form>

                  <Link href="/signup" className="text-decoration-none d-block">
                    <Button 
                      variant="outline" 
                      className="w-100 py-3"
                      style={{
                        border: '2px solid #C4A962',
                        backgroundColor: 'white',
                        color: '#C4A962',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#C4A962';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = '#C4A962';
                      }}
                    >
                      Start Enrollment
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright Footer */}
      <footer style={{
        backgroundColor: '#1B392F',
        color: 'white',
        padding: '1rem 0',
        textAlign: 'center',
        width: '100%',
        marginTop: 'auto'
      }}>
        <Container>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            © 2025 Saint Daniels Healthcare. All rights reserved.
          </p>
        </Container>
      </footer>

      {/* 2FA Verification Modal */}
      <Modal 
        show={show2FAModal} 
        onHide={() => setShow2FAModal(false)} 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaLock className="me-2" />
            Two-Factor Authentication
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <p className="text-muted">
              A verification code has been sent to your registered phone number.
              Please enter the code below to complete your login.
            </p>
          </div>
          
          <Form.Group className="mb-4">
            <Form.Label>Verification Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="form-control-lg"
            />
            {verificationError && (
              <Form.Text className="text-danger">
                {verificationError}
              </Form.Text>
            )}
          </Form.Group>

          <div className="d-grid gap-2">
            <Button 
              variant="primary"
              onClick={handleVerifyCode}
              disabled={!verificationCode.trim()}
            >
              Verify & Login
            </Button>
            <Button 
              variant="outline-secondary"
              onClick={handleSendVerificationCode}
              disabled={!canSendCode()}
            >
              Resend Code
            </Button>
          </div>

          {!canSendCode() && (
            <div className="text-center mt-3">
              <small className="text-muted">
                Please wait {getTimeUntilNextCode()} minutes before requesting another code
              </small>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
} 