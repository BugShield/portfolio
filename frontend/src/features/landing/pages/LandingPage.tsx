import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { SocialDock } from '../components/SocialDock';
import { LeadCaptureModal } from '../components/LeadCaptureModal';
import { ContentSections } from '../components/ContentSections';
import { useTranslation } from '../i18n/LanguageContext';

const RESUME_FILE_NAMES = {
  en: 'Gabriel_Volponi_Resume_EN.pdf',
  pt: 'Gabriel_Volponi_Curriculo_PT.pdf',
} as const;

export const LandingPage = () => {
  const { lang } = useTranslation();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = `/resume-${lang}.pdf`;
    link.download = RESUME_FILE_NAMES[lang];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenLeadModal = () => {
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <Header
        onDownloadResume={handleDownloadResume}
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* Content */}
      <div className="relative z-10 pt-16">
        <Hero
          onDownloadResume={handleDownloadResume}
          onOpenLeadModal={handleOpenLeadModal}
        />
        <AboutSection />
        <ContentSections />
      </div>

      {/* Fixed Elements */}
      <SocialDock />
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={handleCloseLeadModal}
      />
    </main>
  );
};
