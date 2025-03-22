import { Inter, Crimson_Text } from 'next/font/google';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Saint Daniels Healthcare Rewards',
  description: 'Empowering healthcare professionals with exclusive rewards and benefits. Join Saint Daniels Healthcare Rewards for premium healthcare career opportunities and financial solutions.',
  keywords: 'healthcare rewards, medical professionals, healthcare benefits, medical career opportunities, Saint Daniels Healthcare',
  openGraph: {
    title: 'Saint Daniels Healthcare Rewards',
    description: 'Empowering healthcare professionals with exclusive rewards and benefits.',
    url: 'https://saintdanielshealthcare.com',
    siteName: 'Saint Daniels Healthcare Rewards',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={crimsonText.className}>
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
} 