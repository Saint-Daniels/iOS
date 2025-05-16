import { getClient } from '@vercel/postgres';

export async function validateApplicationSubmission(email, phone, ipAddress) {
  const client = await getClient();
  
  try {
    // Check for duplicate email
    const emailCheck = await client.query(
      'SELECT id FROM applications WHERE email = $1',
      [email]
    );
    
    if (emailCheck.rows.length > 0) {
      return {
        isValid: false,
        error: 'An application with this email address already exists.'
      };
    }
    
    // Check for duplicate phone
    const phoneCheck = await client.query(
      'SELECT id FROM applications WHERE phone = $1',
      [phone]
    );
    
    if (phoneCheck.rows.length > 0) {
      return {
        isValid: false,
        error: 'An application with this phone number already exists.'
      };
    }
    
    // Check IP-based rate limiting
    const ipCheck = await client.query(
      'SELECT id, created_at FROM applications WHERE ip_address = $1 AND created_at > NOW() - INTERVAL \'24 hours\'',
      [ipAddress]
    );
    
    if (ipCheck.rows.length > 0) {
      const lastSubmission = new Date(ipCheck.rows[0].created_at);
      const hoursRemaining = Math.ceil((24 - (Date.now() - lastSubmission.getTime()) / (1000 * 60 * 60)));
      
      return {
        isValid: false,
        error: `You have already submitted an application today. Please wait ${hoursRemaining} hours before submitting another one. If you need immediate assistance, please contact our hotline at 1-800-XXX-XXXX.`
      };
    }
    
    return { isValid: true };
  } catch (error) {
    console.error('Error validating application:', error);
    return {
      isValid: false,
      error: 'An error occurred while validating your application. Please try again later.'
    };
  } finally {
    client.release();
  }
} 