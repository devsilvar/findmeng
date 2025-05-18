import React from 'react';
import {
  ArrowRightCircle,
  Globe,
  MapPin,
  Video,
  Star,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
export default function BusinessBoosterKit() {
  return (
    <div className='w-full bg-white' id='booster'>
      {/* Hero Section - Full Width */}
      <div className='bg-gradient-to-r from-blue-800 to-blue-600 text-white'>
        <div className='max-w-6xl mx-auto py-16 px-4 md:px-8'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                Get Found Fast
              </h1>
              <h2 className='text-2xl md:text-3xl font-semibold mb-6'>
                Business Booster Kit
              </h2>
              <p className='text-xl mb-8'>
                The ultimate visibility solution for Nigerian small and medium
                businesses
              </p>
              <Link to='contact'>
                <button className='bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg flex items-center gap-2 transition-colors text-lg'>
                  Boost My Business Now <ArrowRightCircle size={20} />
                </button>
              </Link>
            </div>
            <div className='flex justify-center'>
              <img src='/flyer.png' alt='' srcset='' />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      {/* <div className='bg-blue-900 text-white py-6'>
        <div className='max-w-6xl mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
            <div>
              <p className='text-3xl font-bold text-yellow-400'>76%</p>
              <p className='text-lg'>
                of Nigerians search online before buying
              </p>
            </div>
            <div>
              <p className='text-3xl font-bold text-yellow-400'>5X</p>
              <p className='text-lg'>
                increase in leads with proper online presence
              </p>
            </div>
            <div>
              <p className='text-3xl font-bold text-yellow-400'>92%</p>
              <p className='text-lg'>
                of consumers trust businesses found on Google
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Sample Works Section */}
    </div>
  );
}
