export type Language = 'en' | 'pt';

export type CertificateCategoryId = 'anthropic' | 'qa' | 'security' | 'others';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  testId: string;
}

export interface Translations {
  header: {
    contactButton: string;
    contactAriaLabel: string;
    resumeButton: string;
    resumeAriaLabel: string;
    langToggleAriaLabel: string;
  };
  hero: {
    location: string;
    role: string;
    companyPrefix: string;
    companySuffix: string;
    bio: string;
    getInTouch: string;
    getInTouchAriaLabel: string;
    downloadResume: string;
    downloadResumeAriaLabel: string;
  };
  about: {
    heading: string;
    para1: string;
    para2Start: string;
    para2Highlight: string;
    para2End: string;
    para3Start: string;
    para3Highlight: string;
    para3End: string;
    tags: readonly string[];
  };
  metaDemo: {
    badge: string;
    heading: string;
    subtitle: string;
    step1: { heading: string; description: string };
    step2: { heading: string; description: string };
    step3: { heading: string; description: string };
    step4: { heading: string; descriptionPre: string; descriptionPost: string };
    closingStatement: string;
    closingDescription: string;
    builtBy: string;
  };
  aiCapabilities: {
    heading: string;
    subtitle: string;
    items: readonly [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ];
  };
  experience: {
    heading: string;
    items: readonly ExperienceItem[];
  };
  technologies: {
    heading: string;
    subtitle: string;
  };
  stack: {
    heading: string;
    subtitle: string;
    devFrontendHeading: string;
    qaHeading: string;
    analyticsHeading: string;
  };
  education: {
    heading: string;
    items: readonly [
      { degree: string; institution: string; period: string; testId: string },
      { degree: string; institution: string; period: string; testId: string },
    ];
  };
  certificates: {
    heading: string;
    subtitle: string;
    verifyCertificate: string;
    viewCertAriaLabel: (name: string) => string;
    closeCertAriaLabel: string;
    categories: Record<CertificateCategoryId, { label: string; ariaLabel: string }>;
  };
  footer: {
    tagline: string;
    copyright: (year: number) => string;
    builtWith: string;
  };
  modal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    inquiryLabel: string;
    selectPlaceholder: string;
    inquiryOptions: readonly string[];
    submitButton: string;
    submitting: string;
    errorMessage: string;
    closeAriaLabel: string;
    successTitle: string;
    successMessage: string;
  };
  social: {
    linkedinAriaLabel: string;
    githubAriaLabel: string;
  };
}

const en: Translations = {
  header: {
    contactButton: 'Contact',
    contactAriaLabel: 'Contact',
    resumeButton: 'Resume',
    resumeAriaLabel: 'Resume',
    langToggleAriaLabel: 'Switch language',
  },
  hero: {
    location: 'São Paulo, Brazil',
    role: 'AI-Native QA Engineer & Frontend Developer',
    companyPrefix: 'Founder at',
    companySuffix: ' · Software House',
    bio: 'Building AI-native testing infrastructure with self-healing test automation, LLM-powered test generation, and agentic QA systems. Specializing in frontend development and autonomous quality engineering with 7+ years transforming traditional QA into intelligent, zero-maintenance pipelines.',
    getInTouch: 'Get in Touch',
    getInTouchAriaLabel: 'Get in touch',
    downloadResume: 'Resume',
    downloadResumeAriaLabel: 'Download Resume',
  },
  about: {
    heading: 'About Me',
    para1: 'I hold a Physics Teaching degree from USP (5 years). During that time I grew interested in programming, and in 2019 I moved officially into tech. Since then I\'ve worked across web, mobile, and hybrid projects with a strong focus on test automation — UI, API, and integrity testing.',
    para2Start: 'In recent years I worked as ',
    para2Highlight: 'QA Lead',
    para2End: ', managing QA teams, reviewing merges, and keeping the team\'s codebase healthy.',
    para3Start: 'Over the past year and a half I\'ve been directing my studies toward ',
    para3Highlight: 'AI applied to software engineering',
    para3End: ', deepening into AI-native testing and AI-native development. I\'ve been using automation fundamentals with AI to build quality workflows inside projects — combining agents, versioned prompts, assisted test-case generation, and deterministic validations — with the goal of reducing rework, expanding coverage, and accelerating delivery cycles without sacrificing reliability.',
    tags: ['Physics – USP', 'QA Lead', 'Test Automation', 'AI-native Testing', 'AI-native Development'],
  },
  metaDemo: {
    badge: 'Meta-Demonstration',
    heading: 'This page was built using AI-Native architecture.',
    subtitle: 'A living demonstration of intelligent development workflows. Every feature you see here—from design to deployment—was orchestrated by autonomous AI agents with zero manual testing.',
    step1: {
      heading: 'Prompt Engineering & RAG-Powered Development',
      description: 'Advanced prompt orchestration combined with Retrieval-Augmented Generation (RAG) manages the entire web development lifecycle. Context-aware AI pulls requirements, design tokens, and architectural patterns to generate production-ready React components.',
    },
    step2: {
      heading: 'Agent 1: Autonomous Test Strategy Generation',
      description: 'First AI agent analyzes the codebase and generates comprehensive test plans covering E2E scenarios, accessibility validation, visual regression, performance benchmarks, and edge cases. No manual test writing required.',
    },
    step3: {
      heading: 'Agent 2: Playwright Test Automation',
      description: 'Second AI agent translates test strategies into executable Playwright scripts with intelligent selectors, auto-healing locators, and comprehensive assertions. Executes full test suite on first run with zero flakiness.',
    },
    step4: {
      heading: 'Continuous Quality: Auto-Reports on Every Push',
      descriptionPre: 'Every push to ',
      descriptionPost: ' triggers the full test suite. AI-generated reports with screenshots, performance metrics, and accessibility scores are published automatically. Zero manual QA involvement.',
    },
    closingStatement: 'This is the future of quality engineering.',
    closingDescription: 'Traditional QA teams spend weeks planning and writing tests. With AI-Native architecture, we architect autonomous quality ecosystems that scale instantly and self-heal continuously.',
    builtBy: 'Built by',
  },
  aiCapabilities: {
    heading: 'AI-Native Quality Engineering',
    subtitle: 'Leveraging cutting-edge AI technologies to build intelligent testing systems that scale autonomously.',
    items: [
      {
        title: 'LLM-Powered Test Generation',
        description: 'Autonomous test creation using GPT-4 and Claude to generate comprehensive test scenarios from requirements.',
      },
      {
        title: 'Self-Healing Test Automation',
        description: 'AI-driven selector adaptation that automatically fixes broken tests when UI elements change, eliminating maintenance overhead.',
      },
      {
        title: 'Agentic QA Systems',
        description: 'Multi-agent orchestration for intelligent test execution, visual regression detection, and predictive failure analysis.',
      },
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        role: 'Founder & Lead Engineer',
        company: 'Qowi',
        period: '2025 - Present',
        description: 'Building AI-native quality engineering solutions and modern web applications. Specializing in autonomous testing, LLM-powered QA agents, and frontend development with React/TypeScript, delivering software house services.',
        testId: 'experience-qowi',
      },
      {
        role: 'Senior Quality Assurance',
        company: 'Luby',
        period: 'Jan 2026 - Present',
        description: 'Senior quality engineering on remote client projects, owning test strategy and autonomous testing across web applications.',
        testId: 'experience-luby',
      },
      {
        role: 'QA Lead | Coordinator of Automated Testing, Performance, Integrity & Security',
        company: 'VIDI',
        period: 'Feb 2025 - Jan 2026',
        description: 'Coordinated autonomous web testing (Cypress, Robot Framework/Selenium), mobile testing (Robot Framework/Appium), and data integrity validation for SSMS & Power BI (Robot Framework Database Library/SQL). Led web and mobile security testing.',
        testId: 'experience-vidi-lead',
      },
      {
        role: 'QA Leader | Business Analyst (Consulting)',
        company: 'igc partners',
        period: 'Nov 2024 - Feb 2025',
        description: 'Led the full quality pipeline: frontend/backend autonomous testing with Cypress, Robot Framework, and Appium, performance testing with k6, and pentesting. Translated business needs into sprint-ready tasks and reported coverage, quality KPIs, and delivery status.',
        testId: 'experience-igc',
      },
      {
        role: 'QA Leader | Automated Testing Coordinator | Security Testing Analyst',
        company: 'VIDI',
        period: 'Nov 2023 - Dec 2024',
        description: 'Coordinated automated testing and performance. Built web automation with Cypress and Robot Framework (Selenium), mobile automation with Robot Framework (Appium), and ran web/mobile security testing.',
        testId: 'experience-vidi-coordinator',
      },
      {
        role: 'Coordinator of Automated Testing and Performance',
        company: 'AutoForce',
        period: 'Aug 2022 - Nov 2023',
        description: 'Introduced a quality culture and continuous integration. Built the E2E framework with Cypress (Currents/Sorry Cypress dashboards), API automation, and a performance testing suite (load, peak, stress, endurance, smoke). Documented the quality architecture and led the QA team.',
        testId: 'experience-autoforce',
      },
      {
        role: 'Mid-Level Test Analyst',
        company: 'TaskCheck',
        period: 'Jul 2021 - Jul 2022',
        description: 'Owned test strategy and BDD test design for the squad. Built a Cypress framework covering all test cases, automated API testing, and parallelized the suite in GitLab CI/CD on AWS with cost monitoring alongside DevOps.',
        testId: 'experience-taskcheck',
      },
      {
        role: 'Quality Assurance Tester',
        company: 'InfoA2 Evolution',
        period: 'Jan 2019 - Jul 2021',
        description: 'Tested web and mobile (iOS & Android) products, validating user flows, spreadsheet-driven dynamic systems, and back-end APIs. Projects included Powpay (React Native financial education app) and Kion Dental Technology (prosthesis request portal).',
        testId: 'experience-infoa2',
      },
    ],
  },
  technologies: {
    heading: 'Technologies & Expertise',
    subtitle: 'Specializing in AI-driven quality engineering and modern web development. Building intelligent testing systems that learn, adapt, and self-heal.',
  },
  stack: {
    heading: 'Tech Stack',
    subtitle: 'Tools and technologies I use to build and ensure quality across the software lifecycle.',
    devFrontendHeading: 'Development · Frontend',
    qaHeading: 'Quality Assurance',
    analyticsHeading: 'Analytics',
  },
  education: {
    heading: 'Education',
    items: [
      {
        degree: "Bachelor's in Software Analysis and Development",
        institution: 'Instituto Infnet',
        period: '2025 - 2027 (In Progress)',
        testId: 'education-infnet',
      },
      {
        degree: 'Physics Teaching Degree',
        institution: 'Universidade de São Paulo (USP)',
        period: '5 years completed',
        testId: 'education-usp',
      },
    ],
  },
  certificates: {
    heading: 'Certificates',
    subtitle: 'Continuous learning across AI, quality engineering, and software development. Select a category to explore.',
    verifyCertificate: 'Verify Certificate',
    viewCertAriaLabel: (name) => `View certificate: ${name}`,
    closeCertAriaLabel: 'Close certificate',
    categories: {
      anthropic: { label: 'Anthropic / Claude', ariaLabel: 'View Anthropic / Claude certificates' },
      qa: { label: 'Quality Engineering & Test Automation', ariaLabel: 'View Quality Engineering & Test Automation certificates' },
      security: { label: 'Cybersecurity', ariaLabel: 'View Cybersecurity certificates' },
      others: { label: 'Others', ariaLabel: 'View other certificates' },
    },
  },
  footer: {
    tagline: 'AI-Native Quality Engineering',
    copyright: (year) => `© ${year} Qowi. All rights reserved.`,
    builtWith: 'Built with AI-Native Architecture',
  },
  modal: {
    title: 'Strategy Sync',
    subtitle: "Let's architect autonomous quality systems that scale.",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    inquiryLabel: 'How can I help?',
    selectPlaceholder: 'Select an option',
    inquiryOptions: [
      'QA Leadership & Consulting',
      'Test Automation Strategy',
      'Team Training',
      'Performance & Security Testing',
      'Speaking Engagement',
      'Other',
    ],
    submitButton: 'Send Message',
    submitting: 'Sending...',
    errorMessage: 'Something went wrong. Please try again or reach out on LinkedIn.',
    closeAriaLabel: 'Close modal',
    successTitle: 'Message Sent',
    successMessage: "I'll get back to you soon.",
  },
  social: {
    linkedinAriaLabel: 'Visit LinkedIn profile',
    githubAriaLabel: 'Visit GitHub profile',
  },
};

const pt: Translations = {
  header: {
    contactButton: 'Contato',
    contactAriaLabel: 'Contato',
    resumeButton: 'Currículo',
    resumeAriaLabel: 'Currículo',
    langToggleAriaLabel: 'Trocar idioma',
  },
  hero: {
    location: 'São Paulo, Brasil',
    role: 'AI-Native QA Engineer & Frontend Developer',
    companyPrefix: 'Fundador na',
    companySuffix: ' · Software House',
    bio: 'Construindo infraestrutura de testes AI-native com automação self-healing, geração de testes com LLM e sistemas de QA agênticos. Especializado em desenvolvimento frontend e engenharia de qualidade autônoma com 7+ anos transformando QA tradicional em pipelines inteligentes e de manutenção zero.',
    getInTouch: 'Entre em Contato',
    getInTouchAriaLabel: 'Entre em contato',
    downloadResume: 'Currículo',
    downloadResumeAriaLabel: 'Baixar Currículo',
  },
  about: {
    heading: 'Sobre Mim',
    para1: 'Tenho graduação em Licenciatura em Física pela USP (5 anos). Nessa época cresceu meu interesse em programação e, em 2019, entrei oficialmente na área de tecnologia. Desde então trabalhei com projetos web, mobile e híbridos com foco forte em automação de testes — UI, API e testes de integridade.',
    para2Start: 'Nos últimos anos atuei como ',
    para2Highlight: 'QA Lead',
    para2End: ', gerenciando equipes de QA, revisando merges e mantendo a saúde do codebase do time.',
    para3Start: 'No último ano e meio direcionei meus estudos para ',
    para3Highlight: 'IA aplicada à engenharia de software',
    para3End: ', aprofundando em testes AI-native e desenvolvimento AI-native. Tenho utilizado fundamentos de automação com IA para construir workflows de qualidade dentro dos projetos — combinando agentes, prompts versionados, geração assistida de casos de teste e validações determinísticas — com o objetivo de reduzir retrabalho, ampliar cobertura e acelerar ciclos de entrega sem sacrificar a confiabilidade.',
    tags: ['Física – USP', 'QA Lead', 'Automação de Testes', 'Testes AI-native', 'Desenvolvimento AI-native'],
  },
  metaDemo: {
    badge: 'Meta-Demonstração',
    heading: 'Esta página foi construída com arquitetura AI-Native.',
    subtitle: 'Uma demonstração viva de workflows de desenvolvimento inteligentes. Cada funcionalidade que você vê aqui — do design ao deploy — foi orquestrada por agentes autônomos de IA com zero testes manuais.',
    step1: {
      heading: 'Prompt Engineering & Desenvolvimento com RAG',
      description: 'Orquestração avançada de prompts combinada com Retrieval-Augmented Generation (RAG) gerencia todo o ciclo de desenvolvimento web. IA contextual extrai requisitos, tokens de design e padrões arquiteturais para gerar componentes React prontos para produção.',
    },
    step2: {
      heading: 'Agente 1: Geração Autônoma de Estratégia de Testes',
      description: 'O primeiro agente de IA analisa o codebase e gera planos de teste abrangentes cobrindo cenários E2E, validação de acessibilidade, regressão visual, benchmarks de performance e casos de borda. Nenhuma escrita manual de testes necessária.',
    },
    step3: {
      heading: 'Agente 2: Automação de Testes com Playwright',
      description: 'O segundo agente de IA traduz estratégias de teste em scripts Playwright executáveis com seletores inteligentes, locators auto-corretivos e asserções abrangentes. Executa a suíte completa de testes na primeira execução sem instabilidade.',
    },
    step4: {
      heading: 'Qualidade Contínua: Relatórios Automáticos a Cada Push',
      descriptionPre: 'Cada push para ',
      descriptionPost: ' aciona a suíte completa de testes. Relatórios gerados por IA com screenshots, métricas de performance e pontuações de acessibilidade são publicados automaticamente. Zero envolvimento manual de QA.',
    },
    closingStatement: 'Este é o futuro da engenharia de qualidade.',
    closingDescription: 'Equipes de QA tradicionais passam semanas planejando e escrevendo testes. Com arquitetura AI-Native, arquitetamos ecossistemas de qualidade autônomos que escalam instantaneamente e se auto-corrigem continuamente.',
    builtBy: 'Construído por',
  },
  aiCapabilities: {
    heading: 'Engenharia de Qualidade AI-Native',
    subtitle: 'Utilizando tecnologias de IA de ponta para construir sistemas de testes inteligentes que escalam de forma autônoma.',
    items: [
      {
        title: 'Geração de Testes com LLM',
        description: 'Criação autônoma de testes usando GPT-4 e Claude para gerar cenários de teste abrangentes a partir dos requisitos.',
      },
      {
        title: 'Automação de Testes Self-Healing',
        description: 'Adaptação de seletores orientada por IA que corrige automaticamente testes quebrados quando elementos de UI mudam, eliminando overhead de manutenção.',
      },
      {
        title: 'Sistemas de QA Agênticos',
        description: 'Orquestração multi-agente para execução inteligente de testes, detecção de regressão visual e análise preditiva de falhas.',
      },
    ],
  },
  experience: {
    heading: 'Experiência',
    items: [
      {
        role: 'Fundador & Engenheiro Principal',
        company: 'Qowi',
        period: '2025 - Presente',
        description: 'Construindo soluções de engenharia de qualidade AI-native e aplicações web modernas. Especializado em testes autônomos, agentes de QA com LLM e desenvolvimento frontend com React/TypeScript, entregando serviços de software house.',
        testId: 'experience-qowi',
      },
      {
        role: 'Senior Quality Assurance',
        company: 'Luby',
        period: 'Jan 2026 - Presente',
        description: 'Engenharia de qualidade sênior em projetos remotos de clientes, responsável pela estratégia de testes e testes autônomos em aplicações web.',
        testId: 'experience-luby',
      },
      {
        role: 'QA Lead | Coordenador de Testes Automatizados, Performance, Integridade e Segurança',
        company: 'VIDI',
        period: 'Fev 2025 - Jan 2026',
        description: 'Coordenei testes autônomos web (Cypress, Robot Framework/Selenium), mobile (Robot Framework/Appium) e validação de integridade de dados em SSMS e Power BI (Robot Framework Database Library/SQL). Liderei testes de segurança web e mobile.',
        testId: 'experience-vidi-lead',
      },
      {
        role: 'QA Leader | Business Analyst (Consultoria)',
        company: 'igc partners',
        period: 'Nov 2024 - Fev 2025',
        description: 'Liderei todo o pipeline de qualidade: testes autônomos frontend/backend com Cypress, Robot Framework e Appium, testes de performance com k6 e pentesting. Traduzi necessidades de negócio em tarefas de sprint e reportei cobertura, KPIs de qualidade e status de entrega.',
        testId: 'experience-igc',
      },
      {
        role: 'QA Leader | Coordenador de Testes Automatizados | Analista de Testes de Segurança',
        company: 'VIDI',
        period: 'Nov 2023 - Dez 2024',
        description: 'Coordenei testes automatizados e de performance. Construí automação web com Cypress e Robot Framework (Selenium), automação mobile com Robot Framework (Appium) e executei testes de segurança web/mobile.',
        testId: 'experience-vidi-coordinator',
      },
      {
        role: 'Coordenador de Testes Automatizados e Performance',
        company: 'AutoForce',
        period: 'Ago 2022 - Nov 2023',
        description: 'Introduzi cultura de qualidade e integração contínua. Construí o framework E2E com Cypress (dashboards Currents/Sorry Cypress), automação de API e suíte de testes de performance (load, peak, stress, endurance, smoke). Documentei a arquitetura de qualidade e liderei o time de QA.',
        testId: 'experience-autoforce',
      },
      {
        role: 'Analista de Testes Pleno',
        company: 'TaskCheck',
        period: 'Jul 2021 - Jul 2022',
        description: 'Responsável pela estratégia de testes e desenho de casos em BDD da squad. Construí framework Cypress cobrindo todos os casos, automatizei testes de API e paralelizei a suíte no GitLab CI/CD na AWS, monitorando custos com o time de DevOps.',
        testId: 'experience-taskcheck',
      },
      {
        role: 'Quality Assurance Tester',
        company: 'InfoA2 Evolution',
        period: 'Jan 2019 - Jul 2021',
        description: 'Testei produtos web e mobile (iOS e Android), validando fluxos de usuário, sistemas dinâmicos guiados por planilhas e APIs de back-end. Projetos incluíram Powpay (app React Native de educação financeira) e Kion Dental Technology (portal de pedidos de próteses).',
        testId: 'experience-infoa2',
      },
    ],
  },
  technologies: {
    heading: 'Tecnologias & Expertise',
    subtitle: 'Especializado em engenharia de qualidade orientada por IA e desenvolvimento web moderno. Construindo sistemas de testes inteligentes que aprendem, se adaptam e se auto-corrigem.',
  },
  stack: {
    heading: 'Stack Tecnológica',
    subtitle: 'Ferramentas e tecnologias que uso para construir e garantir qualidade ao longo do ciclo de vida do software.',
    devFrontendHeading: 'Desenvolvimento · Frontend',
    qaHeading: 'Garantia de Qualidade',
    analyticsHeading: 'Analytics',
  },
  education: {
    heading: 'Formação',
    items: [
      {
        degree: 'Bacharelado em Análise e Desenvolvimento de Sistemas',
        institution: 'Instituto Infnet',
        period: '2025 - 2027 (Em Andamento)',
        testId: 'education-infnet',
      },
      {
        degree: 'Licenciatura em Física',
        institution: 'Universidade de São Paulo (USP)',
        period: '5 anos cursados',
        testId: 'education-usp',
      },
    ],
  },
  certificates: {
    heading: 'Certificados',
    subtitle: 'Aprendizado contínuo em IA, engenharia de qualidade e desenvolvimento de software. Selecione uma categoria para explorar.',
    verifyCertificate: 'Verificar Certificado',
    viewCertAriaLabel: (name) => `Ver certificado: ${name}`,
    closeCertAriaLabel: 'Fechar certificado',
    categories: {
      anthropic: { label: 'Anthropic / Claude', ariaLabel: 'Ver certificados da Anthropic / Claude' },
      qa: { label: 'Engenharia de Qualidade & Automação de Testes', ariaLabel: 'Ver certificados de Engenharia de Qualidade e Automação de Testes' },
      security: { label: 'Cibersegurança', ariaLabel: 'Ver certificados de Cibersegurança' },
      others: { label: 'Outros', ariaLabel: 'Ver outros certificados' },
    },
  },
  footer: {
    tagline: 'Engenharia de Qualidade AI-Native',
    copyright: (year) => `© ${year} Qowi. Todos os direitos reservados.`,
    builtWith: 'Construído com Arquitetura AI-Native',
  },
  modal: {
    title: 'Alinhar Estratégia',
    subtitle: 'Vamos arquitetar sistemas de qualidade autônomos que escalam.',
    nameLabel: 'Nome',
    namePlaceholder: 'Seu nome',
    emailLabel: 'E-mail',
    emailPlaceholder: 'voce@empresa.com',
    inquiryLabel: 'Como posso ajudar?',
    selectPlaceholder: 'Selecione uma opção',
    inquiryOptions: [
      'Liderança de QA & Consultoria',
      'Estratégia de Automação de Testes',
      'Treinamento de Equipe',
      'Testes de Performance & Segurança',
      'Palestra / Keynote',
      'Outro',
    ],
    submitButton: 'Enviar Mensagem',
    submitting: 'Enviando...',
    errorMessage: 'Algo deu errado. Tente novamente ou fale comigo pelo LinkedIn.',
    closeAriaLabel: 'Fechar modal',
    successTitle: 'Mensagem Enviada',
    successMessage: 'Retornarei em breve.',
  },
  social: {
    linkedinAriaLabel: 'Visitar perfil no LinkedIn',
    githubAriaLabel: 'Visitar perfil no GitHub',
  },
};

export const translations: Record<Language, Translations> = { en, pt };
