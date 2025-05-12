'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGamepad, FaSnapchatGhost, FaShieldAlt, FaEnvelope, FaStar, FaTrash, FaReply, FaUserPlus, FaGift, FaRunning, FaSkull, FaTrophy, FaTimes, FaExclamationTriangle, FaCheckCircle, FaUsers, FaMedal, FaReceipt, FaHeartbeat, FaCalendarCheck, FaMobileAlt, FaCookie, FaCopy, FaShare, FaCog, FaLock, FaUserCog, FaUserCircle, FaSignOutAlt, FaHistory, FaUserMd, FaPrescriptionBottleAlt, FaPaperclip, FaPaperPlane, FaPencilAlt } from 'react-icons/fa';
import InsuranceProviderLogo from '../components/InsuranceProviderLogo';
import '../styles/dashboard.css';

const MotionBox = motion.div;

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('User');
  const [showLogoutWarning, setShowLogoutWarning] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);
  const [isMailboxModalOpen, setIsMailboxModalOpen] = useState(false);
  const [isSnapchatModalOpen, setIsSnapchatModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [isOffersModalOpen, setIsOffersModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [isComposeModalOpen, setIsComposeModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [messageData, setMessageData] = useState({
    subject: '',
    recipient: '',
    message: ''
  });
  const INACTIVITY_TIMEOUT = 10 * 60 * 1000; // 10 minutes

  // Responsive values
  const [gridColumns, setGridColumns] = useState(1);
  const [cardPadding, setCardPadding] = useState(4);
  const [iconSize, setIconSize] = useState(40);
  const messagesPerPage = 3;

  const [snapchatUsername, setSnapchatUsername] = useState('@health_warrior');
  const [isEditingUsername, setIsEditingUsername] = useState(false);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isChangeEmailModalOpen, setIsChangeEmailModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [isAuthSettingsModalOpen, setIsAuthSettingsModalOpen] = useState(false);
  const [emailData, setEmailData] = useState({ currentEmail: '', newEmail: '', password: '' });
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [authSettings, setAuthSettings] = useState({
    twoFactorEnabled: false,
    phoneNumber: '',
    phoneVerified: false,
    verificationMethod: 'sms', // 'sms' or 'authenticator'
    sessionTimeout: 30
  });

  const updateResponsiveValues = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 992) { // lg breakpoint
      setGridColumns(3);
      setCardPadding(6);
      setIconSize(48);
    } else if (width >= 768) { // md breakpoint
      setGridColumns(2);
      setCardPadding(6);
      setIconSize(48);
    } else { // base breakpoint
      setGridColumns(1);
      setCardPadding(4);
      setIconSize(40);
    }
  }, []);

  useEffect(() => {
    updateResponsiveValues();
    window.addEventListener('resize', updateResponsiveValues);
    return () => window.removeEventListener('resize', updateResponsiveValues);
  }, [updateResponsiveValues]);

  // Reset timers on user activity
  const resetTimers = useCallback(() => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
    
    const newTimer = setTimeout(() => {
      setShowLogoutWarning(true);
    }, INACTIVITY_TIMEOUT);
    
    setInactivityTimer(newTimer);
  }, []);

  // Handle user activity
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleActivity = () => {
      resetTimers();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    // Initial timer setup
    resetTimers();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
    };
  }, [resetTimers]);

  const handleDismissWarning = () => {
    setShowLogoutWarning(false);
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
      setInactivityTimer(null);
    }
    resetTimers();
  };

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setUserName('User');
        setLoading(false);
      } catch (error) {
        console.error('Error loading user data:', error);
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  const handleViewCoverage = () => {
    console.log('Opening coverage modal');
    setIsCoverageModalOpen(true);
  };

  const handleCloseCoverageModal = () => {
    console.log('Closing coverage modal');
    setIsCoverageModalOpen(false);
  };

  const handleViewMailbox = () => {
    setIsMailboxModalOpen(true);
  };

  const handleViewSnapchat = () => {
    setIsSnapchatModalOpen(true);
  };

  const handleViewActivity = () => {
    setIsActivityModalOpen(true);
  };

  const handleViewOffers = () => {
    setIsOffersModalOpen(true);
  };

  const handleViewGame = () => {
    setIsGameModalOpen(true);
  };

  const handleComposeMessage = () => {
    setIsComposeModalOpen(true);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Handle message submission
    console.log('Message data:', messageData);
    console.log('Attachment:', selectedFile);
    setIsComposeModalOpen(false);
    setMessageData({ subject: '', recipient: '', message: '' });
    setSelectedFile(null);
  };

  const handleSettingsClick = (e) => {
    e.stopPropagation();
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSettingsOpen && !event.target.closest('.settings-dropdown')) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isSettingsOpen]);

  // Update INACTIVITY_TIMEOUT when session timeout changes
  useEffect(() => {
    if (authSettings.sessionTimeout) {
      const newTimeout = authSettings.sessionTimeout * 60 * 1000; // Convert minutes to milliseconds
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      const newTimer = setTimeout(() => {
        setShowLogoutWarning(true);
      }, newTimeout);
      setInactivityTimer(newTimer);
    }
  }, [authSettings.sessionTimeout]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="dashboard"
    >
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <img 
              src="/images/saintdanielslogo.jpeg" 
              alt="Saint Daniels Logo" 
              className="logo"
            />
            <div className="header-actions">
              <div style={{ position: 'relative' }} className="settings-dropdown">
                <button
                  className="btn btn-ghost"
                  onClick={handleSettingsClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <FaCog className="icon" />
                  Settings
                </button>
                {isSettingsOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    minWidth: '200px',
                    zIndex: 1000,
                    marginTop: '0.5rem'
                  }}>
                    <div style={{
                      padding: '0.5rem 0',
                      borderBottom: '1px solid #e2e8f0'
                    }}>
                      <button
                        className="btn btn-ghost"
                        style={{
                          width: '100%',
                          justifyContent: 'flex-start',
                          padding: '0.75rem 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#000000'
                        }}
                        onClick={() => {
                          setIsChangeEmailModalOpen(true);
                          setIsSettingsOpen(false);
                        }}
                      >
                        <FaEnvelope style={{ fontSize: '1rem', color: '#000000' }} />
                        Change Email
                      </button>
                      <button
                        className="btn btn-ghost"
                        style={{
                          width: '100%',
                          justifyContent: 'flex-start',
                          padding: '0.75rem 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#000000'
                        }}
                        onClick={() => {
                          setIsChangePasswordModalOpen(true);
                          setIsSettingsOpen(false);
                        }}
                      >
                        <FaLock style={{ fontSize: '1rem', color: '#000000' }} />
                        Change Password
                      </button>
                      <button
                        className="btn btn-ghost"
                        style={{
                          width: '100%',
                          justifyContent: 'flex-start',
                          padding: '0.75rem 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#000000'
                        }}
                        onClick={() => {
                          setIsAuthSettingsModalOpen(true);
                          setIsSettingsOpen(false);
                        }}
                      >
                        <FaUserCog style={{ fontSize: '1rem', color: '#000000' }} />
                        Authentication Settings
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button
                className="btn btn-danger"
                onClick={() => setIsLogoutModalOpen(true)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container main-content">
        <div className="content-wrapper">
          <h1 className="welcome-title">Welcome back, {userName}</h1>
          
          <div className="grid" style={{ '--grid-columns': gridColumns }}>
            {/* Insurance Card */}
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <div className="card-header">
                    <span className="badge badge-success">Active</span>
                    <span className="agent-info">
                      Agent: John Cothran | NPN: 20232956
                    </span>
                  </div>
                  
                  <div className="icon-container">
                    <InsuranceProviderLogo size="medium" />
                  </div>

                  <div className="card-details">
                    <div style={{
                      backgroundColor: '#f7fafc',
                      borderRadius: '0.5rem',
                      padding: '1.5rem',
                      margin: '1rem 0',
                      border: '1px dashed #e2e8f0'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: '#718096'
                      }}>
                        <span>No coverage data</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    width: '100%',
                    marginTop: 'auto',
                    paddingTop: '1rem'
                  }}>
                    <button
                      className="btn btn-primary"
                      onClick={handleViewCoverage}
                      style={{ maxWidth: '200px', width: '100%' }}
                    >
                      Coverage History
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Arcade Card */}
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <h2 className="card-title">Game Arcade</h2>
                  
                  <div className="icon-container">
                    <FaGamepad className="icon icon-purple" />
                  </div>

                  <div className="card-details">
                    <h2 className="card-title">Coming Soon</h2>
                    <p className="card-subtitle">
                      Exciting games and rewards are on the way!
                    </p>
                    <p className="card-description">
                      Earn rewards while having fun with fitness games
                    </p>
                  </div>

                  <button
                    className="btn btn-purple btn-block"
                    onClick={handleViewGame}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Mailbox Card */}
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <h2 className="card-title">Mailbox</h2>
                  
                  <div className="icon-container">
                    <FaEnvelope className="icon icon-blue" />
                  </div>

                  <div className="card-details">
                    <span className="badge badge-blue">0 Unread Messages</span>
                    <p className="card-description">
                      Stay connected with your health journey updates, important notifications, and personalized messages from your healthcare team.
                    </p>
                  </div>

                  <button
                    className="btn btn-gold btn-block"
                    onClick={handleViewMailbox}
                  >
                    Mail
                  </button>
                </div>
              </div>
            </div>

            {/* Snapchat Card */}
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <h2 className="card-title">Snapchat</h2>
                  
                  <div className="icon-container">
                    <FaSnapchatGhost className="icon icon-yellow" />
                  </div>

                  <div className="card-details">
                    <h2 className="card-title">@health_warrior</h2>
                    <p className="card-description">
                      Join our gaming community, compete in fitness challenges, and connect with friends on your wellness journey.
                    </p>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '1rem 0',
                      fontSize: '0.875rem',
                      color: '#4a5568'
                    }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FaGamepad style={{ color: '#744210' }} />
                        <span>Early access to fitness games</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FaUsers style={{ color: '#744210' }} />
                        <span>Join community challenges</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaTrophy style={{ color: '#744210' }} />
                        <span>Compete on global leaderboards</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    className="btn btn-yellow btn-block"
                    onClick={handleViewSnapchat}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <h2 className="card-title">Recent Activity</h2>
                  
                  <div className="icon-container">
                    <FaHistory className="icon icon-green" />
                  </div>

                  <div className="card-details">
                    <p className="card-description">
                      Track your health journey progress and stay motivated with your recent achievements and rewards.
                    </p>
                    <div style={{
                      backgroundColor: '#f7fafc',
                      borderRadius: '0.5rem',
                      padding: '1.5rem',
                      margin: '1rem 0',
                      border: '1px dashed #e2e8f0'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: '#718096'
                      }}>
                        <FaHistory style={{ fontSize: '1.25rem' }} />
                        <span>Your most recent activity will appear here</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-green btn-block"
                    onClick={handleViewActivity}
                  >
                    Activity History
                  </button>
                </div>
              </div>
            </div>

            {/* Available Offers Card */}
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <h2 className="card-title">Available Offers</h2>
                  
                  <div className="icon-container">
                    <FaGift className="icon icon-red" />
                  </div>

                  <div className="card-details">
                    <p className="card-description">
                      Unlock exclusive rewards and benefits by participating in health challenges and wellness programs.
                    </p>
                    <div style={{
                      backgroundColor: '#f7fafc',
                      borderRadius: '0.5rem',
                      padding: '1.5rem',
                      margin: '1rem 0',
                      border: '1px dashed #e2e8f0'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: '#718096'
                      }}>
                        <FaGift style={{ fontSize: '1.25rem' }} />
                        <span>Your available offers will appear here</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-red btn-block"
                    onClick={handleViewOffers}
                  >
                    Offer History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Inactivity Warning */}
      {showLogoutWarning && (
        <div className="warning-toast">
          <div className="card">
            <div className="card-body">
              <div className="warning-content">
                <h3>Session Timeout Warning</h3>
                <p>
                  You've been inactive for 10 minutes. Your session will remain active, but please save any unsaved work.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={handleDismissWarning}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Modal */}
      {isLogoutModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsLogoutModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '500px',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Confirm Logout</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsLogoutModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.5rem'
              }}>
                <FaSignOutAlt style={{ fontSize: '3rem', color: '#e53e3e' }} />
                <p style={{ margin: 0, color: '#4a5568' }}>Are you sure you want to log out?</p>
                <p style={{ margin: 0, color: '#718096', fontSize: '0.875rem' }}>
                  You will need to log in again to access your dashboard.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <button
                    className="btn btn-gold"
                    onClick={() => setIsLogoutModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setIsLogoutModalOpen(false);
                      // Handle logout
                      window.location.href = '/';
                    }}
                  >
                    Yes, Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coverage Modal */}
      {isCoverageModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={handleCloseCoverageModal}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Coverage Details</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={handleCloseCoverageModal}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                  width: '100%'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#fed7d7',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaShieldAlt style={{ fontSize: '2.5rem', color: '#e53e3e' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#2d3748', margin: 0 }}>No Active Coverage</h3>
                  <p style={{
                    color: '#4a5568',
                    maxWidth: '600px',
                    margin: 0,
                    lineHeight: 1.6
                  }}>
                    You currently don't have any active insurance coverage. Please contact us at 888-888-8888 or email support@saintdaniels.com to get started with your health insurance journey.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: '1rem'
                  }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleCloseCoverageModal();
                        window.location.href = 'tel:8888888888';
                      }}
                    >
                      Call Now
                    </button>
                    <button
                      className="btn btn-gold"
                      onClick={() => {
                        handleCloseCoverageModal();
                        window.location.href = 'mailto:support@saintdaniels.com';
                      }}
                    >
                      Email Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mailbox Modal */}
      {isMailboxModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsMailboxModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Mailbox</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsMailboxModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {/* Compose Message Button */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}>
                  <button
                    className="btn btn-blue"
                    onClick={handleComposeMessage}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FaEnvelope style={{ fontSize: '1rem' }} />
                    Compose Message
                  </button>
                </div>

                {/* No Messages State */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  backgroundColor: '#f7fafc',
                  borderRadius: '0.5rem',
                  gap: '1.5rem',
                  marginTop: '2rem'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#ebf8ff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaEnvelope style={{ fontSize: '2.5rem', color: '#3182ce' }} />
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      color: '#2d3748', 
                      margin: '0 0 0.5rem 0' 
                    }}>
                      No Messages
                    </h3>
                    <p style={{ 
                      color: '#4a5568',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Your inbox is empty. Start a conversation by composing a new message.
                    </p>
                  </div>
                </div>

                {/* View All Messages Button */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '1rem'
                }}>
                  <button
                    className="btn btn-ghost"
                    onClick={() => {
                      window.location.href = '/messages';
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FaEnvelope style={{ fontSize: '1rem' }} />
                    View All Messages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Modal */}
      {isGameModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsGameModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Game Arcade</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsGameModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                padding: '2rem'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#805ad5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FaGamepad style={{ fontSize: '4rem', color: 'white' }} />
                </div>
                <div style={{
                  textAlign: 'center',
                  maxWidth: '600px'
                }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#2d3748', margin: '0 0 1rem 0' }}>Coming Soon: Health Quest Games</h3>
                  <p style={{ color: '#4a5568', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
                    Get ready for an exciting adventure in health and wellness! Our upcoming game arcade will feature two exciting games:
                  </p>
                </div>

                {/* Game Cards */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  width: '100%',
                  maxWidth: '600px'
                }}>
                  {/* Survival Game Card */}
                  <div style={{
                    backgroundColor: '#f7fafc',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#805ad5',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <FaSkull style={{ fontSize: '1.5rem', color: 'white' }} />
                      </div>
                      <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#2d3748' }}>Health Survivor</h4>
                    </div>
                    <p style={{ color: '#4a5568', margin: '0 0 1rem 0', lineHeight: 1.6 }}>
                      Survive in a post-apocalyptic world where your health and fitness determine your success. Complete daily challenges, maintain your health stats, and compete with others to be the last one standing!
                    </p>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaHeartbeat style={{ color: '#805ad5' }} />
                        <span>Track your daily steps and heart rate</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaTrophy style={{ color: '#805ad5' }} />
                        <span>Earn rewards for completing fitness challenges</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaUsers style={{ color: '#805ad5' }} />
                        <span>Compete in weekly survival tournaments</span>
                      </li>
                    </ul>
                  </div>

                  {/* Racing Game Card */}
                  <div style={{
                    backgroundColor: '#f7fafc',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#805ad5',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <FaRunning style={{ fontSize: '1.5rem', color: 'white' }} />
                      </div>
                      <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#2d3748' }}>Fitness Racer</h4>
                    </div>
                    <p style={{ color: '#4a5568', margin: '0 0 1rem 0', lineHeight: 1.6 }}>
                      Race through dynamic tracks where your real-world fitness activities power your vehicle. The more you exercise, the faster you go! Compete in global tournaments and climb the leaderboards.
                    </p>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaRunning style={{ color: '#805ad5' }} />
                        <span>Convert your workouts into race power</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaMedal style={{ color: '#805ad5' }} />
                        <span>Unlock special tracks and vehicles</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaUsers style={{ color: '#805ad5' }} />
                        <span>Join racing teams and compete globally</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div style={{
                  textAlign: 'center',
                  maxWidth: '600px'
                }}>
                  <p style={{ color: '#4a5568', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
                    Both games integrate with your health insurance benefits, allowing you to earn rewards and unlock exclusive coverage features as you play!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Snapchat Modal */}
      {isSnapchatModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsSnapchatModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Snapchat Profile</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsSnapchatModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#faf089',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <FaSnapchatGhost style={{ fontSize: '4rem', color: '#744210' }} />
                </div>
                <div style={{
                  textAlign: 'center',
                  maxWidth: '600px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {isEditingUsername ? (
                      <input
                        type="text"
                        value={snapchatUsername}
                        onChange={(e) => setSnapchatUsername(e.target.value)}
                        onBlur={() => setIsEditingUsername(false)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            setIsEditingUsername(false);
                          }
                        }}
                        style={{
                          fontSize: '1.5rem',
                          color: '#2d3748',
                          border: '1px solid #e2e8f0',
                          borderRadius: '0.375rem',
                          padding: '0.25rem 0.5rem',
                          textAlign: 'center'
                        }}
                        autoFocus
                      />
                    ) : (
                      <>
                        <h3 style={{ 
                          fontSize: '1.5rem', 
                          color: '#2d3748', 
                          margin: 0 
                        }}>
                          {snapchatUsername}
                        </h3>
                        <button
                          onClick={() => setIsEditingUsername(true)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#744210',
                            cursor: 'pointer',
                            padding: '0.25rem'
                          }}
                        >
                          <FaPencilAlt style={{ fontSize: '1rem' }} />
                        </button>
                      </>
                    )}
                  </div>
                  <p style={{ color: '#4a5568', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
                    Join our Snapchat community to share your fitness journey, get exclusive health tips, and connect with others on their wellness path!
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                  maxWidth: '400px'
                }}>
                  <button
                    className="btn btn-yellow"
                    onClick={() => {
                      alert('Coming soon: Share your unique profile link with friends!');
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FaSnapchatGhost style={{ fontSize: '1.25rem' }} />
                    Share to Friends
                  </button>
                </div>
                <div style={{
                  marginTop: '1rem',
                  padding: '1.5rem',
                  backgroundColor: '#faf089',
                  borderRadius: '0.5rem',
                  width: '100%',
                  maxWidth: '400px'
                }}>
                  <h4 style={{ margin: '0 0 1rem 0', color: '#744210' }}>Join Our Gaming Community</h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <FaGamepad style={{ color: '#744210', fontSize: '1.25rem' }} />
                      <div>
                        <strong style={{ color: '#744210' }}>Early Access to Games</strong>
                        <p style={{ margin: '0.25rem 0 0 0', color: '#4a5568', fontSize: '0.875rem' }}>
                          Be the first to play our new fitness games and earn exclusive rewards
                        </p>
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <FaTrophy style={{ color: '#744210', fontSize: '1.25rem' }} />
                      <div>
                        <strong style={{ color: '#744210' }}>Global Leaderboards</strong>
                        <p style={{ margin: '0.25rem 0 0 0', color: '#4a5568', fontSize: '0.875rem' }}>
                          Compete with friends and climb the ranks in our fitness challenges
                        </p>
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <FaUsers style={{ color: '#744210', fontSize: '1.25rem' }} />
                      <div>
                        <strong style={{ color: '#744210' }}>Community Events</strong>
                        <p style={{ margin: '0.25rem 0 0 0', color: '#4a5568', fontSize: '0.875rem' }}>
                          Join group challenges and team competitions with other members
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Activity Modal */}
      {isActivityModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsActivityModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Recent Activity</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsActivityModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                  width: '100%'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaHistory style={{ fontSize: '2.5rem', color: '#718096' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#2d3748', margin: 0 }}>No Recent Activity</h3>
                  <p style={{
                    color: '#4a5568',
                    maxWidth: '600px',
                    margin: 0,
                    lineHeight: 1.6
                  }}>
                    You haven't completed any activities yet. Start your health journey by checking out available offers and completing challenges!
                  </p>
                  <button
                    className="btn btn-green"
                    onClick={() => {
                      setIsActivityModalOpen(false);
                      setIsOffersModalOpen(true);
                    }}
                  >
                    View Available Offers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Offers Modal */}
      {isOffersModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsOffersModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Available Offers</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsOffersModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                  width: '100%'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#fed7d7',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaGift style={{ fontSize: '2.5rem', color: '#e53e3e' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#2d3748', margin: 0 }}>No Available Offers</h3>
                  <p style={{
                    color: '#4a5568',
                    maxWidth: '600px',
                    margin: 0,
                    lineHeight: 1.6
                  }}>
                    There are currently no offers available. Check back later for new rewards and challenges!
                  </p>
                  <button
                    className="btn btn-red"
                    onClick={() => setIsOffersModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compose Message Modal */}
      {isComposeModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsComposeModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Compose Message</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsComposeModalOpen(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleMessageSubmit} style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {/* Recipient Field */}
                <div>
                  <label 
                    htmlFor="recipient"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    To:
                  </label>
                  <input
                    type="text"
                    id="recipient"
                    value={messageData.recipient}
                    onChange={(e) => setMessageData(prev => ({ ...prev, recipient: e.target.value }))}
                    placeholder="Enter recipient's email"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label 
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={messageData.subject}
                    onChange={(e) => setMessageData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Enter message subject"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="message"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    value={messageData.message}
                    onChange={(e) => setMessageData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Type your message here..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      minHeight: '200px',
                      resize: 'vertical'
                    }}
                    required
                  />
                </div>

                {/* Attachment Section */}
                <div>
                  <label 
                    htmlFor="attachment"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    Attachment:
                  </label>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <label
                      htmlFor="attachment"
                      className="btn btn-gold"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                      }}
                    >
                      <FaPaperclip style={{ fontSize: '1rem', color: '#744210' }} />
                      Choose File
                      <input
                        type="file"
                        id="attachment"
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                      />
                    </label>
                    {selectedFile && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem',
                        backgroundColor: '#f7fafc',
                        borderRadius: '0.375rem',
                        fontSize: '0.875rem'
                      }}>
                        <span style={{ color: '#4a5568' }}>{selectedFile.name}</span>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#e53e3e',
                            cursor: 'pointer',
                            padding: '0.25rem'
                          }}
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setIsComposeModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-blue"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FaPaperPlane style={{ fontSize: '1rem' }} />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Email Modal */}
      {isChangeEmailModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsChangeEmailModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '500px',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Change Email</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsChangeEmailModalOpen(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              // Handle email change
              setIsChangeEmailModalOpen(false);
            }} style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div>
                  <label 
                    htmlFor="currentEmail"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    Current Email
                  </label>
                  <input
                    type="email"
                    id="currentEmail"
                    value={emailData.currentEmail}
                    onChange={(e) => setEmailData(prev => ({ ...prev, currentEmail: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="newEmail"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    New Email
                  </label>
                  <input
                    type="email"
                    id="newEmail"
                    value={emailData.newEmail}
                    onChange={(e) => setEmailData(prev => ({ ...prev, newEmail: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="emailPassword"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="emailPassword"
                    value={emailData.password}
                    onChange={(e) => setEmailData(prev => ({ ...prev, password: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setIsChangeEmailModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Update Email
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {isChangePasswordModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsChangePasswordModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '500px',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2d3748' }}>Change Password</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#718096',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsChangePasswordModalOpen(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              // Handle password change
              setIsChangePasswordModalOpen(false);
            }} style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div>
                  <label 
                    htmlFor="currentPassword"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="newPassword"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="confirmPassword"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setIsChangePasswordModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Authentication Settings Modal */}
      {isAuthSettingsModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsAuthSettingsModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '500px',
              position: 'relative',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#000000' }}>Authentication Settings</h2>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: '#000000',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 1
                }}
                onClick={() => setIsAuthSettingsModalOpen(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              // Handle auth settings update
              setIsAuthSettingsModalOpen(false);
            }} style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {/* Two-Factor Authentication Section */}
                <div style={{
                  backgroundColor: '#f7fafc',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#000000' }}>Two-Factor Authentication</h3>
                      <p style={{ margin: 0, color: '#000000', fontSize: '0.875rem' }}>
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={authSettings.twoFactorEnabled}
                        onChange={(e) => setAuthSettings(prev => ({ ...prev, twoFactorEnabled: e.target.checked }))}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>

                  {authSettings.twoFactorEnabled && (
                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ marginBottom: '1rem' }}>
                        <label style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          color: '#000000',
                          fontWeight: '500'
                        }}>
                          Verification Method
                        </label>
                        <div style={{
                          display: 'flex',
                          gap: '1rem'
                        }}>
                          <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer'
                          }}>
                            <input
                              type="radio"
                              name="verificationMethod"
                              value="sms"
                              checked={authSettings.verificationMethod === 'sms'}
                              onChange={(e) => setAuthSettings(prev => ({ ...prev, verificationMethod: e.target.value }))}
                            />
                            <span style={{ color: '#000000' }}>SMS</span>
                          </label>
                          <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer'
                          }}>
                            <input
                              type="radio"
                              name="verificationMethod"
                              value="authenticator"
                              checked={authSettings.verificationMethod === 'authenticator'}
                              onChange={(e) => setAuthSettings(prev => ({ ...prev, verificationMethod: e.target.value }))}
                            />
                            <span style={{ color: '#000000' }}>Authenticator App</span>
                          </label>
                        </div>
                      </div>

                      {authSettings.verificationMethod === 'sms' && (
                        <div>
                          <label style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            color: '#000000',
                            fontWeight: '500'
                          }}>
                            Phone Number
                          </label>
                          <div style={{
                            display: 'flex',
                            gap: '0.5rem'
                          }}>
                            <input
                              type="tel"
                              value={authSettings.phoneNumber}
                              onChange={(e) => setAuthSettings(prev => ({ ...prev, phoneNumber: e.target.value }))}
                              placeholder="(555) 555-5555"
                              style={{
                                flex: 1,
                                padding: '0.75rem',
                                border: '1px solid #e2e8f0',
                                borderRadius: '0.375rem',
                                fontSize: '1rem'
                              }}
                            />
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                // Handle verification code sending
                                alert('Verification code sent to your phone!');
                              }}
                            >
                              Verify
                            </button>
                          </div>
                          {authSettings.phoneVerified && (
                            <p style={{ margin: '0.5rem 0 0 0', color: '#38a169', fontSize: '0.875rem' }}>
                              ✓ Phone number verified
                            </p>
                          )}
                        </div>
                      )}

                      {authSettings.verificationMethod === 'authenticator' && (
                        <div>
                          <p style={{ color: '#000000', marginBottom: '1rem' }}>
                            Scan this QR code with your authenticator app:
                          </p>
                          <div style={{
                            backgroundColor: '#fff',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #e2e8f0',
                            display: 'inline-block'
                          }}>
                            {/* Placeholder for QR code */}
                            <div style={{
                              width: '150px',
                              height: '150px',
                              backgroundColor: '#e2e8f0',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#000000'
                            }}>
                              QR Code
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Session Timeout Section */}
                <div style={{
                  backgroundColor: '#f7fafc',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#000000' }}>Session Timeout</h3>
                    <p style={{ margin: '0 0 1rem 0', color: '#000000', fontSize: '0.875rem' }}>
                      Set how long you can be inactive before being logged out
                    </p>
                  </div>
                  <label 
                    htmlFor="sessionTimeout"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#000000',
                      fontWeight: '500'
                    }}
                  >
                    Timeout Duration
                  </label>
                  <select
                    id="sessionTimeout"
                    value={authSettings.sessionTimeout}
                    onChange={(e) => setAuthSettings(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      color: '#000000'
                    }}
                  >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={120}>2 hours</option>
                  </select>
                  <p style={{ margin: '0.5rem 0 0 0', color: '#4a5568', fontSize: '0.875rem' }}>
                    Current setting: {authSettings.sessionTimeout} minutes
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setIsAuthSettingsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </MotionBox>
  );
} 