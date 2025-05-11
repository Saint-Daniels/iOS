'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import PageTransition from '../../components/PageTransition';
import { getClientData } from '../utils/clientUtils';

const ThankYou = () => {
  const router = useRouter();
  const [clientData, setClientData] = useState({
    applicationId: null,
    clientId: null,
    timestamp: null
  });

  useEffect(() => {
    // Get client data using the utility function
    const data = getClientData();
    setClientData(data);
  }, []);

  // Format timestamp for display if available
  const formattedDate = clientData.timestamp 
    ? new Date(clientData.timestamp).toLocaleString() 
    : null;

  return (
    <PageTransition>
      <div className="page-content">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div className="flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <FaCheckCircle className="text-green-500 text-6xl" />
              </div>
            </div>
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Welcome to Our Family!
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Your health insurance application has been successfully submitted and your client account has been created.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800">Next Steps:</h3>
                <ul className="text-left text-sm text-gray-700 mt-2 space-y-2">
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Our team will review your application within 1-2 business days</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>You'll receive a confirmation email with your application details</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>A representative will contact you to discuss your coverage options</span>
                  </li>
                </ul>
              </div>
              
              {(clientData.applicationId || clientData.clientId) && (
                <div className="text-sm text-gray-600 text-left p-3 bg-gray-50 rounded-md">
                  <p className="font-medium">Your information:</p>
                  {clientData.applicationId && (
                    <p className="text-xs mt-1">Application ID: {clientData.applicationId}</p>
                  )}
                  {clientData.clientId && (
                    <p className="text-xs">Client ID: {clientData.clientId}</p>
                  )}
                  {formattedDate && (
                    <p className="text-xs mt-1">Submitted: {formattedDate}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ThankYou; 