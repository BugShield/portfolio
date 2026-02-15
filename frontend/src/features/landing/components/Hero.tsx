import { Download, MessageCircle, MapPin } from 'lucide-react';

interface HeroProps {
  onDownloadResume: () => void;
  onOpenLeadModal: () => void;
}

export const Hero = ({ onDownloadResume, onOpenLeadModal }: HeroProps) => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-32 md:py-40 relative overflow-hidden"
      data-testid="landing-section-hero"
    >
      {/* Hero Logo - Subtle Background */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-5 pointer-events-none">
        <img 
          src="/logo.png" 
          alt="" 
          className="h-64 w-auto object-contain"
        />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Name & Location */}
        <div className="mb-8">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-semibold text-[#0A0A0A] mb-4 tracking-tight"
            data-testid="hero-headline"
          >
            Gabriel Volponi
          </h1>
          <div className="flex items-center gap-2 text-[#666666] text-lg">
            <MapPin className="w-4 h-4" />
            <span>São Paulo, Brazil</span>
          </div>
        </div>

        {/* Role & Company */}
        <div className="mb-12 space-y-3">
          <p className="text-2xl md:text-3xl text-[#0A0A0A] font-medium leading-relaxed">
            AI-Native QA Engineer & Frontend Developer
          </p>
          <p className="text-xl md:text-2xl text-[#666666] leading-relaxed">
            Founder at <span className="text-[#0A0A0A]">BugShield</span> · Software House
          </p>
        </div>

        {/* About */}
        <div className="mb-16 max-w-3xl">
          <p className="text-lg text-[#666666] leading-relaxed">
            Building AI-native testing infrastructure with self-healing test automation, LLM-powered test generation, and agentic QA systems. 
            Specializing in frontend development and autonomous quality engineering with 6+ years transforming traditional QA into intelligent, zero-maintenance pipelines.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onOpenLeadModal}
            data-testid="hero-button-get-in-touch"
            aria-label="Get in touch"
            className="
              px-8 py-3.5 
              bg-[#0A0A0A]
              text-white font-medium 
              rounded-lg
              hover:bg-[#1A1A1A]
              focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2
              transition-all duration-200
              flex items-center justify-center gap-2
            "
          >
            <MessageCircle className="w-5 h-5" />
            Get in Touch
          </button>

          <button
            onClick={onDownloadResume}
            data-testid="hero-button-download-resume"
            aria-label="Download Resume"
            className="
              px-8 py-3.5 
              bg-white
              border border-[#E5E5E5]
              text-[#0A0A0A] font-medium 
              rounded-lg
              hover:bg-[#FAFAFA]
              hover:border-[#CCCCCC]
              focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2
              transition-all duration-200
              flex items-center justify-center gap-2
            "
          >
            <Download className="w-5 h-5" />
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};
