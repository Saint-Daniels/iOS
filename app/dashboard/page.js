'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Badge,
  Progress,
  useDisclosure,
  Image,
  Avatar,
  Divider,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useBreakpointValue,
  Center,
  Spinner
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGamepad, FaSnapchatGhost, FaShieldAlt, FaEnvelope, FaStar, FaTrash, FaReply, FaUserPlus, FaGift, FaRunning, FaSkull, FaTrophy, FaTimes, FaExclamationTriangle, FaCheckCircle, FaUsers, FaMedal, FaReceipt, FaHeartbeat, FaCalendarCheck, FaMobileAlt, FaCookie, FaCopy, FaShare, FaCog, FaLock, FaUserCog, FaUserCircle, FaSignOutAlt, FaHistory, FaUserMd, FaPrescriptionBottleAlt } from 'react-icons/fa';
import InsuranceProviderLogo from '../components/InsuranceProviderLogo';

const MotionBox = motion(Box);

export default function Dashboard() {
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('User');
  const [showLogoutWarning, setShowLogoutWarning] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);
  const INACTIVITY_TIMEOUT = 10 * 60 * 1000; // 10 minutes

  // Chakra UI hooks
  const { isOpen: isGameModalOpen, onOpen: onGameModalOpen, onClose: onGameModalClose } = useDisclosure();
  const { isOpen: isMailboxModalOpen, onOpen: onMailboxModalOpen, onClose: onMailboxModalClose } = useDisclosure();
  const { isOpen: isSnapchatModalOpen, onOpen: onSnapchatModalOpen, onClose: onSnapchatModalClose } = useDisclosure();
  const { isOpen: isLogoutModalOpen, onOpen: onLogoutModalOpen, onClose: onLogoutModalClose } = useDisclosure();
  const { isOpen: isCoverageModalOpen, onOpen: onCoverageModalOpen, onClose: onCoverageModalClose } = useDisclosure();

  // Responsive values
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const cardPadding = useBreakpointValue({ base: 4, md: 6 });
  const iconSize = useBreakpointValue({ base: 40, md: 48 });

  // Reset timers on user activity
  const resetTimers = useCallback(() => {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    
    const newInactivityTimer = setTimeout(() => {
      setShowLogoutWarning(true);
    }, INACTIVITY_TIMEOUT);
    
    setInactivityTimer(newInactivityTimer);
  }, [inactivityTimer]);

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

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Image 
              src="/images/saintdanielslogo.jpeg" 
              alt="Saint Daniels Logo" 
              boxSize="60px"
            />
            <HStack spacing={4}>
              <Button
                variant="ghost"
                color="white"
                leftIcon={<Icon as={FaCog} />}
                onClick={() => {/* Handle settings */}}
              >
                Settings
              </Button>
              <Button
                colorScheme="red"
                onClick={onLogoutModalOpen}
              >
                Logout
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Heading size="lg">Welcome back, {userName}</Heading>
          
          <SimpleGrid columns={gridColumns} spacing={6}>
            {/* Insurance Card */}
            <Card>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Flex justify="space-between" align="center">
                    <Badge colorScheme="green">Active</Badge>
                    <Text fontSize="sm" color="gray.500">
                      Agent: John Cothran | NPN: 20232956
                    </Text>
                  </Flex>
                  
                  <Center>
                    <Box
                      w="80px"
                      h="80px"
                      bg="gray.50"
                      borderRadius="full"
                      boxShadow="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <InsuranceProviderLogo size="medium" />
                    </Box>
                  </Center>

                  <VStack spacing={2}>
                    <Heading size="md" color="green.500">
                      UnitedHealthcare Choice Plus
                    </Heading>
                    <Text color="gray.500">
                      Active until December 31, 2024
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      View your complete coverage details and benefits
                    </Text>
                  </VStack>

                  <Button
                    colorScheme="blue"
                    size="lg"
                    width="full"
                    onClick={onCoverageModalOpen}
                  >
                    View Coverage
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* Game Arcade Card */}
            <Card>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md">Game Arcade</Heading>
                  
                  <Center>
                    <Box
                      w="80px"
                      h="80px"
                      bg="gray.50"
                      borderRadius="full"
                      boxShadow="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaGamepad} w={8} h={8} color="purple.500" />
                    </Box>
                  </Center>

                  <VStack spacing={2}>
                    <Heading size="md">Coming Soon</Heading>
                    <Text color="gray.500">
                      Exciting games and rewards are on the way!
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Earn rewards while having fun with fitness games
                    </Text>
                  </VStack>

                  <Button
                    colorScheme="purple"
                    size="lg"
                    width="full"
                    onClick={onGameModalOpen}
                  >
                    Learn More
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* Mailbox Card */}
            <Card>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md">Mailbox</Heading>
                  
                  <Center>
                    <Box
                      w="80px"
                      h="80px"
                      bg="gray.50"
                      borderRadius="full"
                      boxShadow="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaEnvelope} w={8} h={8} color="blue.500" />
                    </Box>
                  </Center>

                  <VStack spacing={2}>
                    <Badge colorScheme="blue">3 Unread Messages</Badge>
                    <Text fontSize="sm" color="gray.500">
                      Check your messages and notifications
                    </Text>
                  </VStack>

                  <Button
                    colorScheme="blue"
                    size="lg"
                    width="full"
                    onClick={onMailboxModalOpen}
                  >
                    View Messages
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* Snapchat Card */}
            <Card>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md">Snapchat</Heading>
                  
                  <Center>
                    <Box
                      w="80px"
                      h="80px"
                      bg="gray.50"
                      borderRadius="full"
                      boxShadow="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaSnapchatGhost} w={8} h={8} color="yellow.500" />
                    </Box>
                  </Center>

                  <VStack spacing={2}>
                    <Heading size="md">@health_warrior</Heading>
                    <Text fontSize="sm" color="gray.500">
                      Connect with friends and share your fitness journey
                    </Text>
                  </VStack>

                  <Button
                    colorScheme="yellow"
                    size="lg"
                    width="full"
                    onClick={onSnapchatModalOpen}
                    leftIcon={<Icon as={FaSnapchatGhost} />}
                  >
                    View Profile
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* Recent Activity Card */}
            <Card>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md">Recent Activity</Heading>
                  
                  <Center>
                    <Box
                      w="80px"
                      h="80px"
                      bg="gray.50"
                      borderRadius="full"
                      boxShadow="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaHistory} w={8} h={8} color="green.500" />
                    </Box>
                  </Center>

                  <Text fontSize="sm" color="gray.500">
                    Track your recent actions and rewards earned
                  </Text>

                  <Button
                    colorScheme="green"
                    size="lg"
                    width="full"
                  >
                    View All Activities
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* Available Offers Card */}
            <Card>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md">Available Offers</Heading>
                  
                  <Center>
                    <Box
                      w="80px"
                      h="80px"
                      bg="gray.50"
                      borderRadius="full"
                      boxShadow="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaGift} w={8} h={8} color="red.500" />
                    </Box>
                  </Center>

                  <Text fontSize="sm" color="gray.500">
                    Discover and claim your available rewards
                  </Text>

                  <Button
                    colorScheme="red"
                    size="lg"
                    width="full"
                  >
                    View All Offers
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Inactivity Warning Toast */}
      {showLogoutWarning && (
        <Box
          position="fixed"
          bottom={4}
          right={4}
          zIndex={1000}
        >
          <Card bg="white" boxShadow="lg">
            <CardBody>
              <VStack spacing={4}>
                <Heading size="sm">Session Timeout Warning</Heading>
                <Text>
                  You've been inactive for 10 minutes. Your session will remain active, but please save any unsaved work.
                </Text>
                <Button
                  colorScheme="blue"
                  onClick={handleDismissWarning}
                >
                  Dismiss
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </Box>
      )}

      {/* Logout Confirmation Modal */}
      <Modal isOpen={isLogoutModalOpen} onClose={onLogoutModalClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} py={4}>
              <Icon as={FaSignOutAlt} w={12} h={12} color="red.500" />
              <Text>Are you sure you want to log out?</Text>
              <Text fontSize="sm" color="gray.500">
                You will need to log in again to access your dashboard.
              </Text>
              <HStack spacing={4} width="full">
                <Button
                  variant="ghost"
                  onClick={onLogoutModalClose}
                  flex={1}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    onLogoutModalClose();
                    // Handle logout
                  }}
                  flex={1}
                >
                  Yes, Logout
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Coverage Details Modal */}
      <Modal isOpen={isCoverageModalOpen} onClose={onCoverageModalClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Coverage Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="md" mb={4}>Current Coverage</Heading>
                <Card>
                  <CardBody>
                    <VStack spacing={4} align="stretch">
                      <Flex justify="space-between">
                        <Text fontWeight="bold">Plan Type:</Text>
                        <Text>UnitedHealthcare Choice Plus</Text>
                      </Flex>
                      <Flex justify="space-between">
                        <Text fontWeight="bold">Status:</Text>
                        <Badge colorScheme="green">Active</Badge>
                      </Flex>
                      <Flex justify="space-between">
                        <Text fontWeight="bold">Effective Date:</Text>
                        <Text>January 1, 2024</Text>
                      </Flex>
                      <Flex justify="space-between">
                        <Text fontWeight="bold">Expiration Date:</Text>
                        <Text>December 31, 2024</Text>
                      </Flex>
                    </VStack>
                  </CardBody>
                </Card>
              </Box>

              <Box>
                <Heading size="md" mb={4}>Enrollment History</Heading>
                <VStack spacing={4} align="stretch">
                  <Card>
                    <CardBody>
                      <VStack spacing={3} align="stretch">
                        <Flex justify="space-between">
                          <Text fontWeight="bold">2024 Plan</Text>
                          <Badge colorScheme="green">Current</Badge>
                        </Flex>
                        <Text fontSize="sm" color="gray.500">January 1, 2024 - December 31, 2024</Text>
                        <Text fontSize="sm">UnitedHealthcare Choice Plus</Text>
                      </VStack>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <VStack spacing={3} align="stretch">
                        <Flex justify="space-between">
                          <Text fontWeight="bold">2023 Plan</Text>
                          <Badge colorScheme="gray">Expired</Badge>
                        </Flex>
                        <Text fontSize="sm" color="gray.500">January 1, 2023 - December 31, 2023</Text>
                        <Text fontSize="sm">UnitedHealthcare Choice Plus</Text>
                      </VStack>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <VStack spacing={3} align="stretch">
                        <Flex justify="space-between">
                          <Text fontWeight="bold">2022 Plan</Text>
                          <Badge colorScheme="gray">Expired</Badge>
                        </Flex>
                        <Text fontSize="sm" color="gray.500">January 1, 2022 - December 31, 2022</Text>
                        <Text fontSize="sm">UnitedHealthcare Choice Plus</Text>
                      </VStack>
                    </CardBody>
                  </Card>
                </VStack>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Add other modals here */}
    </MotionBox>
  );
} 