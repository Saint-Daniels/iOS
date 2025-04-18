import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { app } from '../firebase';

const db = getFirestore(app);

interface ClientApplication {
  address: string;
  agentid: string;
  applications: any[];
  clientid: string;
  createdat: Date;
  dateofbirth: string;
  email: string;
  firstname: string;
  hasactivecoverage: boolean;
  lastname: string;
  middlename: string;
  namesuffix: string;
  phonenumber: string;
  ssn: string;
}

export async function submitClientApplication(application: ClientApplication): Promise<{ success: boolean; message: string }> {
  try {
    // Check for existing applications with the same email, phone, or SSN
    const clientsRef = collection(db, 'clients');
    
    // Create queries for each unique identifier
    const emailQuery = query(clientsRef, where('email', '==', application.email));
    const phoneQuery = query(clientsRef, where('phonenumber', '==', application.phonenumber));
    const ssnQuery = query(clientsRef, where('ssn', '==', application.ssn));
    
    // Execute all queries
    const [emailSnapshot, phoneSnapshot, ssnSnapshot] = await Promise.all([
      getDocs(emailQuery),
      getDocs(phoneQuery),
      getDocs(ssnQuery)
    ]);
    
    // Check if any matches were found
    if (!emailSnapshot.empty) {
      return {
        success: false,
        message: 'An application with this email address already exists.'
      };
    }
    
    if (!phoneSnapshot.empty) {
      return {
        success: false,
        message: 'An application with this phone number already exists.'
      };
    }
    
    if (!ssnSnapshot.empty) {
      return {
        success: false,
        message: 'An application with this SSN already exists.'
      };
    }
    
    // If no duplicates found, add the new application
    const docRef = await addDoc(clientsRef, {
      ...application,
      createdat: new Date() // Override with current timestamp
    });
    
    return {
      success: true,
      message: `Application submitted successfully with ID: ${docRef.id}`
    };
    
  } catch (error) {
    console.error('Error submitting application:', error);
    return {
      success: false,
      message: 'An error occurred while submitting the application. Please try again.'
    };
  }
} 