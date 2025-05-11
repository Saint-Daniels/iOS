'use client';

import { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Navbar, ProgressBar, Modal, Toast, Alert, Form } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGamepad, FaSnapchatGhost, FaShieldAlt, FaEnvelope, FaStar, FaTrash, FaReply, FaUserPlus, FaGift, FaRunning, FaSkull, FaTrophy, FaTimes, FaExclamationTriangle, FaCheckCircle, FaUsers, FaMedal, FaReceipt, FaHeartbeat, FaCalendarCheck, FaMobileAlt, FaCookie, FaCopy, FaShare, FaCog, FaLock, FaUserCog, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import ReceiptScanner from '../components/ReceiptScanner';
import { motion, AnimatePresence } from 'framer-motion';
import InsuranceProviderLogo from '../components/InsuranceProviderLogo';
import RewardLogo from '../components/RewardLogo';
import SignaturePad from 'react-signature-canvas';
import { updateUserEmail, updateUserPassword } from '../../lib/firebase';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showReceiptScanner, setShowReceiptScanner] = useState(false);
  const [showGameModal, setShowGameModal] = useState(false);
  const [showSnapchatModal, setShowSnapchatModal] = useState(false);
  const [showMailboxModal, setShowMailboxModal] = useState(false);
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [showLogoutWarning, setShowLogoutWarning] = useState(false);
  const [showRefreshWarning, setShowRefreshWarning] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);
  const [warningTimer, setWarningTimer] = useState(null);
  const INACTIVITY_TIMEOUT = 10 * 60 * 1000; // 10 minutes
  const WARNING_TIMEOUT = 30 * 1000; // 30 seconds
  const [userName, setUserName] = useState('User');
  const [insurancePlan, setInsurancePlan] = useState({
    name: 'Premium Plus',
    status: 'Active',
    expiryDate: 'December 31, 2024',
    coverage: {
      deductible: '$500',
      copay: '$20',
      outOfPocketMax: '$2,000'
    },
    agent: {
      name: 'John Cothran',
      npn: '20232956',
      email: 'john.cothran@healthcare.com'
    }
  });
  const [socialProfile, setSocialProfile] = useState({
    username: '@health_warrior',
    isConnected: false
  });
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: 'Krispy Kreme Rewards',
      description: 'Get 30 days of active coverage for completing your annual wellness check-up',
      days: 30,
      expiryDate: '2024-12-31',
      type: 'food',
      icon: FaCookie
    },
    {
      id: 2,
      title: 'Walgreens Rewards',
      description: 'Complete 30 days of exercise and earn 60 days of active coverage',
      days: 60,
      expiryDate: '2024-06-30',
      type: 'health',
      icon: FaHeartbeat
    },
    {
      id: 3,
      title: 'T-Mobile Summer Christmas Reward',
      description: 'Sign up for T-Mobile phone service and maintain 6 months of active coverage to receive your Summer Christmas reward. Must verify mailing address for delivery.',
      days: 15,
      expiryDate: '2024-05-15',
      type: 'mobile',
      icon: FaMobileAlt,
      requirements: {
        coverageDuration: '6 months',
        deliveryMethod: 'mailing address'
      }
    }
  ]);
  const [activities, setActivities] = useState([
    {
      date: 'March 22, 2024',
      description: 'Completed Level 5 in Health Quest',
      type: 'game',
      icon: FaTrophy,
      reward: {
        days: 30,
        status: 'earned',
        provider: 'Krispy Kreme'
      }
    },
    {
      date: 'March 15, 2024',
      description: 'Connected with 3 new friends',
      type: 'social',
      icon: FaUsers,
      reward: {
        days: 15,
        status: 'earned',
        provider: 'T-Mobile'
      }
    },
    {
      date: 'March 10, 2024',
      description: 'Achieved High Score in Wellness Run',
      type: 'fitness',
      icon: FaRunning,
      reward: {
        days: 60,
        status: 'earned',
        provider: 'Walgreens'
      }
    },
    {
      date: 'March 8, 2024',
      description: 'Submitted Health Receipt',
      type: 'receipt',
      icon: FaReceipt,
      reward: {
        days: 15,
        status: 'pending',
        provider: 'Krispy Kreme'
      }
    },
    {
      date: 'March 5, 2024',
      description: 'Completed Wellness Check-in',
      type: 'health',
      icon: FaHeartbeat,
      reward: {
        days: 7,
        status: 'earned',
        provider: 'Walgreens'
      }
    }
  ]);
  const [inboxMessages, setInboxMessages] = useState([
    {
      id: 1,
      from: 'Dr. Smith',
      subject: 'Appointment Confirmation',
      preview: 'Your appointment has been scheduled for next Thursday at 2:00 PM...',
      date: '2 hours ago',
      read: false,
      starred: true,
      category: 'appointment'
    },
    {
      id: 2,
      from: 'Pharmacy',
      subject: 'Prescription Ready',
      preview: 'Your prescription is ready for pickup at your local pharmacy...',
      date: '1 day ago',
      read: true,
      starred: false,
      category: 'pharmacy'
    },
    {
      id: 3,
      from: 'Insurance Provider',
      subject: 'Coverage Update',
      preview: 'Important updates to your coverage plan effective next month...',
      date: '2 days ago',
      read: true,
      starred: false,
      category: 'insurance'
    }
  ]);
  const [inviteUsername, setInviteUsername] = useState('');
  const [showComposeModal, setShowComposeModal] = useState(false);
  const [showMessageLimitWarning, setShowMessageLimitWarning] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [composeForm, setComposeForm] = useState({
    subject: '',
    message: '',
    attachments: []
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const coverageHistory = [
    {
      period: "March 2024 - Present",
      plan: "UnitedHealthcare Choice Plus",
      description: "Current Coverage"
    },
    {
      period: "March 2023 - February 2024",
      plan: "UnitedHealthcare Choice Plus",
      description: "Previous Coverage Period"
    },
    {
      period: "March 2022 - February 2023",
      plan: "UnitedHealthcare Standard",
      description: "Previous Coverage Period"
    },
    {
      period: "March 2021 - February 2022",
      plan: "UnitedHealthcare Standard",
      description: "Previous Coverage Period"
    },
    {
      period: "March 2020 - February 2021",
      plan: "UnitedHealthcare Basic",
      description: "Previous Coverage Period"
    },
    // Add more historical entries as needed
  ];
  const totalPages = Math.ceil(coverageHistory.length / itemsPerPage);
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteLink, setInviteLink] = useState('https://saintdaniels.com/join/health_warrior'); // This would come from your marketing system
  const [currentMailboxPage, setCurrentMailboxPage] = useState(1);
  const messagesPerPage = 5;
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [offerProgress, setOfferProgress] = useState({
    1: { days: 0, total: 30 }, // Krispy Kreme
    2: { days: 0, total: 60 }, // Walgreens
    3: { days: 0, total: 15 }  // T-Mobile
  });
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showLegalApprovalModal, setShowLegalApprovalModal] = useState(false);
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [show2FASuccessModal, setShow2FASuccessModal] = useState(false);
  const [verificationStep, setVerificationStep] = useState('password'); // password, address, signature, legal
  const [password, setPassword] = useState('');
  const [signature, setSignature] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [signaturePad, setSignaturePad] = useState(null);
  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [mailingAddress, setMailingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    isVerified: false
  });
  const [passwordChangeForm, setPasswordChangeForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [twoFactorForm, setTwoFactorForm] = useState({
    phoneNumber: '',
    verificationCode: '',
    isVerified: false,
    codeSent: false,
    codeAttempts: 0,
    lastCodeSent: null
  });
  const [showEmailChangeModal, setShowEmailChangeModal] = useState(false);
  const [emailChangeForm, setEmailChangeForm] = useState({
    newEmail: '',
    password: ''
  });
  const [emailChangeError, setEmailChangeError] = useState('');
  const [emailChangeSuccess, setEmailChangeSuccess] = useState(false);
  const [snapchatUsername, setSnapchatUsername] = useState('@health_warrior');
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Reset timers on user activity
  const resetTimers = useCallback(() => {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    if (warningTimer) clearTimeout(warningTimer);
    
    const newInactivityTimer = setTimeout(() => {
      setShowLogoutWarning(true);
      const newWarningTimer = setTimeout(() => {
        handleLogout();
      }, WARNING_TIMEOUT);
      setWarningTimer(newWarningTimer);
    }, INACTIVITY_TIMEOUT);
    
    setInactivityTimer(newInactivityTimer);
  }, [inactivityTimer, warningTimer]);

  // Handle user activity
  useEffect(() => {
    const handleActivity = () => {
      resetTimers();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    resetTimers();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      if (inactivityTimer) clearTimeout(inactivityTimer);
      if (warningTimer) clearTimeout(warningTimer);
    };
  }, [resetTimers]);

  // Handle browser back button and navigation
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
      handleLogout();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handleBeforeUnload);
    };
  }, []);

  // Handle browser refresh
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!showRefreshWarning) {
        e.preventDefault();
        setShowRefreshWarning(true);
        return e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [showRefreshWarning]);

  // Check if user is logged in and get user email
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }

    // TODO: Replace with actual Firebase user data fetch
    // const fetchUserData = async () => {
    //   try {
    //     const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
    //     if (userDoc.exists()) {
    //       setUserName(userDoc.data().name || 'User');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   }
    // };
    // fetchUserData();

      setLoading(false);
  }, [router]);

  const handleLogout = () => {
    // Clear all session storage
    sessionStorage.clear();
    // Clear any other auth-related items
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    // Force redirect to homepage
    window.location.href = '/';
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    handleLogout();
  };

  const handleDismissWarning = () => {
    setShowLogoutWarning(false);
    resetTimers();
  };

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
    setShowClaimModal(true);
  };

  const handleStartVerification = () => {
    setShowClaimModal(false);
    setShowVerificationModal(true);
    setVerificationStep('password');
    setPassword('');
    setSignature(null);
  };

  const handleScanSuccess = (result) => {
    // Update points balance
    setPointsBalance(prev => prev + result.daysAwarded);
    
    // Add to activity list
    const today = new Date();
    const formattedDate = today.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    setActivities(prev => [
      {
        date: formattedDate,
        description: `Earned ${result.daysAwarded} days of active coverage - Organic Food Rebate`,
        type: 'receipt',
        icon: FaReceipt,
        reward: {
          days: result.daysAwarded,
          status: 'earned',
          provider: 'Krispy Kreme'
        }
      },
      ...prev
    ]);
  };

  const handleGameStart = () => {
    setShowGameModal(true);
  };

  const handleSocialConnect = () => {
    setShowSnapchatModal(true);
  };

  const handleMailboxClick = () => {
    setShowMailboxModal(true);
  };

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    setShowMessageModal(true);
    // Mark as read
    setInboxMessages(prev => 
      prev.map(msg => 
        msg.id === message.id ? { ...msg, read: true } : msg
      )
    );
  };

  const handleDeleteMessage = (messageId) => {
    setInboxMessages(prev => prev.filter(msg => msg.id !== messageId));
    setShowMessageModal(false);
  };

  const handleReplyMessage = (message) => {
    setShowMessageModal(false);
    setShowComposeModal(true);
    setComposeForm({
      subject: `Re: ${message.subject}`,
      message: '',
      attachments: []
    });
  };

  const handleStarMessage = (messageId, e) => {
    e.stopPropagation();
    setInboxMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, starred: !msg.starred } : msg
      )
    );
  };

  const handleSendInvite = () => {
    // Implement invite functionality
    console.log('Invite sent to:', inviteUsername);
  };

  const handleComposeClick = () => {
    // Check if user has reached daily message limit
    if (messageCount >= 3) {
      setShowMessageLimitWarning(true);
      return;
    }
    setShowComposeModal(true);
  };

  const handleFileAttachment = (event) => {
    const files = Array.from(event.target.files);
    setComposeForm(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleRemoveAttachment = (index) => {
    setComposeForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSendMessage = () => {
    // Here you would typically send the message to your backend
    console.log('Sending message:', composeForm);
    
    // Increment message count
    setMessageCount(prev => prev + 1);
    
    // Reset form and close modal
    setComposeForm({
      subject: '',
      message: '',
      attachments: []
    });
    setShowComposeModal(false);
    
    // Add to inbox messages
    setInboxMessages(prev => [
      {
        id: Date.now(),
        from: 'You',
        subject: composeForm.subject,
        preview: composeForm.message.substring(0, 50) + '...',
        date: 'Just now',
        read: true,
        starred: false,
        category: 'sent'
      },
      ...prev
    ]);
  };

  const getActivityIconColor = (type) => {
    const colors = {
      game: 'primary',
      social: 'success',
      fitness: 'warning',
      receipt: 'info',
      health: 'danger',
      food: 'success',
      mobile: 'primary'
    };
    return colors[type] || 'primary';
  };

  // Filter messages based on search query and date
  useEffect(() => {
    let filtered = [...inboxMessages];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(msg => 
        msg.subject.toLowerCase().includes(query) ||
        msg.preview.toLowerCase().includes(query) ||
        msg.from.toLowerCase().includes(query)
      );
    }

    // Apply date filter
    if (dateFilter !== 'all') {
      const now = new Date();
      filtered = filtered.filter(msg => {
        const msgDate = new Date(msg.date);
        switch (dateFilter) {
          case 'today':
            return msgDate.toDateString() === now.toDateString();
          case 'week':
            const weekAgo = new Date(now.setDate(now.getDate() - 7));
            return msgDate >= weekAgo;
          case 'month':
            const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
            return msgDate >= monthAgo;
          default:
            return true;
        }
      });
    }

    setFilteredMessages(filtered);
    setCurrentMailboxPage(1); // Reset to first page when filters change
  }, [searchQuery, dateFilter, inboxMessages]);

  const getVerificationSteps = (offerType) => {
    switch (offerType) {
      case 'mobile':
        return [
          'Sign up for T-Mobile phone service',
          'Maintain 6 months of active coverage',
          'Verify your mailing address for delivery',
          'Sign the reward claim form',
          'Enter your password to confirm'
        ];
      case 'food':
      case 'health':
        return [
          'Connect your Cash App account',
          'Sign the reward claim form',
          'Enter your password to confirm'
        ];
      default:
        return [];
    }
  };

  const clearSignature = () => {
    signaturePad?.clear();
    setIsSignatureEmpty(true);
  };

  const handleSignatureEnd = () => {
    setIsSignatureEmpty(signaturePad?.isEmpty());
  };

  const getLegalDisclaimer = (type) => {
    const baseDisclaimer = `
      LEGAL DISCLAIMER AND TERMS OF USE

      By participating in this reward program, you acknowledge and agree to the following terms and conditions:

      1. PROGRAM ELIGIBILITY AND REQUIREMENTS
         - You must maintain active coverage for the specified duration
         - All information provided must be accurate and verifiable
         - You must comply with all program rules and requirements
         - Rewards are subject to verification and approval

      2. REWARD TERMS AND CONDITIONS
         - Rewards are non-transferable and non-refundable
         - Rewards cannot be exchanged for cash
         - Rewards are subject to availability
         - We reserve the right to modify or terminate rewards

      3. VERIFICATION AND COMPLIANCE
         - We may verify your eligibility at any time
         - You must provide accurate documentation when requested
         - False or misleading information may result in disqualification
         - We may audit your participation in the program

      4. LIABILITY DISCLAIMER
         - We are not liable for any indirect, incidental, or consequential damages
         - We are not responsible for lost or stolen rewards
         - We are not liable for any third-party actions or services
         - Our liability is limited to the value of the reward

      5. PRIVACY AND DATA USAGE
         - Your information will be used in accordance with our privacy policy
         - We may share your information with program partners
         - You consent to receive program-related communications
         - We may use your data for program improvement

      6. PROGRAM MODIFICATIONS
         - We reserve the right to modify these terms at any time
         - Changes will be communicated through appropriate channels
         - Continued participation implies acceptance of changes
         - We may suspend or terminate the program at any time

      7. DISPUTE RESOLUTION
         - All disputes will be resolved through arbitration
         - You waive your right to class action lawsuits
         - Governing law is the state of [Your State]
         - Venue for disputes is [Your City, State]

      8. TAX IMPLICATIONS
         - Rewards may be considered taxable income
         - You are responsible for reporting rewards on your taxes
         - We may provide tax documentation when required
         - Consult a tax professional for specific advice

      9. PROGRAM TERMINATION
         - We may terminate your participation for any violation
         - You may terminate participation at any time
         - Termination may affect pending rewards
         - We are not liable for terminated rewards

      10. GENERAL PROVISIONS
          - These terms constitute the entire agreement
          - Invalid provisions will be modified to be valid
          - Our failure to enforce any term is not a waiver
          - These terms survive program termination
    `;

    const specificDisclaimers = {
      mobile: `
        ADDITIONAL TERMS FOR T-MOBILE REWARD

        1. SERVICE REQUIREMENTS
           - Must maintain active T-Mobile service for 6 months
           - Service must be in good standing
           - No past due balances allowed
           - Must comply with T-Mobile's terms of service

        2. DELIVERY AND REDEMPTION
           - Reward will be delivered to verified mailing address
           - Must maintain valid mailing address
           - Delivery may take 4-6 weeks after verification
           - No replacement for lost or stolen rewards

        3. VERIFICATION PROCESS
           - Must provide valid government ID
           - Must verify current mailing address
           - Must maintain active coverage
           - May require additional documentation
      `,
      food: `
        ADDITIONAL TERMS FOR KRISPY KREME REWARD

        1. PAYMENT PROCESSING
           - Rewards will be processed through Cash App
           - Must maintain active Cash App account
           - Processing may take 2-3 business days
           - No alternative payment methods available

        2. VERIFICATION REQUIREMENTS
           - Must verify Cash App account ownership
           - Must provide valid identification
           - Must maintain active coverage
           - May require additional verification

        3. REDEMPTION TERMS
           - Rewards are non-transferable
           - Must be redeemed within 30 days
           - No cash value
           - Subject to availability
      `,
      health: `
        ADDITIONAL TERMS FOR WALGREENS REWARD

        1. PAYMENT PROCESSING
           - Rewards will be processed through Cash App
           - Must maintain active Cash App account
           - Processing may take 2-3 business days
           - No alternative payment methods available

        2. VERIFICATION REQUIREMENTS
           - Must verify Cash App account ownership
           - Must provide valid identification
           - Must maintain active coverage
           - May require additional verification

        3. REDEMPTION TERMS
           - Rewards are non-transferable
           - Must be redeemed within 30 days
           - No cash value
           - Subject to availability
      `
    };

    return baseDisclaimer + (specificDisclaimers[type] || '');
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordChangeForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handle2FAChange = (e) => {
    const { name, value } = e.target;
    setTwoFactorForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordUpdate = () => {
    // Here you would typically make an API call to update the password
    setShowPasswordChangeModal(false);
    setPasswordChangeForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handle2FAVerification = () => {
    // Here you would typically make an API call to verify the phone number
    setTwoFactorForm(prev => ({
      ...prev,
      isVerified: true,
      codeSent: true,
      codeAttempts: prev.codeAttempts + 1,
      lastCodeSent: Date.now()
    }));
  };

  const handleResendCode = () => {
    if (canSendCode()) {
      setTwoFactorForm(prev => ({
        ...prev,
        codeAttempts: 0,
        lastCodeSent: Date.now()
      }));
      handle2FAVerification();
    }
  };

  const canSendCode = () => {
    if (twoFactorForm.codeAttempts >= 3) {
      const timeSinceLastCode = Date.now() - twoFactorForm.lastCodeSent;
      return timeSinceLastCode >= 5 * 60 * 1000; // 5 minutes in milliseconds
    }
    return true;
  };

  const getTimeUntilNextCode = () => {
    if (twoFactorForm.codeAttempts >= 3) {
      const timeSinceLastCode = Date.now() - twoFactorForm.lastCodeSent;
      const timeRemaining = 5 * 60 * 1000 - timeSinceLastCode;
      if (timeRemaining > 0) {
        const minutes = Math.ceil(timeRemaining / (60 * 1000));
        return minutes;
      }
    }
    return 0;
  };

  const handle2FAEnable = () => {
    // Here you would typically make an API call to enable 2FA
    setShow2FAModal(false);
    setShow2FASuccessModal(true);
  };

  const handleChangePhoneNumber = () => {
    setTwoFactorForm({
      phoneNumber: '',
      verificationCode: '',
      isVerified: false,
      codeSent: false,
      codeAttempts: 0,
      lastCodeSent: null
    });
    setShow2FASuccessModal(false);
    setShow2FAModal(true);
  };

  const handleSignaturePadRef = useCallback((ref) => {
    if (ref) {
      setSignaturePad(ref);
    }
  }, []);

  const handleAddressChange = (field, value) => {
    setMailingAddress(prev => ({
      ...prev,
      [field]: value,
      isVerified: false
    }));
  };

  const handleAddressVerification = () => {
    // Simulate address verification
    setMailingAddress(prev => ({
      ...prev,
      isVerified: true
    }));
  };

  const handleEmailChange = async () => {
    setEmailChangeError('');
    setEmailChangeSuccess(false);

    if (!emailChangeForm.newEmail || !emailChangeForm.password) {
      setEmailChangeError('Please fill in all fields');
      return;
    }

    const result = await updateUserEmail(emailChangeForm.newEmail, emailChangeForm.password);
    
    if (result.success) {
      setEmailChangeSuccess(true);
      setEmailChangeForm({ newEmail: '', password: '' });
      setTimeout(() => {
        setShowEmailChangeModal(false);
        setEmailChangeSuccess(false);
      }, 2000);
    } else {
      setEmailChangeError(result.error);
    }
  };

  const handleUsernameEdit = () => {
    setIsEditingUsername(true);
    setNewUsername(snapchatUsername.replace('@', ''));
  };

  const handleUsernameSave = () => {
    if (newUsername.trim()) {
      setSnapchatUsername(`@${newUsername.trim()}`);
      setIsEditingUsername(false);
    }
  };

  const handleUsernameCancel = () => {
    setIsEditingUsername(false);
    setNewUsername('');
  };

  if (loading) {
    return (
      <div className="dashboard-page d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="spinner-border text-gold" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="dashboard-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar className="dashboard-navbar px-4 py-3">
        <Container>
          <div className="navbar-brand">
            <Image 
              src="/images/saintdanielslogo.jpeg" 
              alt="Saint Daniels Logo" 
              width={60} 
              height={60} 
              className="header-logo"
            />
          </div>
          <div className="d-flex align-items-center">
            <Button 
              variant="link" 
              className="text-light me-3"
              onClick={() => setShowSettingsModal(true)}
            >
              <FaCog size={20} />
            </Button>
            <Button className="logout-btn" onClick={handleLogoutClick}>
            Logout
          </Button>
          </div>
        </Container>
      </Navbar>

      {/* Logout Confirmation Modal */}
      <Modal 
        show={showLogoutModal} 
        onHide={() => setShowLogoutModal(false)} 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <FaSignOutAlt size={48} className="text-warning mb-3" />
            <h5>Are you sure you want to log out?</h5>
            <p className="text-muted">You will need to log in again to access your dashboard.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={() => setShowLogoutModal(false)}
          >
            Cancel
          </Button>
          <Button 
            variant="warning" 
            onClick={handleLogoutConfirm}
          >
            Yes, Logout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Logout Warning Toast */}
      <Toast 
        show={showLogoutWarning} 
        onClose={handleDismissWarning}
        className="logout-warning-toast"
        delay={WARNING_TIMEOUT}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Session Timeout</strong>
        </Toast.Header>
        <Toast.Body>
          <div className="d-flex flex-column">
            <p className="mb-3">You will be logged out in 30 seconds due to inactivity.</p>
            <div className="d-flex justify-content-between">
              <Button 
                variant="primary" 
                className="me-2"
                onClick={handleDismissWarning}
              >
                Stay Logged In
              </Button>
              <Button 
                variant="danger"
                onClick={handleLogout}
              >
                Log Out Now
              </Button>
            </div>
          </div>
        </Toast.Body>
      </Toast>

      <Container>
        <div className="dashboard-header">
          <h1>Welcome back, {userName}</h1>
          <p className="text-muted">Here's your health coverage summary</p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card className="dashboard-card h-100" onClick={() => setShowInsuranceModal(true)}>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  Insurance Plan
                  <div className="d-flex flex-column align-items-end">
                    <span className={`coverage-status ${insurancePlan.status.toLowerCase()}`}>
                      {insurancePlan.status}
                    </span>
                    <small className="text-muted agent-info">
                      Agent of Record: {insurancePlan.agent.name} | NPN: {insurancePlan.agent.npn}
                    </small>
                    </div>
                </Card.Title>
                <div className="text-center">
                  <div className="mb-3">
                    <InsuranceProviderLogo size="large" className="mx-auto" />
                  </div>
                  <h3 className="text-success mb-2">UnitedHealthcare Choice Plus</h3>
                  <p className="text-muted mb-3">Active until {insurancePlan.expiryDate}</p>
                  <div className="coverage-details">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Deductible</span>
                      <span className="text-success">{insurancePlan.coverage.deductible}</span>
                </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Co-pay</span>
                      <span className="text-success">{insurancePlan.coverage.copay}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Out-of-pocket Max</span>
                      <span className="text-success">{insurancePlan.coverage.outOfPocketMax}</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Game Arcade</Card.Title>
                <div className="game-display">
                  <FaGamepad size={48} className="text-primary mb-3" />
                  <h3>Coming Soon</h3>
                  <p className="text-muted mb-4">Exciting games and rewards are on the way!</p>
                  <div className="d-flex justify-content-center">
                  <Button 
                    className="dashboard-btn" 
                      onClick={handleGameStart}
                  >
                      Learn More
                </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-card h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>Snapchat</Card.Title>
                <div className="text-center flex-grow-1 d-flex flex-column justify-content-center">
                  <div className="snapchat-logo-container mb-4">
                    <div className="snapchat-logo-circle">
                      <FaSnapchatGhost size={80} className="text-warning" />
                  </div>
                    <div className="snapchat-username mt-3 text-center">
                      <h4 className="mb-0">{snapchatUsername}</h4>
                    </div>
                    </div>
                  {socialProfile.isConnected ? (
                    <>
                      <div className="profile-display mb-4">
                        <span className="profile-label">Username</span>
                        <span className="profile-value">{socialProfile.username}</span>
                    </div>
                      <div className="d-flex justify-content-center">
                        <Button 
                          className="dashboard-btn"
                          onClick={handleSocialConnect}
                        >
                          <FaSnapchatGhost className="me-2" />
                          Snapchat Profile
                        </Button>
                  </div>
                    </>
                  ) : (
                    <div className="empty-state">
                      <div className="d-flex justify-content-center">
                        <Button 
                          className="dashboard-btn" 
                          onClick={handleSocialConnect}
                        >
                          <FaUserCog className="me-2" />
                          Profile
                </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Mailbox</Card.Title>
                <div className="mailbox-preview">
                  <div className="mailbox-header">
                    <FaEnvelope size={48} className="text-primary mb-3" />
                    {inboxMessages.length > 0 && (
                      <div className="unread-badge">
                        {inboxMessages.filter(msg => !msg.read).length}
                  </div>
                    )}
                    </div>
                  {inboxMessages.length > 0 ? (
                    <div className="inbox-list">
                      {inboxMessages.slice(0, 3).map(message => (
                        <div 
                          key={message.id} 
                          className={`inbox-item ${!message.read ? 'unread' : ''}`}
                          onClick={() => handleMessageClick(message)}
                        >
                          <div className="inbox-item-header">
                            <span className="sender">{message.from}</span>
                            <span className="date">{message.date}</span>
                    </div>
                          <div className="inbox-item-subject">{message.subject}</div>
                          <div className="inbox-item-preview">{message.preview}</div>
                          <div className="inbox-item-actions">
                            <FaStar 
                              className={`star-icon ${message.starred ? 'starred' : ''}`}
                              onClick={(e) => handleStarMessage(message.id, e)}
                            />
                    </div>
                  </div>
                      ))}
                </div>
                  ) : (
                    <div className="empty-state">
                      <p className="text-muted mb-3">No messages yet</p>
                      <p className="text-muted small">Your important health updates will appear here</p>
                    </div>
                  )}
                  <div className="d-flex flex-column gap-2 mt-3">
                  <Button 
                      className="dashboard-btn w-100"
                      onClick={handleMailboxClick}
                    >
                      Messages
                </Button>
                    <Button 
                      className="dashboard-btn w-100"
                      onClick={handleComposeClick}
                  >
                      <FaEnvelope className="me-1" />
                      Compose
                  </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Recent Activity</Card.Title>
                {activities.length > 0 ? (
                  <>
                    <ul className="activity-list">
                      {activities.slice(0, 3).map((activity, index) => (
                        <li key={index} className="activity-item">
                          <div className="d-flex align-items-start">
                            <div className="activity-icon me-3">
                              {activity.icon && (
                                <activity.icon 
                                  size={24} 
                                  className={`text-${getActivityIconColor(activity.type)}`}
                                />
                              )}
                  </div>
                            <div className="flex-grow-1">
                              <div className="activity-date small text-muted">{activity.date}</div>
                              <p className="activity-description mb-1 small">{activity.description}</p>
                              {activity.reward && (
                                <div className="activity-reward small">
                                  <span className={`badge bg-${activity.reward.status === 'earned' ? 'success' : 'warning'} me-2`}>
                                    {activity.reward.days} days
                                  </span>
                                  <span className="text-muted">{activity.reward.provider}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  <Button 
                      className="dashboard-btn w-100 mt-3"
                      onClick={() => setShowAllActivities(true)}
                  >
                      View All Activities
                  </Button>
                  </>
                ) : (
                  <div className="empty-state">
                    <p className="text-muted mb-3">No recent activity</p>
                    <p className="text-muted small">Your health activities and achievements will appear here</p>
                </div>
                )}
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="dashboard-card h-100">
              <Card.Body className="p-3">
                <Card.Title>Available Offers</Card.Title>
                {offers && offers.length > 0 ? (
                <div className="offers-list">
                    {offers.slice(0, 3).map((offer, index) => (
                      <div key={index} className="offer-item mb-2 p-2 border rounded">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <div className="offer-icon">
                              {offer.icon && (
                                <offer.icon 
                                  size={32} 
                                  className={`text-${getActivityIconColor(offer.type)}`}
                                />
                              )}
                  </div>
                          </div>
                          <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                                <h5 className="mb-1">{offer.title}</h5>
                                <p className="text-muted mb-0 small">{offer.description}</p>
                      </div>
                      <Button 
                        className="dashboard-btn"
                                onClick={() => handleOfferClick(offer)}
                      >
                        Claim
                      </Button>
                    </div>
                  </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <p className="text-muted mb-3">No offers available</p>
                    <p className="text-muted small">Check back later for new rewards and offers</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modals */}
      <ReceiptScanner 
        show={showReceiptScanner} 
        onHide={() => setShowReceiptScanner(false)} 
        onSuccess={handleScanSuccess}
      />
      
      {/* Game Modal */}
      <Modal 
        show={showGameModal} 
        onHide={() => setShowGameModal(false)} 
        centered 
        size="lg"
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>
            <FaGamepad className="me-2" />
            Coming Soon: Fitness Games
          </Modal.Title>
          <button 
            type="button" 
            className="btn-close-modal" 
            onClick={() => setShowGameModal(false)}
            aria-label="Close"
          >
            <span>×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="upcoming-games">
            <div className="game-preview mb-4">
              <div className="game-card mb-4">
                <div className="game-icon">
                  <FaSkull size={48} className="text-danger mb-3" />
                </div>
                <h4>Zombie Survival Fitness</h4>
                <p className="text-muted">
                  Run, dodge, and survive in this immersive fitness game. Complete daily challenges
                  to earn points and unlock special rewards. Track your progress and compete with friends!
                </p>
                <div className="game-features">
                  <div className="feature">
                    <FaRunning className="me-2" />
                    <span>Daily Running Challenges</span>
                  </div>
                  <div className="feature">
                    <FaTrophy className="me-2" />
                    <span>Weekly Leaderboards</span>
                  </div>
                </div>
              </div>

              <div className="game-card">
                <div className="game-icon">
                  <FaRunning size={48} className="text-primary mb-3" />
                </div>
                <h4>Fitness Racing League</h4>
                <p className="text-muted">
                  Compete in virtual races against other members. Earn points for your daily
                  exercise activities and climb the ranks. Special rewards await top performers!
                </p>
                <div className="game-features">
                  <div className="feature">
                    <FaTrophy className="me-2" />
                    <span>Race Tournaments</span>
                  </div>
                  <div className="feature">
                    <FaGift className="me-2" />
                    <span>Exclusive Rewards</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-muted">Stay tuned for the launch of these exciting fitness games!</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Social Profile Modal */}
      {/* Snapchat Profile Modal */}
      <Modal show={showSnapchatModal} onHide={() => setShowSnapchatModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <FaSnapchatGhost className="me-2" />
            Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="snapchat-profile-modal">
            <div className="profile-header text-center">
              <FaUserCircle size={80} className="mx-auto mb-4 text-royal-gold" />
              <div className="profile-info">
                {isEditingUsername ? (
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      placeholder="Enter username"
                    />
                    <Button
                      variant="success"
                      onClick={handleUsernameSave}
                    >
                      <FaCheckCircle />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={handleUsernameCancel}
                    >
                      <FaTimes />
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
                    <h3>{snapchatUsername}</h3>
                    <Button
                      variant="link"
                      className="p-0 text-muted"
                      onClick={handleUsernameEdit}
                    >
                      <FaUserCog size={20} />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="text-center mb-4">
              <h4 className="text-primary mb-3">Coming Soon: Exciting Gaming Features!</h4>
              <p className="text-muted mb-4">
                Invite friends now to be among the first to experience our upcoming fitness gaming platform.
                Get ready for team challenges, multiplayer games, and exclusive rewards!
              </p>
              <div className="d-flex justify-content-center gap-3 mb-4">
                <div className="text-center">
                  <FaTrophy className="text-warning mb-2" size={24} />
                  <div className="small">Team Challenges (Coming Soon)</div>
                </div>
                <div className="text-center">
                  <FaGamepad className="text-primary mb-2" size={24} />
                  <div className="small">Multiplayer Games (Coming Soon)</div>
                </div>
                <div className="text-center">
                  <FaGift className="text-success mb-2" size={24} />
                  <div className="small">Special Rewards (Coming Soon)</div>
                </div>
              </div>
            </div>
            <div className="profile-actions d-flex justify-content-center">
              <Button 
                className="profile-action-btn"
                onClick={() => setShowInviteModal(true)}
                size="lg"
              >
                <FaUserPlus className="me-2" />
                Invite Friends
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Invite Friends Modal */}
      <Modal 
        show={showInviteModal} 
        onHide={() => setShowInviteModal(false)} 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Invite Friends</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="invite-friends-content">
            <div className="text-center mb-4">
              <FaUserPlus size={48} className="text-primary mb-3" />
              <h5>Share Your Invite Link</h5>
              <p className="text-muted">Invite friends to join your gaming community</p>
            </div>
            
            <div className="invite-link-section mb-4">
              <div className="invite-link-display p-3 border rounded bg-light text-center">
                <span className="text-primary">{inviteLink}</span>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Button 
                  variant="outline-primary"
                  onClick={() => {
                    navigator.clipboard.writeText(inviteLink);
                    // Add toast notification here
                  }}
                >
                  <FaCopy className="me-2" />
                  Copy Link
                </Button>
              </div>
            </div>

            <div className="invite-benefits">
              <h6 className="mb-3">Gaming Community Benefits</h6>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <FaGamepad className="text-primary me-2" />
                  <span>Access to exclusive fitness games</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaTrophy className="text-warning me-2" />
                  <span>Compete in daily challenges</span>
                </li>
                <li className="d-flex align-items-center">
                  <FaUsers className="text-success me-2" />
                  <span>Join team-based fitness competitions</span>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={() => setShowInviteModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Friends Modal */}
      <Modal show={showFriendsModal} onHide={() => setShowFriendsModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <FaUserPlus className="me-2" />
            Friends
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="friends-book">
            <div className="text-center">
              <FaUsers size={48} className="text-primary mb-3" />
              <h4>Coming Soon</h4>
              <p className="text-muted">
                Social features are currently under development. Stay tuned for updates!
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Mailbox Modal */}
      <Modal show={showMailboxModal} onHide={() => setShowMailboxModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mailbox-container">
            <div className="mailbox-sidebar">
              <div className="compose-button-container mb-3">
                <Button 
                  className="compose-button w-100"
                  onClick={handleComposeClick}
                >
                  <FaEnvelope className="me-2" />
                  Compose New Message
                </Button>
              </div>
            </div>
            <div className="mailbox-content">
              <div className="mailbox-toolbar">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="search-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search messages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="messages-list">
                {filteredMessages
                  .slice((currentMailboxPage - 1) * messagesPerPage, currentMailboxPage * messagesPerPage)
                  .map(message => (
                    <div 
                      key={message.id} 
                      className={`message-item ${!message.read ? 'unread' : ''} ${message.from === 'You' ? 'sent' : 'received'}`}
                      onClick={() => handleMessageClick(message)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="message-header">
                        <div className="message-sender">
                          <span className="sender-name">{message.from}</span>
                          {message.from === 'You' && (
                            <span className="sent-badge">Sent</span>
                          )}
                        </div>
                        <span className="message-date">{message.date}</span>
                      </div>
                      <div className="message-subject">{message.subject}</div>
                      <div className="message-preview">{message.preview}</div>
                      <div className="message-category">
                        <span className={`category-badge ${message.category}`}>
                          {message.category}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mailbox-pagination mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                  <div className="text-muted small">
                    Showing {((currentMailboxPage - 1) * messagesPerPage) + 1} to {Math.min(currentMailboxPage * messagesPerPage, filteredMessages.length)} of {filteredMessages.length} messages
                  </div>
                  <div className="pagination-controls">
                    <Button 
                      variant="outline-secondary" 
                      size="sm" 
                      className="me-2"
                      onClick={() => setCurrentMailboxPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentMailboxPage === 1}
                    >
                      Previous
                    </Button>
                    <span className="mx-2">Page {currentMailboxPage} of {Math.ceil(filteredMessages.length / messagesPerPage)}</span>
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => setCurrentMailboxPage(prev => Math.min(prev + 1, Math.ceil(filteredMessages.length / messagesPerPage)))}
                      disabled={currentMailboxPage === Math.ceil(filteredMessages.length / messagesPerPage)}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Insurance Modal */}
      <Modal show={showInsuranceModal} onHide={() => setShowInsuranceModal(false)} centered size="lg">
        <Modal.Header>
          <Modal.Title className="d-flex align-items-center">
            <InsuranceProviderLogo size="small" className="me-2" />
            Insurance Coverage Details
          </Modal.Title>
          <button 
            type="button" 
            className="btn-close-modal" 
            onClick={() => setShowInsuranceModal(false)}
            aria-label="Close"
          >
            <span>×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="insurance-modal-content">
            <div className="insurance-profile-section">
              <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                  <div className="d-flex align-items-center mb-2">
                    <InsuranceProviderLogo size="small" className="me-2" />
                    <h3 className="text-success mb-0">UnitedHealthcare Choice Plus</h3>
                      </div>
                  <p className="text-muted mb-0">Active until {insurancePlan.expiryDate}</p>
                </div>
                <span className={`coverage-status ${insurancePlan.status.toLowerCase()}`}>
                  {insurancePlan.status}
                </span>
              </div>
            </div>
            
            <div className="coverage-details-section">
              <h5>Coverage Details</h5>
              <div className="coverage-grid">
                <div className="coverage-item">
                  <span className="label">Monthly Premium</span>
                  <span className="value">$450.00</span>
                </div>
                <div className="coverage-item">
                  <span className="label">Deductible</span>
                  <span className="value">{insurancePlan.coverage.deductible}</span>
                </div>
                <div className="coverage-item">
                  <span className="label">Co-pay</span>
                  <span className="value">{insurancePlan.coverage.copay}</span>
                </div>
                <div className="coverage-item">
                  <span className="label">Out-of-pocket Max</span>
                  <span className="value">{insurancePlan.coverage.outOfPocketMax}</span>
                </div>
              </div>
            </div>

            <div className="coverage-history-section mt-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Coverage History</h5>
                <div className="pagination-controls">
                      <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    className="me-2"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="mx-2">Page {currentPage} of {totalPages}</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                      </Button>
                    </div>
                  </div>
              <div className="coverage-timeline">
                {coverageHistory.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-date">{item.period}</div>
                    <div className="timeline-content">
                      <h6>{item.plan}</h6>
                      <p className="text-muted mb-0">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Compose Message Modal */}
      <Modal show={showComposeModal} onHide={() => setShowComposeModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Compose Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="compose-message-form">
            <div className="mb-3">
              <label className="form-label">To</label>
              <div className="agent-info d-flex align-items-center">
                <span className={`status-dot ${insurancePlan.status.toLowerCase()}`}></span>
                <span>Agent of Record: {insurancePlan.agent.name}</span>
                <small className="text-muted ms-2">NPN: {insurancePlan.agent.npn}</small>
                {insurancePlan.status.toLowerCase() !== 'active' && (
                  <small className="text-muted ms-2">(Not Active)</small>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                value={composeForm.subject}
                onChange={(e) => setComposeForm(prev => ({ ...prev, subject: e.target.value }))}
                placeholder="Enter subject"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="6"
                value={composeForm.message}
                onChange={(e) => setComposeForm(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Type your message here..."
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Attachments</label>
              <div className="attachment-upload">
                <input
                  type="file"
                  className="form-control"
                  multiple
                  onChange={handleFileAttachment}
                />
              </div>
              {composeForm.attachments.length > 0 && (
                <div className="attachment-list mt-2">
                  {composeForm.attachments.map((file, index) => (
                    <div key={index} className="attachment-item d-flex align-items-center justify-content-between p-2 border rounded mb-2">
                      <span>{file.name}</span>
                      <Button
                        variant="link"
                        className="text-danger p-0"
                        onClick={() => handleRemoveAttachment(index)}
                      >
                        <FaTimes />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowComposeModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSendMessage}
            disabled={!composeForm.subject || !composeForm.message}
          >
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Message Limit Warning Modal */}
      <Modal show={showMessageLimitWarning} onHide={() => setShowMessageLimitWarning(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Message Limit Reached</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have reached your daily limit of 3 messages. Please try again tomorrow.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMessageLimitWarning(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Refresh Warning Modal */}
      <Modal 
        show={showRefreshWarning} 
        onHide={() => setShowRefreshWarning(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Warning: Page Refresh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <div className="mb-4">
              <FaExclamationTriangle size={48} className="text-warning" />
            </div>
            <h5 className="mb-3">You are about to refresh the page</h5>
            <p className="text-muted">
              Refreshing the page will log you out of your session. 
              Any unsaved changes will be lost.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={() => setShowRefreshWarning(false)}
          >
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={handleLogout}
          >
            Continue & Log Out
          </Button>
        </Modal.Footer>
      </Modal>

      {/* All Activities Modal */}
      <Modal 
        show={showAllActivities} 
        onHide={() => setShowAllActivities(false)} 
        centered 
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Coverage History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rewards-history">
            <div className="timeline">
              {activities.map((activity, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon">
                    {activity.icon && (
                      <activity.icon 
                        size={24} 
                        className={`text-${getActivityIconColor(activity.type)}`}
                      />
                    )}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">{activity.date}</div>
                    <div className="timeline-description">
                      {activity.description}
                    </div>
                    {activity.reward && (
                      <div className="timeline-reward d-flex align-items-center">
                        <span className={`badge bg-${activity.reward.status === 'earned' ? 'success' : 'warning'} me-2`}>
                          {activity.reward.days} days
                        </span>
                        <span className="text-muted">{activity.reward.provider}</span>
                      </div>
                    )}
                    <div className="timeline-type mt-2">
                      <span className={`badge bg-${getActivityIconColor(activity.type)}`}>
                        {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={() => setShowAllActivities(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Message View Modal */}
      <Modal 
        show={showMessageModal} 
        onHide={() => setShowMessageModal(false)} 
        centered
      >
        <Modal.Header>
          <Modal.Title>{selectedMessage?.subject}</Modal.Title>
          <button 
            type="button" 
            className="btn-close-modal" 
            onClick={() => setShowMessageModal(false)}
            aria-label="Close"
          >
            <span>×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          {selectedMessage && (
            <div className="message-view">
              <div className="message-header mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                    <strong>From: {selectedMessage.from}</strong>
                    <div className="text-muted small">{selectedMessage.date}</div>
                      </div>
                  <div className="d-flex align-items-center">
                    <select 
                      className="form-select form-select-sm me-2"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                    >
                      <option value="all">All Time</option>
                      <option value="today">Today</option>
                      <option value="week">Last 7 Days</option>
                      <option value="month">Last 30 Days</option>
                    </select>
                    <span className={`category-badge ${selectedMessage.category}`}>
                      {selectedMessage.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="message-content">
                {selectedMessage.preview}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
                      <Button 
            variant="outline-danger" 
            onClick={() => handleDeleteMessage(selectedMessage?.id)}
            className="me-2"
                      >
            <FaTrash className="me-2" />
            Delete
                      </Button>
          <Button 
            variant="primary" 
            onClick={() => handleReplyMessage(selectedMessage)}
          >
            <FaReply className="me-2" />
            Reply
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Reward Claim Modal */}
      <Modal 
        show={showClaimModal} 
        onHide={() => setShowClaimModal(false)} 
        centered
      >
        <Modal.Header>
          <Modal.Title>Claim Your Reward</Modal.Title>
          <button 
            type="button" 
            className="btn-close-modal" 
            onClick={() => setShowClaimModal(false)}
            aria-label="Close"
          >
            <span>×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          {selectedOffer && (
            <div className="claim-reward-content">
              <div className="text-center mb-4">
                {selectedOffer.icon && (
                  <selectedOffer.icon 
                    size={48} 
                    className={`text-${getActivityIconColor(selectedOffer.type)} mb-3`}
                  />
                )}
                <h4 className="mb-3">{selectedOffer.title}</h4>
                <div className="reward-details p-3 bg-light rounded mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>Days of Coverage:</span>
                    <span className="text-success fw-bold">{selectedOffer.days} days</span>
                    </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>Progress:</span>
                    <div className="progress flex-grow-1 mx-3" style={{ height: '8px' }}>
                      <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{ 
                          width: `${(offerProgress[selectedOffer.id].days / offerProgress[selectedOffer.id].total) * 100}%` 
                        }}
                      />
                  </div>
                    <span className="text-muted">
                      {offerProgress[selectedOffer.id].days}/{offerProgress[selectedOffer.id].total} days
                    </span>
                </div>
                    <div className="d-flex justify-content-between align-items-center">
                    <span>Expires:</span>
                    <span className="text-muted">{selectedOffer.expiryDate}</span>
                  </div>
                </div>
                <p className="text-muted mb-4">{selectedOffer.description}</p>
                {selectedOffer.requirements && (
                  <div className="requirements-info p-3 bg-light rounded mb-4">
                    <h6 className="mb-2">Requirements:</h6>
                    <ul className="list-unstyled mb-0">
                      {selectedOffer.requirements.coverageDuration && (
                        <li className="mb-1">
                          <small>• Minimum coverage duration: {selectedOffer.requirements.coverageDuration}</small>
                        </li>
                      )}
                      {selectedOffer.requirements.deliveryMethod && (
                        <li>
                          <small>• Delivery method: {selectedOffer.requirements.deliveryMethod}</small>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="claim-steps">
                <h6 className="mb-3">Verification Required:</h6>
                <ol className="ps-3">
                  {getVerificationSteps(selectedOffer.type).map((step, index) => (
                    <li key={index} className="mb-2">{step}</li>
                  ))}
                </ol>
                {selectedOffer.type === 'mobile' && (
                  <div className="alert alert-info mt-3">
                    <small>
                      <strong>Note:</strong> You'll need to verify your mailing address to receive this reward. 
                      This helps us ensure secure delivery of your reward. The reward will be delivered after 
                      maintaining 6 months of active coverage with T-Mobile.
                    </small>
                  </div>
                )}
                {(selectedOffer.type === 'food' || selectedOffer.type === 'health') && (
                  <div className="alert alert-info mt-3">
                    <small>
                      <strong>Note:</strong> You'll need to connect your Cash App account to receive this reward. 
                      This allows us to securely transfer your reward directly to your account.
                    </small>
                  </div>
                )}
              </div>

              <div className="claim-actions mt-4">
                <div className="d-grid gap-2">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={handleStartVerification}
                  >
                    Start Verification
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={() => setShowClaimModal(false)}
                  >
                    Maybe Later
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Settings Modal */}
      <Modal 
        show={showSettingsModal} 
        onHide={() => setShowSettingsModal(false)} 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaCog className="me-2" />
            Settings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="settings-content">
            <div className="settings-section mb-4">
              <h5 className="mb-3">
                <FaLock className="me-2" />
                Security
              </h5>
              <div className="d-grid gap-2">
                <Button 
                  variant="outline-primary"
                  onClick={() => {
                    setShowSettingsModal(false);
                    setShowPasswordChangeModal(true);
                  }}
                >
                  Change Password
                </Button>
                <Button 
                  variant="outline-primary"
                  onClick={() => {
                    setShowSettingsModal(false);
                    setShowEmailChangeModal(true);
                  }}
                >
                  Change Email
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => {
                    setShowSettingsModal(false);
                    setShow2FAModal(true);
                  }}
                >
                  {twoFactorForm.enabled ? 'Manage 2FA' : 'Enable 2FA'}
                  </Button>
                </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Password Change Modal */}
      <Modal 
        show={showPasswordChangeModal} 
        onHide={() => setShowPasswordChangeModal(false)} 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaLock className="me-2" />
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="password-change-form">
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                className="form-control"
                name="currentPassword"
                value={passwordChangeForm.currentPassword}
                onChange={handlePasswordChange}
                placeholder="Enter current password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                name="newPassword"
                value={passwordChangeForm.newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={passwordChangeForm.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm new password"
              />
            </div>
            <div className="d-grid">
              <Button 
                variant="primary"
                onClick={handlePasswordUpdate}
                disabled={!passwordChangeForm.currentPassword || 
                         !passwordChangeForm.newPassword || 
                         !passwordChangeForm.confirmPassword ||
                         passwordChangeForm.newPassword !== passwordChangeForm.confirmPassword}
              >
                Update Password
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Two-Factor Authentication Modal */}
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
          <div className="two-factor-form">
            {!twoFactorForm.isVerified ? (
              <>
                <div className="alert alert-info mb-3">
                  <small>
                    <strong>Note:</strong> We'll send a verification code to your phone number to enable two-factor authentication.
                  </small>
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phoneNumber"
                    value={twoFactorForm.phoneNumber}
                    onChange={handle2FAChange}
                    placeholder="Enter phone number"
      />
    </div>
                <div className="d-grid">
                  <Button 
                    variant="primary"
                    onClick={handle2FAVerification}
                    disabled={!twoFactorForm.phoneNumber || !canSendCode()}
                  >
                    Send Verification Code
                  </Button>
                </div>
                {!canSendCode() && (
                  <div className="text-center mt-2">
                    <small className="text-muted">
                      Please wait {getTimeUntilNextCode()} minutes before requesting another code
                    </small>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="alert alert-success mb-3">
                  <small>
                    <strong>Success:</strong> Verification code sent to {twoFactorForm.phoneNumber}
                  </small>
                </div>
                <div className="mb-3">
                  <label className="form-label">Verification Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="verificationCode"
                    value={twoFactorForm.verificationCode}
                    onChange={handle2FAChange}
                    placeholder="Enter verification code"
                  />
                </div>
                <div className="d-grid gap-2">
                  <Button 
                    variant="primary"
                    onClick={handle2FAEnable}
                    disabled={!twoFactorForm.verificationCode}
                  >
                    Enable 2FA
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={handleResendCode}
                    disabled={!canSendCode()}
                  >
                    Resend Code
                  </Button>
                </div>
                {!canSendCode() && (
                  <div className="text-center mt-2">
                    <small className="text-muted">
                      Please wait {getTimeUntilNextCode()} minutes before requesting another code
                    </small>
                  </div>
                )}
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>

      {/* 2FA Success Modal */}
      <Modal 
        show={show2FASuccessModal} 
        onHide={() => setShow2FASuccessModal(false)} 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaCheckCircle className="me-2 text-success" />
            Two-Factor Authentication Enabled
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <FaCheckCircle size={48} className="text-success mb-3" />
            <h5 className="mb-3">Successfully Enabled 2FA</h5>
            <p className="text-muted mb-4">
              Two-factor authentication has been enabled for your account. 
              Your phone number {twoFactorForm.phoneNumber} will be used for verification.
            </p>
            <div className="d-grid gap-2">
              <Button 
                variant="outline-primary"
                onClick={handleChangePhoneNumber}
              >
                Change Phone Number
              </Button>
              <Button 
                variant="primary"
                onClick={() => setShow2FASuccessModal(false)}
              >
                Done
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Verification Modal */}
      <Modal 
        show={showVerificationModal} 
        onHide={() => setShowVerificationModal(false)} 
        centered
        backdrop="static"
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>Verification Process</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {verificationStep === 'password' && (
            <div className="verification-step">
              <h5 className="mb-3">Enter Your Password</h5>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                />
                {!isPasswordValid && password.length > 0 && (
                  <div className="text-danger mt-1 small">
                    Please enter your password to continue
                  </div>
                )}
              </div>
              <div className="legal-disclaimer mb-3 p-3 border rounded" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                <small className="text-muted">
                  {getLegalDisclaimer(selectedOffer?.type)}
                </small>
              </div>
              <div className="terms-acceptance-alert alert alert-warning mb-3">
                <div className="d-flex align-items-center">
                  <FaExclamationTriangle className="me-2" />
                      <div>
                    <strong>Important:</strong> By entering your password and clicking "Continue", you are:
                    <ul className="mb-0 mt-2">
                      <li>Explicitly accepting all terms and conditions above</li>
                      <li>Providing electronic signature consent</li>
                      <li>Authorizing the processing of your reward claim</li>
                      <li>Confirming your identity and eligibility</li>
                    </ul>
                      </div>
                </div>
              </div>
              <div className="d-grid gap-2">
                      <Button 
                  variant="primary"
                  disabled={!isPasswordValid}
                  onClick={() => {
                    if (selectedOffer?.type === 'mobile') {
                      setVerificationStep('address');
                    } else {
                      setVerificationStep('signature');
                    }
                  }}
                >
                  Continue
                </Button>
                <Button 
                  variant="outline-secondary"
                  onClick={() => setShowVerificationModal(false)}
                      >
                  Back to Offer
                      </Button>
                    </div>
                  </div>
          )}

          {verificationStep === 'address' && (
            <div className="verification-step">
              <h5 className="mb-3">Verify Mailing Address</h5>
              <div className="alert alert-info mb-3">
                <small>
                  <strong>Note:</strong> Your T-Mobile reward will be delivered to this address. 
                  Please ensure it is correct and up to date.
                </small>
                </div>
              <div className="mb-3">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={mailingAddress.street}
                  onChange={(e) => handleAddressChange('street', e.target.value)}
                  placeholder="Enter street address"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={mailingAddress.city}
                    onChange={(e) => handleAddressChange('city', e.target.value)}
                    placeholder="Enter city"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={mailingAddress.state}
                    onChange={(e) => handleAddressChange('state', e.target.value)}
                    placeholder="State"
                    maxLength="2"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={mailingAddress.zipCode}
                    onChange={(e) => handleAddressChange('zipCode', e.target.value)}
                    placeholder="ZIP"
                    maxLength="5"
                  />
                </div>
              </div>
              <div className="d-grid gap-2">
                <Button 
                  variant="primary"
                  disabled={!mailingAddress.street || !mailingAddress.city || !mailingAddress.state || !mailingAddress.zipCode}
                  onClick={() => {
                    handleAddressVerification();
                    setVerificationStep('signature');
                  }}
                >
                  Verify Address
                  </Button>
                <Button 
                  variant="outline-secondary"
                  onClick={() => setVerificationStep('password')}
                >
                  Back
                  </Button>
              </div>
            </div>
          )}

          {verificationStep === 'signature' && (
            <div className="verification-step">
              <h5 className="mb-3">Sign Here</h5>
              {selectedOffer?.type === 'mobile' && mailingAddress.isVerified && (
                <div className="alert alert-success mb-3">
                  <small>
                    <strong>Verified:</strong> Your mailing address has been verified and will be used for reward delivery.
                  </small>
                </div>
              )}
              <div className="signature-pad mb-3">
                <div className="border rounded p-3">
                  <SignaturePad
                    ref={handleSignaturePadRef}
                    canvasProps={{
                      className: 'signature-canvas w-100',
                      style: { height: '200px' }
                    }}
                    onEnd={handleSignatureEnd}
                  />
                  <div className="d-flex justify-content-end mt-2">
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={clearSignature}
                    >
                      Clear
                  </Button>
                </div>
                </div>
              </div>
              <div className="d-grid gap-2">
                <Button 
                  variant="primary"
                  disabled={isSignatureEmpty}
                  onClick={() => {
                    // Save signature
                    setVerificationStep('legal');
                  }}
                >
                  Continue
                </Button>
                <Button 
                  variant="outline-secondary"
                  onClick={() => setVerificationStep(selectedOffer?.type === 'mobile' ? 'address' : 'password')}
                >
                  Back
                </Button>
              </div>
            </div>
          )}

          {verificationStep === 'legal' && (
            <div className="verification-step">
              <h5 className="mb-3">Legal Approval</h5>
              <div className="legal-text mb-3 p-3 border rounded" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <h6 className="mb-3">Terms and Conditions</h6>
                <div className="mb-3">
                  {getLegalDisclaimer(selectedOffer?.type)}
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="legalAgreement"
                />
                <label className="form-check-label" htmlFor="legalAgreement">
                  I have read, understood, and agree to all terms and conditions
                </label>
              </div>
              <div className="d-grid gap-2">
                <Button 
                  variant="primary"
                  onClick={() => {
                    setShowVerificationModal(false);
                    setShowLegalApprovalModal(true);
                    setIsProcessing(true);
                    // Simulate processing
                    setTimeout(() => {
                      setIsProcessing(false);
                      // Add to activities
                      const today = new Date();
                      const formattedDate = today.toLocaleString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      });
                      
                      setActivities(prev => [{
                        date: formattedDate,
                        description: `Completed verification for ${selectedOffer.title}`,
                        type: selectedOffer.type,
                        icon: selectedOffer.icon,
                        reward: {
                          days: selectedOffer.days,
                          status: 'completed',
                          provider: selectedOffer.title.split(' ')[0]
                        }
                      }, ...prev]);
                    }, 2000);
                  }}
                >
                  Submit for Approval
                </Button>
                <Button 
                  variant="outline-secondary"
                  onClick={() => setVerificationStep('signature')}
                >
                  Back
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Legal Approval Processing Modal */}
      <Modal 
        show={showLegalApprovalModal} 
        onHide={() => setShowLegalApprovalModal(false)} 
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>Processing Request</Modal.Title>
          <button 
            type="button" 
            className="btn-close-modal" 
            onClick={() => setShowLegalApprovalModal(false)}
            aria-label="Close"
          >
            <span>×</span>
          </button>
        </Modal.Header>
        <Modal.Body className="text-center p-4">
          {isProcessing ? (
            <>
              <div className="spinner-border text-primary mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <h5>Processing Your Request</h5>
              <p className="text-muted">Please wait while we verify your information...</p>
            </>
          ) : (
            <>
              <FaCheckCircle size={48} className="text-success mb-3" />
              <h5>Request Submitted</h5>
              <p className="text-muted">
                Your verification request has been submitted successfully. 
                You can track the status in your Recent Activity.
              </p>
              <Button 
                variant="primary"
                onClick={() => setShowLegalApprovalModal(false)}
              >
                Close
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Email Change Modal */}
      <Modal 
        show={showEmailChangeModal} 
        onHide={() => {
          setShowEmailChangeModal(false);
          setEmailChangeForm({ newEmail: '', password: '' });
          setEmailChangeError('');
          setEmailChangeSuccess(false);
        }} 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {emailChangeSuccess ? (
            <Alert variant="success" className="mb-0">
              <FaCheckCircle className="me-2" />
              Email updated successfully!
            </Alert>
          ) : (
            <>
              <Form.Group className="mb-3">
                <Form.Label>New Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter new email"
                  value={emailChangeForm.newEmail}
                  onChange={(e) => setEmailChangeForm(prev => ({
                    ...prev,
                    newEmail: e.target.value
                  }))}
      />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your current password"
                  value={emailChangeForm.password}
                  onChange={(e) => setEmailChangeForm(prev => ({
                    ...prev,
                    password: e.target.value
                  }))}
                />
                <Form.Text className="text-muted">
                  For security reasons, please enter your current password to change your email.
                </Form.Text>
              </Form.Group>

              {emailChangeError && (
                <Alert variant="danger" className="mb-3">
                  {emailChangeError}
                </Alert>
              )}

              <div className="d-grid">
                <Button 
                  variant="primary" 
                  onClick={handleEmailChange}
                  disabled={!emailChangeForm.newEmail || !emailChangeForm.password}
                >
                  Update Email
                </Button>
    </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </motion.div>
  );
} 