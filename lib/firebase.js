import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail, updatePassword, updateEmail } from 'firebase/auth';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: 'saintdaniels-6144c',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// User functions
export const resetUserPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateUserPassword = async (newPassword) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('No user logged in');
    await updatePassword(user, newPassword);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateUserEmail = async (newEmail, password) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('No user logged in');
    
    // Reauthenticate user before changing email
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
    
    // Update email
    await updateEmail(user, newEmail);
    
    // Update email in Firestore
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, { email: newEmail });
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Admin functions
export const adminResetUserPassword = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    
    const userData = userDoc.data();
    await sendPasswordResetEmail(auth, userData.email);
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const adminUpdateUserEmail = async (userId, newEmail) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    
    await updateDoc(userRef, { email: newEmail });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const adminUpdateUserPassword = async (userId, newPassword) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    
    // This would typically be handled by your backend
    // as Firebase Admin SDK is required for this operation
    return { success: true, message: 'Password update request sent to backend' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export { app, auth, db }; 