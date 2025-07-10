import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-black font-['Vaground']">
      {/* Navigation */}
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/justloglogo.png" alt="Just Log Logo" width={32} height={32} />
            <div className="text-xl font-semibold">Just Log</div>
          </Link>
          <Link
            href="/"
            className="border-2 border-black bg-white text-black px-4 py-2 rounded hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p><strong>Effective Date:</strong> 05/06/2025</p>
          
          <h2>Agreement to Terms</h2>
          <p>By using Just Log, you agree to these Terms of Service. If you don&apos;t agree, please don&apos;t use our app.</p>
          
          <h2>Description of Service</h2>
          <p>Just Log is a minimalist workout logging application that helps users track their exercise routines, progress, and fitness data. The service is provided on a subscription basis.</p>
          
          <h2>Account Registration</h2>
          <ul>
            <li>You must provide a valid email address and name</li>
            <li>You&apos;re responsible for maintaining the security of your account</li>
            <li>You must be at least 13 years old to use Just Log</li>
            <li>One account per person</li>
          </ul>
          
          <h2>Subscription and Payment</h2>
          <ul>
            <li>Just Log operates on a subscription model ($1.99/month or $19.99/year)</li>
            <li>Subscriptions automatically renew unless cancelled</li>
            <li>You can cancel your subscription at any time through your device&apos;s app store</li>
            <li>Refunds are handled according to the app store&apos;s refund policy</li>
            <li>Price changes will be communicated in advance</li>
          </ul>
          
          <h2>Acceptable Use</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use Just Log only for personal, non-commercial purposes</li>
            <li>Provide accurate information</li>
            <li>Not attempt to hack, reverse engineer, or compromise the app</li>
            <li>Not create multiple accounts to circumvent limitations</li>
            <li>Not use the app for any illegal purposes</li>
          </ul>
          
          <h2>Your Content and Data</h2>
          <ul>
            <li>You retain ownership of all workout data you create</li>
            <li>You&apos;re responsible for backing up important data</li>
            <li>You can export your data at any time</li>
            <li>When you delete your account, all data is permanently removed</li>
          </ul>
          
          <h2>Service Availability</h2>
          <ul>
            <li>We strive for 99% uptime but can&apos;t guarantee uninterrupted service</li>
            <li>We may temporarily suspend service for maintenance</li>
            <li>We&apos;re not liable for data loss due to service interruptions</li>
            <li>You should regularly export important data</li>
          </ul>
          
          <h2>Limitations of Liability</h2>
          <p>Just Log is provided &quot;as is&quot; without warranties. We&apos;re not liable for:</p>
          <ul>
            <li>Any data loss or corruption</li>
            <li>Interruptions to the service</li>
            <li>Any indirect or consequential damages</li>
            <li>Use of the app for medical or health decisions</li>
          </ul>
          
          <h2>Health and Safety Disclaimer</h2>
          <ul>
            <li>Just Log is for tracking purposes only, not medical advice</li>
            <li>Consult healthcare professionals before starting exercise programs</li>
            <li>We&apos;re not responsible for injuries related to your workouts</li>
            <li>The app doesn&apos;t provide fitness or medical guidance</li>
          </ul>
          
          <h2>Intellectual Property</h2>
          <ul>
            <li>Just Log and its features are owned by us</li>
            <li>You can&apos;t copy, modify, or distribute our app</li>
            <li>You grant us permission to store and sync your workout data</li>
            <li>We don&apos;t claim ownership of your personal workout data</li>
          </ul>
          
          <h2>Privacy</h2>
          <p>Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>, which explains how we handle your information.</p>
          
          <h2>Termination</h2>
          <ul>
            <li>You can delete your account at any time</li>
            <li>We may terminate accounts that violate these terms</li>
            <li>Upon termination, your data will be deleted</li>
            <li>These terms survive account termination where applicable</li>
          </ul>
          
          <h2>Changes to Terms</h2>
          <ul>
            <li>We may update these terms occasionally</li>
            <li>Changes will be posted in the app</li>
            <li>Continued use after changes means you accept the updated terms</li>
          </ul>
          
          <h2>Governing Law</h2>
          <p>These terms are governed by applicable law, without regard to conflict of law principles.</p>
          
          <h2>Contact Information</h2>
          <p>Questions about these terms? Contact us at: rimshadpcs@gmail.com</p>
          
          <h2>Entire Agreement</h2>
          <p>These Terms of Service, along with our Privacy Policy, constitute the entire agreement between you and Just Log.</p>
          
          <p><em>Last updated: 05/06/2025</em></p>
        </div>
      </div>
    </div>
  );
}