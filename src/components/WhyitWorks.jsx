import React, { useState, useEffect } from 'react';
import { Search, Award, TrendingUp, Smartphone, Users } from 'lucide-react';

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const benefits = [
    {
      icon: <SearchResultVisual />,
      title: 'You Appear In Search Results',
      description:
        'You appear when someone searches "hair stylist near me" or "affordable plumber in Ikeja"',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: <TrustBadgeVisual />,
      title: 'Instant Credibility',
      description:
        'You gain instant credibility—people trust what they can see and verify online',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <ConversionVisual />,
      title: 'Higher Conversion Rate',
      description:
        'You convert more curious visitors into loyal, paying customers',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <CustomerFindsYouVisual />,
      title: 'Customers Find You',
      description: "You're no longer chasing customers… they're coming to you",
      color: 'from-teal-500 to-emerald-500',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <div className='relative overflow-hidden bg-gray-900 py-16'>
      {/* Background effects */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl'></div>
        <div className='absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-indigo-600 blur-3xl'></div>
        <div className='absolute -bottom-24 left-1/2 w-96 h-96 rounded-full bg-cyan-600 blur-3xl'></div>
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className='text-center mb-16'>
          <h2 className='text-base font-semibold text-cyan-400 tracking-wide uppercase'>
            Proven Results
          </h2>
          <h3 className='mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>
            Why It{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>
              Works
            </span>
          </h3>
          <p className='mt-5 max-w-xl mx-auto text-xl text-gray-300'>
            Here's what happens when your business has the right online
            presence:
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          {/* Left side - Visual representation */}
          <div className='lg:col-span-2 flex items-center justify-center'>
            <div className='relative w-full h-80 flex items-center justify-center'>
              {/* Central glow */}
              <div className='absolute w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse'></div>

              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 transform ${
                    idx === activeIndex
                      ? 'scale-100 opacity-100'
                      : 'scale-90 opacity-0'
                  }`}
                >
                  <div
                    className={`w-64 h-64 rounded-full bg-gradient-to-br ${benefit.color} p-1 shadow-2xl shadow-blue-500/20`}
                  >
                    <div className='w-full h-full rounded-full bg-gray-900 flex items-center justify-center p-4'>
                      <div className='text-white w-full h-full flex items-center justify-center'>
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Orbiting particles */}
              <div className='absolute w-full h-full'>
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className='absolute w-2 h-2 rounded-full bg-cyan-500'
                    style={{
                      top: `${50 + 40 * Math.cos((2 * Math.PI * i) / 12)}%`,
                      left: `${50 + 40 * Math.sin((2 * Math.PI * i) / 12)}%`,
                      opacity: i % 3 === 0 ? 0.8 : 0.3,
                      animation: `pulse 4s infinite ${i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Benefits cards */}
          <div className='lg:col-span-3 space-y-6'>
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`group transition-all duration-500 ease-in-out bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 ${
                  idx === activeIndex
                    ? 'ring-2 ring-blue-500 transform scale-105'
                    : ''
                }`}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <div className='p-6 sm:p-8'>
                  <div className='flex items-center'>
                    <div
                      className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${benefit.color} mr-5`}
                    >
                      {idx === 0 && <Search className='h-8 w-8' />}
                      {idx === 1 && <Award className='h-8 w-8' />}
                      {idx === 2 && <Users className='h-8 w-8' />}
                      {idx === 3 && <TrendingUp className='h-8 w-8' />}
                    </div>
                    <div>
                      <h4 className='text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300'>
                        {benefit.title}
                      </h4>
                      <p className='text-gray-300 group-hover:text-white'>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// More representative visual components for each benefit

function SearchResultVisual() {
  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      {/* Mock search bar */}
      <div className='absolute top-6 w-64 h-12 bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='flex items-center px-3 h-full'>
          <Search className='h-5 w-5 text-gray-500' />
          <div className='ml-2 text-gray-800 text-sm font-medium'>
            hair stylist near me
          </div>
        </div>
      </div>

      {/* Search result cards */}
      <div className='absolute top-20 w-64 bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='p-3 border-b border-gray-200'>
          <div className='w-full h-2 bg-blue-500 rounded-full mb-2'></div>
          <div className='w-3/4 h-2 bg-gray-300 rounded-full'></div>
        </div>
        <div className='p-3 border-b border-gray-200 bg-blue-50'>
          <div className='w-full h-2 bg-blue-500 rounded-full mb-2'></div>
          <div className='w-3/4 h-2 bg-gray-300 rounded-full'></div>
        </div>
        <div className='p-3'>
          <div className='w-full h-2 bg-gray-300 rounded-full mb-2'></div>
          <div className='w-3/4 h-2 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    </div>
  );
}

function TrustBadgeVisual() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='relative'>
        {/* Badge */}
        <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center'>
          <Award className='h-8 w-8 text-white' />
        </div>

        {/* Verified business profile */}
        <div className='mt-8 w-48 bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='p-3 bg-blue-50 text-center text-xs font-bold text-blue-800'>
            VERIFIED BUSINESS
          </div>
          <div className='p-4'>
            <div className='w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3'></div>
            <div className='w-3/4 h-2 bg-gray-300 rounded-full mx-auto mb-2'></div>
            <div className='w-1/2 h-2 bg-gray-300 rounded-full mx-auto mb-3'></div>
            <div className='flex justify-center space-x-1'>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className='w-3 h-3 bg-yellow-400 rounded-full'
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConversionVisual() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='relative w-48'>
        {/* Visitor funnel visualization */}
        <div className='w-full h-32 relative'>
          {/* Funnel shape */}
          <div className='absolute top-0 w-full h-12 bg-blue-300 rounded-t-lg'></div>
          <div className='absolute top-10 w-5/6 h-12 bg-blue-400 left-1/2 transform -translate-x-1/2'></div>
          <div className='absolute top-20 w-3/5 h-12 bg-blue-500 left-1/2 transform -translate-x-1/2'></div>

          {/* People icons flowing down */}
          <div className='absolute top-2 left-4'>
            <Users className='h-4 w-4 text-gray-100' />
          </div>
          <div className='absolute top-2 right-4'>
            <Users className='h-4 w-4 text-gray-100' />
          </div>
          <div className='absolute top-12 left-1/4'>
            <Users className='h-4 w-4 text-gray-100' />
          </div>
          <div className='absolute top-12 right-1/4'>
            <Users className='h-4 w-4 text-gray-100' />
          </div>
          <div className='absolute top-22 left-1/2 transform -translate-x-1/2'>
            <Users className='h-5 w-5 text-gray-100' />
          </div>
        </div>

        {/* Conversion text */}
        <div className='w-full bg-blue-600 text-center py-1 rounded-b-lg'>
          <div className='text-white text-xs font-bold'>CUSTOMERS</div>
        </div>

        {/* Arrow pointing to dollar sign */}
        <div className='mt-2 flex justify-center'>
          <div className='w-1 h-6 bg-green-400'></div>
        </div>

        {/* Money symbol */}
        <div className='w-10 h-10 rounded-full bg-green-500 mx-auto mt-1 flex items-center justify-center'>
          <div className='text-white font-bold text-lg'>$</div>
        </div>
      </div>
    </div>
  );
}

function CustomerFindsYouVisual() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='relative'>
        {/* Business at center */}
        <div className='absolute w-16 h-16 bg-blue-500 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white flex items-center justify-center z-10'>
          <div className='text-white font-bold'>YOU</div>
        </div>

        {/* Customer icons around the business */}
        <div className='w-48 h-48 relative'>
          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const x = Math.cos(angle) * 20;
            const y = Math.sin(angle) * 20;

            return (
              <div
                key={i}
                className='absolute w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  animation: `moveToCenter 3s infinite ${i * 0.5}s`,
                }}
              >
                <Smartphone className='h-4 w-4 text-blue-500' />
              </div>
            );
          })}

          {/* Directional arrows pointing to center */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const startX = Math.cos(angle) * 40;
            const startY = Math.sin(angle) * 40;
            const endX = Math.cos(angle) * 20;
            const endY = Math.sin(angle) * 20;

            return (
              <div
                key={`arrow-${i}`}
                className='absolute w-16 h-1 bg-blue-300'
                style={{
                  left: `calc(50% + ${(startX + endX) / 2}px)`,
                  top: `calc(50% + ${(startY + endY) / 2}px)`,
                  transform: `translate(-50%, -50%) rotate(${
                    angle + Math.PI / 2
                  }rad)`,
                  width: '20px',
                }}
              >
                <div className='absolute right-0 w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-blue-400'></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
