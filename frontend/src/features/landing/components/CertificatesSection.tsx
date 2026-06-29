import { useState, useEffect } from 'react';
import { BrainCircuit, Bot, ShieldCheck, Award, Building2, ExternalLink, Eye, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface Certificate {
  name: string;
  issuer: string;
  url?: string;
  // Drop the file in frontend/public/certificates/ and reference it as '/certificates/filename.png'
  certificateFile?: string;
}

interface CategoryConfig {
  id: string;
  icon: React.ReactNode;
  items: Certificate[];
}

// ---------------------------------------------------------------------------
// DATA — replace placeholders with real data when available.
// To add a certificate image: copy the file to frontend/public/certificates/
// and set certificateFile: '/certificates/your-file.png' (or .jpg / .pdf)
// ---------------------------------------------------------------------------
const categoryConfig: CategoryConfig[] = [
  {
    id: 'anthropic',
    icon: <BrainCircuit className="w-7 h-7" />,
    items: [
      {
        name: 'Claude 101',
        issuer: 'Anthropic',
        // certificateFile: '/certificates/anthropic-claude-101.png',
      },
      {
        name: 'Claude Code 101',
        issuer: 'Anthropic',
        // certificateFile: '/certificates/anthropic-claude-code-101.png',
      },
    ],
  },
  {
    id: 'other-ai',
    icon: <Bot className="w-7 h-7" />,
    items: [
      {
        name: 'PLACEHOLDER – Certificate Name',
        issuer: 'TBD',
        // certificateFile: '/certificates/other-ai-example.png',
      },
    ],
  },
  {
    id: 'qa',
    icon: <ShieldCheck className="w-7 h-7" />,
    items: [
      {
        name: 'PLACEHOLDER – Certificate Name',
        issuer: 'TBD',
        // certificateFile: '/certificates/qa-example.png',
      },
    ],
  },
  {
    id: 'others',
    icon: <Award className="w-7 h-7" />,
    items: [
      {
        name: 'PLACEHOLDER – Certificate Name',
        issuer: 'TBD',
        // certificateFile: '/certificates/others-example.png',
      },
    ],
  },
];

// ---------------------------------------------------------------------------

const isPdf = (path: string) => path.toLowerCase().endsWith('.pdf');

interface CertificateModalProps {
  cert: Certificate;
  onClose: () => void;
}

const CertificateModal = ({ cert, onClose }: CertificateModalProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      data-testid="certificate-modal"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-md border border-black/5 rounded-2xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={cert.name}
        data-testid="certificate-modal-card"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
          <div>
            <p className="font-semibold text-[#0A0A0A]">{cert.name}</p>
            <p className="text-sm text-[#666666]">{cert.issuer} </p>
          </div>
          <button
            onClick={onClose}
            aria-label={t.certificates.closeCertAriaLabel}
            data-testid="certificate-modal-close"
            className="
              w-9 h-9 rounded-lg flex items-center justify-center
              text-[#666666] hover:text-[#0A0A0A] hover:bg-[#F5F5F5]
              focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2
              transition-all duration-150 shrink-0
            "
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate content */}
        <div className="p-4 bg-[#FAFAFA]">
          {cert.certificateFile && isPdf(cert.certificateFile) ? (
            <iframe
              src={cert.certificateFile}
              title={cert.name}
              className="w-full h-[65vh] rounded-lg border border-[#E5E5E5]"
              data-testid="certificate-modal-iframe"
            />
          ) : (
            <img
              src={cert.certificateFile}
              alt={cert.name}
              className="w-full max-h-[65vh] object-contain rounded-lg"
              data-testid="certificate-modal-image"
            />
          )}
        </div>

        {/* Footer — optional verify link */}
        {cert.url && (
          <div className="px-6 py-4 border-t border-[#E5E5E5] flex justify-end">
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#0A0A0A] underline underline-offset-2 hover:opacity-60 transition-opacity"
              data-testid="certificate-modal-verify-link"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {t.certificates.verifyCertificate}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------

export const CertificatesSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewingCert, setViewingCert] = useState<Certificate | null>(null);

  const categories = categoryConfig.map((cfg, i) => ({
    ...cfg,
    label: t.certificates.categories[i].label,
    ariaLabel: t.certificates.categories[i].ariaLabel,
  }));

  const handleCategoryClick = (id: string) => {
    setActiveCategory(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !viewingCert && activeCategory !== null) {
        setActiveCategory(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeCategory, viewingCert]);

  return (
    <>
      <section
        className="px-4 py-20 md:py-32 bg-white"
        data-testid="landing-section-certificates"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-8">
            {t.certificates.heading}
          </h2>
          <p className="text-lg text-[#666666] mb-16 leading-relaxed">
            {t.certificates.subtitle}
          </p>

          {/* Category icon row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <div key={cat.id} className="relative group flex flex-col items-center">
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    aria-label={cat.ariaLabel}
                    aria-expanded={isActive}
                    aria-controls={`certificates-list-${cat.id}`}
                    data-testid={`certificates-category-${cat.id}`}
                    className={[
                      'w-16 h-16 rounded-2xl flex items-center justify-center',
                      'border transition-all duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2',
                      isActive
                        ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-lg scale-105'
                        : 'bg-[#FAFAFA] text-[#666666] border-[#E5E5E5] hover:scale-105 hover:shadow-md hover:bg-[#F5F5F5] hover:text-[#0A0A0A]',
                    ].join(' ')}
                  >
                    {cat.icon}
                  </button>

                  <span
                    role="tooltip"
                    id={`certificates-tooltip-${cat.id}`}
                    className="
                      absolute -bottom-8 left-1/2 -translate-x-1/2
                      px-2 py-1 rounded-md bg-[#0A0A0A] text-white text-xs whitespace-nowrap
                      opacity-0 pointer-events-none
                      group-hover:opacity-100 group-focus-within:opacity-100
                      transition-opacity duration-150
                      z-10
                    "
                  >
                    {cat.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Accordion panels */}
          <div className="space-y-2">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  id={`certificates-list-${cat.id}`}
                  role="region"
                  aria-label={cat.label}
                  aria-hidden={!isActive}
                  data-testid={`certificates-list-${cat.id}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 pb-8">
                      <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-4 mb-6">
                        <span className="text-[#0A0A0A]">{cat.icon}</span>
                        <h3 className="text-xl font-semibold text-[#0A0A0A]">{cat.label}</h3>
                      </div>

                      <div className="space-y-6">
                        {cat.items.map((cert, i) => (
                          <div
                            key={i}
                            className="border-l-2 border-[#E5E5E5] pl-6"
                            data-testid={`certificate-item-${cat.id}-${i}`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <p className="font-medium text-[#0A0A0A] text-lg leading-snug">
                                {cert.name}
                              </p>
                              {cert.certificateFile && (
                                <button
                                  onClick={() => setViewingCert(cert)}
                                  aria-label={t.certificates.viewCertAriaLabel(cert.name)}
                                  data-testid={`certificate-view-${cat.id}-${i}`}
                                  className="
                                    shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                                    text-[#999999] border border-[#E5E5E5] bg-[#FAFAFA]
                                    hover:text-[#0A0A0A] hover:bg-[#F5F5F5] hover:border-[#CCCCCC]
                                    focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2
                                    transition-all duration-150
                                  "
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-sm text-[#666666]">
                              <span className="flex items-center gap-1.5">
                                <Building2 className="w-4 h-4 shrink-0" />
                                {cert.issuer}
                              </span>
                            </div>
                            {cert.url && (
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-flex items-center gap-1 text-xs text-[#0A0A0A] underline underline-offset-2 hover:opacity-60 transition-opacity"
                                data-testid={`certificate-link-${cat.id}-${i}`}
                              >
                                <ExternalLink className="w-3 h-3" />
                                {t.certificates.verifyCertificate}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {viewingCert && (
        <CertificateModal cert={viewingCert} onClose={() => setViewingCert(null)} />
      )}
    </>
  );
};
