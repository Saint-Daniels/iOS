import { NextResponse } from 'next/server';
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
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
    const leadId = data.marketingid || marketingID; // Use marketingid as the leadId
    
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
      lead_id: leadId,
      marketingID: marketingID,
      timestamp: serverTimestamp(),
      applicationDate: data.applicationDate || new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };
    
    // First, check if client exists with this lead_id
    let clientId;
    try {
      // Create a reference to a document with the leadId as the document ID
      const clientRef = doc(db, 'clients', leadId);
      const clientDoc = await getDoc(clientRef);
      
      // Prepare client data
      const clientData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        ssn: data.ssn,
        residentialaddress: data.residentialaddress,
        hasApplication: true,
        lastUpdated: serverTimestamp(),
        status: "Active Client",
        marketingID: marketingID,
        lead_id: leadId
      };
      
      if (clientDoc.exists()) {
        // Update existing client
        console.log(`Updating existing client with lead_id: ${leadId}`);
        await updateDoc(clientRef, clientData);
        clientId = leadId;
      } else {
        // Create new client with leadId as the document ID
        console.log(`Creating new client with lead_id: ${leadId}`);
        await setDoc(clientRef, {
          ...clientData,
          createdAt: serverTimestamp()
        });
        clientId = leadId;
      }
    } catch (error) {
      console.error('Error creating/updating client:', error);
      return NextResponse.json(
        { error: 'Failed to create/update client record' },
        { status: 500 }
      );
    }
    
    // Now add the application to the applications collection
    try {
      // Add client_id to the application data
      applicationData.client_id = clientId;
      
      // Add to applications collection
      const appDocRef = await addDoc(collection(db, 'applications'), applicationData);
      
      // Return success response with document IDs
      return NextResponse.json({ 
        success: true, 
        message: 'Application successfully submitted',
        applicationId: appDocRef.id,
        clientId: clientId
      });
      
    } catch (error) {
      console.error('Error submitting application:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Unexpected error in submit-application route:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
} 