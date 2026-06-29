import { useTranslation } from '../i18n/LanguageContext';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="px-4 py-20 md:py-32 bg-white"
      data-testid="landing-section-about"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-10 tracking-tight"
          data-testid="about-heading"
        >
          {t.about.heading}
        </h2>

        <div className="space-y-6 mb-12" data-testid="about-body">
          <p className="text-lg text-[#666666] leading-relaxed">
            {t.about.para1}
          </p>

          <p className="text-lg text-[#666666] leading-relaxed">
            {t.about.para2Start}
            <span className="font-medium text-[#0A0A0A]">{t.about.para2Highlight}</span>
            {t.about.para2End}
          </p>

          <p className="text-lg text-[#666666] leading-relaxed">
            {t.about.para3Start}
            <span className="font-medium text-[#0A0A0A]">{t.about.para3Highlight}</span>
            {t.about.para3End}
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2"
          data-testid="about-tags"
        >
          {t.about.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-[#FAFAFA] border border-[#E5E5E5] text-[#0A0A0A] rounded-lg text-sm font-medium"
              data-testid={`about-tag-${tag.toLowerCase().replace(/[\s–]+/g, '-')}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
