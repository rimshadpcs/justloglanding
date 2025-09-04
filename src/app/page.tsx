"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const testimonials = [
    "Amazing UI design and colors. Really clean and easy on the eyes",
    "Love that weekly calendar part. So easy to see my past and next routines. Very efficient",
    "Very clever concept with PR tracking. Other apps don't show your best specific set. Motivates me to beat it every time",
    "Accidentally closed the app but my workout progress was saved. Great!",
    "So easy to add custom exercises. Exactly what I needed",
    "Always had issues searching exercises in other apps. Worried about missing spaces or hyphens, but this search actually works"
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const faqs = [
    {
      question: "Why no social features?",
      answer: "Because you are here to work out, not scroll"
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
      answer: "Nearly 1000, and we are adding constantly based on user requests."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-black font-['Vaground']">
      {/* Navigation - Simple */}
      <nav className="border-b border-gray-200 px-6 py-4 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/images/justloglogo.png" alt="Just Log Logo" width={32} height={32} />
            <div className="text-xl font-semibold text-black">Just Log</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.uneed.best/tool/justlog-workout" target="_blank">
              <img src="https://www.uneed.best/POTD2A.png" style={{width: '200px'}} alt="Uneed POTD2 Badge" />
            </a>
            <a href="https://www.producthunt.com/products/just-log?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-just&#0045;log&#0045;2" target="_blank">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1010137&theme=dark&period=daily&t=1756632660193" alt="Just&#0032;Log - No&#0032;fluff&#0032;workout&#0032;tracker | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <div className="flex mb-2">
              <div className="ml-[7ch]">
                <Image 
                  src="/images/download.png" 
                  alt="4.8 stars, 5000+ downloads in App Store" 
                  width={100} 
                  height={50}
                  className="animate-fadeInUp"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-black">
              Just Log.<br />
              <span className="text-[#c81d25]">No Fluff.</span>
            </h1>
            <h2 className="text-xl text-gray-700 mb-6">
              The workout tracker that gets out of your way.
            </h2>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            🏋️ Log it fast. See your progress. Stay consistent.<br/>
            Track it → Beat it → Get stronger 💪
                        </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rimapps.justlog', '_blank')}
                className="border-2 border-[#c81d25] bg-[#c81d25] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#d80032] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <Image src="/images/playstore.png" alt="Play Store" width={24} height={24} />
                Download for Android
              </button>
              <button 
                onClick={() => window.open('https://apps.apple.com/us/app/workout-tracking-justlog/id6749898793', '_blank')}
                className="border-2 border-[#c81d25] bg-white text-[#c81d25] px-8 py-3 rounded-lg text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <Image src="/images/apple.png" alt="App Store" width={24} height={24} />
                Download for iOS
              </button>
            </div>
          </div>
          <div className="flex justify-center animate-slideInRight">
            <Image 
              src="/images/gymlogauthpage.png" 
              alt="Just Log Auth Page"
              width={320}
              height={640}
              className="rounded-xl shadow-2xl border border-gray-300 animate-float"
            />
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Problems - Left Side */}
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-8 text-black">Tired of Fighting Your Fitness App?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Image src="/images/cross.png" alt="Cross" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">$9.99/month for features you never use</p>
                </div>
                <div className="flex items-start">
                  <Image src="/images/cross.png" alt="Cross" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Social feeds cluttering your workout screen</p>
                </div>
                <div className="flex items-start">
                  <Image src="/images/cross.png" alt="Cross" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Constant notifications during dinner</p>
                </div>
                <div className="flex items-start">
                  <Image src="/images/cross.png" alt="Cross" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Complex interfaces that slow you down</p>
                </div>
                <div className="flex items-start">
                  <Image src="/images/cross.png" alt="Cross" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">AI coaches stating the obvious</p>
                </div>
                <div className="flex items-start">
                  <Image src="/images/cross.png" alt="Cross" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Scrolling through endless screens to find your routine</p>
                </div>
                <div className="flex items-start">
                  <Image src="/images/cross.png" alt="Cross" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Loads of screens, clicks, and confusing navigation</p>
                </div>
              </div>
            </div>

            {/* Solutions - Right Side */}
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold mb-8 text-[#c81d25]">An app that just logs workouts</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Image src="/images/tick.png" alt="Tick" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">~1111 exercises with smart search</span>
                </div>
                <div className="flex items-start">
                  <Image src="/images/tick.png" alt="Tick" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">Custom routines and PR tracking</span>
                </div>
                <div className="flex items-start">
                  <Image src="/images/tick.png" alt="Tick" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">Time, weight, and distance logging</span>
                </div>
                <div className="flex items-start">
                  <Image src="/images/tick.png" alt="Tick" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">Custom workout counters</span>
                </div>
                <div className="flex items-start">
                  <Image src="/images/tick.png" alt="Tick" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">Color-coded workout calendar</span>
                </div>
                <div className="flex items-start">
                  <Image src="/images/tick.png" alt="Tick" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">No notifications, ever</span>
                </div>
                <div className="flex items-start">
                  <Image src="/images/tick.png" alt="Tick" width={24} height={24} className="mr-3 mt-1 flex-shrink-0" />
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
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-8 text-black">See it in <span className="text-[#c81d25]">action</span></h2>
          </div>
          
          {/* Features Screenshots - Proper Styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            <div className="text-center animate-fadeInUp">
              <h3 className="font-semibold text-black mb-4">Home Screen</h3>
              <Image 
                src="/images/1.png" 
                alt="Home Screen"
                width={192}
                height={384}
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="text-xs text-gray-600 mt-4">Color coded weekly calendar history, Quick Actions, Clean design</p>
            </div>
            <div className="text-center animate-fadeInUp animate-delay-200">
              <h3 className="font-semibold text-black mb-4">Workout Logging</h3>
              <Image 
                src="/images/2.png" 
                alt="Workout Logging"
                width={192}
                height={384}
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="text-xs text-gray-600 mt-4">Sets, reps, weight entry, PR tracking</p>
            </div>
            <div className="text-center animate-fadeInUp animate-delay-400">
              <h3 className="font-semibold text-black mb-4">Smart Search</h3>
              <Image 
                src="/images/3.png" 
                alt="Smart Search"
                width={192}
                height={384}
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="text-xs text-gray-600 mt-4">Finds bench press even if you type benchpress or bench-press</p>
            </div>
            <div className="text-center animate-fadeInUp animate-delay-600">
              <h3 className="font-semibold text-black mb-4">Custom Counters</h3>
              <Image 
                src="/images/4.png" 
                alt="Custom Counters"
                width={192}
                height={384}
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="text-xs text-gray-600 mt-4">Daily tracking, Weekly/monthly totals</p>
            </div>
            <div className="text-center animate-fadeInUp animate-delay-800">
              <h3 className="font-semibold text-black mb-4">History/Progress</h3>
              <Image 
                src="/images/5.png" 
                alt="History Progress"
                width={192}
                height={384}
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="text-xs text-gray-600 mt-4"> Color-coded calendar and past workouts</p>
            </div>
          </div>
        </div>
      </section>
{/* Why Users Stick Section */}
<section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-8 text-black">Why Users Actually <span className="text-[#c81d25]">Stick</span> With Just Log</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Image 
                src="/images/stick1.png" 
                alt="No overwhelming features"
                width={120}
                height={120}
                className="mx-auto mb-8"
              />
              <p className="text-xl font-semibold text-gray-800">No overwhelming features to ignore</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Image 
                src="/images/stick2.png" 
                alt="Workouts logged in seconds"
                width={120}
                height={120}
                className="mx-auto mb-8"
              />
              <p className="text-xl font-semibold text-gray-800">Workouts logged in seconds</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Image 
                src="/images/stick3.png" 
                alt="See what you did, choose what's next"
                width={120}
                height={120}
                className="mx-auto mb-8"
              />
<p className="text-xl font-semibold text-gray-800">See what you did, choose what&apos;s next quickly - that simple</p>            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Image 
                src="/images/stick4.png" 
                alt="Zero notifications means zero guilt"
                width={120}
                height={120}
                className="mx-auto mb-8"
              />
              <p className="text-xl font-semibold text-gray-800">Zero notifications means zero guilt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">What <span className="text-[#c81d25]">Early Users</span> Say</h2>
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-[#c81d25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Infinite Testimonials Carousel */}
            <div className="overflow-hidden w-full max-w-5xl mx-auto">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(calc(50% - ${(testimonialIndex + testimonials.length) * 320}px - 160px))`
                }}
              >
                {/* Triple the testimonials for infinite effect */}
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, globalIndex) => {
                  const centerIndex = testimonialIndex + testimonials.length;
                  const isCenter = globalIndex === centerIndex;
                  const isAdjacent = Math.abs(globalIndex - centerIndex) === 1;
                  
                  return (
                    <blockquote 
                      key={globalIndex}
                      className={`flex-shrink-0 w-72 h-48 flex flex-col justify-center rounded-lg transition-all duration-500 ease-in-out ${
                        isCenter 
                          ? 'bg-[#FAF9F5] transform scale-110 shadow-lg z-10 p-8' 
                          : isAdjacent 
                            ? 'bg-[#FAF9F5] border border-gray-200 opacity-60 transform scale-90 p-6 shadow-sm'
                            : 'bg-[#FAF9F5] border border-gray-200 opacity-20 transform scale-75 p-6'
                      }`}
                    >
                      <p className={`italic text-gray-800 text-center transition-all duration-500 ${
                        isCenter ? 'text-lg font-semibold' : 'text-sm'
                      }`}>
                        &quot;{testimonial}&quot;
                      </p>
                    </blockquote>
                  );
                })}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-[#c81d25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* Featured In Section */}
      <section className="px-6 py-16 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">As <span className="text-[#c81d25]">Featured In</span></h2>
          <p className="text-lg text-gray-600 mb-12">We&apos;re proud to be getting featured in:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* Product Hunt */}
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm p-2">
                <a href="https://www.producthunt.com/products/just-log?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-just&#0045;log&#0045;2" target="_blank">
                  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1010137&theme=light&t=1756634766125" alt="Just&#0032;Log - No&#0032;fluff&#0032;workout&#0032;tracker | Product Hunt" style={{width: '120px', height: '26px'}} width="120" height="26" />
                </a>
              </div>
              <p className="text-sm text-gray-600 font-medium">Product Hunt<br/>(Featured!)</p>
            </div>

            {/* Uneed */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm p-2">
                <a href="https://www.uneed.best/tool/justlog-workout" className="w-full h-full">
                  <Image src="/images/og.png" alt="Uneed" width={80} height={80} className="object-contain w-full h-full" />
                </a>
              </div>
              <p className="text-sm text-gray-600 font-medium">Uneed<br/>(we won yay)</p>
            </div>

            {/* IndieHackers */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <Image src="/images/indiehackers.jpg" alt="IndieHackers" width={64} height={64} className="object-contain" />
              </div>
              <p className="text-sm text-gray-600 font-medium">IndieHackers<br/>(indie vibes)</p>
            </div>

            {/* HackerNews */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <Image src="/images/hackernews.png" alt="HackerNews" width={64} height={64} className="object-contain" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Hacker News<br/>(featured on show section)</p>
            </div>

            {/* TechCrunch */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <Image src="/images/techcrunch.png" alt="TechCrunch" width={64} height={32} className="object-contain" />
              </div>
              <p className="text-sm text-gray-600 font-medium">TechCrunch<br/>(hopefully oneday)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Evolution Graph Section */}
      <section className="px-6 py-16 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">How Fitness Apps Got <span className="text-[#c81d25]">Bloated</span></h2>
          <p className="text-xl text-center mb-6 text-gray-700">While others added social feeds, AI coaches, and clutter, we kept workouts simple</p>
          <p className="text-lg text-center mb-12 text-gray-600">Every year apps get more complex. We chose to go the opposite direction.</p>
          
          {/* Graph Container */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
            <div className="relative h-96">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-600">
                <span>Bloated</span>
                <span>Complex</span>
                <span>Features+</span>
                <span>Growing</span>
                <span>Adding</span>
                <span>Basic</span>
                <span>Simple</span>
              </div>
              
              {/* Graph area */}
              <div className="ml-12 mr-4 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0">
                  <div className="h-full flex flex-col justify-between">
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-300"></div>
                  </div>
                </div>
                
                {/* Line graph */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  {/* Main trend line */}
                  <polyline
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="3"
                    points="20,225 120,150 220,112.5 320,62.5"
                  />
                  
                  {/* Just Log point */}
                  <circle cx="380" cy="258" r="8" fill="#c81d25" stroke="white" strokeWidth="3"/>                  
                  {/* Data points */}
                  <circle cx="20" cy="225" r="6" fill="#6b7280"/>
                  <circle cx="120" cy="150" r="6" fill="#6b7280"/>
                  <circle cx="220" cy="112.5" r="6" fill="#6b7280"/>
                  <circle cx="320" cy="62.5" r="6" fill="#6b7280"/>
                </svg>
                
                {/* Data point labels */}
                <div className="absolute" style={{left: '5%', bottom: '25%'}}>
                  <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-sm text-center">
                    <div className="font-bold text-gray-800">Simple</div>
                    <div className="text-xs text-gray-600">Basic logging</div>
                  </div>
                </div>
                
                <div className="absolute" style={{left: '30%', bottom: '50%'}}>
                  <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-sm text-center">
                    <div className="font-bold text-gray-800">+ Social</div>
                    <div className="text-xs text-gray-600">Feeds & sharing</div>
                  </div>
                </div>
                
                <div className="absolute" style={{left: '55%', bottom: '62.5%'}}>
                  <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-sm text-center">
                    <div className="font-bold text-gray-800">+ AI coaches</div>
                    <div className="text-xs text-gray-600">Smart suggestions</div>
                  </div>
                </div>
                
                <div className="absolute" style={{left: '80%', bottom: '75%'}}>
                  <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-sm text-center">
                    <div className="font-bold text-gray-800">+ Everything</div>
                    <div className="text-xs text-gray-600">Kitchen sink apps</div>
                  </div>
                </div>
                
                {/* Just Log highlight */}
                <div className="absolute" style={{right: '5%', bottom: '14%'}}>
                  <div className="bg-[#c81d25] text-white rounded-lg p-4 shadow-lg text-center border-2 border-white">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-lg font-bold">Back to basics</span>
                    </div>
                    <div className="text-sm font-semibold">Just Log</div>
                    <div className="text-xs opacity-90">Simple workouts</div>
                  </div>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-12 right-4 flex justify-between text-sm text-gray-600 mt-4">
                <span>2017</span>
                <span>2019</span>
                <span>2022</span>
                <span>2025</span>
                <span className="text-[#c81d25] font-bold">Now</span>
              </div>
            </div>
          </div>
          
        {/* Bottom summary */}
        
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black animate-fadeInUp">Common <span className="text-[#c81d25]">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#FAF9F5] rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-black">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 text-[#c81d25] ${
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
          <h2 className="text-4xl font-bold mb-8">Ready to <span className="text-[#c81d25]">simplify</span> your workouts?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands who&apos;ve ditched the bloated fitness apps</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rimapps.justlog', '_blank')}
              className="border-2 border-[#c81d25] bg-[#c81d25] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#d80032] transition-colors flex items-center justify-center gap-2"
            >
              <Image src="/images/playstore.png" alt="Play Store" width={24} height={24} />
              Download for Android
            </button>
            <button 
              onClick={() => window.open('https://apps.apple.com/us/app/workout-tracking-justlog/id6749898793', '_blank')}
              className="border-2 border-[#c81d25] bg-white text-[#c81d25] px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Image src="/images/apple.png" alt="App Store" width={24} height={24} />
              Download for iOS
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
                <Image src="/images/justloglogo.png" alt="Just Log Logo" width={24} height={24} />
                <div className="text-xl font-semibold text-black">Just Log</div>
              </div>
              <p className="text-gray-600 mb-4">The anti-thesis of complicated fitness apps</p>
              <a href="https://www.producthunt.com/products/just-log?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-just&#0045;log&#0045;2" target="_blank">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1010137&theme=dark&period=daily&t=1756632660193" alt="Just&#0032;Log - No&#0032;fluff&#0032;workout&#0032;tracker | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" />
              </a>
              <a href="https://www.uneed.best/tool/justlog-workout" target="_blank">
                <img src="https://www.uneed.best/POTD2A.png" style={{width: '250px'}} alt="Uneed POTD2 Badge" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Legal</h4>
              <div className="space-y-2 text-gray-600">
                <Link 
                  href="/privacy"
                  className="block hover:text-[#c81d25] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms"
                  className="block hover:text-[#c81d25] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Contact</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://tally.so/r/wzoGEE', '_blank')}
                  className="border-2 border-[#c81d25] bg-white text-[#c81d25] px-6 py-2 rounded hover:bg-gray-50 transition-colors w-full"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => window.open('https://tally.so/r/w4y9ao', '_blank')}
                  className="border-2 border-[#c81d25] bg-[#c81d25] text-white px-6 py-2 rounded hover:bg-[#d80032] transition-colors w-full"
                >
                  Send Feedback
                </button>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <button 
                    onClick={() => window.open('https://instagram.com/justlogapp', '_blank')}
                    className="flex items-center gap-2 hover:text-[#c81d25] transition-colors"
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