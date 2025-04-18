// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in the browser environment
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics }; 