import { NextResponse } from 'next/server';
import { getFirestore, collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { getApp, initializeApp } from 'firebase/app';

// Initialize Firebase (make sure this matches your firebase.ts file)
let app;
try {
  app = getApp();
} catch (error) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  app = initializeApp(firebaseConfig);
}

export async function POST(request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, phone, ssn } = data;
    if (!firstName || !lastName || !email || !phone || !ssn) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Get marketing ID or set default
    const marketingID = data.marketingID || 'UNKNOWN';
    
    // Initialize Firestore
    const db = getFirestore(app);
    
    // Prepare application data with the correct structure for Firestore
    const applicationData = {
      // Personal information
      firstName: data.firstName,
      middleName: data.middleName || "",
      lastName: data.lastName,
      suffix: data.suffix || "",
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      ssn: data.ssn,
      stateoforigin: data.stateoforigin || "",
      
      // Family information
      isMarried: data.isMarried || false,
      hasChildren: data.hasChildren || false,
      isClaimedOnTaxes: data.isClaimedOnTaxes || false,
      taxFilingStatus: data.taxFilingStatus || "",
      
      // Spouse information
      spouseinfo: data.spouseinfo || {
        firstname: "",
        lastname: "",
        dateofbirth: "",
        ssn: ""
      },
      
      // Dependents
      dependents: data.dependents || [],
      
      // Residential address
      residentialaddress: data.residentialaddress || {
        streetaddress: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
      },
      
      // Mailing address
      sameAsResidential: data.sameAsResidential || true,
      mailingStreet: data.mailingStreet || "",
      mailingCity: data.mailingCity || "",
      mailingState: data.mailingState || "",
      mailingZip: data.mailingZip || "",
      mailingCountry: data.mailingCountry || "",
      
      // Origin and occupation
      countryOfOrigin: data.countryOfOrigin || "",
      occupation: data.occupation || "",
      expectedSalary: data.expectedSalary || "",
      
      // Insurance information
      hasExistingInsurance: data.hasExistingInsurance || false,
      existingInsuranceType: data.existingInsuranceType || "",
      healthInsuranceProvider: data.healthInsuranceProvider || "",
      oscar: data.oscar || "",
      unitedhealthcare: data.unitedhealthcare || "",
      wellcare: data.wellcare || "",
      deductible: data.deductible || "",
      
      // Signature information
      signature: data.signature || false,
      signatureurl: data.signatureurl || "",
      signatureConsent: data.signatureConsent || false,
      
      // Additional tracking information
      status: data.status || "Application Submitted",
      marketingID: marketingID,
      timestamp: serverTimestamp(),
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };
    
    // Add to Firestore
    const docRef = await addDoc(collection(db, 'applications'), applicationData);
    
    // Return success response with document ID
    return NextResponse.json({ 
      success: true, 
      message: 'Application successfully submitted',
      applicationId: docRef.id
    });
    
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
} 