import { useState, useEffect } from 'react';
import {
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  MapPin,
  Search,
  Video,
} from 'lucide-react';
import SearchResultSimulation from './PhoneSearch';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-blue-950 to-indigo-950 text-white'>
      {/* Enhanced decorative elements */}
      <div className='absolute inset-0 opacity-25'>
        <div className='absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl'></div>
        <div className='absolute top-40 left-10 w-64 h-64 rounded-full bg-yellow-400 blur-3xl'></div>
        <div className='absolute bottom-0 right-20 w-80 h-80 rounded-full bg-indigo-500 blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 py-16 lg:py-24 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <span className='inline-block py-1 px-4 rounded-full text-base font-bold bg-yellow-500 text-blue-950 mr-3'>
                  ATTENTION
                </span>
                <span className='text-yellow-400 font-semibold animate-pulse'>
                  Limited Time Offer
                </span>
              </div>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight'>
                Your Customers Are Searching for You Online…
                <span className='block mt-2 text-yellow-400 text-2xl'>
                  But They're not seeing you
                </span>
              </h1>

              <div className='bg-blue-900/40 p-4 border-l-4 border-yellow-500 rounded mb-6'>
                <p className='text-xl font-medium'>
                  We help Nigerian business owners get more customers daily with
                  a custom landing page, Google visibility, and a professional
                  promo video—all in one kit.
                </p>
              </div>

              <div className='flex flex-wrap gap-4 mb-8'>
                <div className='flex items-center bg-blue-800/50 px-4 py-2 rounded-lg border border-blue-700/50'>
                  <CheckCircle size={20} className='text-yellow-400 mr-2' />
                  <span>1-page Website to Get Customers</span>
                </div>
                <div className='flex items-center bg-blue-800/50 px-4 py-2 rounded-lg border border-blue-700/50'>
                  <CheckCircle size={20} className='text-yellow-400 mr-2' />
                  <span>Put your Business on Google</span>
                </div>
                <div className='flex items-center bg-blue-800/50 px-4 py-2 rounded-lg border border-blue-700/50'>
                  <CheckCircle size={20} className='text-yellow-400 mr-2' />
                  <span>1-Minute Promo Video</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <button className='group py-4 px-8 bg-yellow-500 hover:bg-yellow-400 text-blue-950 text-lg font-bold rounded-lg transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                Get your Own
                <ArrowRight
                  className='ml-2 group-hover:translate-x-1 transition-transform'
                  size={24}
                />
              </button>
              <button className='py-4 px-8 border-2 border-white hover:bg-white/20 rounded-lg transition duration-300 flex items-center justify-center text-lg'>
                See Examples
              </button>
            </div>

            <div className='flex flex-wrap gap-6 text-base'>
              <div className='flex items-center bg-blue-900/30 px-4 py-2 rounded-lg'>
                <Users size={20} className='text-yellow-400 mr-2' />
                <span>50+ Happy Clients</span>
              </div>
              <div className='flex items-center bg-blue-900/30 px-4 py-2 rounded-lg'>
                <CheckCircle size={20} className='text-yellow-400 mr-2' />
                <span>7-Day Delivery</span>
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <img src='/biznear.png' className='w-[450px]' alt='' />
            {/* <SearchResultSimulation /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Check(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <polyline points='20 6 9 17 4 12' />
    </svg>
  );
}
