import { Download, MessageCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';

interface HeaderProps {
  onDownloadResume: () => void;
  onOpenLeadModal: () => void;
}

export const Header = ({ onDownloadResume, onOpenLeadModal }: HeaderProps) => {
  const { t, lang, setLang } = useTranslation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/30 shadow-lg shadow-black/5"
      data-testid="landing-header"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center" data-testid="header-logo">
          <img
            src="/logo_transparent.png"
            alt="Qowi"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div
            role="group"
            aria-label={t.header.langToggleAriaLabel}
            data-testid="header-language-toggle"
            className="flex items-center bg-white/50 backdrop-blur-md border border-white/60 rounded-xl p-0.5 shadow-sm"
          >
            {(['en', 'pt'] as const).map((l: Language) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                data-testid={`header-language-toggle-${l}`}
                className={[
                  'px-3 py-1.5 rounded-lg text-sm font-medium',
                  'transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]/20',
                  lang === l
                    ? 'bg-[#0A0A0A] text-white shadow-sm'
                    : 'text-[#666666] hover:text-[#0A0A0A]',
                ].join(' ')}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenLeadModal}
            data-testid="header-button-contact"
            aria-label={t.header.contactAriaLabel}
            className="
              hidden sm:flex
              px-4 py-2.5
              bg-white/50 backdrop-blur-md
              border border-white/60
              rounded-xl
              text-[#0A0A0A] font-medium
              hover:bg-white/70 hover:border-white/80
              focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]/20
              transition-all duration-200
              items-center gap-2
              shadow-sm
            "
          >
            <MessageCircle className="w-4 h-4" />
            {t.header.contactButton}
          </button>

          <button
            onClick={onDownloadResume}
            data-testid="header-button-resume"
            aria-label={t.header.resumeAriaLabel}
            className="
              px-4 py-2.5
              bg-[#0A0A0A]/90 backdrop-blur-md
              text-white font-medium
              rounded-xl
              hover:bg-[#0A0A0A]
              focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2
              transition-all duration-200
              flex items-center gap-2
              shadow-lg shadow-black/10
            "
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t.header.resumeButton}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
