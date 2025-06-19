import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p><strong>Effective Date:</strong> 05/06/2025</p>
          
          <h2>Our Commitment to Privacy</h2>
          <p>Just Log is built with privacy at its core. We believe your workout data should remain yours, and we&apos;ve designed our app to collect only the minimal information necessary to provide our service.</p>
          
          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <ul>
            <li><strong>Email address</strong>: Required for account creation and subscription management</li>
            <li><strong>Name</strong>: Used for personalization within the app</li>
            <li><strong>Workout data</strong>: Exercise logs, routines, and progress data you create</li>
          </ul>
          
          <h3>Information We Do NOT Collect</h3>
          <ul>
            <li>Location data</li>
            <li>Device contacts</li>
            <li>Camera or microphone access</li>
            <li>Social media information</li>
            <li>Health data from other apps</li>
            <li>Browsing history</li>
            <li>Any data from other apps on your device</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We use your information solely to:</p>
          <ul>
            <li>Provide the Just Log service</li>
            <li>Manage your account and subscription</li>
            <li>Sync your workout data across your devices</li>
            <li>Provide customer support when requested</li>
          </ul>
          
          <h2>What We Don&apos;t Do</h2>
          <ul>
            <li><strong>No notifications</strong>: We don&apos;t send push notifications, emails, or any form of marketing communications</li>
            <li><strong>No data selling</strong>: We never sell, rent, or share your personal information with third parties</li>
            <li><strong>No external tracking</strong>: We don&apos;t track your behavior outside the app</li>
            <li><strong>No marketing analytics</strong>: Analytics are used solely for app improvement</li>
            <li><strong>No personal data in analytics</strong>: Workout content and personal details aren&apos;t tracked</li>
            <li><strong>No social features</strong>: We don&apos;t share your data with social networks</li>
          </ul>
          
          <h2>Firebase Analytics Data Collection</h2>
          <p>We collect the following analytics data to improve Just Log:</p>
          <ul>
            <li>Authentication and user session data</li>
            <li>Workout completion patterns and abandonment rates</li>
            <li>Feature usage statistics (counters, settings, routines)</li>
            <li>Subscription and premium feature usage</li>
            <li>App performance and crash data</li>
            <li>User preferences (theme, units) for analytics segmentation</li>
          </ul>
          <p>This data is associated with your user account but contains no personal workout details (specific exercises, weights, or personal information).</p>
          <p><strong>Opt out of analytics data collection</strong> (contact us)</p>
          
          <h2>Data Storage and Security</h2>
          <ul>
            <li>Your data is stored securely using industry-standard encryption</li>
            <li>We use Firebase for secure cloud storage and synchronization</li>
            <li>Your workout data is only accessible by you</li>
            <li>We implement reasonable security measures to protect your information</li>
          </ul>
          
          <h2>Data Retention</h2>
          <ul>
            <li>Your data is retained for as long as your account is active</li>
            <li>When you delete your account, all associated data is permanently removed</li>
            <li>You can export your workout data at any time before account deletion</li>
          </ul>
          
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and all associated data</li>
            <li>Export your workout data</li>
            <li>Contact us with privacy concerns</li>
          </ul>
          
          <h2>Children&apos;s Privacy</h2>
          <p>Just Log is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
          
          <h2>Changes to This Policy</h2>
          <p>We may update this privacy policy occasionally. Any changes will be posted in the app and on our website. Continued use of the app after changes constitutes acceptance of the updated policy.</p>
          
          <h2>Contact Us</h2>
          <p>If you have questions about this privacy policy or your data, contact us at: rimshadpcs@gmail.com</p>
          
          <p><em>Last updated: 05/06/2025</em></p>
        </div>
      </div>
    </div>
  );
}