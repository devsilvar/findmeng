import React, { useState, useEffect } from 'react';
import { Check, Award, Users, TrendingUp, Search } from 'lucide-react';

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='w-full px-4 md:px-6 py-12 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white'>
      <div
        className={`w-full mx-auto transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className='p-6 md:p-8 w-full max-w-6xl mx-auto'>
          <h3 className='text-2xl md:text-4xl font-black mb-8 leading-tight text-center text-white'>
            Why It <span className='text-blue-200'>Works</span>
          </h3>

          <p className='text-xl text-center mb-10 max-w-3xl mx-auto text-blue-100'>
            Here's what happens when your business has the right online
            presence:
          </p>

          <div className='space-y-4 max-w-4xl mx-auto mb-12'>
            {/* Benefit 1 */}
            <div className='bg-white border-l-4 border-blue-300 p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-4'>
                  <div className='bg-blue-100 p-3 rounded-full'>
                    <Search className='text-blue-600 h-6 w-6' />
                  </div>
                </div>
                <div>
                  <h4 className='text-xl font-bold mb-2 text-blue-800'>
                    You Appear In Search Results
                  </h4>
                  <p className='text-blue-700'>
                    You appear when someone searches{' '}
                    <span className='font-bold text-blue-600'>
                      "hair stylist near me"
                    </span>{' '}
                    or{' '}
                    <span className='font-bold text-blue-600'>
                      "affordable plumber in Ikeja"
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className='bg-white border-l-4 border-blue-300 p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-4'>
                  <div className='bg-blue-100 p-3 rounded-full'>
                    <Award className='text-blue-600 h-6 w-6' />
                  </div>
                </div>
                <div>
                  <h4 className='text-xl font-bold mb-2 text-blue-800'>
                    Instant Credibility
                  </h4>
                  <p className='text-blue-700'>
                    You gain instant credibility—people trust what they can see
                    and verify online
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className='bg-white border-l-4 border-blue-300 p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-4'>
                  <div className='bg-blue-100 p-3 rounded-full'>
                    <Users className='text-blue-600 h-6 w-6' />
                  </div>
                </div>
                <div>
                  <h4 className='text-xl font-bold mb-2 text-blue-800'>
                    Higher Conversion Rate
                  </h4>
                  <p className='text-blue-700'>
                    You convert more curious visitors into loyal, paying
                    customers
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className='bg-white border-l-4 border-blue-300 p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-4'>
                  <div className='bg-blue-100 p-3 rounded-full'>
                    <TrendingUp className='text-blue-600 h-6 w-6' />
                  </div>
                </div>
                <div>
                  <h4 className='text-xl font-bold mb-2 text-blue-800'>
                    Customers Find You
                  </h4>
                  <p className='text-blue-700'>
                    You're no longer chasing customers… they're coming to you
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <button className='bg-white hover:bg-blue-50 text-blue-700 font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg border-2 border-blue-200'>
              Get Your Business Found Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
