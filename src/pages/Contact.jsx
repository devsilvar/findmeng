import { useState } from 'react';
import {
  Send,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Building,
  Users,
  Globe,
  Image,
  Facebook,
  Instagram,
  Smartphone,
} from 'lucide-react';
import SuccessPage from '../components/Submmited';

export default function ContactSection() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    businessType: '',
    location: '',
    employees: '',
    socialMedia: [],
    budget: '',
    message: '',
    services: [],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({ ...prev, services: [...prev.services, name] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.filter((service) => service !== name),
      }));
    }
  };

  const handleSocialMediaChange = (platform) => {
    if (formData.socialMedia.includes(platform)) {
      setFormData((prev) => ({
        ...prev,
        socialMedia: prev.socialMedia.filter((item) => item !== platform),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        socialMedia: [...prev.socialMedia, platform],
      }));
    }
  };

  const nextStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    // Here you would handle form submission to your backend
    console.log(formData);
    setIsSubmitted(true);
  };

  const totalSteps = 4;

  const renderFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-yellow-400'>
              Business Information
            </h3>
            <div className='space-y-4'>
              <div>
                <label className='block text-white mb-2 font-medium'>
                  Business Name <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Building size={20} className='text-blue-300' />
                  </span>
                  <input
                    type='text'
                    name='businessName'
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className='w-full py-3 pl-10 pr-4 bg-blue-900/40 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white'
                    placeholder='Your business name'
                  />
                </div>
              </div>

              <div>
                <label className='block text-white mb-2 font-medium'>
                  Owner Name <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Users size={20} className='text-blue-300' />
                  </span>
                  <input
                    type='text'
                    name='ownerName'
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    className='w-full py-3 pl-10 pr-4 bg-blue-900/40 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white'
                    placeholder='Your full name'
                  />
                </div>
              </div>

              <div>
                <label className='block text-white mb-2 font-medium'>
                  Business Type <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Building size={20} className='text-blue-300' />
                  </span>
                  <select
                    name='businessType'
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className='w-full py-3 pl-10 pr-4 bg-blue-900/40 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white appearance-none'
                  >
                    <option value=''>Select business type</option>
                    <option value='retail'>Retail</option>
                    <option value='restaurant'>Restaurant</option>
                    <option value='service'>Service Provider</option>
                    <option value='professional'>Professional Services</option>
                    <option value='tech'>Tech Company</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className='block text-white mb-2 font-medium'>
                  Location <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <MapPin size={20} className='text-blue-300' />
                  </span>
                  <input
                    type='text'
                    name='location'
                    value={formData.location}
                    onChange={handleInputChange}
                    className='w-full py-3 pl-10 pr-4 bg-blue-900/40 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white'
                    placeholder='City, State (e.g., Lagos, Nigeria)'
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-yellow-400'>
              Contact Information
            </h3>
            <div className='space-y-4'>
              <div>
                <label className='block text-white mb-2 font-medium'>
                  Phone Number <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Phone size={20} className='text-blue-300' />
                  </span>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full py-3 pl-10 pr-4 bg-blue-900/40 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white'
                    placeholder='Your phone number'
                  />
                </div>
              </div>

              <div>
                <label className='block text-white mb-2 font-medium'>
                  Email Address <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Mail size={20} className='text-blue-300' />
                  </span>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full py-3 pl-10 pr-4 bg-blue-900/40 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white'
                    placeholder='Your email address'
                  />
                </div>
              </div>

              <div>
                <label className='block text-white mb-2 font-medium'>
                  Do you have any social media presence?
                </label>
                <div className='grid grid-cols-2 gap-3 mt-2'>
                  <button
                    type='button'
                    onClick={() => handleSocialMediaChange('facebook')}
                    className={`flex items-center justify-center p-3 rounded-lg border ${
                      formData.socialMedia.includes('facebook')
                        ? 'bg-blue-700 border-blue-500'
                        : 'bg-blue-900/40 border-blue-700'
                    } transition-colors`}
                  >
                    <Facebook size={20} className='mr-2 text-blue-300' />
                    <span>Facebook</span>
                  </button>

                  <button
                    type='button'
                    onClick={() => handleSocialMediaChange('instagram')}
                    className={`flex items-center justify-center p-3 rounded-lg border ${
                      formData.socialMedia.includes('instagram')
                        ? 'bg-blue-700 border-blue-500'
                        : 'bg-blue-900/40 border-blue-700'
                    } transition-colors`}
                  >
                    <Instagram size={20} className='mr-2 text-blue-300' />
                    <span>Instagram</span>
                  </button>

                  <button
                    type='button'
                    onClick={() => handleSocialMediaChange('website')}
                    className={`flex items-center justify-center p-3 rounded-lg border ${
                      formData.socialMedia.includes('website')
                        ? 'bg-blue-700 border-blue-500'
                        : 'bg-blue-900/40 border-blue-700'
                    } transition-colors`}
                  >
                    <Globe size={20} className='mr-2 text-blue-300' />
                    <span>Website</span>
                  </button>

                  <button
                    type='button'
                    onClick={() => handleSocialMediaChange('whatsapp')}
                    className={`flex items-center justify-center p-3 rounded-lg border ${
                      formData.socialMedia.includes('whatsapp')
                        ? 'bg-blue-700 border-blue-500'
                        : 'bg-blue-900/40 border-blue-700'
                    } transition-colors`}
                  >
                    <Smartphone size={20} className='mr-2 text-blue-300' />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-yellow-400'>
              Business Needs
            </h3>
            <div className='space-y-4'>
              <div>
                <label className='block text-white mb-2 font-medium'>
                  Which services are you interested in?
                </label>
                <div className='space-y-2'>
                  <div
                    htmlFor='landing-page'
                    className='flex items-center bg-blue-900/40 p-3 rounded-lg border border-blue-700'
                  >
                    <input
                      type='checkbox'
                      id='landing-page'
                      name='landingPage'
                      checked={formData.services.includes('landingPage')}
                      onChange={handleCheckboxChange}
                      className='h-5 w-5 text-yellow-500 border-blue-700 rounded focus:ring-yellow-500'
                    />
                    <label htmlFor='landing-page' className='ml-3 text-white'>
                      Custom Landing Page
                    </label>
                  </div>

                  <div
                    htmlFor='google-business'
                    className='flex items-center bg-blue-900/40 p-3 rounded-lg border border-blue-700'
                  >
                    <input
                      type='checkbox'
                      id='google-business'
                      name='googleBusiness'
                      checked={formData.services.includes('googleBusiness')}
                      onChange={handleCheckboxChange}
                      className='h-5 w-5 text-yellow-500 border-blue-700 rounded focus:ring-yellow-500'
                    />
                    <label
                      htmlFor='google-business'
                      className='ml-3 text-white'
                    >
                      Google My Business Profile
                    </label>
                  </div>

                  <div
                    htmlFor='promo-video'
                    className='flex items-center bg-blue-900/40 p-3 rounded-lg border border-blue-700'
                  >
                    <input
                      type='checkbox'
                      id='promo-video'
                      name='promoVideo'
                      checked={formData.services.includes('promoVideo')}
                      onChange={handleCheckboxChange}
                      className='h-5 w-5 text-yellow-500 border-blue-700 rounded focus:ring-yellow-500'
                    />
                    <label htmlFor='promo-video' className='ml-3 text-white'>
                      1-Minute Promo Video
                    </label>
                  </div>

                  <div
                    htmlFor='complete-package'
                    className='flex items-center bg-blue-900/40 p-3 rounded-lg border border-blue-700'
                  >
                    <input
                      type='checkbox'
                      id='complete-package'
                      name='completePackage'
                      checked={formData.services.includes('completePackage')}
                      onChange={handleCheckboxChange}
                      className='h-5 w-5 text-yellow-500 border-blue-700 rounded focus:ring-yellow-500'
                    />
                    <label
                      htmlFor='complete-package'
                      className='ml-3 text-white'
                    >
                      Complete Business Booster Package (All Services)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-yellow-400'>
              Additional Information
            </h3>
            <div className='space-y-4'>
              <div>
                <label className='block text-white mb-2 font-medium'>
                  Tell us more about your business and what you need
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows='4'
                  className='w-full py-3 px-4 bg-blue-900/40 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white'
                  placeholder='Tell us about your business goals, target audience, and any specific requirements...'
                ></textarea>
              </div>

              <div>
                <label className='block text-white mb-2 font-medium'>
                  How did you hear about us?
                </label>
                <div className='relative'>
                  <select
                    name='referralSource'
                    value={formData.referralSource}
                    onChange={handleInputChange}
                    className='w-full py-3 pl-4 pr-4 bg-blue-900/40 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white appearance-none'
                  >
                    <option value=''>Select an option</option>
                    <option value='google'>Google Search</option>
                    <option value='facebook'>Facebook</option>
                    <option value='instagram'>Instagram</option>
                    <option value='friend'>Friend or Colleague</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return <SuccessPage />;
  }

  return (
    <div
      className='relative bg-gradient-to-br from-blue-950 to-indigo-950 text-white py-16 lg:py-24 overflow-hidden'
      id='contact'
    >
      {/* Enhanced decorative elements */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl'></div>
        <div className='absolute bottom-40 right-10 w-64 h-64 rounded-full bg-indigo-500 blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12'>
          <div className='inline-block py-1 px-4 rounded-full text-sm font-bold bg-blue-700 text-white mb-4'>
            REGISTER NOW
          </div>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
            Transform Your Business's{' '}
            <span className='text-yellow-400'>Online Presence</span>
          </h2>
          <p className='text-xl text-blue-200 max-w-3xl mx-auto'>
            Fill out the form below to get started with our Business Booster
            Kit. We'll contact you within 24 hours to discuss your custom
            solution.
          </p>
        </div>

        <div className='max-w-4xl mx-auto bg-blue-900/50 rounded-2xl backdrop-blur-sm shadow-xl overflow-hidden'>
          <div className='p-6 md:p-10'>
            <div className='mb-8'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold'>Register Your Business</h3>
                <div className='text-sm text-blue-300'>
                  Step {formStep + 1} of {totalSteps}
                </div>
              </div>

              {/* Progress bar */}
              <div className='w-full bg-blue-900 rounded-full h-2.5 mb-6'>
                <div
                  className='bg-yellow-500 h-2.5 rounded-full transition-all duration-300'
                  style={{ width: `${((formStep + 1) / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <div>
              {renderFormStep()}

              <div className='mt-8 flex justify-between'>
                {formStep > 0 && (
                  <button
                    type='button'
                    onClick={prevStep}
                    className='py-3 px-6 bg-blue-800 hover:bg-blue-700 rounded-lg transition flex items-center'
                  >
                    <ChevronRight size={20} className='mr-2 rotate-180' />
                    Back
                  </button>
                )}

                {formStep < totalSteps - 1 ? (
                  <button
                    type='button'
                    onClick={nextStep}
                    className='py-3 px-6 bg-blue-700 hover:bg-blue-600 rounded-lg transition flex items-center ml-auto'
                  >
                    Next
                    <ChevronRight size={20} className='ml-2' />
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={handleSubmit}
                    className='group py-3 px-8 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold rounded-lg transition flex items-center ml-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  >
                    Submit Application
                    <Send
                      size={20}
                      className='ml-2 group-hover:translate-x-1 transition-transform'
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-blue-900/30 p-6 rounded-xl border border-blue-800/50 text-center md:text-left transform hover:scale-105 transition duration-300'>
            <div className='flex items-center justify-center md:justify-start'>
              <div className='w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mb-4'>
                <Phone size={24} className='text-yellow-400' />
              </div>
            </div>
            <h3 className='text-xl font-bold mb-2'>Call Us</h3>
            <p className='text-blue-200 mb-2'>
              Have questions? Call us directly
            </p>
            <a
              href='tel:+2348000000000'
              className='text-white font-bold hover:text-yellow-400 transition'
            >
              +234 814 8434 507
            </a>
          </div>

          <div className='bg-blue-900/30 p-6 rounded-xl border border-blue-800/50 text-center md:text-left transform hover:scale-105 transition duration-300'>
            <div className='flex items-center justify-center md:justify-start'>
              <div className='w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mb-4'>
                <Mail size={24} className='text-yellow-400' />
              </div>
            </div>
            <h3 className='text-xl font-bold mb-2'>Email Us</h3>
            <p className='text-blue-200 mb-2'>Send us an email anytime</p>
            <a
              href='mailto:info@businessboosterkit.com'
              className='text-white font-bold hover:text-yellow-400 transition'
            >
              info@findmeinnigeria.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
