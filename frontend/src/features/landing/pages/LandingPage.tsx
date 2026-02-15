import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SocialDock } from '../components/SocialDock';
import { LeadCaptureModal } from '../components/LeadCaptureModal';
import { ContentSections } from '../components/ContentSections';

export const LandingPage = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleDownloadResume = () => {
    // TODO: Replace with actual resume PDF path
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Gabriel_Volponi_Resume.pdf';
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
