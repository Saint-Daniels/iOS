'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Modal } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaKey, FaCheckCircle } from 'react-icons/fa';
import { adminResetUserPassword, adminUpdateUserEmail, adminUpdateUserPassword } from '@/lib/firebase';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [emailForm, setEmailForm] = useState({ newEmail: '' });
  const [passwordForm, setPasswordForm] = useState({ newPassword: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('role', '!=', 'admin'));
      const querySnapshot = await getDocs(q);
      
      const usersList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setUsers(usersList);
    } catch (error) {
      setError('Error fetching users: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (userId) => {
    try {
      const result = await adminResetUserPassword(userId);
      if (result.success) {
        setSuccess('Password reset email sent successfully');
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Error resetting password: ' + error.message);
    }
  };

  const handleUpdateEmail = async () => {
    if (!selectedUser || !emailForm.newEmail) {
      setError('Please select a user and enter a new email');
      return;
    }

    try {
      const result = await adminUpdateUserEmail(selectedUser.id, emailForm.newEmail);
      if (result.success) {
        setSuccess('Email updated successfully');
        setShowEmailModal(false);
        fetchUsers(); // Refresh user list
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Error updating email: ' + error.message);
    }
  };

  const handleUpdatePassword = async () => {
    if (!selectedUser || !passwordForm.newPassword) {
      setError('Please select a user and enter a new password');
      return;
    }

    try {
      const result = await adminUpdateUserPassword(selectedUser.id, passwordForm.newPassword);
      if (result.success) {
        setSuccess('Password update request sent successfully');
        setShowPasswordModal(false);
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Error updating password: ' + error.message);
    }
  };

  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      
      {error && (
        <Alert variant="danger" onClose={() => setError('')} dismissible>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert variant="success" onClose={() => setSuccess('')} dismissible>
          {success}
        </Alert>
      )}

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">User Management</h5>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>
                          <FaUser className="me-2" />
                          {user.displayName || 'No name'}
                        </td>
                        <td>
                          <FaEnvelope className="me-2" />
                          {user.email}
                        </td>
                        <td>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => {
                              setSelectedUser(user);
                              setShowEmailModal(true);
                            }}
                          >
                            Change Email
                          </Button>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => {
                              setSelectedUser(user);
                              setShowPasswordModal(true);
                            }}
                          >
                            Change Password
                          </Button>
                          <Button
                            variant="outline-warning"
                            size="sm"
                            onClick={() => handleResetPassword(user.id)}
                          >
                            Reset Password
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Email Change Modal */}
      <Modal show={showEmailModal} onHide={() => setShowEmailModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change User Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>New Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter new email"
              value={emailForm.newEmail}
              onChange={(e) => setEmailForm({ newEmail: e.target.value })}
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" onClick={handleUpdateEmail}>
              Update Email
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Password Change Modal */}
      <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change User Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({ newPassword: e.target.value })}
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" onClick={handleUpdatePassword}>
              Update Password
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
} 