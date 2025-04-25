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

const ApplicationForm = () => {
  const router = useRouter();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [step, setStep] = useState(1);
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
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    const { name, value } = e.target;
    
    console.log(`Input changed: ${name} = ${value}`);
    
    // Handle nested properties (e.g., residentialaddress.streetaddress)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      console.log(`Updating nested property: ${parent}.${child}`);
      setFormData(prev => {
        const updated = {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value
          }
        };
        console.log('Updated form data:', JSON.stringify(updated[parent]));
        return updated;
      });
    } else {
      // Handle regular properties
      setFormData(prev => ({
        ...prev,
        [name]: value
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
    
    // Check required fields
    const requiredFields = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      dateOfBirth: 'Date of Birth',
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

  // Handle form submission with updated signature handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('Attempting to submit application form');
      
      // Final validation
      if (!validateStep()) {
        console.error('Form validation failed on submit');
        // Scroll to the first error
        const firstErrorEl = document.querySelector('.text-red-500');
        if (firstErrorEl) {
          firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
      
      if (step < 8) {
        // Move to the next step
        console.log(`Moving from step ${step} to step ${step + 1}`);
        setStep(step + 1);
        return;
      }
      
      // Verify signature exists before submitting
      if (!formData.signatureurl || formData.signatureurl.length < 100) {
        console.error('Missing signature on final submission');
        setStepErrors(prev => ({
          ...prev,
          signatureurl: 'A valid signature is required to submit your application'
        }));
        return;
      }
      
      console.log("All validations passed, submitting form...");
      setIsSubmitting(true);
      
      // Format the data for submission
      const submissionData = {
        ...formData,
        // Format the date properly
        applicationDate: new Date().toISOString(),
        // Add marketing ID if present
        marketingid: marketingID || 'UNKNOWN'
      };
      
      // For demo/dev purposes, log the data being submitted
      console.log('Submitting application data to API');
      
      try {
        // Make the API call
        console.log("Sending POST request to /api/submit-application");
        const response = await fetch('/api/submit-application', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });
        
        const result = await response.json();
        console.log('API response received:', result);
        
        if (!response.ok) {
          throw new Error(result.error || 'Failed to submit application');
        }
        
        console.log('Application submitted successfully, redirecting to thank-you page');
        
        // Store client data using our utility function
        storeClientData({
          applicationId: result.applicationId,
          clientId: result.clientId,
          leadId: submissionData.marketingid
        });
        
        // Redirect to thank you page
        router.push('/thank-you');
      } catch (error) {
        console.error('Error submitting application:', error);
        setIsSubmitting(false);
        
        // Provide a more user-friendly error message
        const errorMessage = error.message || 'There was an error submitting your application. Please try again.';
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Unexpected error during submission:', error);
      setIsSubmitting(false);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  // Update SSN input to show masked value
  const formatSSN = (value) => {
    const ssn = value.replace(/\D/g, '');
    if (ssn.length < 9) {
      return ssn;
    }
    return '•••-••-' + ssn.slice(-4);
  };

  const handleSSNChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 9);
    setFormData(prev => ({
      ...prev,
      ssn: value
    }));
    validateSSN(value);
  };

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      setFormData(prev => ({ 
        ...prev, 
        signatureurl: '',
        signature: false
      }));
      setSignatureValidation({
        isValid: false,
        message: 'Signature cleared'
      });
    }
  };
  
  const saveSignature = () => {
    if (!signaturePadRef.current) {
      return false;
    }
    
    if (signaturePadRef.current.isEmpty()) {
      setSignatureValidation({
        isValid: false,
        message: 'Please provide a signature'
      });
      
      // Update step errors
      setStepErrors(prev => ({
        ...prev,
        signatureurl: 'Signature is required'
      }));
      
      return false;
    }
    
    try {
      // Use higher quality PNG format with better resolution
      const dataURL = signaturePadRef.current.toDataURL('image/png', 1.0);
      
      if (!dataURL || dataURL.length < 100) {
        return false;
      }
      
      // Update form data with signature
      setFormData(prev => ({ 
        ...prev, 
        signatureurl: dataURL,
        signature: true 
      }));
      
      // Update validation state
      setSignatureValidation({
        isValid: true,
        message: 'Signature provided'
      });
      
      // Clear any signature errors
      setStepErrors(prev => ({
        ...prev,
        signatureurl: undefined
      }));
      
      return true;
    } catch (error) {
      return false;
    }
  };
  
  // Initialize signature pad
  const initializeSignaturePad = () => {
    if (!signatureCanvasRef.current) {
      return null;
    }
    
    try {
      // Clear any existing instance
      if (signaturePadRef.current) {
        signaturePadRef.current.off();
      }
      
      // Set canvas dimensions
      const canvas = signatureCanvasRef.current;
      const rect = canvas.getBoundingClientRect();
      
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      
      // Set canvas dimensions properly based on display size
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      canvas.getContext("2d").scale(ratio, ratio);

      // Add touch event handlers to prevent scrolling while signing on mobile
      const handleTouchStart = (e) => {
        // Prevent scroll/zoom during signature
        e.preventDefault();
      };
      
      const handleTouchMove = (e) => {
        // Prevent scroll/zoom during signature
        e.preventDefault();
      };
      
      canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
      canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      // Create new SignaturePad instance with improved settings
      signaturePadRef.current = new SignaturePad(canvas, {
        backgroundColor: 'rgb(255, 255, 255)',
        penColor: 'rgb(0, 0, 0)',
        velocityFilterWeight: 0.5,
        minWidth: 0.6,
        maxWidth: 2.8,
        throttle: 10, // More responsive
        dotSize: 2,   // Better for touch
      });
      
      return () => {
        if (signaturePadRef.current) {
          signaturePadRef.current.off();
        }
        // Remove event listeners
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchmove', handleTouchMove);
      };
    } catch (err) {
      return null;
    }
  };
  
  // Initialize signature pad on component mount
  useEffect(() => {
    // Skip initialization during server-side rendering
    if (typeof window !== 'undefined') {
      try {
        const cleanup = initializeSignaturePad();
        return () => cleanup && cleanup();
      } catch (err) {
        console.error('Error in initial signature pad setup:', err);
      }
    }
  }, []);

  // Re-initialize when modal opens with a more reliable approach
  useEffect(() => {
    if (showSignatureModal) {
      // Clear previous signature data when opening modal
      if (signaturePadRef.current) {
        signaturePadRef.current.clear();
      }
      
      // Delay to ensure DOM is ready and modal is visible
      const timer = setTimeout(() => {
        try {
          const canvas = signatureCanvasRef.current;
          if (!canvas) {
            return;
          }
          
          const cleanup = initializeSignaturePad();
          
          // Handle window resize for responsive canvas
          const handleResize = () => {
            try {
              initializeSignaturePad();
            } catch (err) {
              // Silent error handling
            }
          };
          
          // Handle orientation change on mobile
          const handleOrientationChange = () => {
            try {
              setTimeout(() => {
                initializeSignaturePad();
              }, 200);
            } catch (err) {
              // Silent error handling
            }
          };
          
          window.addEventListener('resize', handleResize);
          window.addEventListener('orientationchange', handleOrientationChange);
          
          return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleOrientationChange);
            if (cleanup) {
              cleanup();
            }
          };
        } catch (err) {
          // Silent error handling
        }
      }, 300); // Increased delay for better reliability
      
      return () => clearTimeout(timer);
    }
  }, [showSignatureModal]);

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

            <div className="space-y-6">
              <div className="form-group">
                <label className="form-label">Marital Status</label>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.isMarried}
                      onChange={(e) => setFormData(prev => ({ ...prev, isMarried: e.target.checked }))}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span>I am married</span>
                  </label>
                </div>
              </div>

              {formData.isMarried && (
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <h3 className="text-lg font-semibold">Spouse Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div className="form-group">
                <label className="form-label">Children</label>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasChildren}
                      onChange={(e) => setFormData(prev => ({ ...prev, hasChildren: e.target.checked }))}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span>I have children</span>
                  </label>
                </div>
              </div>

              {formData.hasChildren && (
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <h3 className="text-lg font-semibold">Children Information</h3>
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
                <label className="form-label">Tax Information</label>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.isClaimedOnTaxes}
                      onChange={(e) => setFormData(prev => ({ ...prev, isClaimedOnTaxes: e.target.checked }))}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span>I will be claimed on someone else's taxes</span>
                  </label>

                  <div className="form-group">
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