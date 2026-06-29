import { Github, Linkedin } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface SocialLink {
  name: string;
  url: string;
  Icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gabriel-volponi-a11720215/',
    Icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/gabrielVolponi',
    Icon: Github,
  },
];

export const SocialDock = () => {
  const { t } = useTranslation();

  const ariaLabelMap: Record<string, string> = {
    LinkedIn: t.social.linkedinAriaLabel,
    GitHub: t.social.githubAriaLabel,
  };

  return (
    <div
      className="fixed bottom-8 right-4 md:right-8 z-40"
      data-testid="landing-social-dock"
    >
      <div className="flex flex-col gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabelMap[social.name]}
            data-testid={`social-link-${social.name.toLowerCase()}`}
            className="
              w-11 h-11 md:w-12 md:h-12
              bg-white
              border border-[#E5E5E5]
              rounded-lg
              flex items-center justify-center
              text-[#0A0A0A]
              hover:bg-[#FAFAFA]
              hover:border-[#CCCCCC]
              focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2
              transition-all duration-200
              shadow-sm hover:shadow-md
            "
          >
            <social.Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};
