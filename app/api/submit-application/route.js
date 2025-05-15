import { NextResponse } from 'next/server';
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getApp, initializeApp } from 'firebase/app';
import { getClient } from '@vercel/postgres';
import { validateApplicationSubmission } from '../../../utils/applicationValidation';

// Initialize Firebase (make sure this matches your firebase.ts file)
let app;
try {
  app = getApp();
} catch (error) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyDr7bC7uZCSllzpz0QF6DVnylrLprwYd84",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "saintdaniels-6144c.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "saintdaniels-6144c",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "saintdaniels-6144c.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "99705276201",
    appId: process.env.FIREBASE_APP_ID || "1:99705276201:web:6695bbbc70012e92071938",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-1CPD7FC0RZ"
  };
  console.log("API route initializing Firebase with config for project:", firebaseConfig.projectId);
  app = initializeApp(firebaseConfig);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    
    // Validate submission
    const validation = await validateApplicationSubmission(
      data.email,
      data.phone,
      ipAddress
    );
    
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }
    
    const client = await getClient();
    
    try {
      // Insert the application with IP address
      const result = await client.query(
        `INSERT INTO applications (
          first_name, middle_name, last_name, suffix,
          email, phone, date_of_birth, ssn,
          is_married, has_children, is_claimed_on_taxes,
          tax_filing_status, spouse_info, dependents,
          residential_address, mailing_address,
          country_of_origin, state_of_origin,
          occupation, expected_salary,
          has_existing_insurance, existing_insurance_type,
          health_insurance_provider, deductible,
          signature_url, signature_consent,
          ip_address, created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, NOW())
        RETURNING id`,
        [
          data.firstName,
          data.middleName,
          data.lastName,
          data.suffix,
          data.email,
          data.phone,
          data.dateOfBirth,
          data.ssn,
          data.isMarried,
          data.hasChildren,
          data.isClaimedOnTaxes,
          data.taxFilingStatus,
          JSON.stringify(data.spouseinfo),
          JSON.stringify(data.dependents),
          JSON.stringify(data.residentialaddress),
          JSON.stringify({
            street: data.mailingStreet,
            city: data.mailingCity,
            state: data.mailingState,
            zip: data.mailingZip,
            country: data.mailingCountry
          }),
          data.countryOfOrigin,
          data.stateoforigin,
          data.occupation,
          data.expectedSalary,
          data.hasExistingInsurance,
          data.existingInsuranceType,
          data.healthInsuranceProvider,
          data.deductible,
          data.signatureurl,
          data.signatureConsent,
          ipAddress
        ]
      );
      
      return NextResponse.json({
        success: true,
        applicationId: result.rows[0].id
      });
      
    } finally {
      client.release();
    }
    
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
} 