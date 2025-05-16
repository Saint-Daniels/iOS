'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight, FaUser, FaMapMarkerAlt, FaBriefcase, FaShieldAlt, FaFileSignature, FaTrash, FaCopy, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import LegalDisclaimer from '../../components/LegalDisclaimer';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { extractMarketingID } from '../utils/leadTracking';
import { storeClientData } from '../utils/clientUtils';
import SignaturePad from 'signature_pad';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';

const ApplicationForm = () => {
  const router = useRouter();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState('');
  const [formData, setFormData] = useState({
    // Personal information
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    ssn: '',
    stateoforigin: '',

    // Family information 
    isMarried: false,
    hasChildren: false,
    isClaimedOnTaxes: false,
    taxFilingStatus: '',
    
    // Spouse information (as map for database)
    spouseinfo: {
      firstname: '',
      lastname: '',
      dateofbirth: '',
      ssn: ''
    },
    dependents: [],
    
    // Residential address (as map for database)
    residentialaddress: {
      streetaddress: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    },
    
    sameAsResidential: true,
    mailingStreet: '',
    mailingCity: '',
    mailingState: '',
    mailingZip: '',
    mailingCountry: '',
    
    countryOfOrigin: '',
    occupation: '',
    expectedSalary: '',
    
    // Insurance information
    hasExistingInsurance: false,
    existingInsuranceType: '',
    healthInsuranceProvider: '',
    oscar: '',
    unitedhealthcare: '',
    wellcare: '',
    deductible: '',
    
    // Signature information
    signature: false,
    signatureurl: '', // This is the field used to display the signature
    signatureConsent: false,

    // Status for tracking
    status: 'Application Submitted'
  });
  const [ssnValidation, setSsnValidation] = useState({
    isValid: false,
    message: ''
  });
  const [signatureValidation, setSignatureValidation] = useState({
    isValid: false,
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [stepErrors, setStepErrors] = useState({});
  const [marketingID, setMarketingID] = useState('UNKNOWN');

  // Add phone number formatting function
  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format the phone number as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const signatureCanvasRef = useRef(null);
  const signaturePadRef = useRef(null);

  // Add a modal state
  const [showSignatureModal, setShowSignatureModal] = useState(false);

  // Extract marketing ID from URL when component mounts
  useEffect(() => {
    const extractedID = extractMarketingID();
    setMarketingID(extractedID);
  }, []);

  // Add country and state options
  const countries = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'MX', label: 'Mexico' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'AU', label: 'Australia' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'IT', label: 'Italy' },
    { value: 'ES', label: 'Spain' },
    { value: 'JP', label: 'Japan' },
    { value: 'CN', label: 'China' },
    { value: 'IN', label: 'India' },
    { value: 'BR', label: 'Brazil' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'RU', label: 'Russia' },
    { value: 'UA', label: 'Ukraine' },
    { value: 'BY', label: 'Belarus' },
    { value: 'VN', label: 'Vietnam' },
    // South American Countries
    { value: 'AR', label: 'Argentina' },
    { value: 'BO', label: 'Bolivia' },
    { value: 'CL', label: 'Chile' },
    { value: 'CO', label: 'Colombia' },
    { value: 'EC', label: 'Ecuador' },
    { value: 'GY', label: 'Guyana' },
    { value: 'PE', label: 'Peru' },
    { value: 'PY', label: 'Paraguay' },
    { value: 'SR', label: 'Suriname' },
    { value: 'UY', label: 'Uruguay' },
    { value: 'VE', label: 'Venezuela' },
    // Additional African Countries
    { value: 'EG', label: 'Egypt' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'KE', label: 'Kenya' },
    { value: 'MA', label: 'Morocco' },
    { value: 'GH', label: 'Ghana' },
    { value: 'TN', label: 'Tunisia' },
    { value: 'ET', label: 'Ethiopia' },
    { value: 'CI', label: 'Ivory Coast' },
    { value: 'CM', label: 'Cameroon' },
    { value: 'UG', label: 'Uganda' },
    // Middle Eastern Countries
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'QA', label: 'Qatar' },
    { value: 'KW', label: 'Kuwait' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'OM', label: 'Oman' },
    { value: 'IL', label: 'Israel' },
    { value: 'TR', label: 'Turkey' },
    { value: 'IR', label: 'Iran' },
    { value: 'IQ', label: 'Iraq' },
    // Additional European Countries
    { value: 'DK', label: 'Denmark' },
    { value: 'MD', label: 'Moldova' },
    { value: 'SE', label: 'Sweden' },
    { value: 'NO', label: 'Norway' },
    { value: 'FI', label: 'Finland' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'BE', label: 'Belgium' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'AT', label: 'Austria' },
    { value: 'PL', label: 'Poland' },
    // Additional Asian Countries
    { value: 'KR', label: 'South Korea' },
    { value: 'SG', label: 'Singapore' },
    { value: 'MY', label: 'Malaysia' },
    { value: 'TH', label: 'Thailand' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'PH', label: 'Philippines' }
  ];

  const usStates = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'DC', label: 'District of Columbia' }
  ];

  const canadianProvinces = [
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'QC', label: 'Quebec' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' }
  ];

  const mexicanStates = [
    { value: 'AGS', label: 'Aguascalientes' },
    { value: 'BC', label: 'Baja California' },
    { value: 'BCS', label: 'Baja California Sur' },
    { value: 'CAMP', label: 'Campeche' },
    { value: 'CHIS', label: 'Chiapas' },
    { value: 'CHIH', label: 'Chihuahua' },
    { value: 'CDMX', label: 'Ciudad de México' },
    { value: 'COAH', label: 'Coahuila' },
    { value: 'COL', label: 'Colima' },
    { value: 'DGO', label: 'Durango' },
    { value: 'GTO', label: 'Guanajuato' },
    { value: 'GRO', label: 'Guerrero' },
    { value: 'HGO', label: 'Hidalgo' },
    { value: 'JAL', label: 'Jalisco' },
    { value: 'MICH', label: 'Michoacán' },
    { value: 'MOR', label: 'Morelos' },
    { value: 'NAY', label: 'Nayarit' },
    { value: 'NL', label: 'Nuevo León' },
    { value: 'OAX', label: 'Oaxaca' },
    { value: 'PUE', label: 'Puebla' },
    { value: 'QRO', label: 'Querétaro' },
    { value: 'QROO', label: 'Quintana Roo' },
    { value: 'SLP', label: 'San Luis Potosí' },
    { value: 'SIN', label: 'Sinaloa' },
    { value: 'SON', label: 'Sonora' },
    { value: 'TAB', label: 'Tabasco' },
    { value: 'TAMPS', label: 'Tamaulipas' },
    { value: 'TLAX', label: 'Tlaxcala' },
    { value: 'VER', label: 'Veracruz' },
    { value: 'YUC', label: 'Yucatán' },
    { value: 'ZAC', label: 'Zacatecas' }
  ];

  // Function to get states/provinces based on country
  const getStatesForCountry = (countryCode) => {
    switch (countryCode) {
      case 'US':
        return usStates;
      case 'CA':
        return canadianProvinces;
      case 'MX':
        return mexicanStates;
      default:
        return [];
    }
  };

  // Add navigation warning
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'phone') {
      // Format phone number as user types
      const formattedNumber = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedNumber
      }));
    } else if (name.includes('.')) {
      // Handle nested properties (e.g., residentialaddress.streetaddress)
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      // Handle regular properties
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleDependentAdd = () => {
    setFormData(prev => ({
      ...prev,
      dependents: [...prev.dependents, { firstName: '', lastName: '', ssn: '', dateOfBirth: '' }]
    }));
  };

  const handleDependentChange = (index, field, value) => {
    const newDependents = [...formData.dependents];
    newDependents[index][field] = value;
    setFormData(prev => ({
      ...prev,
      dependents: newDependents
    }));
  };

  const validateSSN = (value) => {
    const ssn = value.replace(/\D/g, '');
    if (ssn.length === 9) {
      setSsnValidation({
        isValid: true,
        message: 'Valid SSN'
      });
      return true;
    } else if (ssn.length > 9) {
      setSsnValidation({
        isValid: false,
        message: 'SSN must be exactly 9 digits'
      });
      return false;
    } else {
      setSsnValidation({
        isValid: false,
        message: 'SSN must be 9 digits'
      });
      return false;
    }
  };

  // Validate signature
  const validateSignature = () => {
    if (!formData.signatureurl || formData.signatureurl.length < 100) {
      setSignatureValidation({
        isValid: false,
        message: 'Please provide your signature'
      });
      
      setStepErrors(prev => ({
        ...prev,
        signatureurl: 'Your signature is required'
      }));
      
      return false;
    }
    
    setSignatureValidation({
      isValid: true,
      message: 'Signature confirmed'
    });
    
    setStepErrors(prev => ({
      ...prev,
      signatureurl: undefined
    }));
    
    return true;
  };

  // Fix the validateForm function to ensure isValid is properly set
  const validateForm = () => {
    const errors = {};
    
    // Personal Information Validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Validate phone number format
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required';
    }
    
    // Check required fields
    const requiredFields = {
      taxFilingStatus: 'Tax Filing Status',
      residentialaddress: 'Residential Address',
      countryOfOrigin: 'Country of Origin',
      occupation: 'Occupation',
      expectedSalary: 'Expected Salary',
      healthInsuranceProvider: 'Health Insurance Provider',
      deductible: 'Deductible'
    };

    // Only check required fields for US residents
    if (formData.countryOfOrigin === 'US') {
      requiredFields.stateoforigin = 'State of Origin';
    }

    let isValid = true;
    for (const [key, label] of Object.entries(requiredFields)) {
      if (!formData[key]) {
        errors[key] = `${label} is required`;
        isValid = false;
      }
    }

    // Check SSN
    if (!validateSSN(formData.ssn)) {
      errors.ssn = 'Please enter a valid 9-digit Social Security Number';
      isValid = false;
    }

    // Check signature
    if (!formData.signatureurl) {
      errors.signatureurl = 'Signature is required';
      isValid = false;
    }
    
    if (!formData.signatureConsent) {
      errors.signatureConsent = 'You must consent to the electronic signature';
      isValid = false;
    }
    
    setStepErrors(errors);
    setIsFormValid(isValid);
    return isValid;
  };

  // Update form validation on any change
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Update the formatCurrency function to include the dollar sign
  const formatCurrency = (value) => {
    if (!value) return '';
    
    // Remove non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, '');
    
    // Format with commas and 2 decimal places
    const parts = numericValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Handle decimals
    if (parts.length > 1) {
      parts[1] = parts[1].substring(0, 2); // Limit to 2 decimal places
      return '$' + parts.join('.');
    }
    
    return '$' + parts[0];
  };

  // Validate the current step
  const validateStep = () => {
    let errors = {};
    let isValid = true;
    
    console.log(`Validating step ${step}`);
    
    // Common validation for step 1-8
    if (step === 1) {
      // Personal info validation
      if (!formData.firstName.trim()) {
        errors.firstName = 'First name is required';
        isValid = false;
      }
      
      if (!formData.lastName.trim()) {
        errors.lastName = 'Last name is required';
        isValid = false;
      }
      
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Please enter a valid email';
        isValid = false;
      }
      
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
        isValid = false;
      }
      
      if (!formData.dateOfBirth) {
        errors.dateOfBirth = 'Date of birth is required';
        isValid = false;
      }
    } 
    else if (step === 2) {
      // Tax filing status validation
      if (!formData.taxFilingStatus) {
        errors.taxFilingStatus = 'Tax filing status is required';
        isValid = false;
      }
      
      // Spouse info validation (if married)
      if (formData.isMarried) {
        if (!formData.spouseinfo.firstname.trim()) {
          errors['spouseinfo.firstname'] = 'Spouse first name is required';
          isValid = false;
        }
        
        if (!formData.spouseinfo.lastname.trim()) {
          errors['spouseinfo.lastname'] = 'Spouse last name is required';
          isValid = false;
        }
        
        if (!formData.spouseinfo.dateofbirth) {
          errors['spouseinfo.dateofbirth'] = 'Spouse date of birth is required';
          isValid = false;
        }
      }
    }
    else if (step === 3) {
      // Residential address validation
      console.log("Validating residential address fields");
      
      if (!formData.residentialaddress.streetaddress || !formData.residentialaddress.streetaddress.trim()) {
        errors['residentialaddress.streetaddress'] = 'Street address is required';
        isValid = false;
      }
      
      if (!formData.residentialaddress.city || !formData.residentialaddress.city.trim()) {
        errors['residentialaddress.city'] = 'City is required';
        isValid = false;
      }
      
      if (!formData.residentialaddress.state || !formData.residentialaddress.state.trim()) {
        errors['residentialaddress.state'] = 'State is required';
        isValid = false;
      }
      
      if (!formData.residentialaddress.zipcode || !formData.residentialaddress.zipcode.trim()) {
        errors['residentialaddress.zipcode'] = 'ZIP code is required';
        isValid = false;
      }
      
      if (!formData.residentialaddress.country || !formData.residentialaddress.country.trim()) {
        errors['residentialaddress.country'] = 'Country is required';
        isValid = false;
      }
      
      console.log("Validation result for residential address:", isValid ? "VALID" : "INVALID");
      if (!isValid) {
        console.log("Validation errors:", JSON.stringify(errors));
      }
    }
    else if (step === 4) {
      // Mailing address validation - only validate if not using residential address
      console.log("Validating mailing address, sameAsResidential:", formData.sameAsResidential);
      
      // If checkbox is checked, no validation needed
      if (formData.sameAsResidential) {
        console.log("Using residential address for mailing, no validation needed");
        isValid = true;
      } else {
        // Only validate these fields if not using residential address
        if (!formData.mailingStreet || !formData.mailingStreet.trim()) {
          errors.mailingStreet = 'Mailing street address is required';
          isValid = false;
        }
        
        if (!formData.mailingCity || !formData.mailingCity.trim()) {
          errors.mailingCity = 'Mailing city is required';
          isValid = false;
        }
        
        if (!formData.mailingState || !formData.mailingState.trim()) {
          errors.mailingState = 'Mailing state/province is required';
          isValid = false;
        }
        
        if (!formData.mailingZip || !formData.mailingZip.trim()) {
          errors.mailingZip = 'Mailing ZIP code is required';
          isValid = false;
        }
        
        if (!formData.mailingCountry || !formData.mailingCountry.trim()) {
          errors.mailingCountry = 'Mailing country is required';
          isValid = false;
        }
      }
    }
    else if (step === 5) {
      // Origin information validation
      console.log("Validating origin information");
      
      if (!formData.countryOfOrigin) {
        errors.countryOfOrigin = 'Country of origin is required';
        isValid = false;
      }
      
      if (formData.countryOfOrigin === 'US' && !formData.stateoforigin) {
        errors.stateoforigin = 'State of origin is required for US residents';
        isValid = false;
      }
    }
    else if (step === 6) {
      // Employment information
      if (!formData.occupation.trim()) {
        errors.occupation = 'Occupation is required';
        isValid = false;
      }
      
      if (!formData.expectedSalary) {
        errors.expectedSalary = 'Expected salary is required';
        isValid = false;
      }
    }
    else if (step === 7) {
      // Insurance information validation
      if (!formData.healthInsuranceProvider) {
        errors.healthInsuranceProvider = 'Health insurance provider is required';
        isValid = false;
      }
      
      if (!formData.deductible) {
        errors.deductible = 'Deductible preference is required';
        isValid = false;
      }
    }
    else if (step === 8) {
      // Final step validation - signature
      if (!formData.ssn || formData.ssn.length !== 9) {
        errors.ssn = 'A valid 9-digit Social Security Number is required';
        isValid = false;
      }
      
      if (!formData.signatureurl || formData.signatureurl.length < 100) {
        console.log("Signature validation failed in validateStep");
        errors.signatureurl = 'Your signature is required';
        isValid = false;
      }
      
      if (!formData.signatureConsent) {
        errors.signatureConsent = 'You must consent to the electronic signature';
        isValid = false;
      }
    }
    
    setStepErrors(errors);
    return isValid;
  };

  // Add getInputClassName function
  const getInputClassName = (fieldName) => {
    // For nested fields, use the exact field name as the key in stepErrors
    return `form-control ${
      stepErrors[fieldName] ? 'border-red-500 focus:border-red-500' : ''
    }`;
  };

  // Handle form submission with direct Firestore integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    
    // Clear any existing errors and modals
    setError(null);
    setShowErrorModal(false);
    setErrorModalMessage('');
    
    // Validate form
    const isValid = validateForm();
    console.log('Form validation result:', isValid);
    
    if (!isValid) {
      console.log('Form validation failed');
      setError('Please fill in all required fields correctly');
      return;
    }

    // Validate SSN
    const ssnValid = validateSSN(formData.ssn);
    console.log('SSN validation result:', ssnValid);
    
    if (!ssnValid) {
      console.log('SSN validation failed');
      setError('Please enter a valid SSN');
      return;
    }

    // Validate signature
    if (!formData.signatureurl) {
      console.log('Signature validation failed');
      setError('Please provide a valid signature');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Preparing application data');
      const applicationData = {
        // Personal Information
        firstName: formData.firstName,
        middleName: formData.middleName || '',
        lastName: formData.lastName,
        suffix: formData.suffix || '',
        email: formData.email,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        ssn: formData.ssn,
        
        // Family Information
        isMarried: formData.isMarried,
        hasChildren: formData.hasChildren,
        isClaimedOnTaxes: formData.isClaimedOnTaxes,
        taxFilingStatus: formData.taxFilingStatus,
        spouseInfo: formData.spouseinfo,
        dependents: formData.dependents,
        
        // Address Information
        residentialAddress: formData.residentialaddress,
        sameAsResidential: formData.sameAsResidential,
        mailingAddress: formData.sameAsResidential ? formData.residentialaddress : {
          street: formData.mailingStreet,
          city: formData.mailingCity,
          state: formData.mailingState,
          zipCode: formData.mailingZip,
          country: formData.mailingCountry
        },
        
        // Origin Information
        countryOfOrigin: formData.countryOfOrigin,
        stateOfOrigin: formData.stateoforigin,
        
        // Employment Information
        occupation: formData.occupation,
        expectedSalary: formData.expectedSalary,
        
        // Insurance Information
        hasExistingInsurance: formData.hasExistingInsurance,
        existingInsuranceType: formData.existingInsuranceType,
        healthInsuranceProvider: formData.healthInsuranceProvider,
        deductible: formData.deductible,
        
        // Signature Information
        signatureUrl: formData.signatureurl,
        signatureConsent: formData.signatureConsent,
        
        // Metadata
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      console.log('Checking for duplicate applications');
      // Check for duplicate email
      const emailQuery = query(
        collection(db, 'applications'),
        where('email', '==', formData.email)
      );
      const emailSnapshot = await getDocs(emailQuery);
      
      if (!emailSnapshot.empty) {
        console.log('Duplicate email found');
        setErrorModalMessage('An application with this email already exists. Please use a different email address.');
        setShowErrorModal(true);
        setIsSubmitting(false);
        return;
      }

      // Check for duplicate phone
      const phoneQuery = query(
        collection(db, 'applications'),
        where('phone', '==', formData.phone)
      );
      const phoneSnapshot = await getDocs(phoneQuery);
      
      if (!phoneSnapshot.empty) {
        console.log('Duplicate phone found');
        setErrorModalMessage('An application with this phone number already exists. Please use a different phone number.');
        setShowErrorModal(true);
        setIsSubmitting(false);
        return;
      }

      console.log('Submitting application to Firestore');
      const docRef = await addDoc(collection(db, 'applications'), applicationData);
      console.log('Application submitted successfully with ID:', docRef.id);

      setSuccess(true);
      setIsSubmitting(false);

      // Clear form data
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        ssn: '',
        isMarried: false,
        hasChildren: false,
        isClaimedOnTaxes: false,
        taxFilingStatus: '',
        spouseinfo: {
          firstname: '',
          lastname: '',
          dateofbirth: '',
          ssn: ''
        },
        dependents: [],
        residentialaddress: {
          streetaddress: '',
          city: '',
          state: '',
          zipcode: '',
          country: ''
        },
        sameAsResidential: true,
        mailingStreet: '',
        mailingCity: '',
        mailingState: '',
        mailingZip: '',
        mailingCountry: '',
        countryOfOrigin: '',
        stateoforigin: '',
        occupation: '',
        expectedSalary: '',
        hasExistingInsurance: false,
        existingInsuranceType: '',
        healthInsuranceProvider: '',
        deductible: '',
        signatureurl: '',
        signatureConsent: false
      });

      // Reset validation states
      setSsnValidation({ isValid: false, message: '' });
      setSignatureValidation({ isValid: false, message: '' });
      setIsFormValid(false);
      setStepErrors({});

      // Redirect to success page after 2 seconds
      setTimeout(() => {
        router.push('/application/success');
      }, 2000);

    } catch (error) {
      console.error('Error submitting application:', error);
      setErrorModalMessage('Failed to submit application. Please try again.');
      setShowErrorModal(true);
      setIsSubmitting(false);
    }
  };

  // Add useEffect to handle proper display formatting of salary on input change
  useEffect(() => {
    // Only run this effect when we have a salary value
    if (formData.expectedSalary) {
      // This will help with cursor jumping issues
      const timeoutId = setTimeout(() => {
        // We don't need to format here because the formatting happens in the value attribute
        // This effect is just to ensure validation happens correctly after user input
        validateStep();
      }, 500);
      
      return () => clearTimeout(timeoutId);
    }
  }, [formData.expectedSalary]);

  // Use an effect to handle document clicks for the modal
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (signatureCanvasRef.current && signatureCanvasRef.current.contains(e.target)) {
        // Click was inside canvas, do nothing
        return;
      }
    };

    if (showSignatureModal) {
      document.addEventListener('click', handleDocumentClick);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.body.style.overflow = ''; // Restore scrolling
    };
  }, [showSignatureModal]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaUser className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Personal Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={getInputClassName('firstName')}
                  required
                />
                {stepErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{stepErrors.firstName}</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={getInputClassName('lastName')}
                  required
                />
                {stepErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{stepErrors.lastName}</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Suffix</label>
                <select
                  name="suffix"
                  value={formData.suffix}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select suffix</option>
                  <option value="Jr">Jr</option>
                  <option value="Sr">Sr</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={getInputClassName('dateOfBirth')}
                  required
                />
                {stepErrors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">{stepErrors.dateOfBirth}</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={getInputClassName('phone')}
                  required
                />
                {stepErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{stepErrors.phone}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={getInputClassName('email')}
                required
              />
              {stepErrors.email && (
                <p className="text-red-500 text-sm mt-1">{stepErrors.email}</p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaUser className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Family & Tax Information</h2>
            </div>

            <div className="space-y-3">
              <div className="form-group">
                <label className="form-label mb-2">Family Information</label>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.isMarried}
                        onChange={(e) => setFormData(prev => ({ ...prev, isMarried: e.target.checked }))}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 font-medium">I am married</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.hasChildren}
                        onChange={(e) => setFormData(prev => ({ ...prev, hasChildren: e.target.checked }))}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 font-medium">I have children</span>
                    </label>
                  </div>
                </div>
              </div>

              {formData.isMarried && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Spouse Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-group">
                      <label className="form-label">Spouse's First Name</label>
                      <input
                        type="text"
                        name="spouseinfo.firstname"
                        value={formData.spouseinfo.firstname}
                        onChange={handleInputChange}
                        className={getInputClassName('spouseinfo.firstname')}
                        required
                      />
                      {stepErrors.spouseinfo && (
                        <p className="text-red-500 text-sm mt-1">{stepErrors.spouseinfo.firstname}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Spouse's Last Name</label>
                      <input
                        type="text"
                        name="spouseinfo.lastname"
                        value={formData.spouseinfo.lastname}
                        onChange={handleInputChange}
                        className={getInputClassName('spouseinfo.lastname')}
                        required
                      />
                      {stepErrors.spouseinfo && (
                        <p className="text-red-500 text-sm mt-1">{stepErrors.spouseinfo.lastname}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label">Spouse's Date of Birth</label>
                      <input
                        type="date"
                        name="spouseinfo.dateofbirth"
                        value={formData.spouseinfo.dateofbirth}
                        onChange={handleInputChange}
                        className={getInputClassName('spouseinfo.dateofbirth')}
                        required
                      />
                      {stepErrors.spouseinfo && (
                        <p className="text-red-500 text-sm mt-1">{stepErrors.spouseinfo.dateofbirth}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Spouse's SSN</label>
                      <input
                        type="text"
                        name="spouseinfo.ssn"
                        value={formData.spouseinfo.ssn.length === 9 ? formatSSN(formData.spouseinfo.ssn) : formData.spouseinfo.ssn}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 9);
                          setFormData(prev => ({
                            ...prev,
                            spouseinfo: { ...prev.spouseinfo, ssn: value }
                          }));
                        }}
                        className="form-control"
                        placeholder="Enter 9 digits"
                        maxLength="11"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.hasChildren && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Children Information</h3>
                  {formData.dependents.map((dependent, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-md font-medium">Child {index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => {
                            const newDependents = [...formData.dependents];
                            newDependents.splice(index, 1);
                            setFormData(prev => ({ ...prev, dependents: newDependents }));
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            value={dependent.firstName}
                            onChange={(e) => handleDependentChange(index, 'firstName', e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            value={dependent.lastName}
                            onChange={(e) => handleDependentChange(index, 'lastName', e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="form-group">
                          <label className="form-label">Date of Birth</label>
                          <input
                            type="date"
                            value={dependent.dateOfBirth}
                            onChange={(e) => handleDependentChange(index, 'dateOfBirth', e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">SSN</label>
                          <input
                            type="text"
                            value={dependent.ssn.length === 9 ? formatSSN(dependent.ssn) : dependent.ssn}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '').slice(0, 9);
                              handleDependentChange(index, 'ssn', value);
                            }}
                            className="form-control"
                            placeholder="Enter 9 digits"
                            maxLength="11"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleDependentAdd}
                    className="btn btn-outline-primary w-full flex items-center justify-center"
                  >
                    <FaUser className="mr-2" />
                    Add Child
                  </button>
                </div>
              )}

              <div className="form-group">
                <label className="form-label mb-2">Tax Information</label>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.isClaimedOnTaxes}
                      onChange={(e) => setFormData(prev => ({ ...prev, isClaimedOnTaxes: e.target.checked }))}
                      className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">I will be claimed on someone else's taxes</span>
                  </label>

                  <div className="form-group mt-3">
                    <label className="form-label">Tax Filing Status</label>
                    <select
                      name="taxFilingStatus"
                      value={formData.taxFilingStatus}
                      onChange={handleInputChange}
                      className={getInputClassName('taxFilingStatus')}
                      required
                    >
                      <option value="">Select filing status</option>
                      <option value="single">Single</option>
                      <option value="married">Married Filing Jointly</option>
                      <option value="head">Head of Household</option>
                      <option value="dependent">Dependent</option>
                    </select>
                    {stepErrors.taxFilingStatus && (
                      <p className="text-red-500 text-sm mt-1">{stepErrors.taxFilingStatus}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Residential Address</h2>
            </div>
            
            <div className="space-y-4">
              <div className="form-group">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  name="residentialaddress.streetaddress"
                  value={formData.residentialaddress.streetaddress}
                  onChange={handleInputChange}
                  className={getInputClassName('residentialaddress.streetaddress')}
                  required
                />
                {stepErrors['residentialaddress.streetaddress'] && (
                  <p className="text-red-500 text-sm mt-1">{stepErrors['residentialaddress.streetaddress']}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="residentialaddress.city"
                    value={formData.residentialaddress.city}
                    onChange={handleInputChange}
                    className={getInputClassName('residentialaddress.city')}
                    required
                  />
                  {stepErrors['residentialaddress.city'] && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors['residentialaddress.city']}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">State/Province</label>
                  <select
                    name="residentialaddress.state"
                    value={formData.residentialaddress.state}
                    onChange={handleInputChange}
                    className={getInputClassName('residentialaddress.state')}
                    required
                    disabled={!formData.residentialaddress.country}
                  >
                    <option value="">Select state/province</option>
                    {getStatesForCountry(formData.residentialaddress.country).map(state => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                  {stepErrors['residentialaddress.state'] && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors['residentialaddress.state']}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    name="residentialaddress.zipcode"
                    value={formData.residentialaddress.zipcode}
                    onChange={handleInputChange}
                    className={getInputClassName('residentialaddress.zipcode')}
                    required
                  />
                  {stepErrors['residentialaddress.zipcode'] && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors['residentialaddress.zipcode']}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <select
                    name="residentialaddress.country"
                    value={formData.residentialaddress.country}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      console.log(`Country selection changed: ${value}`);
                      
                      // Split the name to get parent and child
                      const [parent, child] = name.split('.');
                      
                      // Update the form data with the new country and reset state
                      setFormData(prev => {
                        const updated = {
                          ...prev,
                          [parent]: {
                            ...prev[parent],
                            [child]: value,
                            state: '' // Clear state when country changes
                          }
                        };
                        console.log('Updated country and reset state:', JSON.stringify(updated[parent]));
                        return updated;
                      });
                    }}
                    className={getInputClassName('residentialaddress.country')}
                    required
                  >
                    <option value="">Select country</option>
                    {countries.map(country => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  {stepErrors['residentialaddress.country'] && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors['residentialaddress.country']}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Mailing Address</h2>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.sameAsResidential}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData(prev => ({
                        ...prev,
                        sameAsResidential: true,
                        mailingStreet: prev.residentialaddress.streetaddress,
                        mailingCity: prev.residentialaddress.city,
                        mailingState: prev.residentialaddress.state,
                        mailingZip: prev.residentialaddress.zipcode,
                        mailingCountry: prev.residentialaddress.country
                      }));
                      // Clear any mailing address errors when using residential address
                      setStepErrors(prev => ({
                        ...prev,
                        mailingStreet: undefined,
                        mailingCity: undefined,
                        mailingState: undefined,
                        mailingZip: undefined,
                        mailingCountry: undefined
                      }));
                    } else {
                      setFormData(prev => ({
                        ...prev,
                        sameAsResidential: false,
                        mailingStreet: '',
                        mailingCity: '',
                        mailingState: '',
                        mailingZip: '',
                        mailingCountry: ''
                      }));
                    }
                  }}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">My mailing address is the same as my residential address</span>
              </label>
            </div>

            {!formData.sameAsResidential && (
              <div className="space-y-4">
                <div className="form-group">
                  <label className="form-label">Street Address</label>
                  <input
                    type="text"
                    name="mailingStreet"
                    value={formData.mailingStreet}
                    onChange={handleInputChange}
                    className={getInputClassName('mailingStreet')}
                    required
                  />
                  {stepErrors.mailingStreet && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors.mailingStreet}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="mailingCity"
                      value={formData.mailingCity}
                      onChange={handleInputChange}
                      className={getInputClassName('mailingCity')}
                      required
                    />
                    {stepErrors.mailingCity && (
                      <p className="text-red-500 text-sm mt-1">{stepErrors.mailingCity}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">State/Province</label>
                    <select
                      name="mailingState"
                      value={formData.mailingState}
                      onChange={handleInputChange}
                      className={getInputClassName('mailingState')}
                      required
                      disabled={!formData.mailingCountry}
                    >
                      <option value="">Select state/province</option>
                      {getStatesForCountry(formData.mailingCountry).map(state => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                    {stepErrors.mailingState && (
                      <p className="text-red-500 text-sm mt-1">{stepErrors.mailingState}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">ZIP Code</label>
                    <input
                      type="text"
                      name="mailingZip"
                      value={formData.mailingZip}
                      onChange={handleInputChange}
                      className={getInputClassName('mailingZip')}
                      required
                    />
                    {stepErrors.mailingZip && (
                      <p className="text-red-500 text-sm mt-1">{stepErrors.mailingZip}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select
                      name="mailingCountry"
                      value={formData.mailingCountry}
                      onChange={(e) => {
                        handleInputChange(e);
                        // Also reset mailingState when country changes
                        setFormData(prev => ({ 
                          ...prev, 
                          mailingState: '' 
                        }));
                      }}
                      className={getInputClassName('mailingCountry')}
                      required
                    >
                      <option value="">Select country</option>
                      {countries.map(country => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                    {stepErrors.mailingCountry && (
                      <p className="text-red-500 text-sm mt-1">{stepErrors.mailingCountry}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Origin Information</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Country of Origin</label>
                  <select
                    name="countryOfOrigin"
                    value={formData.countryOfOrigin}
                    onChange={(e) => {
                      handleInputChange(e);
                      // Reset state of origin when country changes
                      setFormData(prev => ({ ...prev, stateoforigin: '' }));
                    }}
                    className={getInputClassName('countryOfOrigin')}
                    required
                  >
                    <option value="">Select country</option>
                    {countries.map(country => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  {stepErrors.countryOfOrigin && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors.countryOfOrigin}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">State/Province of Origin</label>
                  <select
                    name="stateoforigin"
                    value={formData.stateoforigin}
                    onChange={handleInputChange}
                    className={getInputClassName('stateoforigin')}
                    required={formData.countryOfOrigin === 'US'}
                    disabled={!formData.countryOfOrigin || formData.countryOfOrigin !== 'US'}
                  >
                    <option value="">Select state/province</option>
                    {getStatesForCountry(formData.countryOfOrigin).map(state => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                  {stepErrors.stateoforigin && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors.stateoforigin}</p>
                  )}
                  {formData.countryOfOrigin && formData.countryOfOrigin !== 'US' && (
                    <p className="text-sm text-gray-500 mt-1">State/Province selection is optional for non-US residents</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaBriefcase className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Employment Information</h2>
            </div>
            
            <div className="space-y-4">
              <div className="form-group">
                <label className="form-label">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className={getInputClassName('occupation')}
                  required
                />
                {stepErrors.occupation && (
                  <p className="text-red-500 text-sm mt-1">{stepErrors.occupation}</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Expected Salary (Current Tax Year)</label>
                <div className="relative">
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary ? '$' + formData.expectedSalary.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}
                    onChange={(e) => {
                      // Remove all non-numeric characters
                      const value = e.target.value.replace(/[^\d.]/g, '');
                      setFormData(prev => ({
                        ...prev,
                        expectedSalary: value
                      }));
                    }}
                    className={getInputClassName('expectedSalary')}
                    placeholder="$0.00"
                    required
                  />
                </div>
                {stepErrors.expectedSalary && (
                  <p className="text-red-500 text-sm mt-1">{stepErrors.expectedSalary}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Insurance Information</h2>
            </div>

            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="bg-green-100 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Zero Dollar Premium Plan</h3>
                  <p className="text-green-600">All our health insurance plans come with a $0 premium</p>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Existing Insurance Coverage</label>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasExistingInsurance}
                      onChange={(e) => setFormData(prev => ({ ...prev, hasExistingInsurance: e.target.checked }))}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span>I have existing insurance coverage</span>
                  </label>
                  {formData.hasExistingInsurance && (
                    <select
                      name="existingInsuranceType"
                      value={formData.existingInsuranceType}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="">Select type</option>
                      <option value="medicare">Medicare</option>
                      <option value="medicaid">Medicaid</option>
                      <option value="tricare">Tricare</option>
                      <option value="employer">Employer-based Insurance</option>
                      <option value="different">Different Carrier</option>
                    </select>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Health Insurance Provider</label>
                <select
                  name="healthInsuranceProvider"
                  value={formData.healthInsuranceProvider}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                >
                  <option value="">Select provider</option>
                  <option value="united">United Healthcare</option>
                  <option value="aetna">Aetna</option>
                  <option value="cigna">Cigna</option>
                  <option value="ambetter">Ambetter</option>
                  <option value="bcbs">Blue Cross Blue Shield</option>
                  <option value="wellcare">WellCare</option>
                  <option value="humana">Humana</option>
                  <option value="caresource">CareSource</option>
                  <option value="molina">Molina</option>
                  <option value="oscar">Oscar</option>
                  <option value="devoted">Devoted</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Deductible Preference</label>
                <select
                  name="deductible"
                  value={formData.deductible}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                >
                  <option value="">Select deductible</option>
                  <option value="zero">Zero Dollar Deductible</option>
                  <option value="low">Low Deductible</option>
                  <option value="high">High Deductible</option>
                </select>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    Note: A higher deductible only means that you will be more able to keep your health insurance coverage if you should have to use it in the future. This will not affect your current eligibility for benefits and will not require you to pay any money out of pocket in order to get the plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaFileSignature className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Final Steps</h2>
            </div>

            <div className="space-y-6">
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notice</h3>
                <p className="text-sm text-gray-700 mb-4">
                  By submitting this application, you acknowledge and agree to the following:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>All information provided in this application is true, accurate, and complete to the best of your knowledge.</li>
                  <li>You understand that providing false or misleading information may result in the rejection of your application and potential legal consequences.</li>
                  <li>You consent to the processing of your personal information for the purpose of evaluating your application and providing healthcare services.</li>
                  <li>You authorize us to verify the information provided, including but not limited to your identity, employment, and insurance status.</li>
                  <li>You understand that submission of this application does not guarantee approval or coverage.</li>
                  <li>You agree to receive communications regarding your application status and related healthcare services.</li>
                </ul>
              </div>

              <div className="form-group">
                <label className="form-label">Social Security Number</label>
                <div className="relative">
                  <input
                    type="text"
                    name="ssn"
                    value={formData.ssn.length === 9 ? formatSSN(formData.ssn) : formData.ssn}
                    onChange={handleSSNChange}
                    className={`form-control ${
                      formData.ssn.length > 0
                        ? ssnValidation.isValid
                          ? 'border-green-500 focus:border-green-500'
                          : 'border-red-500 focus:border-red-500'
                        : ''
                    }`}
                    placeholder="Enter 9 digits"
                    maxLength="11"
                    required
                  />
                  {formData.ssn.length > 0 && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {ssnValidation.isValid ? (
                        <FaCheckCircle className="text-green-500 text-xl" />
                      ) : (
                        <FaTimesCircle className="text-red-500 text-xl" />
                      )}
                    </div>
                  )}
                </div>
                {formData.ssn.length > 0 && (
                  <p className={`text-sm mt-1 ${
                    ssnValidation.isValid ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {ssnValidation.message}
                  </p>
                )}
              </div>

              <div className="form-group mt-8">
                <label className="form-label text-lg font-semibold">Electronic Signature</label>
                <div className="space-y-4">
                  {formData.signatureurl ? (
                    <div className="border p-4 rounded-md bg-gray-50">
                      <div className="flex justify-between items-center mb-3">
                        <p className="text-md text-gray-700 font-medium">Your signature has been recorded:</p>
                        <button
                          type="button"
                          onClick={() => {
                            setShowSignatureModal(true);
                          }}
                          className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium"
                        >
                          Change Signature
                        </button>
                      </div>
                      <div className="signature-preview p-4 border border-gray-300 rounded-md bg-white">
                        <img 
                          src={formData.signatureurl} 
                          alt="Your signature" 
                          className="mx-auto" 
                          style={{
                            maxHeight: '80px',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                          }}
                        />
                      </div>
                      <p className="mt-3 text-green-600 text-sm flex items-center">
                        <FaCheckCircle className="mr-2" /> 
                        Signature confirmed
                      </p>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center">
                      <p className="mb-4 text-gray-600">Click the button below to sign your application</p>
                      
                      {/* Main signature button with multiple styling approaches to ensure it's visible */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowSignatureModal(true);
                        }}
                        style={{
                          backgroundColor: '#2563eb',
                          color: 'white',
                          padding: '0.75rem 2rem',
                          borderRadius: '0.375rem',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          margin: '0 auto',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                          cursor: 'pointer',
                          border: 'none',
                          fontSize: '1.125rem',
                        }}
                      >
                        <FaFileSignature style={{marginRight: '0.5rem'}} />
                        SIGN HERE
                      </button>
                      
                      {!formData.signatureurl && stepErrors.signatureurl && (
                        <div className="text-red-500 text-sm mt-3">{stepErrors.signatureurl}</div>
                      )}
                    </div>
                  )}
                  
                  <div className="form-check mb-4 mt-6">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="signatureConsent"
                      checked={formData.signatureConsent}
                      onChange={(e) => setFormData(prev => ({ ...prev, signatureConsent: e.target.checked }))}
                    />
                    <label className="form-check-label" htmlFor="signatureConsent">
                      I understand that my signature above constitutes an electronic signature and verifies the accuracy of all information provided in this application.
                    </label>
                    {stepErrors.signatureConsent && (
                      <div className="text-red-500 text-sm mt-1">{stepErrors.signatureConsent}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Add error modal component
  const ErrorModal = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 z-[9999] overflow-auto bg-black bg-opacity-75 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-red-600">Error</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✕
            </button>
          </div>
          <div className="mb-6">
            <p className="text-gray-700">{message}</p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (showDisclaimer) {
    return (
      <PageTransition>
        <div className="page-content">
          <Navbar />
          <LegalDisclaimer onAccept={() => setShowDisclaimer(false)} />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="page-content min-h-screen">
        <Navbar />
        <div className="enrollment-page py-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="enrollment-card">
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="enrollment-title">Health Insurance Application</h1>
                      <div className="text-sm text-gray-500">
                        Step {step} of 8
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(step / 8) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  {error && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-600 font-medium">{error}</p>
                    </div>
                  )}
                  
                  {success && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-600 font-medium">Application submitted successfully!</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="enrollment-form">
                    {renderStep()}

                    <div className="mt-8 flex justify-between items-center">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="btn btn-outline-primary flex items-center"
                        >
                          <FaArrowLeft className="mr-2" />
                          Previous
                        </button>
                      )}
                      {step < 8 ? (
                        <button
                          type="button"
                          onClick={() => {
                            console.log(`Attempting to move from step ${step} to step ${step + 1}`);
                            const isValid = validateStep();
                            console.log(`Validation result for step ${step}: ${isValid ? 'VALID' : 'INVALID'}`);
                            if (isValid) {
                              console.log(`Advancing to step ${step + 1}`);
                              setStep(step + 1);
                            } else {
                              console.log('Validation failed, staying on current step');
                              console.log('Current errors:', JSON.stringify(stepErrors));
                            }
                          }}
                          className="btn btn-primary flex items-center ml-auto"
                        >
                          Next
                          <FaArrowRight className="ml-2" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          onClick={(e) => {
                            e.preventDefault();
                            console.log('Submit button clicked');
                            handleSubmit(e);
                          }}
                          className={`btn btn-success flex items-center ml-auto ${
                            isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-t-2 border-white mr-2"></div>
                              Submitting...
                            </>
                          ) : (
                            'Submit Application'
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <ErrorModal
          message={errorModalMessage}
          onClose={() => {
            setShowErrorModal(false);
            setErrorModalMessage('');
            setIsSubmitting(false);
          }}
        />
      )}

      {/* Signature Modal */}
      {showSignatureModal && (
        <div 
          className="fixed inset-0 z-[9999] overflow-auto bg-black bg-opacity-75 flex items-center justify-center"
          style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}}
          onClick={(e) => {
            // Only close if clicking the backdrop
            if (e.target === e.currentTarget) {
              setShowSignatureModal(false);
            }
          }}
        >
          <div 
            className="bg-white rounded-lg p-5 w-full max-w-sm mx-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            style={{zIndex: 10000}}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">Sign Here</h3>
              <button 
                type="button" 
                onClick={() => setShowSignatureModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl focus:outline-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            
            <div className="signature-container bg-blue-50 p-3 rounded-md border border-blue-200">
              <div className="signature-wrapper relative overflow-hidden" style={{ touchAction: 'none' }}>
                <canvas 
                  ref={signatureCanvasRef} 
                  className="signature-canvas bg-white w-full cursor-crosshair"
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '100%',
                    height: '150px',
                    touchAction: 'none',
                  }}
                ></canvas>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center">Use your finger or mouse to sign</p>
            </div>
            
            <div className="flex mt-4 space-x-2">
              <button 
                type="button"
                className="flex-1 py-2 px-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                onClick={() => clearSignature()}
              >
                Clear
              </button>
              <button 
                type="button"
                className="flex-1 py-2 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-bold"
                style={{ backgroundColor: '#1d4ed8', fontWeight: 'bold' }}
                onClick={() => {
                  const result = saveSignature();
                  if (result) {
                    setShowSignatureModal(false);
                  } else {
                    alert('Please provide your signature before continuing.');
                  }
                }} 
              >
                Accept & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
};

export default ApplicationForm; 