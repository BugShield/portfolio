import type { IconType } from 'react-icons';
import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMui,
  SiFirebase,
  SiPostgresql,
  SiPython,
  SiCypress,
  SiAppium,
  SiRobotframework,
  SiJunit5,
  SiPytest,
  SiK6,
  SiApachejmeter,
  SiPercy,
  SiLooker,
} from 'react-icons/si';
import { useTranslation } from '../i18n/LanguageContext';

// Playwright - official logo (two theater masks: comedy + tragedy)
const PlaywrightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.5 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM7 11c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1 .35 0 .66-.18.84-.45l.78-1.41c.28.15.58.23.88.23s.6-.08.88-.23l.78 1.41c.18.27.49.45.84.45.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-.09l-.65 1.18c-.48-.31-1.04-.5-1.67-.5s-1.19.19-1.67.5L7.09 11H7zm10 0c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1 .35 0 .66-.18.84-.45l.78-1.41c.28.15.58.23.88.23s.6-.08.88-.23l.78 1.41c.18.27.49.45.84.45.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-.09l-.65 1.18c-.48-.31-1.04-.5-1.67-.5s-1.19.19-1.67.5l-.65-1.18H17z" />
  </svg>
);

// Detox - custom (E2E mobile testing by Wix, not in simple-icons)
const DetoxIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 4h4c3.31 0 6 2.69 6 6s-2.69 6-6 6H8V4zm2 2v8h2c2.21 0 4-1.79 4-4s-1.79-4-4-4h-2z" />
  </svg>
);

const PowerBIIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.042 4.02h5.375c.318 0 .58.262.58.58v14.82c0 .318-.262.58-.58.58h-5.375a.58.58 0 0 1-.58-.58V4.6c0-.318.262-.58.58-.58zM5.71 7.71h5.375c.318 0 .58.262.58.58v10.42c0 .318-.262.58-.58.58H5.71a.58.58 0 0 1-.58-.58V8.29c0-.318.262-.58.58-.58zm12.58 0h.002c.318 0 .58.262.58.58v10.42c0 .318-.262.58-.58.58h-.002a.58.58 0 0 1-.58-.58V8.29c0-.318.262-.58.58-.58z" />
  </svg>
);

interface StackItem {
  name: string;
  icon: IconType | React.ComponentType<{ className?: string }>;
  color: string;
}

const developmentFrontend: StackItem[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', icon: SiExpo, color: '#000020' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'Material UI', icon: SiMui, color: '#007FFF' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
];

const qualityAssurance: StackItem[] = [
  { name: 'Cypress', icon: SiCypress, color: '#17202C' },
  { name: 'Playwright', icon: PlaywrightIcon, color: '#2D4555' },
  { name: 'Appium', icon: SiAppium, color: '#0D7BFF' },
  { name: 'Detox', icon: DetoxIcon, color: '#61DAFB' },
  { name: 'Robot', icon: SiRobotframework, color: '#000000' },
  { name: 'JUnit', icon: SiJunit5, color: '#25A162' },
  { name: 'pytest', icon: SiPytest, color: '#0A9EDC' },
  { name: 'k6', icon: SiK6, color: '#7D64FF' },
  { name: 'JMeter', icon: SiApachejmeter, color: '#D22128' },
  { name: 'Percy', icon: SiPercy, color: '#E6772E' },
];

const analytics: StackItem[] = [
  { name: 'Looker Studio', icon: SiLooker, color: '#4285F4' },
  { name: 'Power BI', icon: PowerBIIcon, color: '#F2C811' },
];

const StackCard = ({ item, prefix }: { item: StackItem; prefix: string }) => {
  const Icon = item.icon;
  return (
    <div
      className="group flex flex-col items-center gap-2"
      data-stack-item
      data-testid={`stack-${prefix}-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
      style={{ '--icon-color': item.color } as React.CSSProperties}
    >
      <div
        className="
          w-14 h-14 rounded-2xl
          flex items-center justify-center
          bg-[#F5F5F5] border border-[#E5E5E5]
          transition-all duration-300 ease-out
          group-hover:scale-105 group-hover:shadow-lg
        "
      >
        <Icon className="stack-icon w-7 h-7 text-[#9CA3AF] transition-colors duration-300" />
      </div>
      <span className="text-xs font-medium text-[#666666] group-hover:text-[#0A0A0A] transition-colors duration-300">
        {item.name}
      </span>
    </div>
  );
};

export const StackSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="px-4 py-20 md:py-32 bg-white stack-section"
      data-testid="landing-section-stack"
    >
      <style>{`
        .stack-section [data-stack-item]:hover .stack-icon {
          color: var(--icon-color) !important;
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-8">
          {t.stack.heading}
        </h2>
        <p className="text-lg text-[#666666] mb-16 leading-relaxed">
          {t.stack.subtitle}
        </p>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-semibold text-[#0A0A0A] mb-6">
              {t.stack.devFrontendHeading}
            </h3>
            <div className="flex flex-wrap gap-6">
              {developmentFrontend.map((item) => (
                <StackCard key={item.name} item={item} prefix="dev" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0A0A0A] mb-6">
              {t.stack.qaHeading}
            </h3>
            <div className="flex flex-wrap gap-6">
              {qualityAssurance.map((item) => (
                <StackCard key={item.name} item={item} prefix="qa" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0A0A0A] mb-6">
              {t.stack.analyticsHeading}
            </h3>
            <div className="flex flex-wrap gap-6">
              {analytics.map((item) => (
                <StackCard key={item.name} item={item} prefix="analytics" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
