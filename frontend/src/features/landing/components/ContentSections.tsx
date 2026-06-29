import { Calendar, Building2, Sparkles, Zap, Brain, Code2, Workflow, FileCheck, GitBranch } from 'lucide-react';
import { StackSection } from './StackSection';
import { CertificatesSection } from './CertificatesSection';
import { useTranslation } from '../i18n/LanguageContext';

const technologies = [
  'AI-Native Testing', 'LLM-Powered QA', 'Self-Healing Tests', 'Autonomous Agents',
  'React', 'TypeScript', 'JavaScript', 'Frontend Development',
  'Cypress', 'Playwright', 'Robot Framework', 'Appium',
  'Test Generation AI', 'k6', 'Performance Testing', 'Security Testing',
  'CI/CD Automation', 'GitLab', 'AWS', 'Python'
];

const aiCapabilityIcons = [Brain, Zap, Sparkles] as const;
const aiCapabilityTestIds = ['ai-capability-llm', 'ai-capability-self-healing', 'ai-capability-agentic'] as const;

export const ContentSections = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Meta-Demo Section: This Page is Built with AI-Native Architecture */}
      <section
        className="px-4 py-20 md:py-32 bg-linear-to-b from-[#FAFAFA] to-white relative overflow-hidden"
        data-testid="landing-section-meta-demo"
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#0A0A0A]" />
            <span className="text-sm font-medium text-[#0A0A0A]">{t.metaDemo.badge}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-[#0A0A0A] mb-8 leading-tight">
            {t.metaDemo.heading}
          </h2>
          <p className="text-xl text-[#666666] mb-16 leading-relaxed">
            {t.metaDemo.subtitle}
          </p>

          {/* Architecture Flow */}
          <div className="space-y-6">
            {/* Step 1: Prompt Engineering & RAG */}
            <div
              className="group relative rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-lg p-6 md:p-8 hover:bg-white/80 transition-all duration-300"
              data-testid="meta-demo-step-prompt-engineering"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#0A0A0A] to-[#333333] flex items-center justify-center shadow-lg">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0A0A0A] mb-3">
                    {t.metaDemo.step1.heading}
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    {t.metaDemo.step1.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Context Injection
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Design System RAG
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Codebase Memory
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Agentic Test Planning */}
            <div
              className="group relative rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-lg p-6 md:p-8 hover:bg-white/80 transition-all duration-300"
              data-testid="meta-demo-step-test-planning"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#0A0A0A] to-[#333333] flex items-center justify-center shadow-lg">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0A0A0A] mb-3">
                    {t.metaDemo.step2.heading}
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    {t.metaDemo.step2.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      E2E Scenarios
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      A11y Checks
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Visual Regression
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Performance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Playwright Automation */}
            <div
              className="group relative rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-lg p-6 md:p-8 hover:bg-white/80 transition-all duration-300"
              data-testid="meta-demo-step-playwright-automation"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#0A0A0A] to-[#333333] flex items-center justify-center shadow-lg">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0A0A0A] mb-3">
                    {t.metaDemo.step3.heading}
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    {t.metaDemo.step3.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Self-Healing Selectors
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Zero-Config Setup
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Parallel Execution
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: CI/CD Integration */}
            <div
              className="group relative rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-lg p-6 md:p-8 hover:bg-white/80 transition-all duration-300"
              data-testid="meta-demo-step-cicd"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#0A0A0A] to-[#333333] flex items-center justify-center shadow-lg">
                    <GitBranch className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0A0A0A] mb-3">
                    {t.metaDemo.step4.heading}
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    {t.metaDemo.step4.descriptionPre}
                    <code className="px-2 py-0.5 bg-[#0A0A0A]/5 rounded text-sm font-mono">develop</code>
                    {t.metaDemo.step4.descriptionPost}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      GitHub Actions
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      HTML Reports
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Trace Artifacts
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                      Auto-Deployment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-[#0A0A0A] font-medium mb-4">
              {t.metaDemo.closingStatement}
            </p>
            <p className="text-[#666666] max-w-2xl mx-auto mb-8">
              {t.metaDemo.closingDescription}
            </p>

            {/* Built by Qowi Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg">
              <span className="text-sm text-[#666666]">{t.metaDemo.builtBy}</span>
              <img
                src="/logo.png"
                alt="Qowi"
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI-Native Capabilities Section */}
      <section
        className="px-4 py-20 md:py-32 bg-white"
        data-testid="landing-section-ai-capabilities"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-8">
            {t.aiCapabilities.heading}
          </h2>
          <p className="text-lg text-[#666666] mb-16 leading-relaxed">
            {t.aiCapabilities.subtitle}
          </p>

          <div className="space-y-12">
            {t.aiCapabilities.items.map((capability, index) => {
              const Icon = aiCapabilityIcons[index];
              return (
                <div
                  key={index}
                  className="flex gap-6"
                  data-testid={aiCapabilityTestIds[index]}
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-[#0A0A0A] mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="px-4 py-20 md:py-32"
        data-testid="landing-section-experience"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-16">
            {t.experience.heading}
          </h2>

          <div className="space-y-12">
            {t.experience.items.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-[#E5E5E5] pl-6 pb-6"
                data-testid={exp.testId}
              >
                <div className="mb-3">
                  <h3 className="text-xl md:text-2xl font-medium text-[#0A0A0A] mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[#666666]">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#666666] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        className="px-4 py-20 md:py-32 bg-white"
        data-testid="landing-section-technologies"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-8">
            {t.technologies.heading}
          </h2>
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            {t.technologies.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="
                  px-4 py-2
                  bg-[#FAFAFA]
                  border border-[#E5E5E5]
                  text-[#0A0A0A]
                  rounded-lg
                  text-sm font-medium
                  hover:bg-[#F5F5F5]
                  transition-colors duration-200
                "
                data-testid={`tech-badge-${tech.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <StackSection />

      {/* Education Section */}
      <section
        className="px-4 py-20 md:py-32"
        data-testid="landing-section-education"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-16">
            {t.education.heading}
          </h2>

          <div className="space-y-8">
            {t.education.items.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-[#E5E5E5] pl-6"
                data-testid={edu.testId}
              >
                <h3 className="text-xl md:text-2xl font-medium text-[#0A0A0A] mb-1">
                  {edu.degree}
                </h3>
                <p className="text-[#666666] mb-2">{edu.institution}</p>
                <p className="text-[#666666] text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Footer */}
      <footer
        className="px-4 py-16 bg-white border-t border-[#E5E5E5]"
        data-testid="landing-footer"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Qowi"
                className="h-10 w-auto object-contain"
              />
              <div>
                <p className="text-lg font-semibold text-[#0A0A0A]">Qowi</p>
                <p className="text-sm text-[#666666]">{t.footer.tagline}</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-[#666666]">
                {t.footer.copyright(new Date().getFullYear())}
              </p>
              <p className="text-xs text-[#999999] mt-1">
                {t.footer.builtWith}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
