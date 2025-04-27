import React from 'react';
import { Star, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';

export default function SearchResultSimulation() {
  return (
    <div className='flex items-center justify-center p-4 sm:p-8'>
      <div className='relative w-full '>
        {/* Phone Mockup */}
        <div className='relative mx-auto border-gray-800 bg-gray-800 border-8 rounded-3xl h-[600px] w-[500px] shadow-xl'>
          {/* Phone Details */}
          <div className='absolute top-0 w-full h-6 bg-gray-800 flex items-center justify-center rounded-t-lg'>
            <div className='h-2 w-16 bg-gray-600 rounded-full'></div>
          </div>
          <div className='h-full w-full bg-white rounded-xl overflow-hidden'>
            {/* Status Bar */}
            <div className='h-6 w-full bg-gray-100 flex justify-between items-center px-4 text-xs text-gray-600'>
              <span>9:41</span>
              <div className='flex items-center space-x-1'>
                <div className='w-4 h-2 bg-gray-600 rounded-sm'></div>
                <div className='w-1 h-2 bg-gray-600 rounded-sm'></div>
                <div className='w-1 h-2 bg-gray-600 rounded-sm'></div>
                <div className='w-1 h-2 bg-gray-600 rounded-sm'></div>
                <div className='ml-1 w-3 h-3 bg-gray-600 rounded-full'></div>
              </div>
            </div>

            {/* Google Search Bar */}
            <div className='bg-white border-b border-gray-200'>
              <div className='flex items-center px-4 py-2'>
                <div className='flex-shrink-0 mr-2'>
                  <img src='/google.svg' />
                </div>
                <div className='flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center'>
                  <span className='font-medium text-black'>Salon near me</span>
                  <span className='ml-1 text-gray-400'>×</span>
                </div>
                <div className='ml-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    className='text-blue-500'
                    strokeWidth='2'
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <line x1='15' y1='9' x2='9' y2='15'></line>
                    <line x1='9' y1='9' x2='15' y2='15'></line>
                  </svg>
                </div>
              </div>

              {/* Search navigation */}
              <div className='flex px-4 text-xs overflow-x-auto whitespace-nowrap py-2 text-gray-600'>
                <div className='flex flex-col items-center mr-6'>
                  <div className='flex items-center justify-center w-8 h-8'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      className='text-blue-500'
                      strokeWidth='2'
                    >
                      <circle cx='11' cy='11' r='8'></circle>
                      <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                    </svg>
                  </div>
                  <span className='text-blue-500 text-xs mt-1'>All</span>
                </div>
                <div className='flex flex-col items-center mr-6'>
                  <div className='flex items-center justify-center w-8 h-8'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      className='text-gray-500'
                      strokeWidth='2'
                    >
                      <rect
                        x='3'
                        y='3'
                        width='18'
                        height='18'
                        rx='2'
                        ry='2'
                      ></rect>
                      <circle cx='8.5' cy='8.5' r='1.5'></circle>
                      <polyline points='21 15 16 10 5 21'></polyline>
                    </svg>
                  </div>
                  <span className='text-gray-500 text-xs mt-1'>Images</span>
                </div>
                <div className='flex flex-col items-center mr-6'>
                  <div className='flex items-center justify-center w-8 h-8'>
                    <MapPin size={16} className='text-gray-500' />
                  </div>
                  <span className='text-gray-500 text-xs mt-1'>Maps</span>
                </div>
                <div className='flex flex-col items-center mr-6'>
                  <div className='flex items-center justify-center w-8 h-8'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      className='text-gray-500'
                      strokeWidth='2'
                    >
                      <polygon points='23 7 16 12 23 17 23 7'></polygon>
                      <rect
                        x='1'
                        y='5'
                        width='15'
                        height='14'
                        rx='2'
                        ry='2'
                      ></rect>
                    </svg>
                  </div>
                  <span className='text-gray-500 text-xs mt-1'>Videos</span>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-center w-8 h-8'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      className='text-gray-500'
                      strokeWidth='2'
                    >
                      <circle cx='12' cy='12' r='10'></circle>
                      <line x1='12' y1='8' x2='12' y2='16'></line>
                      <line x1='8' y1='12' x2='16' y2='12'></line>
                    </svg>
                  </div>
                  <span className='text-gray-500 text-xs mt-1'>More</span>
                </div>
              </div>
            </div>

            {/* Search Results */}
            <div className='bg-gray-100 h-full overflow-y-auto pb-16'>
              {/* Local Pack Header */}
              <div className='px-4 pt-3 pb-2'>
                <p className='text-sm text-gray-600'>
                  Top 3 salons near Lagos, Nigeria
                </p>
              </div>

              {/* Featured Result (Your Client) */}
              <div className='bg-white mx-3 rounded-xl mb-2 shadow-sm border border-gray-200'>
                <div className='p-3'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <h3 className='font-bold text-base'>Glam & Glow Salon</h3>
                      <div className='flex items-center mt-1'>
                        <div className='flex'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className='text-yellow-500 fill-yellow-500'
                            />
                          ))}
                        </div>
                        <span className='text-sm text-gray-600 ml-1'>
                          5.0 (124)
                        </span>
                      </div>
                      <p className='text-sm text-gray-600 mt-1'>
                        Hair Salon • Beauty Salon
                      </p>
                    </div>
                    <div className='bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded'>
                      OPEN
                    </div>
                  </div>

                  <div className='flex mt-3 -mx-1'>
                    <div className='flex-1 mx-1'>
                      <div className='bg-gray-50 rounded-lg p-2 flex items-center justify-center'>
                        <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center'>
                          <Phone size={16} className='text-blue-700' />
                        </div>
                        <span className='text-xs font-medium text-blue-700 ml-2'>
                          Call
                        </span>
                      </div>
                    </div>
                    <div className='flex-1 mx-1'>
                      <div className='bg-gray-50 rounded-lg p-2 flex items-center justify-center'>
                        <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center'>
                          <MapPin size={16} className='text-blue-700' />
                        </div>
                        <span className='text-xs font-medium text-blue-700 ml-2'>
                          Directions
                        </span>
                      </div>
                    </div>
                    <div className='flex-1 mx-1'>
                      <div className='bg-gray-50 rounded-lg p-2 flex items-center justify-center'>
                        <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center'>
                          <Clock size={16} className='text-blue-700' />
                        </div>
                        <span className='text-xs font-medium text-blue-700 ml-2'>
                          Hours
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='mt-3 text-sm'>
                    <p className='text-gray-700'>
                      Premium salon with expert stylists and beauty
                      professionals.
                    </p>
                  </div>

                  <div className='mt-3 flex items-center justify-between'>
                    <div className='flex items-center text-blue-700'>
                      <span className='text-sm font-medium'>Website</span>
                      <ChevronRight size={16} />
                    </div>
                    <div>
                      <span className='text-sm text-gray-600'>
                        0.5 mi • Victoria Island
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result 2 */}
              <div className='bg-white mx-3 rounded-xl mb-2 shadow-sm border border-gray-200 p-3'>
                <h3 className='font-bold text-base'>Lagos Hair Studio</h3>
                <div className='flex items-center mt-1'>
                  <div className='flex'>
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className='text-yellow-500 fill-yellow-500'
                      />
                    ))}
                    <Star
                      size={12}
                      className='text-yellow-500'
                      strokeWidth={1}
                    />
                  </div>
                  <span className='text-sm text-gray-600 ml-1'>4.3 (89)</span>
                </div>
                <p className='text-sm text-gray-600 mt-1'>
                  Beauty Salon • 0.8 mi
                </p>
              </div>

              {/* Result 3 */}
              <div className='bg-white mx-3 rounded-xl shadow-sm border border-gray-200 p-3'>
                <h3 className='font-bold text-base'>Style Hub Salon</h3>
                <div className='flex items-center mt-1'>
                  <div className='flex'>
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className='text-yellow-500 fill-yellow-500'
                      />
                    ))}
                    <Star
                      size={12}
                      className='text-yellow-500'
                      strokeWidth={1}
                    />
                  </div>
                  <span className='text-sm text-gray-600 ml-1'>4.0 (56)</span>
                </div>
                <p className='text-sm text-gray-600 mt-1'>
                  Hair Salon • 1.2 mi
                </p>
              </div>

              {/* View All Link */}
              <div className='px-4 py-3'>
                <div className='flex items-center justify-center text-blue-700'>
                  <span className='text-sm font-medium'>View all</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Side Buttons */}
        <div className='absolute right-0 top-20 h-12 w-1 bg-gray-800 rounded-l-lg'></div>
        <div className='absolute left-0 top-16 h-16 w-1 bg-gray-800 rounded-r-lg'></div>
        <div className='absolute left-0 top-36 h-16 w-1 bg-gray-800 rounded-r-lg'></div>

        {/* "Your Business Here" Label */}
        <div className='absolute -top-4 right-0 bg-yellow-500 text-blue-900 font-bold py-1 px-3 rounded shadow-lg transform rotate-3'>
          Your Business on Google
        </div>

        {/* Search Ranking */}
        <div className='absolute -left-4 top-40 bg-blue-600 text-white font-bold py-1 px-3 rounded-full shadow-lg'>
          TOP 3
        </div>
      </div>
    </div>
  );
}
