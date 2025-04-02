'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight, FaUser, FaMapMarkerAlt, FaBriefcase, FaShieldAlt, FaFileSignature, FaTrash, FaCopy, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const ApplicationForm = () => {
  const router = useRouter();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    isMarried: false,
    hasChildren: false,
    isClaimedOnTaxes: false,
    taxFilingStatus: '',
    spouseName: '',
    spouseDateOfBirth: '',
    dependents: [],
    residentialStreet: '',
    residentialCity: '',
    residentialState: '',
    residentialZip: '',
    residentialCountry: '',
    sameAsResidential: true,
    mailingStreet: '',
    mailingCity: '',
    mailingState: '',
    mailingZip: '',
    mailingCountry: '',
    countryOfOrigin: '',
    stateOfOrigin: '',
    occupation: '',
    expectedSalary: '',
    hasExistingInsurance: false,
    existingInsuranceType: '',
    healthInsuranceProvider: '',
    deductible: '',
    socialSecurityNumber: '',
    electronicSignature: '',
    signatureConsent: false,
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDependentAdd = () => {
    setFormData(prev => ({
      ...prev,
      dependents: [...prev.dependents, { name: '', dateOfBirth: '' }]
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

  const validateSignature = (firstName, lastName) => {
    const isValid = firstName === formData.firstName && lastName === formData.lastName;
    setSignatureValidation({
      isValid,
      message: isValid ? 'Signature matches personal information' : 'Signature must match your first and last name exactly'
    });
    return isValid;
  };

  // Validate all required fields
  const validateForm = () => {
    const requiredFields = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      dateOfBirth: 'Date of Birth',
      taxFilingStatus: 'Tax Filing Status',
      residentialStreet: 'Residential Street',
      residentialCity: 'Residential City',
      residentialState: 'Residential State',
      residentialZip: 'Residential ZIP',
      residentialCountry: 'Residential Country',
      countryOfOrigin: 'Country of Origin',
      stateOfOrigin: 'State of Origin',
      occupation: 'Occupation',
      expectedSalary: 'Expected Salary',
      healthInsuranceProvider: 'Health Insurance Provider',
      deductible: 'Deductible',
      socialSecurityNumber: 'Social Security Number',
      signatureFirstName: 'Signature First Name',
      signatureLastName: 'Signature Last Name',
      signatureConsent: 'Signature Consent'
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([key]) => !formData[key])
      .map(([_, label]) => label);

    setIsFormValid(missingFields.length === 0);
    return missingFields;
  };

  // Update form validation on any change
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Update validateStep function to make state optional for non-US countries
  const validateStep = () => {
    const errors = {};
    
    switch (step) {
      case 1:
        if (!formData.firstName) errors.firstName = 'First name is required';
        if (!formData.lastName) errors.lastName = 'Last name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.phone) errors.phone = 'Phone number is required';
        if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
        break;
      case 2:
        if (!formData.taxFilingStatus) errors.taxFilingStatus = 'Tax filing status is required';
        if (formData.isMarried && !formData.spouseName) errors.spouseName = 'Spouse name is required';
        if (formData.isMarried && !formData.spouseDateOfBirth) errors.spouseDateOfBirth = 'Spouse date of birth is required';
        if (formData.hasChildren && formData.dependents.length === 0) errors.dependents = 'Please add at least one child';
        break;
      case 3:
        if (!formData.residentialStreet) errors.residentialStreet = 'Street address is required';
        if (!formData.residentialCity) errors.residentialCity = 'City is required';
        if (!formData.residentialState) errors.residentialState = 'State is required';
        if (!formData.residentialZip) errors.residentialZip = 'ZIP code is required';
        if (!formData.residentialCountry) errors.residentialCountry = 'Country is required';
        break;
      case 4:
        if (!formData.sameAsResidential) {
          if (!formData.mailingStreet) errors.mailingStreet = 'Street address is required';
          if (!formData.mailingCity) errors.mailingCity = 'City is required';
          if (!formData.mailingState) errors.mailingState = 'State is required';
          if (!formData.mailingZip) errors.mailingZip = 'ZIP code is required';
          if (!formData.mailingCountry) errors.mailingCountry = 'Country is required';
        }
        break;
      case 5:
        if (!formData.countryOfOrigin) errors.countryOfOrigin = 'Country of origin is required';
        // Only require state if US is selected
        if (formData.countryOfOrigin === 'US' && !formData.stateOfOrigin) {
          errors.stateOfOrigin = 'State of origin is required for US residents';
        }
        break;
      case 6:
        if (!formData.occupation) errors.occupation = 'Occupation is required';
        if (!formData.expectedSalary) errors.expectedSalary = 'Expected salary is required';
        break;
      case 7:
        if (!formData.healthInsuranceProvider) errors.healthInsuranceProvider = 'Health insurance provider is required';
        if (!formData.deductible) errors.deductible = 'Deductible preference is required';
        break;
      case 8:
        if (!formData.socialSecurityNumber) errors.socialSecurityNumber = 'Social security number is required';
        if (!formData.signatureFirstName) errors.signatureFirstName = 'First name is required';
        if (!formData.signatureLastName) errors.signatureLastName = 'Last name is required';
        if (!formData.signatureConsent) errors.signatureConsent = 'You must consent to the electronic signature';
        break;
    }

    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Add getInputClassName function
  const getInputClassName = (fieldName) => {
    return `form-control ${
      stepErrors[fieldName] ? 'border-red-500 focus:border-red-500' : ''
    }`;
  };

  // Update handleSubmit to include API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    const missingFields = validateForm();
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields:\n${missingFields.join('\n')}`);
      return;
    }

    if (!validateSSN(formData.socialSecurityNumber)) {
      return;
    }

    if (!validateSignature(formData.signatureFirstName, formData.signatureLastName)) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      const data = await response.json();
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update SSN input to show masked value
  const formatSSN = (value) => {
    const ssn = value.replace(/\D/g, '');
    if (ssn.length <= 4) return ssn;
    return '•••-••-' + ssn.slice(-4);
  };

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
                      <label className="form-label">Spouse's Name</label>
                      <input
                        type="text"
                        name="spouseName"
                        value={formData.spouseName}
                        onChange={handleInputChange}
                        className={getInputClassName('spouseName')}
                        required
                      />
                      {stepErrors.spouseName && (
                        <p className="text-red-500 text-sm mt-1">{stepErrors.spouseName}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Spouse's Date of Birth</label>
                      <input
                        type="date"
                        name="spouseDateOfBirth"
                        value={formData.spouseDateOfBirth}
                        onChange={handleInputChange}
                        className={getInputClassName('spouseDateOfBirth')}
                        required
                      />
                      {stepErrors.spouseDateOfBirth && (
                        <p className="text-red-500 text-sm mt-1">{stepErrors.spouseDateOfBirth}</p>
                      )}
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
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-lg relative">
                      <div className="form-group">
                        <label className="form-label">Child's Name</label>
                        <input
                          type="text"
                          value={dependent.name}
                          onChange={(e) => handleDependentChange(index, 'name', e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
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
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            dependents: prev.dependents.filter((_, i) => i !== index)
                          }));
                        }}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        <FaTrash className="text-lg" />
                      </button>
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
                  name="residentialStreet"
                  value={formData.residentialStreet}
                  onChange={handleInputChange}
                  className={getInputClassName('residentialStreet')}
                  required
                />
                {stepErrors.residentialStreet && (
                  <p className="text-red-500 text-sm mt-1">{stepErrors.residentialStreet}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="residentialCity"
                    value={formData.residentialCity}
                    onChange={handleInputChange}
                    className={getInputClassName('residentialCity')}
                    required
                  />
                  {stepErrors.residentialCity && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors.residentialCity}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">State/Province</label>
                  <select
                    name="residentialState"
                    value={formData.residentialState}
                    onChange={handleInputChange}
                    className={getInputClassName('residentialState')}
                    required
                    disabled={!formData.residentialCountry}
                  >
                    <option value="">Select state/province</option>
                    {getStatesForCountry(formData.residentialCountry).map(state => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                  {stepErrors.residentialState && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors.residentialState}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    name="residentialZip"
                    value={formData.residentialZip}
                    onChange={handleInputChange}
                    className={getInputClassName('residentialZip')}
                    required
                  />
                  {stepErrors.residentialZip && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors.residentialZip}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <select
                    name="residentialCountry"
                    value={formData.residentialCountry}
                    onChange={(e) => {
                      handleInputChange(e);
                      setFormData(prev => ({ ...prev, residentialState: '' }));
                    }}
                    className={getInputClassName('residentialCountry')}
                    required
                  >
                    <option value="">Select country</option>
                    {countries.map(country => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  {stepErrors.residentialCountry && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors.residentialCountry}</p>
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
                        mailingStreet: prev.residentialStreet,
                        mailingCity: prev.residentialCity,
                        mailingState: prev.residentialState,
                        mailingZip: prev.residentialZip,
                        mailingCountry: prev.residentialCountry
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
                    className="form-control"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="mailingCity"
                      value={formData.mailingCity}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      name="mailingState"
                      value={formData.mailingState}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
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
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      name="mailingCountry"
                      value={formData.mailingCountry}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
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
                      setFormData(prev => ({ ...prev, stateOfOrigin: '' }));
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
                    name="stateOfOrigin"
                    value={formData.stateOfOrigin}
                    onChange={handleInputChange}
                    className={getInputClassName('stateOfOrigin')}
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
                  {stepErrors.stateOfOrigin && (
                    <p className="text-red-500 text-sm mt-1">{stepErrors.stateOfOrigin}</p>
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
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Expected Salary (Current Tax Year)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="form-control pl-8"
                    required
                  />
                </div>
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
              <h2 className="text-2xl font-bold">Final Information</h2>
            </div>

            <div className="space-y-6">
              <div className="form-group">
                <label className="form-label">Social Security Number</label>
                <div className="relative">
                  <input
                    type="text"
                    name="socialSecurityNumber"
                    value={formatSSN(formData.socialSecurityNumber)}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 9);
                      setFormData(prev => ({
                        ...prev,
                        socialSecurityNumber: value
                      }));
                      validateSSN(value);
                    }}
                    className={`form-control ${
                      formData.socialSecurityNumber.length > 0
                        ? ssnValidation.isValid
                          ? 'border-green-500 focus:border-green-500'
                          : 'border-red-500 focus:border-red-500'
                        : ''
                    }`}
                    placeholder="Enter 9 digits"
                    maxLength="11"
                    required
                  />
                  {formData.socialSecurityNumber.length > 0 && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {ssnValidation.isValid ? (
                        <FaCheckCircle className="text-green-500 text-xl" />
                      ) : (
                        <FaTimesCircle className="text-red-500 text-xl" />
                      )}
                    </div>
                  )}
                </div>
                {formData.socialSecurityNumber.length > 0 && (
                  <p className={`text-sm mt-1 ${
                    ssnValidation.isValid ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {ssnValidation.message}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Electronic Signature</label>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="signatureFirstName"
                        value={formData.signatureFirstName || ''}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData(prev => ({ ...prev, signatureFirstName: value }));
                          validateSignature(value, formData.signatureLastName || '');
                        }}
                        className={`form-control ${
                          formData.signatureFirstName
                            ? signatureValidation.isValid
                              ? 'border-green-500 focus:border-green-500'
                              : 'border-red-500 focus:border-red-500'
                            : ''
                        }`}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="signatureLastName"
                        value={formData.signatureLastName || ''}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData(prev => ({ ...prev, signatureLastName: value }));
                          validateSignature(formData.signatureFirstName || '', value);
                        }}
                        className={`form-control ${
                          formData.signatureLastName
                            ? signatureValidation.isValid
                              ? 'border-green-500 focus:border-green-500'
                              : 'border-red-500 focus:border-red-500'
                            : ''
                        }`}
                        required
                      />
                    </div>
                  </div>
                  {formData.signatureFirstName && formData.signatureLastName && (
                    <p className={`text-sm ${
                      signatureValidation.isValid ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {signatureValidation.message}
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.signatureConsent}
                      onChange={(e) => setFormData(prev => ({ ...prev, signatureConsent: e.target.checked }))}
                      className="form-checkbox h-5 w-5 text-blue-600"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I understand that typing my name above constitutes an electronic signature and verifies the accuracy of all information provided in this application.
                    </span>
                  </label>
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
                            if (validateStep()) {
                              setStep(step + 1);
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
                          disabled={!isFormValid || !ssnValidation.isValid || !signatureValidation.isValid || isSubmitting}
                          className={`btn btn-success flex items-center ml-auto ${
                            (!isFormValid || !ssnValidation.isValid || !signatureValidation.isValid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
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
    </PageTransition>
  );
};

export default ApplicationForm; 