import {
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  Star,
  Shield,
  Clock,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-4 overflow-hidden relative'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {showConfetti &&
          Array(30)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className='absolute rounded-full opacity-60 animate-pulse'
                style={{
                  backgroundColor: ['#4ade80', '#3b82f6', '#f59e0b', '#8b5cf6'][
                    i % 4
                  ],
                  width: `${Math.random() * 12 + 5}px`,
                  height: `${Math.random() * 12 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 3 + 1}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
      </div>

      {/* Success card */}
      <div className='bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 max-w-lg w-full relative overflow-hidden shadow-2xl'>
        {/* Glowing effect */}
        <div className='absolute -top-20 -left-20 w-40 h-40 bg-green-500 rounded-full opacity-30 blur-3xl'></div>
        <div className='absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500 rounded-full opacity-30 blur-3xl'></div>

        {/* Success icon with pulsing animation */}
        <div className='flex items-center justify-center'>
          <div className='w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center relative shadow-lg mb-6'>
            <div className='absolute inset-0 bg-green-500 rounded-full animate-ping opacity-50'></div>
            <CheckCircle size={48} className='text-white' />
          </div>
        </div>

        {/* Success message */}
        <h2 className='text-4xl font-bold text-white mb-4 text-center'>
          Application Submitted!
        </h2>

        {/* Fancy divider */}
        <div className='flex items-center justify-center my-6'>
          <div className='h-px w-16 bg-gradient-to-r from-transparent via-green-400 to-transparent'></div>
          <Star className='text-yellow-400 mx-2' size={16} />
          <div className='h-px w-16 bg-gradient-to-r from-transparent via-green-400 to-transparent'></div>
        </div>

        {/* Message with trust indicators */}
        <p className='text-xl text-blue-100 mb-6 text-center'>
          Thanks for your interest in our Business Booster Kit.
        </p>

        {/* Trust indicators */}
        <div className='grid grid-cols-2 gap-4 mb-8'>
          <div className='flex items-center bg-white/5 p-3 rounded-lg'>
            <Shield className='text-blue-300 mr-3 flex-shrink-0' size={20} />
            <p className='text-blue-100 text-sm'>100% Secure & Confidential</p>
          </div>
          <div className='flex items-center bg-white/5 p-3 rounded-lg'>
            <Clock className='text-blue-300 mr-3 flex-shrink-0' size={20} />
            <p className='text-blue-100 text-sm'>Response within 24 hours</p>
          </div>
        </div>

        {/* Primary action buttons */}
        <div className='flex flex-col space-y-4'>
          {/* WhatsApp button with hover effect */}
          <a
            href='https://wa.me/1234567890'
            target='_blank'
            rel='noopener noreferrer'
            className='py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition flex items-center justify-center shadow-lg shadow-green-500/30'
          >
            <MessageCircle size={20} className='mr-2' />
            Connect on WhatsApp
          </a>

          {/* Secondary buttons in a row */}
          <div className='flex items-center space-x-4'>
            <Link
              to='/'
              className='py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-xl transition flex-1 flex items-center justify-center backdrop-blur-sm'
            >
              <ArrowLeft size={18} className='mr-2' />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
