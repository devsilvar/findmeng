import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Sprout, TrendingUp, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='w-full px-4 md:px-6 py-16 bg-gradient-to-br from-gray-100 to-blue-300'>
      <div
        className={`w-full mx-auto transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className='p-6 md:p-8 w-full max-w-6xl mx-auto'>
          <h3 className='text-2xl md:text-4xl font-black text-blue-900 mb-4 leading-tight text-center'>
            Visibility Booster Packages
          </h3>
          <p className='text-xl text-center text-blue-800 mb-10'>
            <span className='font-bold'>Choose the perfect package</span> to
            launch and grow your online presence
          </p>

          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            {/* Starter Kit */}
            <div
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
                activeCard === 0
                  ? 'scale-105 shadow-xl ring-2 ring-emerald-500'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className='flex justify-center mb-6 '>
                <div
                  className={`p-4 rounded-full ${
                    activeCard === 0
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-100 text-emerald-600'
                  } transition-colors duration-300`}
                >
                  <Sprout className='h-10 w-10' />
                </div>
              </div>
              <h4 className='text-xl font-bold text-blue-900 mb-4 text-center'>
                Starter Kit
              </h4>
              <div className='text-4xl font-extrabold text-center mb-4 text-emerald-600'>
                ₦150,000
              </div>

              <p className='text-gray-700 text-center mb-6'>
                Perfect for small businesses launching their digital presence
                quickly and professionally.
              </p>

              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='text-emerald-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    1-Page Website with WhatsApp Integration
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-emerald-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    Google Business Profile Setup
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-emerald-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>1-Minute Promo Video</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-emerald-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Website Hosting</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-emerald-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Domain Name</span>
                </li>
              </ul>

              <div className='bg-blue-50 p-4 rounded-lg mb-6 text-center'>
                <p className='text-blue-800 font-medium'>
                  Total Value: <span className='font-bold'>₦300,000+</span>
                </p>
              </div>

              <Link
                to='/contact'
                state={{ selectedPlan: 'Starter Kit' }}
                className='flex items-center justify-center w-full py-3 px-4 rounded-lg text-lg font-bold text-white text-center bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0'
              >
                Get Started <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </div>

            {/* Growth Kit */}
            <div
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
                activeCard === 1
                  ? 'scale-105 shadow-xl ring-2 ring-indigo-500'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className='absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full'>
                Popular
              </div>
              <div className='flex justify-center mb-6'>
                <div
                  className={`p-4 rounded-full ${
                    activeCard === 1
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-100 text-indigo-600'
                  } transition-colors duration-300`}
                >
                  <TrendingUp className='h-10 w-10' />
                </div>
              </div>
              <h4 className='text-xl font-bold text-blue-900 mb-4 text-center'>
                Growth Kit
              </h4>
              <div className='text-4xl font-extrabold text-center mb-4 text-indigo-600'>
                ₦300,000
              </div>
              <p className='text-gray-700 text-center mb-6'>
                Ideal for businesses scaling up with product management and
                enhanced conversions.
              </p>

              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='text-indigo-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    Everything in Starter, Plus:
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-indigo-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    Multi-Page Website with WhatsApp Integration
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-indigo-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    Admin Panel to Upload Products
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-indigo-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    5 Ready-to-Use WhatsApp Status Scripts
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-indigo-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    6 Months Maintenance & Support
                  </span>
                </li>
              </ul>

              <div className='bg-blue-50 p-4 rounded-lg mb-6 text-center'>
                <p className='text-blue-800 font-medium'>
                  Total Value: <span className='font-bold'>₦500,000+</span>
                </p>
              </div>

              <Link
                to='/contact'
                state={{ selectedPlan: 'Growth Kit' }}
                className='flex items-center justify-center w-full py-3 px-4 rounded-lg text-lg font-bold text-white text-center bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0'
              >
                Scale Your Business <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </div>

            {/* Premium Kit */}
            <div
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
                activeCard === 2
                  ? 'scale-105 shadow-xl ring-2 ring-orange-500'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className='flex justify-center mb-6'>
                <div
                  className={`p-4 rounded-full ${
                    activeCard === 2
                      ? 'bg-orange-600 text-white'
                      : 'bg-orange-100 text-orange-600'
                  } transition-colors duration-300`}
                >
                  <Trophy className='h-10 w-10' />
                </div>
              </div>
              <h4 className='text-xl font-bold text-blue-900 mb-4 text-center'>
                Premium Kit
              </h4>
              <div className='text-4xl font-extrabold text-center mb-4 text-orange-600'>
                ₦500,000
              </div>
              <p className='text-gray-700 text-center mb-6'>
                The complete solution for businesses wanting a hands-off,
                results-driven approach.
              </p>

              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='text-orange-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    Everything in Growth, Plus:
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-orange-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    We Upload All Your Products
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-orange-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    Full SEO Optimization for Google
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-orange-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Custom Website Features</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='text-orange-500 h-5 w-5 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700'>
                    1-Year Maintenance & Support
                  </span>
                </li>
              </ul>

              <div className='bg-blue-50 p-4 rounded-lg mb-6 text-center'>
                <p className='text-blue-800 font-medium'>
                  Total Value: <span className='font-bold'>₦700,000+</span>
                </p>
              </div>

              <Link
                to='/contact'
                state={{ selectedPlan: 'Premuim Kit' }}
                className='flex items-center justify-center w-full py-3 px-4 rounded-lg text-lg font-bold text-white text-center bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0'
              >
                Get Premium <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </div>
          </div>

          <div className='bg-yellow-100 p-6 rounded-xl text-center max-w-3xl mx-auto transform transition-all duration-500 hover:bg-yellow-200'>
            <p className='text-blue-900 text-lg font-medium'>
              All packages include setup and training - no technical skills
              required!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
