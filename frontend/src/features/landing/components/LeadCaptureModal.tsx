import { useState } from 'react';
import { X, Check } from 'lucide-react';
import type { LeadFormData } from '../types';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inquiryOptions = [
  'QA Leadership & Consulting',
  'Test Automation Strategy',
  'Team Training',
  'Performance & Security Testing',
  'Speaking Engagement',
  'Other',
];

export const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    inquiry: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    console.log('Lead captured:', formData);
    setIsSubmitted(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', inquiry: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      data-testid="lead-modal-overlay"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card - Subtle Glassmorphism */}
      <div
        className="
          relative z-10 
          w-full max-w-md
          bg-white/95 backdrop-blur-md
          border border-black/5
          rounded-2xl 
          shadow-2xl
          p-8
        "
        data-testid="lead-modal-card"
      >
        {/* Logo Badge */}
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/logo.png" 
            alt="BugShield" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          data-testid="lead-modal-button-close"
          aria-label="Close modal"
          className="
            absolute top-4 right-4
            w-10 h-10
            rounded-lg
            flex items-center justify-center
            text-[#666666]
            hover:bg-black/5
            focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]
            transition-all duration-200
          "
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-8 text-center">
              <h2
                className="text-3xl font-semibold text-[#0A0A0A] mb-3"
                data-testid="lead-modal-title"
              >
                Strategy Sync
              </h2>
              <p className="text-[#666666] leading-relaxed">
                Let's architect autonomous quality systems that scale.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} data-testid="lead-modal-form">
              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#0A0A0A] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="lead-modal-input-name"
                    className="
                      w-full px-4 py-3
                      bg-white
                      border border-[#E5E5E5]
                      rounded-lg
                      text-[#0A0A0A] placeholder-[#999999]
                      focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent
                      transition-all duration-200
                    "
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0A0A0A] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    data-testid="lead-modal-input-email"
                    className="
                      w-full px-4 py-3
                      bg-white
                      border border-[#E5E5E5]
                      rounded-lg
                      text-[#0A0A0A] placeholder-[#999999]
                      focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent
                      transition-all duration-200
                    "
                    placeholder="you@company.com"
                  />
                </div>

                {/* Inquiry Dropdown */}
                <div>
                  <label
                    htmlFor="inquiry"
                    className="block text-sm font-medium text-[#0A0A0A] mb-2"
                  >
                    How can I help?
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    value={formData.inquiry}
                    onChange={handleChange}
                    data-testid="lead-modal-select-inquiry"
                    className="
                      w-full px-4 py-3
                      bg-white
                      border border-[#E5E5E5]
                      rounded-lg
                      text-[#0A0A0A]
                      focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent
                      transition-all duration-200
                      appearance-none
                      cursor-pointer
                    "
                  >
                    <option value="">
                      Select an option
                    </option>
                    {inquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                data-testid="lead-modal-button-submit"
                className="
                  w-full mt-8 px-6 py-3.5
                  bg-[#0A0A0A]
                  text-white font-medium
                  rounded-lg
                  hover:bg-[#1A1A1A]
                  focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2
                  transition-all duration-200
                "
              >
                Send Message
              </button>
            </form>
          </>
        ) : (
          /* Success State */
          <div
            className="text-center py-8"
            data-testid="lead-modal-success"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-2">
              Message Sent
            </h3>
            <p className="text-[#666666]">
              I'll get back to you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
