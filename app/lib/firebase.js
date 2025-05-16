// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr7bC7uZCSllzpz0QF6DVnylrLprwYd84",
  authDomain: "saintdaniels-6144c.firebaseapp.com",
  projectId: "saintdaniels-6144c",
  storageBucket: "saintdaniels-6144c.firebasestorage.app",
  messagingSenderId: "99705276201",
  appId: "1:99705276201:web:6695bbbc70012e92071938",
  measurementId: "G-1CPD7FC0RZ"
};

// Initialize Firebase
let app;
let analytics;
let db;

if (typeof window !== 'undefined') {
  // Client-side initialization
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  } else {
    app = getApp();
  }
} else {
  // Server-side initialization
  if (!getApps().length) {
    app = initializeApp(firebaseConfig, 'server-app');
  } else {
    app = getApp('server-app');
  }
}

// Initialize Firestore
db = getFirestore(app);

export { app, analytics, db }; 