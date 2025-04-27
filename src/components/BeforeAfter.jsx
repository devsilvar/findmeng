import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function BeforeAfter() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      category: 'salon',
      name: "Blessing's Beauty Salon",
      location: 'Lagos',
      beforeImg: '/blessing-before.png',
      afterImg: '/blessing-after.png',
      resultShort: 'Found by 300+ new customers in 2 months',
      gmbImg: '/blessing-gmb.png',
      landingPageImg: '/blessing-landing.png',
      videoSrc: null,
      tags: ['GMB Optimization', 'Website Design'],
    },
    {
      id: 2,
      category: 'boutique',
      name: 'Fashion Forward Boutique',
      location: 'Port Harcourt',
      beforeImg: '/fashion-before.png',
      afterImg: '/fashion-after.png',
      resultShort: '42 WhatsApp messages from new customers in just 14 days',
      gmbImg: '/fashion-gmb.png',
      landingPageImg: '/fashion-landing.png',
      videoSrc: '/fashion-video.mp4',
      tags: ['Social Media', 'GMB Optimization'],
    },
    {
      id: 3,
      category: 'restaurant',
      name: "Mama's Kitchen",
      location: 'Abuja',
      beforeImg: '/mamas-before.png',
      afterImg: '/mamas-after.png',
      resultShort: 'Food delivery orders increased by 85% in the first month',
      gmbImg: '/mamas-gmb.png',
      landingPageImg: '/mamas-landing.png',
      videoSrc: null,
      tags: ['Website Design', 'GMB Optimization'],
    },
    {
      id: 4,
      category: 'cleaning',
      name: 'Sparkle Clean Services',
      location: 'Abuja',
      beforeImg: '/sparkle-before.png',
      afterImg: '/sparkle-after.png',
      resultShort: 'Increased booking calls by 65% within 3 weeks',
      gmbImg: '/sparkle-gmb.png',
      landingPageImg: '/sparkle-landing.png',
      videoSrc: '/sparkle-video.mp4',
      tags: ['Website Design', 'Social Media'],
    },
  ];

  const filteredItems =
    activeTab === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(activeTab));

  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-sm uppercase tracking-wider text-blue-600 font-bold mb-3'>
            Our Work
          </h2>
          <h3 className='text-3xl md:text-4xl font-black mb-6 text-blue-900'>
            Real Results for Real Businesses
          </h3>
          <p className='text-xl text-blue-700 max-w-3xl mx-auto'>
            See how we've helped local businesses just like yours get discovered
            online and grow their customer base.
          </p>
        </div>

        {/* Filter tabs */}
        <div className='flex justify-center mb-10'>
          <div className='inline-flex flex-wrap justify-center gap-2'>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('GMB Optimization')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'GMB Optimization'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              Google Business
            </button>
            <button
              onClick={() => setActiveTab('Website Design')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'Website Design'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveTab('Social Media')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'Social Media'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              Social Media
            </button>
          </div>
        </div>

        {/* Portfolio items */}
        <div
          className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='bg-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all'
            >
              {/* Before/After Section */}
              <div className='relative'>
                <div className='flex'>
                  <div className='w-1/2 relative'>
                    <img
                      src='/api/placeholder/300/200'
                      alt={`${item.name} before`}
                      className='w-full h-48 object-cover'
                    />
                    <div className='absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1'>
                      BEFORE
                    </div>
                  </div>
                  <div className='w-1/2 relative'>
                    <img
                      src='/api/placeholder/300/200'
                      alt={`${item.name} after`}
                      className='w-full h-48 object-cover'
                    />
                    <div className='absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1'>
                      AFTER
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white'>
                  <p className='font-medium'>
                    Before: Invisible online | After: {item.resultShort}
                  </p>
                </div>
              </div>

              {/* Business Info */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <h4 className='text-xl font-bold text-blue-900'>
                      {item.name}
                    </h4>
                    <div className='flex items-center text-blue-700'>
                      <MapPin className='h-4 w-4 mr-1' />
                      <span className='text-sm'>{item.location}</span>
                    </div>
                  </div>
                  <div className='flex'>
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full ml-1'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Google My Business Preview */}
                <div className='mb-4 bg-white rounded-lg p-3 border border-gray-200'>
                  <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center'>
                      <div className='h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-2'>
                        <img
                          src='/api/placeholder/32/32'
                          alt='Logo'
                          className='h-6 w-6 rounded-full'
                        />
                      </div>
                      <div>
                        <p className='font-medium text-sm text-blue-900'>
                          {item.name}
                        </p>
                        <div className='flex items-center'>
                          <div className='flex'>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className='h-3 w-3 text-yellow-400'
                                fill='#FBBF24'
                              />
                            ))}
                          </div>
                          <span className='text-xs text-blue-700 ml-1'>
                            5.0 (24 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='bg-green-100 px-2 py-1 rounded-full flex items-center'>
                      <div className='h-2 w-2 bg-green-500 rounded-full mr-1'></div>
                      <span className='text-xs font-medium text-green-700'>
                        Verified
                      </span>
                    </div>
                  </div>
                  <div className='flex text-xs text-blue-700 gap-3 mt-1'>
                    <div className='flex items-center'>
                      <Phone className='h-3 w-3 mr-1' />
                      <span>Call</span>
                    </div>
                    <div className='flex items-center'>
                      <MessageCircle className='h-3 w-3 mr-1' />
                      <span>Message</span>
                    </div>
                    <div className='flex items-center'>
                      <MapPin className='h-3 w-3 mr-1' />
                      <span>Directions</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Landing Page Preview */}
                <div className='flex items-center mb-4'>
                  <div className='h-40 w-20 bg-gray-800 rounded-xl overflow-hidden mr-3 p-1'>
                    <div className='bg-white h-full w-full rounded-lg overflow-hidden relative'>
                      <img
                        src='/api/placeholder/80/200'
                        alt='Mobile landing page'
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h5 className='font-medium text-blue-900 mb-1'>
                      Mobile-Optimized Website
                    </h5>
                    <p className='text-sm text-blue-700'>
                      Designed for {item.name} to increase customer engagement
                      and online bookings.
                    </p>
                  </div>
                </div>

                {/* Video Clip if available */}
                {item.videoSrc && (
                  <div className='mb-4 bg-blue-100 rounded-lg p-3 flex items-center'>
                    <div className='h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mr-3'>
                      <div className='h-0 w-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1'></div>
                    </div>
                    <div>
                      <p className='font-medium text-blue-900'>
                        Promotional Video
                      </p>
                      <p className='text-sm text-blue-700'>
                        Watch the 15-second video we created
                      </p>
                    </div>
                  </div>
                )}

                {/* Results Summary */}
                <div className='bg-blue-100 p-4 rounded-lg'>
                  <div className='flex items-center'>
                    <div className='h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-3'>
                      <div className='h-4 w-4 border-2 border-white rounded-full'></div>
                    </div>
                    <div>
                      <h5 className='font-bold text-blue-900'>Results:</h5>
                      <p className='text-blue-700'>{item.resultShort}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-12 p-8 bg-blue-50 rounded-2xl shadow-sm'>
          <h3 className='text-2xl md:text-3xl font-bold text-blue-900 mb-4'>
            Want results like these for your business?
          </h3>
          <p className='text-blue-700 text-lg mb-8'>
            Let's make it happen — click the button below to start!
          </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg'>
            Get Your Business Found Online
          </button>
        </div>
      </div>
    </div>
  );
}
