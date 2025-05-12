'use client';

import { useState } from 'react';
import { Container, Form, Button, Row, Col, Navbar, Alert, Modal } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLock, FaCheckCircle } from 'react-icons/fa';

// Dummy credentials - No longer required as we'll accept any input
// const VALID_CREDENTIALS = {
//   email: 'user@example.com',
//   password: 'password123'
// };

export default function Login() {
  const router = useRouter();
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
    setError('');

    if (formData.email.trim() && formData.password.trim()) {
      // Direct login without 2FA
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userEmail', formData.email);
      router.push('/dashboard');
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
    
    // Set login status and redirect to dashboard
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userEmail', formData.email);
    router.push('/dashboard');
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
                      disabled={isVerifying}
                    >
                      {isVerifying ? 'Verifying...' : 'Sign In'}
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