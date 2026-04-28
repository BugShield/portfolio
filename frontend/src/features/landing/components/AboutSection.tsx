const tags = [
  'Physics – USP',
  'QA Lead',
  'Test Automation',
  'AI-native Testing',
  'AI-native Development',
];

export const AboutSection = () => {
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
          About Me
        </h2>

        <div className="space-y-6 mb-12" data-testid="about-body">
          <p className="text-lg text-[#666666] leading-relaxed">
            I hold a Physics Teaching degree from USP (5 years). During that time I grew
            interested in programming, and in 2019 I moved officially into tech. Since then
            I've worked across web, mobile, and hybrid projects with a strong focus on test
            automation — UI, API, and integrity testing.
          </p>

          <p className="text-lg text-[#666666] leading-relaxed">
            In recent years I worked as <span className="font-medium text-[#0A0A0A]">QA Lead</span>,
            managing QA teams, reviewing merges, and keeping the team's codebase healthy.
          </p>

          <p className="text-lg text-[#666666] leading-relaxed">
            Over the past year and a half I've been directing my studies toward{' '}
            <span className="font-medium text-[#0A0A0A]">AI applied to software engineering</span>,
            deepening into AI-native testing and AI-native development. I've been using
            automation fundamentals with AI to build quality workflows inside projects —
            combining agents, versioned prompts, assisted test-case generation, and
            deterministic validations — with the goal of reducing rework, expanding
            coverage, and accelerating delivery cycles without sacrificing reliability.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2"
          data-testid="about-tags"
        >
          {tags.map((tag) => (
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
