import { getFirestore, collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { getApp, initializeApp } from 'firebase/app';
import { db } from '@/app/lib/firebase';

// Initialize Firebase
let app;
try {
  app = getApp('server-app');
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
  console.log("Validation utility initializing Firebase with config for project:", firebaseConfig.projectId);
  app = initializeApp(firebaseConfig, 'server-app');
}

export async function validateApplicationSubmission(email, phone, ipAddress) {
  try {
    console.log('Starting application validation');
    
    // Check for duplicate email
    const emailQuery = query(
      collection(db, 'applications'),
      where('email', '==', email)
    );
    
    const emailSnapshot = await getDocs(emailQuery);
    if (!emailSnapshot.empty) {
      console.log('Duplicate email found');
      return {
        isValid: false,
        error: 'An application with this email address already exists. Please use a different email address or contact support if you believe this is an error.'
      };
    }
    
    // Check for duplicate phone
    const phoneQuery = query(
      collection(db, 'applications'),
      where('phone', '==', phone)
    );
    
    const phoneSnapshot = await getDocs(phoneQuery);
    if (!phoneSnapshot.empty) {
      console.log('Duplicate phone found');
      return {
        isValid: false,
        error: 'An application with this phone number already exists. Please use a different phone number or contact support if you believe this is an error.'
      };
    }
    
    // IP-based rate limiting (temporarily disabled until index is created)
    // const ipQuery = query(
    //   collection(db, 'applications'),
    //   where('ipAddress', '==', ipAddress),
    //   where('createdAt', '>', Timestamp.fromDate(new Date(Date.now() - 24 * 60 * 60 * 1000)))
    // );
    // const ipSnapshot = await getDocs(ipQuery);
    // if (!ipSnapshot.empty) {
    //   return {
    //     isValid: false,
    //     error: 'You have already submitted an application in the last 24 hours. Please try again later.'
    //   };
    // }
    
    console.log('Validation passed');
    return { isValid: true };
    
  } catch (error) {
    console.error('Error validating application:', error);
    return {
      isValid: false,
      error: 'An error occurred while validating your application. Please try again later.'
    };
  }
} 