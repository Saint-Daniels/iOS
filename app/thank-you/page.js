'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const ThankYou = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000); // Redirect to home after 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

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
                Thank You for Your Application!
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Your health insurance application has been successfully submitted.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-gray-600">
                We will review your application and contact you within 1-2 business days to discuss your coverage options.
              </p>
              <p className="text-sm text-gray-500">
                You will be redirected to the home page in a few seconds...
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ThankYou; 