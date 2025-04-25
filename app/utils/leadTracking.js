import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getApp } from 'firebase/app';

/**
 * Extracts the marketingID from URL query parameters
 * @returns {string|null} The marketing ID or null if not found
 */
export const extractMarketingID = () => {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  const marketingID = urlParams.get('marketingID');
  
  if (!marketingID) {
    console.warn('Marketing ID not found in URL parameters');
    return 'UNKNOWN';
  }
  
  return marketingID;
};

/**
 * Submits lead data to Firestore including the marketing ID
 * @param {Object} leadData - The lead data to submit
 * @param {string} leadData.firstName - First name of the lead
 * @param {string} leadData.lastName - Last name of the lead
 * @param {string} leadData.email - Email of the lead
 * @param {string} leadData.phone - Phone number of the lead
 * @returns {Promise<string>} Document ID of the new lead
 */
export const submitLeadToFirestore = async (leadData) => {
  try {
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    
    // Get marketing ID from URL or use default
    const marketingID = extractMarketingID();
    
    // Prepare the lead data with marketing ID and timestamp
    const leadWithTracking = {
      ...leadData,
      marketingID,
      timestamp: serverTimestamp()
    };
    
    // Add the document to the leads collection
    const docRef = await addDoc(collection(db, 'leads'), leadWithTracking);
    
    console.log('Lead successfully submitted with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting lead data:', error);
    throw error;
  }
}; 