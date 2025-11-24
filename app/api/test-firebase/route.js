import { NextResponse } from 'next/server';
import { getFirestore, collection, getDocs, limit } from 'firebase/firestore';
import { getApp, initializeApp } from 'firebase/app';

// Initialize Firebase
let app;
try {
  app = getApp();
  console.log("Using existing Firebase app");
} catch (error) {
  console.log("Initializing new Firebase app");
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "saintdaniels-6144c.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "saintdaniels-6144c", 
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "saintdaniels-6144c.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "99705276201",
    appId: process.env.FIREBASE_APP_ID || process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:99705276201:web:6695bbbc70012e92071938",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-1CPD7FC0RZ"
  };
  console.log("Config:", {
    projectId: firebaseConfig.projectId,
    hasApiKey: !!firebaseConfig.apiKey,
    hasAuthDomain: !!firebaseConfig.authDomain
  });
  app = initializeApp(firebaseConfig);
}

export async function GET() {
  try {
    console.log("Testing Firebase connection...");
    const db = getFirestore(app);
    
    // Try to get collections
    const collectionsData = {};
    
    // Test leads collection
    try {
      const leadsRef = collection(db, 'leads');
      const leadsSnapshot = await getDocs(leadsRef);
      collectionsData.leads = {
        exists: !leadsSnapshot.empty,
        count: leadsSnapshot.size
      };
    } catch (error) {
      collectionsData.leads = { error: error.message };
    }
    
    // Test clients collection
    try {
      const clientsRef = collection(db, 'clients');
      const clientsSnapshot = await getDocs(clientsRef);
      collectionsData.clients = {
        exists: !clientsSnapshot.empty,
        count: clientsSnapshot.size
      };
    } catch (error) {
      collectionsData.clients = { error: error.message };
    }
    
    // Test applications collection
    try {
      const applicationsRef = collection(db, 'applications');
      const applicationsSnapshot = await getDocs(applicationsRef);
      collectionsData.applications = {
        exists: !applicationsSnapshot.empty,
        count: applicationsSnapshot.size
      };
    } catch (error) {
      collectionsData.applications = { error: error.message };
    }
    
    return NextResponse.json({
      success: true,
      message: 'Firebase connection test completed',
      environment: process.env.NODE_ENV,
      collections: collectionsData,
      config: {
        projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "Using fallback"
      }
    });
  } catch (error) {
    console.error('Firebase test error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 