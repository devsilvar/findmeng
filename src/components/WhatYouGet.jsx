import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Video, Check } from 'lucide-react';

export default function WhatYouGetSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    // Auto-cycle through cards for visual interest
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        if (prev === null || prev === 2) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full px-4 md:px-6 py-16 bg-gradient-to-br from-white to-blue-50'>
      <div
        className={`w-full mx-auto transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className='p-6 md:p-8 w-full max-w-6xl mx-auto'>
          <h3 className='text-2xl md:text-4xl font-black text-blue-900 mb-4 leading-tight text-center'>
            What You Get
          </h3>

          <p className='text-xl text-center text-blue-800 mb-10'>
            <span className='font-bold'>The Visibility Booster Kit</span> gives
            you 3 powerful tools:
          </p>

          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            {/* Tool 1 */}
            <div
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
                activeCard === 0
                  ? 'scale-105 shadow-xl ring-2 ring-blue-500'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className='flex justify-center mb-6'>
                <div
                  className={`p-4 rounded-full ${
                    activeCard === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-600'
                  } transition-colors duration-300`}
                >
                  <Globe className='h-10 w-10' />
                </div>
              </div>
              <h4 className='text-xl font-bold text-blue-900 mb-4 text-center'>
                A Custom Single Page Website
              </h4>
              <p className='text-gray-700 text-center mb-6'>
                Fast, mobile-optimized, and designed to convert visitors into
                paying clients.
              </p>
              <div
                className={`bg-blue-50 p-3 rounded-lg ${
                  activeCard === 0 ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
              >
                <div className='flex items-center gap-2'>
                  <Check className='text-blue-600 h-5 w-5' />
                  <span className='text-sm font-medium text-blue-800'>
                    Includes contact form
                  </span>
                </div>
              </div>
            </div>

            {/* Tool 2 */}
            <div
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
                activeCard === 1
                  ? 'scale-105 shadow-xl ring-2 ring-blue-500'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className='flex justify-center mb-6'>
                <div
                  className={`p-4 rounded-full ${
                    activeCard === 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-600'
                  } transition-colors duration-300`}
                >
                  <MapPin className='h-10 w-10' />
                </div>
              </div>
              <h4 className='text-xl font-bold text-blue-900 mb-4 text-center'>
                We put Your Business on Google
              </h4>
              <p className='text-gray-700 text-center mb-6'>
                So you appear when people search for services you offer in your
                area.
              </p>
              <div
                className={`bg-blue-50 p-3 rounded-lg ${
                  activeCard === 1 ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
              >
                <div className='flex items-center gap-2'>
                  <Check className='text-blue-600 h-5 w-5' />
                  <span className='text-sm font-medium text-blue-800'>
                    Includes verified listing
                  </span>
                </div>
              </div>
            </div>

            {/* Tool 3 */}
            <div
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
                activeCard === 2
                  ? 'scale-105 shadow-xl ring-2 ring-blue-500'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className='flex justify-center mb-6'>
                <div
                  className={`p-4 rounded-full ${
                    activeCard === 2
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-600'
                  } transition-colors duration-300`}
                >
                  <Video className='h-10 w-10' />
                </div>
              </div>
              <h4 className='text-xl font-bold text-blue-900 mb-4 text-center'>
                A Branded Promo Video
              </h4>
              <p className='text-gray-700 text-center mb-6'>
                So people instantly know what you do, how you help, and why they
                should choose you.
              </p>
              <div
                className={`bg-blue-50 p-3 rounded-lg ${
                  activeCard === 2 ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
              >
                <div className='flex items-center gap-2'>
                  <Check className='text-blue-600 h-5 w-5' />
                  <span className='text-sm font-medium text-blue-800'>
                    Includes custom script
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-yellow-100 p-6 rounded-xl text-center max-w-3xl mx-auto transform transition-all duration-500 hover:bg-yellow-200'>
            <p className='text-blue-900 text-lg font-medium'>
              And guess what? You don't need to be tech-savvy. We'll handle
              everything for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
