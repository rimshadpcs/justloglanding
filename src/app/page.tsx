"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Why no social features?",
      answer: "Because you're here to work out, not scroll"
    },
    {
      question: "Will you add meal tracking?",
      answer: "No. Use a dedicated nutrition app"
    },
    {
      question: "Any notifications?",
      answer: "Zero. Your workout time is sacred"
    },
    {
      question: "Data export?",
      answer: "Yes, your data stays yours"
    },
    {
      question: "Can I create custom exercises?",
      answer: "Yes, with your choice of exercise type and muscle groups. Build your workout, your way."
    },
    {
      question: "Do you have training instructions?",
      answer: "No, people use YouTube anyway. We assume you know how to exercise."
    },
    {
      question: "How many exercises do you have?",
      answer: "Nearly 1000, and we're adding constantly based on user requests."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-black font-['Vaground']">
      {/* Navigation - Simple */}
      <nav className="border-b border-gray-200 px-6 py-4 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/justloglogo.png" alt="Just Log Logo" className="w-8 h-8" />
            <div className="text-xl font-semibold text-black">Just Log</div>
          </div>
          <button 
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rimapps.justlog', '_blank')}
            className="border-2 border-[#D97757] bg-[#D97757] text-white px-4 py-2 rounded hover:bg-[#c56647] transition-colors flex items-center gap-2"
          >
            <img src="/images/playstore.png" alt="Play Store" className="w-5 h-5" />
            Download
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-black">
              Just Log.<br />
              <span className="text-[#D97757]">No Fluff.</span>
            </h1>
            <h2 className="text-xl text-gray-700 mb-6">
              The minimalist workout tracker that gets out of your way
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              While other apps add social feeds and meal planning, Just Log focuses on one thing: efficient workout logging. 
              <span className="text-[#D97757] font-semibold"> £1.79/month vs £9.99 competitors.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rimapps.justlog', '_blank')}
                className="border-2 border-[#D97757] bg-[#D97757] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#c56647] transition-colors flex items-center justify-center gap-2"
              >
                <img src="/images/playstore.png" alt="Play Store" className="w-6 h-6" />
                Download for Android
              </button>
              <button className="border-2 border-[#D97757] bg-white text-[#D97757] px-8 py-3 rounded-lg text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <img src="/images/apple.png" alt="App Store" className="w-6 h-6" />
                iOS Coming Soon
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/gymlogauthpage.png" 
              alt="Just Log Auth Page"
              className="w-80 h-auto rounded-xl shadow-2xl border border-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Problems - Left Side */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-black">Tired of Fighting Your Fitness App?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <img src="/images/cross.png" alt="Cross" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">£9.99/month for features you never use</p>
                </div>
                <div className="flex items-start">
                  <img src="/images/cross.png" alt="Cross" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Social feeds cluttering your workout screen</p>
                </div>
                <div className="flex items-start">
                  <img src="/images/cross.png" alt="Cross" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Constant notifications during dinner</p>
                </div>
                <div className="flex items-start">
                  <img src="/images/cross.png" alt="Cross" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Complex interfaces that slow you down</p>
                </div>
                <div className="flex items-start">
                  <img src="/images/cross.png" alt="Cross" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">AI coaches stating the obvious</p>
                </div>
                <div className="flex items-start">
                  <img src="/images/cross.png" alt="Cross" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Scrolling through endless screens to find your routine</p>
                </div>
                <div className="flex items-start">
                  <img src="/images/cross.png" alt="Cross" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Loads of screens, clicks, and confusing navigation</p>
                </div>
              </div>
            </div>

            {/* Solutions - Right Side */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#D97757]">An app that just logs workouts</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <img src="/images/tick.png" alt="Tick" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">~1111 exercises with smart search</span>
                </div>
                <div className="flex items-start">
                  <img src="/images/tick.png" alt="Tick" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">Custom routines and PR tracking</span>
                </div>
                <div className="flex items-start">
                  <img src="/images/tick.png" alt="Tick" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">Time, weight, and distance logging</span>
                </div>
                <div className="flex items-start">
                  <img src="/images/tick.png" alt="Tick" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">Custom workout counters</span>
                </div>
                <div className="flex items-start">
                  <img src="/images/tick.png" alt="Tick" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">Color-coded workout calendar</span>
                </div>
                <div className="flex items-start">
                  <img src="/images/tick.png" alt="Tick" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">No notifications, ever</span>
                </div>
                <div className="flex items-start">
                  <img src="/images/tick.png" alt="Tick" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">No unnecessary data collection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-6 py-16 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-black">See it in <span className="text-[#D97757]">action</span></h2>
          </div>
          
          {/* Features Screenshots - Proper Styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            <div className="text-center">
              <h3 className="font-semibold text-black mb-4">Home Screen</h3>
              <img 
                src="/images/1.png" 
                alt="Home Screen"
                className="w-48 h-96 rounded-2xl shadow-lg"
              />
              <p className="text-xs text-gray-600 mt-4">Color coded weekly calendar history, Quick Actions, Clean design</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-black mb-4">Workout Logging</h3>
              <img 
                src="/images/2.png" 
                alt="Workout Logging"
                className="w-48 h-96 rounded-2xl shadow-lg"
              />
              <p className="text-xs text-gray-600 mt-4">Sets, reps, weight entry, PR tracking</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-black mb-4">Smart Search</h3>
              <img 
                src="/images/3.png" 
                alt="Smart Search"
                className="w-48 h-96 rounded-2xl shadow-lg"
              />
              <p className="text-xs text-gray-600 mt-4">Finds bench press even if you type benchpress or bench-press</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-black mb-4">Custom Counters</h3>
              <img 
                src="/images/4.png" 
                alt="Custom Counters"
                className="w-48 h-96 rounded-2xl shadow-lg"
              />
              <p className="text-xs text-gray-600 mt-4">Daily tracking, Weekly/monthly totals</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-black mb-4">History/Progress</h3>
              <img 
                src="/images/5.png" 
                alt="History Progress"
                className="w-48 h-96 rounded-2xl shadow-lg"
              />
              <p className="text-xs text-gray-600 mt-4"> Color-coded calendar and past workouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">What <span className="text-[#D97757]">Beta Users</span> Say</h2>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              <blockquote className="bg-[#FAF9F5] p-8 rounded-lg shadow-sm min-w-72 max-w-72 h-48 flex flex-col justify-between flex-shrink-0 border border-gray-200">
                <p className="text-lg italic mb-4 text-gray-800">"Finally, an app that doesn't buzz me during meetings"</p>
                <cite className="text-[#D97757] font-medium">- Sarah, Beta User</cite>
              </blockquote>
              <blockquote className="bg-[#FAF9F5] p-8 rounded-lg shadow-sm min-w-72 max-w-72 h-48 flex flex-col justify-between flex-shrink-0 border border-gray-200">
                <p className="text-lg italic mb-4 text-gray-800">"It's so simple I thought it was broken. Then I realized that's the point."</p>
                <cite className="text-[#D97757] font-medium">- Mike, Powerlifter</cite>
              </blockquote>
              <blockquote className="bg-[#FAF9F5] p-8 rounded-lg shadow-sm min-w-72 max-w-72 h-48 flex flex-col justify-between flex-shrink-0 border border-gray-200">
                <p className="text-lg italic mb-4 text-gray-800">"This is what fitness apps should have been from the start"</p>
                <cite className="text-[#D97757] font-medium">- Alex, Personal Trainer</cite>
              </blockquote>
              <blockquote className="bg-[#FAF9F5] p-8 rounded-lg shadow-sm min-w-72 max-w-72 h-48 flex flex-col justify-between flex-shrink-0 border border-gray-200">
                <p className="text-lg italic mb-4 text-gray-800">"I can log my entire workout in under 2 minutes"</p>
                <cite className="text-[#D97757] font-medium">- Jamie, Busy Parent</cite>
              </blockquote>
              <blockquote className="bg-[#FAF9F5] p-8 rounded-lg shadow-sm min-w-72 max-w-72 h-48 flex flex-col justify-between flex-shrink-0 border border-gray-200">
                <p className="text-lg italic mb-4 text-gray-800">"Finally, an app that doesn't buzz me during meetings"</p>
                <cite className="text-[#D97757] font-medium">- Sarah, Beta User</cite>
              </blockquote>
              <blockquote className="bg-[#FAF9F5] p-8 rounded-lg shadow-sm min-w-72 max-w-72 h-48 flex flex-col justify-between flex-shrink-0 border border-gray-200">
                <p className="text-lg italic mb-4 text-gray-800">"It's so simple I thought it was broken. Then I realized that's the point."</p>
                <cite className="text-[#D97757] font-medium">- Mike, Powerlifter</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="px-6 py-16 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">As <span className="text-[#D97757]">Featured In</span></h2>
          <p className="text-2xl mb-4 text-gray-700">Nowhere yet 😅</p>
          <p className="text-lg text-gray-600 mb-12">We're pre-launch, but we're confident we'll be featured in:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* TechCrunch */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <img src="/images/techcrunch.png" alt="TechCrunch" className="w-16 h-8 object-contain" />
              </div>
              <p className="text-sm text-gray-600 font-medium">TechCrunch<br/>(hopefully)</p>
            </div>

            {/* Product Hunt */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <img src="/images/producthunt.jpg" alt="Product Hunt" className="w-16 h-16 object-contain" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Product Hunt<br/>(definitely submitting)</p>
            </div>

            {/* Fitness Blog */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <img src="/images/youtube.png" alt="Fitness Blog" className="w-12 h-12 object-contain" />
              </div>
              <p className="text-sm text-gray-600 font-medium">That fitness channel<br/>your mate watch</p>
            </div>

            {/* Group Chat */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <img src="/images/whatsapp.png" alt="Group Chat" className="w-12 h-12 object-contain" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Your group chat<br/>when you recommend us</p>
            </div>

            {/* Your Phone */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <img src="/images/smartphone.png" alt="Your Phone" className="w-8 h-12 object-contain text-[#D97757]" />
              </div>
              <p className="text-sm text-[#D97757] font-semibold">Your Phone<br/>Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Simple Pricing for <span className="text-[#D97757]">Simple Apps</span></h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="p-6 border-2 border-[#D97757] rounded-lg bg-white shadow-lg max-w-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#D97757]">Just Log</h3>
              <div className="text-3xl font-bold mb-2 text-black">£1.79<span className="text-lg">/month</span></div>
              <div className="text-gray-600 mb-4">or £17.99/year</div>
              <div className="text-sm text-gray-700">
                <div>• All features included</div>
                <div>• Unlimited custom counters</div>
                <div>• Cancel anytime</div>
              </div>
            </div>

            <div className="p-6 border-2 border-gray-300 rounded-lg bg-gray-50 opacity-75 max-w-sm">
              <h3 className="text-2xl font-bold mb-3 text-gray-600">Competitors</h3>
              <div className="text-3xl font-bold mb-2 text-gray-600">£9.99<span className="text-lg">/month</span></div>
              <div className="text-gray-500 mb-4">(£120/year)</div>
              <div className="text-sm text-gray-600">
                <div>• Bloated features</div>
                <div>• Social feeds</div>
                <div>• Constant notifications</div>
              </div>
            </div>

            <div className="p-6 bg-[#D97757] border-2 border-[#D97757] rounded-lg shadow-lg max-w-sm text-white">
              <h3 className="text-2xl font-bold mb-3">You Save</h3>
              <div className="text-3xl font-bold mb-2">£102<span className="text-lg">/year</span></div>
              <div className="text-orange-100 mb-4">vs competitors</div>
              <div className="text-sm text-orange-100">
                <div>• 85% cheaper</div>
                <div>• No feature bloat</div>
                <div>• Your data stays yours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Common <span className="text-[#D97757]">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#FAF9F5] rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-black">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 text-[#D97757] ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedFaq === index 
                      ? 'max-h-32 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to <span className="text-[#D97757]">simplify</span> your workouts?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands who've ditched the bloated fitness apps</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rimapps.justlog', '_blank')}
              className="border-2 border-[#D97757] bg-[#D97757] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#c56647] transition-colors flex items-center justify-center gap-2"
            >
              <img src="/images/playstore.png" alt="Play Store" className="w-6 h-6" />
              Download for Android
            </button>
            <button className="border-2 border-[#D97757] bg-white text-[#D97757] px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <img src="/images/apple.png" alt="App Store" className="w-6 h-6" />
              iOS Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-[#FAF9F5] border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/justloglogo.png" alt="Just Log Logo" className="w-6 h-6" />
                <div className="text-xl font-semibold text-black">Just Log</div>
              </div>
              <p className="text-gray-600">The anti-thesis of complicated fitness apps</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Legal</h4>
              <div className="space-y-2 text-gray-600">
                <Link 
                  href="/privacy"
                  className="block hover:text-[#D97757] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms"
                  className="block hover:text-[#D97757] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
              <button 
                  onClick={() => window.open('https://waitlister.me/p/justlog', '_blank')}
                  className="border-2 border-[#D97757] bg-white text-[#D97757] px-6 py-2 rounded hover:bg-gray-50 transition-colors w-full"
                >
                  Join Waitlist
                </button>
               
               
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Contact</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://tally.so/r/wzoGEE', '_blank')}
                  className="border-2 border-[#D97757] bg-white text-[#D97757] px-6 py-2 rounded hover:bg-gray-50 transition-colors w-full"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => window.open('https://tally.so/r/w4y9ao', '_blank')}
                  className="border-2 border-[#D97757] bg-[#D97757] text-white px-6 py-2 rounded hover:bg-[#c56647] transition-colors w-full"
                >
                  Send Feedback
                </button>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <button 
                    onClick={() => window.open('https://instagram.com/justlogapp', '_blank')}
                    className="flex items-center gap-2 hover:text-[#D97757] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                    </svg>
                    @justlogapp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}