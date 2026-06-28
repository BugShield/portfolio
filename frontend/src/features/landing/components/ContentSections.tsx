import { Calendar, Building2, Sparkles, Zap, Brain, Code2, Workflow, FileCheck, GitBranch } from 'lucide-react';
import { StackSection } from './StackSection';
import { CertificatesSection } from './CertificatesSection';

const experiences = [
  {
    role: 'Founder & Lead Engineer',
    company: 'Qowi',
    period: '2025 - Present',
    description: 'Building AI-native testing solutions and modern web applications as an independent consultant. Specializing in self-healing test automation, LLM-powered QA agents, and frontend development with React/TypeScript. Architecting autonomous quality systems and delivering software house services.',
    testId: 'experience-qowi'
  },
  {
    role: 'QA Lead Coordinator',
    company: 'VIDI',
    period: 'Feb 2025 - Present',
    description: 'Coordinating AI-enhanced automated testing for web and mobile applications. Implementing intelligent test generation with Cypress, Robot Framework, and Appium. Leading performance testing, integrity validation, and security analysis with focus on AI-driven approaches.',
    testId: 'experience-vidi-current'
  },
  {
    role: 'QA Leader (Consulting)',
    company: 'igc partners',
    period: 'Nov 2024 - Feb 2025',
    description: 'Led AI-driven testing pipeline transformation. Implemented intelligent test automation for frontend/backend using Cypress, Robot Framework, Appium. Conducted performance testing with k6 and pentesting for security.',
    testId: 'experience-igc'
  },
  {
    role: 'Coordinator of Automated Testing',
    company: 'AutoForce',
    period: 'Aug 2022 - Nov 2023',
    description: 'Introduced AI-assisted quality culture and CI/CD practices. Built self-maintaining E2E automation framework with Cypress, API testing automation, and performance testing infrastructure. Established quality-first architecture.',
    testId: 'experience-autoforce'
  }
];

const technologies = [
  'AI-Native Testing', 'LLM-Powered QA', 'Self-Healing Tests', 'Autonomous Agents',
  'React', 'TypeScript', 'JavaScript', 'Frontend Development',
  'Cypress', 'Playwright', 'Robot Framework', 'Appium',
  'Test Generation AI', 'k6', 'Performance Testing', 'Security Testing',
  'CI/CD Automation', 'GitLab', 'AWS', 'Python'
];

const aiCapabilities = [
  {
    icon: Brain,
    title: 'LLM-Powered Test Generation',
    description: 'Autonomous test creation using GPT-4 and Claude to generate comprehensive test scenarios from requirements.',
    testId: 'ai-capability-llm'
  },
  {
    icon: Zap,
    title: 'Self-Healing Test Automation',
    description: 'AI-driven selector adaptation that automatically fixes broken tests when UI elements change, eliminating maintenance overhead.',
    testId: 'ai-capability-self-healing'
  },
  {
    icon: Sparkles,
    title: 'Agentic QA Systems',
    description: 'Multi-agent orchestration for intelligent test execution, visual regression detection, and predictive failure analysis.',
    testId: 'ai-capability-agentic'
  }
];

export const ContentSections = () => {
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
            <span className="text-sm font-medium text-[#0A0A0A]">Meta-Demonstration</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-[#0A0A0A] mb-8 leading-tight">
            This page was built using AI-Native architecture.
          </h2>
          <p className="text-xl text-[#666666] mb-16 leading-relaxed">
            A living demonstration of intelligent development workflows. Every feature you see here—from design to deployment—was orchestrated by autonomous AI agents with zero manual testing.
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
                    Prompt Engineering & RAG-Powered Development
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    Advanced prompt orchestration combined with Retrieval-Augmented Generation (RAG) manages the entire web development lifecycle. Context-aware AI pulls requirements, design tokens, and architectural patterns to generate production-ready React components.
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
                    Agent 1: Autonomous Test Strategy Generation
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    First AI agent analyzes the codebase and generates comprehensive test plans covering E2E scenarios, accessibility validation, visual regression, performance benchmarks, and edge cases. No manual test writing required.
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
                    Agent 2: Playwright Test Automation
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    Second AI agent translates test strategies into executable Playwright scripts with intelligent selectors, auto-healing locators, and comprehensive assertions. Executes full test suite on first run with zero flakiness.
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
                    Continuous Quality: Auto-Reports on Every Push
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    Every push to <code className="px-2 py-0.5 bg-[#0A0A0A]/5 rounded text-sm font-mono">develop</code> triggers the full test suite. AI-generated reports with screenshots, performance metrics, and accessibility scores are published automatically. Zero manual QA involvement.
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
              This is the future of quality engineering.
            </p>
            <p className="text-[#666666] max-w-2xl mx-auto mb-8">
              Traditional QA teams spend weeks planning and writing tests. With AI-Native architecture, we architect autonomous quality ecosystems that scale instantly and self-heal continuously.
            </p>
            
            {/* Built by Qowi Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg">
              <span className="text-sm text-[#666666]">Built by</span>
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
            AI-Native Quality Engineering
          </h2>
          <p className="text-lg text-[#666666] mb-16 leading-relaxed">
            Leveraging cutting-edge AI technologies to build intelligent testing systems that scale autonomously.
          </p>

          <div className="space-y-12">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="flex gap-6"
                data-testid={capability.testId}
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-white" />
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
            ))}
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
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
            Technologies & Expertise
          </h2>
          <p className="text-lg text-[#666666] mb-12 leading-relaxed">
            Specializing in AI-driven quality engineering and modern web development. 
            Building intelligent testing systems that learn, adapt, and self-heal.
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
            Education
          </h2>

          <div className="space-y-8">
            <div
              className="border-l-2 border-[#E5E5E5] pl-6"
              data-testid="education-infnet"
            >
              <h3 className="text-xl md:text-2xl font-medium text-[#0A0A0A] mb-1">
                Bachelor's in Software Analysis and Development
              </h3>
              <p className="text-[#666666] mb-2">Instituto Infnet</p>
              <p className="text-[#666666] text-sm">2025 - 2027 (In Progress)</p>
            </div>

            <div
              className="border-l-2 border-[#E5E5E5] pl-6"
              data-testid="education-usp"
            >
              <h3 className="text-xl md:text-2xl font-medium text-[#0A0A0A] mb-1">
                Physics Teaching Degree
              </h3>
              <p className="text-[#666666] mb-2">Universidade de São Paulo (USP)</p>
              <p className="text-[#666666] text-sm">5 years completed</p>
            </div>
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
                <p className="text-sm text-[#666666]">AI-Native Quality Engineering</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-[#666666]">
                © {new Date().getFullYear()} Qowi. All rights reserved.
              </p>
              <p className="text-xs text-[#999999] mt-1">
                Built with AI-Native Architecture
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
