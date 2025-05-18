import { useState, useEffect } from 'react';
import { TrendingDown, X, Check, AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [statisticValue, setStatisticValue] = useState(0);
  const [activeTab, setActiveTab] = useState('old');

  useEffect(() => {
    // Animation entrance delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setStatisticValue((prev) => {
          if (prev < 70) return prev + 1;
          clearInterval(interval);
          return 70;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className='w-full py-16 bg-white text-blue-900 overflow-hidden relative'>
      {/* Background design elements */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10'>
        <div className='absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-200'></div>
        <div className='absolute bottom-20 right-20 w-64 h-64 rounded-full bg-blue-100'></div>
        <div className='absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-300'></div>
      </div>

      <div
        className={`max-w-6xl mx-auto px-2 lg:px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className='text-center mb-12'>
          <h2 className='text-sm uppercase tracking-wider text-blue-600 font-bold mb-3'>
            Business Growth Alert
          </h2>
          <h3 className='text-3xl md:text-5xl font-black mb-6 leading-tight'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500'>
              Is Your Business Invisible Online?
            </span>
          </h3>
          <p className='text-xl text-blue-700 max-w-3xl mx-auto'>
            In today's digital world, depending solely on word-of-mouth is like
            opening your store only one hour a day.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className='max-w-5xl mx-auto mb-16'>
          <div className='flex justify-center mb-2'>
            <div className='inline-flex p-1 bg-blue-100 backdrop-blur-sm rounded-xl'>
              <button
                onClick={() => setActiveTab('old')}
                className={`px-6 py-3 text-sm font-bold rounded-lg transition-all ${
                  activeTab === 'old'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-blue-700'
                }`}
              >
                Old Way
              </button>
              <button
                onClick={() => setActiveTab('new')}
                className={`px-6 py-3 text-sm font-bold rounded-lg transition-all ${
                  activeTab === 'new'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-blue-700'
                }`}
              >
                New Way
              </button>
            </div>
          </div>

          <div className='bg-blue-50 backdrop-blur-md rounded-2xl p-1'>
            <div className='relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 p-2 lg:p-6'>
              {/* Traditional Approach Content */}
              <div
                className={`transition-all duration-500 ${
                  activeTab === 'old' ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                <div className='flex flex-col md:flex-row gap-8 items-center'>
                  <div className='md:w-2/5'>
                    <div className='relative'>
                      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-75 blur'></div>
                      <div className='relative bg-blue-50 rounded-lg overflow-hidden'>
                        <img
                          src='/oldways.jpg'
                          alt='Traditional marketing limitations'
                          className='w-full object-cover h-80 opacity-80'
                        />
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <div className='text-center p-2 bg-white/80 rounded-lg'>
                            <h4 className='text-lg font-bold text-blue-800 mb-1'>
                              The Old Way
                            </h4>
                            <p className='text-blue-600'>
                              Limited by geography and connections
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='md:w-3/5'>
                    <ul className='space-y-4'>
                      <li className='flex items-start bg-white p-4 rounded-lg shadow-sm'>
                        <div className='flex-shrink-0 mr-3'>
                          <div className='w-8 h-8 rounded-full bg-red-100 flex items-center justify-center'>
                            <X className='text-red-500 h-5 w-5' />
                          </div>
                        </div>
                        <div>
                          <h4 className='font-bold text-lg text-red-600'>
                            Limited Reach
                          </h4>
                          <p className='text-blue-700'>
                            Your potential customers are capped by who you
                            already know and their immediate network
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start bg-white p-4 rounded-lg shadow-sm'>
                        <div className='flex-shrink-0 mr-3'>
                          <div className='w-8 h-8 rounded-full bg-red-100 flex items-center justify-center'>
                            <X className='text-red-500 h-5 w-5' />
                          </div>
                        </div>
                        <div>
                          <h4 className='font-bold text-lg text-red-600'>
                            Unpredictable Growth
                          </h4>
                          <p className='text-blue-700'>
                            Business fluctuates based on random referrals with
                            no systematic way to scale
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start bg-white p-4 rounded-lg shadow-sm'>
                        <div className='flex-shrink-0 mr-3'>
                          <div className='w-8 h-8 rounded-full bg-red-100 flex items-center justify-center'>
                            <X className='text-red-500 h-5 w-5' />
                          </div>
                        </div>
                        <div>
                          <h4 className='font-bold text-lg text-red-600'>
                            Invisible to Searchers
                          </h4>
                          <p className='text-blue-700'>
                            The vast majority of customers searching online will
                            never find your business
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Digital Reality Content */}
              <div
                className={`transition-all duration-500 ${
                  activeTab === 'new' ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                <div className='flex flex-col md:flex-row gap-8 items-center'>
                  <div className='md:w-2/5'>
                    <div className='relative'>
                      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-75 blur'></div>
                      <div className='relative bg-blue-50 rounded-lg overflow-hidden'>
                        <img
                          src='/biz.png'
                          alt='Digital marketing advantages'
                          className='w-full object-cover h-80 '
                        />
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <div className='text-center p-2 bg-blue-700 rounded-xl'>
                            <h4 className='text-xl font-bold text-white mb-1 '>
                              The New Reality
                            </h4>
                            <p className='text-white'>
                              Let Customers Find you on Google
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='md:w-3/5'>
                    <ul className='space-y-4'>
                      <li className='flex items-start bg-white p-4 rounded-lg shadow-sm'>
                        <div className='flex-shrink-0 mr-3'>
                          <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center'>
                            <Check className='text-green-500 h-5 w-5' />
                          </div>
                        </div>
                        <div>
                          <h4 className='font-bold text-lg text-green-600'>
                            Discovered Through Search
                          </h4>
                          <p className='text-blue-700'>
                            Your business appears exactly when potential
                            customers are actively looking for your services
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start bg-white p-4 rounded-lg shadow-sm'>
                        <div className='flex-shrink-0 mr-3'>
                          <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center'>
                            <Check className='text-green-500 h-5 w-5' />
                          </div>
                        </div>
                        <div>
                          <h4 className='font-bold text-lg text-green-600'>
                            Digital First Impressions
                          </h4>
                          <p className='text-blue-700'>
                            Control how your brand is perceived with a
                            professional online presence before they ever meet
                            you
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start bg-white p-4 rounded-lg shadow-sm'>
                        <div className='flex-shrink-0 mr-3'>
                          <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center'>
                            <Check className='text-green-500 h-5 w-5' />
                          </div>
                        </div>
                        <div>
                          <h4 className='font-bold text-lg text-green-600'>
                            Always Open
                          </h4>
                          <p className='text-blue-700'>
                            Your business works for you 24/7, attracting and
                            converting customers even while you sleep
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
