// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "saintdaniels-6144c.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "saintdaniels-6144c",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "saintdaniels-6144c.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "99705276201",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:99705276201:web:6695bbbc70012e92071938",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-1CPD7FC0RZ"
};

// Initialize Firebase
let app;
let analytics;
let db;

// Only initialize if API key is available
if (firebaseConfig.apiKey) {
  if (typeof window !== 'undefined') {
    // Client-side initialization
    try {
      if (!getApps().length) {
        app = initializeApp(firebaseConfig);
        analytics = getAnalytics(app);
      } else {
        app = getApp();
      }
    } catch (error) {
      console.warn('Firebase client-side initialization error:', error.message);
    }
  } else {
    // Server-side initialization
    try {
      if (!getApps().length) {
        app = initializeApp(firebaseConfig);
      } else {
        app = getApp();
      }
    } catch (error) {
      console.warn('Firebase server-side initialization error:', error.message);
    }
  }

  // Initialize Firestore
  try {
    if (app) {
      db = getFirestore(app);
    }
  } catch (error) {
    console.warn('Firestore initialization error:', error.message);
  }
} else {
  console.warn('Firebase API key not found. Please set NEXT_PUBLIC_FIREBASE_API_KEY environment variable.');
}

export { app, analytics, db }; 