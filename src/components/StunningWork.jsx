import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  ArrowRight,
  Play,
  Star,
  MapPin,
  Globe,
} from 'lucide-react';

export default function OurWorkSection() {
  const [activeTab, setActiveTab] = useState('landing');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Sample portfolio data
  const portfolioData = {
    landing: [
      {
        id: 1,
        title: 'Premium Salon Website',
        client: 'GlamourCuts Lagos',
        description: 'Responsive landing page with online booking system',
        image: '/adire.jpg',
        link: 'https://cateringgusto.netlify.app/',
        metrics: '43% increase in bookings',
      },
      {
        id: 2,
        title: 'Legal Services Landing Page',
        client: 'Ade & Partners Legal',
        description:
          'Professional website with customer testimonials and case results',
        image: '/api/placeholder/600/400',
        link: '#legal-website',
        metrics: '67% more client inquiries',
      },
      {
        id: 3,
        title: 'Clothing Store E-commerce',
        client: 'Clothing Hub',
        description:
          'E-commerce site with product showcase and payment integration',
        image: '/store.png',
        link: 'https://kodeecommerce.vercel.app/',
        metrics: '128% increase in online orders',
      },
    ],
    google: [
      {
        id: 1,
        title: 'Google Business Profile Optimization',
        client: 'AutoFix Mechanics',
        description:
          'Complete GMB setup with photo gallery and review management',
        image: '/api/placeholder/600/400',
        link: '#autofix-gmb',
        metrics: '4.9 star rating with 127 reviews',
      },
      {
        id: 2,
        title: 'Local SEO Campaign',
        client: 'Fresh Foods Market',
        description:
          'Location-based optimization with customer review strategy',
        image: '/api/placeholder/600/400',
        link: '#freshfoods-gmb',
        metrics: '315% increase in map direction requests',
      },
      {
        id: 3,
        title: 'Multi-Location Business Listing',
        client: 'QuickHealth Clinics',
        description:
          'Managed GMB profiles for 5 locations with appointment booking',
        image: '/api/placeholder/600/400',
        link: '#quickhealth-gmb',
        metrics: '89% increase in phone calls',
      },
    ],
    video: [
      {
        id: 1,
        title: 'Brand Story Video',
        client: 'Green Energy Solutions',
        description:
          'Emotional storytelling connecting with eco-conscious consumers',
        image: '/api/placeholder/600/400',
        link: '#greenenergy-video',
        metrics: '250K views across platforms',
      },
      {
        id: 2,
        title: 'Product Launch Campaign',
        client: 'TechGadget Pro',
        description: 'Series of teaser videos leading to viral product reveal',
        image: '/api/placeholder/600/400',
        link: '#techgadget-video',
        metrics: '35% conversion rate on landing page',
      },
      {
        id: 3,
        title: 'Service Explainer Animation',
        client: 'EasyPay Financial',
        description: 'Simplifying complex financial services through animation',
        image: '/api/placeholder/600/400',
        link: '#easypay-video',
        metrics: '47% increase in application completions',
      },
    ],
  };

  const renderCaseStudies = () => {
    const currentData = portfolioData[activeTab];

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {currentData.map((item) => (
          <div
            key={item.id}
            className='group relative rounded-xl overflow-hidden bg-white shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2'
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className='relative overflow-hidden'>
              <div className='aspect-video bg-blue-100'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              {/* Overlay with play button for video tab */}
              {activeTab === 'video' && (
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='rounded-full bg-white bg-opacity-90 p-4 transform transition-transform duration-300 group-hover:scale-110'>
                    <Play
                      className='h-10 w-10 text-blue-600'
                      fill='currentColor'
                    />
                  </div>
                </div>
              )}

              {/* Category badge */}
              <div className='absolute top-4 left-4'>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white'>
                  {activeTab === 'landing' && (
                    <Globe className='w-3 h-3 mr-1' />
                  )}
                  {activeTab === 'google' && (
                    <MapPin className='w-3 h-3 mr-1' />
                  )}
                  {activeTab === 'video' && <Play className='w-3 h-3 mr-1' />}
                  {activeTab === 'landing'
                    ? 'Website'
                    : activeTab === 'google'
                    ? 'Google Business'
                    : 'Video'}
                </span>
              </div>

              {/* Results indicator */}
              <div className='absolute top-4 right-4'>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white'>
                  <Star className='w-3 h-3 mr-1' fill='currentColor' />
                  {item.metrics}
                </span>
              </div>
            </div>

            <div className='p-6'>
              <h3 className='text-xl font-bold text-blue-900 mb-1'>
                {item.title}
              </h3>
              <p className='text-blue-700 font-medium mb-2'>{item.client}</p>
              <p className='text-gray-600 mb-4'>{item.description}</p>

              <a
                href={item.link}
                className='inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors'
              >
                View{' '}
                {activeTab === 'landing'
                  ? 'Website'
                  : activeTab === 'google'
                  ? 'Profile'
                  : 'Video'}
                <ExternalLink className='ml-1 h-4 w-4' />
              </a>
            </div>

            {/* Animated border */}
            <div
              className={`absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 ${
                hoveredItem === item.id ? 'opacity-100' : ''
              } transition-opacity duration-300 pointer-events-none`}
            ></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className='relative overflow-hidden bg-gradient-to-b from-gray-50 to-blue-50 pt-20'
      ref={containerRef}
    >
      {/* Background decorative elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl'></div>
        <div className='absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-400 blur-3xl'></div>
      </div>

      <div
        className={`relative z-10 container mx-auto px-4 transition-all transform duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section Header */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2'>
            Showcase
          </h2>
          <h3 className='text-4xl md:text-5xl font-black text-blue-900 mb-6'>
            Our{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              Stunning
            </span>{' '}
            Work
          </h3>
          <p className='text-xl text-blue-800 max-w-2xl mx-auto'>
            Real businesses transformed by our expertise. From landing pages to
            Google profiles to brand videos, see how we elevate businesses to
            the next level.
          </p>
        </div>

        {/* Portfolio navigation tabs */}
        <div className='flex justify-center mb-8'>
          <div className='inline-flex p-1 bg-blue-100 bg-opacity-80 backdrop-blur-sm rounded-xl shadow-md'>
            {['landing', 'google', 'video'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-blue-700 hover:text-blue-900'
                } transition-all px-6 py-3 rounded-lg font-medium text-sm md:text-base flex items-center`}
              >
                {tab === 'landing' && <Globe className='w-4 h-4 mr-2' />}
                {tab === 'google' && <MapPin className='w-4 h-4 mr-2' />}
                {tab === 'video' && <Play className='w-4 h-4 mr-2' />}
                {tab === 'landing'
                  ? 'Landing Pages'
                  : tab === 'google'
                  ? 'Google My Business'
                  : 'Brand Videos'}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        {renderCaseStudies()}

        {/* Call to action */}
        <div className='mt-20 text-center'>
          <div className='inline-block relative'>
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse'></div>
            <a
              href='#get-started'
              className='relative block px-8 py-4 bg-white hover:bg-blue-50 border border-transparent rounded-lg leading-none flex items-center text-blue-800 font-bold text-lg transition-colors'
            >
              Transform Your Business
              <ArrowRight className='ml-3 h-5 w-5' />
            </a>
          </div>
        </div>
      </div>

      {/* Social proof element */}
      <div
        className={`relative z-10 mt-24 bg-gradient-to-r from-blue-900 to-blue-800 py-10 transition-all transform duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-6 md:mb-0'>
              <p className='text-blue-200 font-medium mb-1'>
                Join our growing client base
              </p>
              <h4 className='text-2xl md:text-3xl font-bold text-white'>
                Ready to stand out online?
              </h4>
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-end gap-3'>
              <div className='flex -space-x-2'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className='w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden'
                  >
                    <img
                      src={`/api/placeholder/40/40`}
                      alt='Client'
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
              <p className='text-white ml-3'>
                <span className='font-bold'>100+</span> businesses transformed
              </p>
              <a
                href='#contact-us'
                className='ml-4 px-6 py-3 bg-white text-blue-800 hover:text-blue-900 font-bold rounded-lg transition-colors shadow-lg'
              >
                Join Them Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
