import { NextResponse } from 'next/server';
import { getFirestore, collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { getApp, initializeApp } from 'firebase/app';

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
  console.log("Lead API route initializing Firebase with config for project:", firebaseConfig.projectId);
  app = initializeApp(firebaseConfig);
}

export async function POST(request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, phonenumber } = data;
    if (!firstName || !lastName || !email || !phonenumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Get marketing ID or set default
    const marketingid = data.marketingid || 'UNKNOWN';
    if (marketingid === 'UNKNOWN') {
      console.warn('Marketing ID not found in lead submission');
    }
    
    // Initialize Firestore
    const db = getFirestore(app);
    
    // Prepare lead data with all required fields for database
    const leadData = {
      firstName,
      lastName,
      email,
      phonenumber,
      agentid: data.agentid || "",
      convertedtoapplication: data.convertedtoapplication || true,
      lastcontacted: data.lastcontacted || new Date().toISOString(),
      leadid: data.leadid || "",
      leadsource: data.leadsource || "",
      linkedclientid: data.linkedclientid || "",
      marketingid,
      notes: data.notes || "",
      status: data.status || "New",
      submittedat: data.submittedat || new Date().toLocaleString('en-US'),
      timestamp: data.timestamp || new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };
    
    // Add to Firestore
    const docRef = await addDoc(collection(db, 'leads'), leadData);
    
    // Update the leadid field with the document ID if not provided
    if (!data.leadid) {
      // Update the document with its own ID
      await updateDoc(doc(db, 'leads', docRef.id), {
        leadid: docRef.id
      });
    }
    
    // Return success response with document ID
    return NextResponse.json({ 
      success: true, 
      message: 'Lead successfully submitted',
      leadId: docRef.id
    });
    
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
} 