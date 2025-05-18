import React, { useState } from 'react';
import {
  ArrowRightCircle,
  Star,
  ChevronRight,
  Phone,
  Users,
  MapPin,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Portfolio Section Component
export const SampleWorksSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const portfolioItems = [
    {
      businessName: 'Farsy Adire Attires',
      location: 'Ibdan',
      beforeAfter: {
        before: 'No online presence',
        after: 'Professional landing page + Google My Business',
      },
      results: 'Now getting 10+ new customer calls weekly!',
      testimonial: 'People now find me online and call',
      owner: 'O .Fatimah',
      image: '/farsyAdire.jpg',
    },
    {
      businessName: 'Daucus Light Costmetic',
      location: 'Ibadan',
      beforeAfter: {
        before: 'Only Facebook sales',
        after: 'Landing page connected to WhatsApp',
      },
      results: 'Now receiving 2x more Calls every week!',
      testimonial:
        'The WhatsApp button alone brings me 15-20 new inquiries weekly!',
      owner: 'A . Saidat',
      image: '/daucus.jpg',
    },
    {
      businessName: 'Kabug Electronics',
      location: 'Lagos',
      beforeAfter: {
        before: 'Word-of-mouth referrals only',
        after: 'Business on Google + Landing Page Website',
      },
      results: 'Booked solid for 3 months straight!',
      testimonial: 'More sales',
      owner: 'Emmanuel O.',
      image: '/bizness.jpg',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  const getColorClass = (color) => {
    const colorMap = {
      blue: 'from-blue-600 to-blue-400',
      pink: 'from-pink-600 to-pink-400',
      indigo: 'from-indigo-600 to-indigo-400',
    };
    return colorMap[color] || 'from-blue-600 to-blue-400';
  };

  return (
    <div className='py-16 bg-gray-50' id='examples'>
      <div className='max-w-6xl mx-auto px-4 md:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-3'>
            Real Results. Real Businesses.
          </h2>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
            Here's a glimpse of how we helped small businesses like yours go
            from "invisible" to "in-demand"
          </p>
        </div>

        {/* Desktop Version - All Items Side by Side */}
        <div className='hidden lg:grid grid-cols-3 gap-6 mb-12'>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl'
            >
              {/* Image Section */}
              <div
                className={`h-48 bg-gradient-to-r ${getColorClass(
                  item.color
                )} flex justify-center items-center relative overflow-hidden`}
              >
                <img
                  src={item.image}
                  alt={`${item.businessName} results`}
                  className='object-cover w-full h-full '
                />
                <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-4 '>
                  <div className='bg-white text-black justify-center flex flex-col text-center rounded-md p-2'>
                    <h3 className='text-md text-center font-bold mb-1'>
                      {item.businessName}
                    </h3>
                    <div className='flex items-center justify-center text-sm'>
                      <MapPin size={14} className='mr-1' />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className='p-6'>
                <div className='bg-blue-50 p-4 rounded-lg mb-4'>
                  <div className='flex items-center mb-2'>
                    <div className='w-3 h-3 bg-red-500 rounded-full mr-2'></div>
                    <p className='text-gray-600 font-medium'>Before:</p>
                  </div>
                  <p className='text-gray-800 ml-5 mb-3'>
                    {item.beforeAfter.before}
                  </p>

                  <div className='flex items-center mb-2'>
                    <div className='w-3 h-3 bg-green-500 rounded-full mr-2'></div>
                    <p className='text-gray-600 font-medium'>After:</p>
                  </div>
                  <p className='text-gray-800 ml-5'>{item.beforeAfter.after}</p>
                </div>

                <div className='bg-yellow-50 p-4 rounded-lg mb-6'>
                  <div className='flex items-center text-yellow-600 mb-2'>
                    <ChevronRight size={20} />
                    <p className='font-bold'>Results:</p>
                  </div>
                  <p className='text-gray-800 ml-6 font-medium'>
                    {item.results}
                  </p>
                </div>

                <div className='italic text-gray-600 border-l-4 border-blue-400 pl-4 mb-4'>
                  "{item.testimonial}"
                </div>
                <p className='font-bold text-blue-900'>— {item.owner}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className='lg:hidden relative'>
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className='min-w-full bg-white rounded-xl shadow-lg overflow-hidden'
                >
                  {/* Image Section */}
                  <div
                    className={`h-48 flex justify-center items-center relative overflow-hidden`}
                  >
                    <img
                      src={item.image}
                      alt={`${item.businessName} results`}
                      className='object-cover w-full h-full '
                    />
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-4'>
                      <h3 className='text-xl font-bold mb-1'>
                        {item.businessName}
                      </h3>
                      <div className='flex items-center text-sm'>
                        <MapPin size={14} className='mr-1' />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className='p-6'>
                    <div className='bg-blue-50 p-4 rounded-lg mb-4'>
                      <div className='flex items-center mb-2'>
                        <div className='w-3 h-3  rounded-full mr-2'></div>
                        <p className='text-gray-600 font-medium'>Before:</p>
                      </div>
                      <p className='text-gray-800 ml-5 mb-3'>
                        {item.beforeAfter.before}
                      </p>

                      <div className='flex items-center mb-2'>
                        <div className='w-3 h-3 bg-green-500 rounded-full mr-2'></div>
                        <p className='text-gray-600 font-medium'>After:</p>
                      </div>
                      <p className='text-gray-800 ml-5'>
                        {item.beforeAfter.after}
                      </p>
                    </div>

                    <div className='bg-yellow-50 p-4 rounded-lg mb-6'>
                      <div className='flex items-center text-yellow-600 mb-2'>
                        <ChevronRight size={20} />
                        <p className='font-bold'>Results:</p>
                      </div>
                      <p className='text-gray-800 ml-6 font-medium'>
                        {item.results}
                      </p>
                    </div>

                    <div className='italic text-gray-600 border-l-4 border-blue-400 pl-4 mb-4'>
                      "{item.testimonial}"
                    </div>
                    <p className='font-bold text-blue-900'>— {item.owner}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className='flex justify-between mt-6'>
            <button
              onClick={prevSlide}
              className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors'
            >
              <ArrowLeft size={20} />
            </button>

            <div className='flex space-x-2 items-center'>
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors'
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 transform transition hover:scale-105'>
            <div className='flex items-center mb-4'>
              <div className='bg-blue-500 p-3 rounded-full mr-4'>
                <Phone size={24} className='text-white' />
              </div>
              <div>
                <h4 className='text-2xl font-bold text-blue-900'>247%</h4>
                <p className='text-gray-600'>Average Increase in Calls</p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 transform transition hover:scale-105'>
            <div className='flex items-center mb-4'>
              <div className='bg-green-500 p-3 rounded-full mr-4'>
                <Users size={24} className='text-white' />
              </div>
              <div>
                <h4 className='text-2xl font-bold text-blue-900'>183%</h4>
                <p className='text-gray-600'>Average Growth in Customers</p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500 transform transition hover:scale-105'>
            <div className='flex items-center mb-4'>
              <div className='bg-yellow-500 p-3 rounded-full mr-4'>
                <Star size={24} className='text-white' />
              </div>
              <div>
                <h4 className='text-2xl font-bold text-blue-900'>92%</h4>
                <p className='text-gray-600'>Client Satisfaction Rating</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Banner */}
        <div className='mt-16 bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl shadow-xl p-8 text-white'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-6 md:mb-0'>
              <h3 className='text-2xl font-bold mb-2'>
                Ready to join these success stories?
              </h3>
              <p className='text-lg opacity-90'>
                Let us transform your business visibility today!
              </p>
            </div>
            <Link to='/contact'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg flex items-center gap-2 transition-colors text-lg'>
                Boost My Business Now <ArrowRightCircle size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Update your main component to include the SampleWorksSection
