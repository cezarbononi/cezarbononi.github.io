import bradescoLogo from "../assets/logos/bradesco.png";
import indraLogo from "../assets/logos/indra.png";
import nttDataLogo from "../assets/logos/nttdata.png";
import qintessLogo from "../assets/logos/qintess.png";

export type Language = "pt" | "en";

export type WorkItem = {
  no: string;
  title: string;
  body: string;
  tags: string[];
};

export type StatItem = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  place: string;
  body: string;
};

export type CompanySignal = {
  alt: string;
  initials: string;
  src?: string;
};

export type ExperienceRoleItem = {
  title: string;
  period: string;
  body: string;
  tags: string[];
};

export type ExperienceCompanyItem = {
  company: string;
  type: string;
  location: string;
  signal: CompanySignal;
  roles: ExperienceRoleItem[];
  projects?: string[];
};

export type EarlyCareerItem = {
  company: string;
  role: string;
  period: string;
  body: string;
  signal: CompanySignal;
  tags: string[];
};

export type LabExperienceItem = {
  period: string;
  title: string;
  place: string;
  body: string;
  signal: CompanySignal;
  tags: string[];
};

export type WorkflowStepItem = {
  label: string;
  title: string;
  body: string;
  tags: string[];
};

export type WorkflowSignalItem = {
  value: string;
  label: string;
};

export type AcademicItem = {
  period: string;
  institution: string;
  degree: string;
  focus: string;
  tags: string[];
};

export type PortfolioCopy = {
  meta: {
    documentLang: string;
    title: string;
  };
  header: {
    index: string;
    nav: {
      about: string;
      work: string;
      stack: string;
      experience: string;
      academic: string;
      contact: string;
    };
  };
  hero: {
    role: string;
    sub: string;
    manifesto: string;
    workButton: string;
    cvButton: string;
    whatsappButton: string;
    cvTitle: string;
  };
  marquee: string;
  about: {
    kicker: string;
    label: string;
    heading: string;
    body: string;
    stats: StatItem[];
  };
  work: {
    kicker: string;
    heading: string;
    items: WorkItem[];
  };
  stack: {
    kicker: string;
    heading: string;
    items: string[];
  };
  workflow: {
    kicker: string;
    heading: string;
    lead: string;
    sequence: string;
    steps: WorkflowStepItem[];
    signals: WorkflowSignalItem[];
  };
  experience: {
    kicker: string;
    heading: string;
    featured: ExperienceCompanyItem[];
    earlyCareer: {
      label: string;
      collapsedLabel: string;
      expandedLabel: string;
      items: EarlyCareerItem[];
    };
    lab: LabExperienceItem;
  };
  academic: {
    kicker: string;
    heading: string;
    items: AcademicItem[];
  };
  contact: {
    kicker: string;
    heading: string;
    body: string;
    email: string;
    copyEmail: string;
    whatsappButton: string;
    copiedEmail: string;
    copyFailed: string;
    topButton: string;
  };
};

const stackItems = [
  "Angular",
  "React",
  "TypeScript",
  "JavaScript",
  "Azure",
  "Docker",
  "GitHub Actions",
  "Node.js",
  "BFF",
  "TDD",
  "Clean Architecture",
  "Hexagonal Architecture",
  "UX/CX",
  "AI Tools",
  "Git",
  "CI/CD",
];

export const portfolioContent: Record<Language, PortfolioCopy> = {
  pt: {
    meta: {
      documentLang: "pt-BR",
      title:
        "Cezar Bononi | Software Engineer | Cloud, Frontend Modernization & AI-assisted Development",
    },
    header: {
      index: "INDEX",
      nav: {
        about: "SOBRE",
        work: "PROJETOS",
        stack: "STACK",
        experience: "EXPERIÊNCIA",
        academic: "FORMAÇÃO",
        contact: "CONTATO",
      },
    },
    hero: {
      role: "SOFTWARE ENGINEER // CLOUD · AI · FRONTEND",
      sub: "Cloud · Frontend Modernization · AI-assisted Development.",
      manifesto:
        "> Sistemas que suportam pressão real de produção. IA é parte do workflow, não buzzword.",
      workButton: "VER PROJETOS",
      cvButton: "BAIXAR CV",
      whatsappButton: "WHATSAPP",
      cvTitle: "CV em breve",
    },
    marquee:
      "CONTROLLED CHAOS · SOFTWARE ENGINEER · CLOUD · AI WORKFLOW · ANGULAR · TYPESCRIPT · AZURE · DOCKER · CI/CD ·",
    about: {
      kicker: "// 01_ABOUT",
      label: "SOBRE / MANIFESTO",
      heading:
        "Eu modernizo frontends financeiros e workflows de engenharia.",
      body:
        "IA não é buzzword no meu trabalho: ela faz parte do workflow de engenharia. Atuo conectando frontend, cloud, arquitetura, testes, UX/CX e restrições reais de produto. Engenharia moderna, técnica e autoral, com código que sobrevive em produção.",
      stats: [
        { value: "7+", label: "ANOS DE ENG." },
        { value: "∞", label: "CAOS CONTROLADO" },
        { value: "PT/EN", label: "BILÍNGUE" },
      ],
    },
    work: {
      kicker: "// 02_SELECTED_WORK",
      heading: "Projetos",
      items: [
        {
          no: "001",
          title: "Financial Frontend Modernization",
          tags: ["Angular", "TypeScript", "MFE"],
          body:
            "Interface bancária de alto tráfego migrada para uma arquitetura Angular modular. Zero downtime.",
        },
        {
          no: "002",
          title: "Cloud Migration & CI/CD",
          tags: ["Azure", "Docker", "Actions"],
          body:
            "Deploys legados na Azure com pipelines, Docker e gates automatizados. Releases sob demanda.",
        },
        {
          no: "003",
          title: "AI-assisted Engineering Workflow",
          tags: ["AI", "TDD", "DX"],
          body:
            "IA em code review, geração de testes e refactors. Velocidade mensurável, qualidade preservada.",
        },
        {
          no: "004",
          title: "Self-hosted Infrastructure Lab",
          tags: ["Docker", "Networking", "Linux"],
          body:
            "Cloud pessoal com serviços self-hosted, reverse proxies e monitoramento. Disciplina de produção no home lab.",
        },
        {
          no: "005",
          title: "Interactive PWA Experience",
          tags: ["PWA", "Performance", "UX"],
          body:
            "PWA offline-first com motion de sensação nativa, push e instalabilidade. O frontend no limite.",
        },
      ],
    },
    stack: {
      kicker: "// 03_STACK",
      heading: "Stack",
      items: stackItems,
    },
    workflow: {
      kicker: "// 04_AI_WORKFLOW",
      heading: "AI-assisted Engineering",
      lead:
        "Uso IA como camada operacional de engenharia: revisar, desafiar, refatorar, testar e documentar com loops curtos, contexto claro e decisão humana no centro.",
      sequence:
        "Code Review → Refactor → Tests → Documentation → Architecture Exploration",
      steps: [
        {
          label: "CODE REVIEW",
          title: "Leitura crítica de diffs",
          body:
            "Prompts orientados por contexto para mapear riscos, regressões, contratos quebrados e pontos cegos antes do merge.",
          tags: ["diff reading", "risk map", "prompt loops"],
        },
        {
          label: "REFACTOR",
          title: "Refactor com harness",
          body:
            "Pequenos movimentos protegidos por harness, fixtures e checkpoints para reduzir débito sem perder comportamento.",
          tags: ["harness", "guardrails", "incremental"],
        },
        {
          label: "TESTS",
          title: "SDD + TDD pragmatico",
          body:
            "Spec-driven development para transformar intenção em cenários, casos de borda e assertions executáveis.",
          tags: ["SDD", "TDD", "edge cases"],
        },
        {
          label: "DOCS",
          title: "Documentação viva",
          body:
            "Registro de decisões, trade-offs, onboarding técnico e notas de release sem quebrar o fluxo de entrega.",
          tags: ["ADRs", "release notes", "knowledge base"],
        },
        {
          label: "ARCH",
          title: "Exploração arquitetural",
          body:
            "Comparação de alternativas, desenho de caminhos de migração e validação de arquitetura antes de cristalizar o código.",
          tags: ["architecture", "trade-offs", "decision loops"],
        },
      ],
      signals: [
        { value: "ARCH", label: "workflow loops" },
        { value: "SDD", label: "spec-first prompts" },
        { value: "QA", label: "review harness" },
        { value: "DX", label: "docs + velocity" },
      ],
    },
    experience: {
      kicker: "// 05_EXPERIENCE",
      heading: "Experiência",
      featured: [
        {
          company: "Bradesco",
          type: "Tempo integral",
          location: "São Paulo, Brasil · Híbrido",
          signal: { alt: "Bradesco", initials: "B", src: bradescoLogo },
          projects: ["Frontend/BFF", "Azure Migration", "AI Workflow"],
          roles: [
            {
              title:
                "Software Engineer Cloud | Frontend/BFF & AI-assisted Engineering",
              period: "FEV 2025 — PRESENTE",
              body:
                "Modernização e migração de aplicações Frontend/BFF para Azure, com foco em arquitetura, qualidade de código, automação, escalabilidade e redução de débito técnico.",
              tags: ["Angular", "TypeScript", "Azure", "BFF", "Docker", "GitHub Actions", "CI/CD", "AI-assisted Engineering"],
            },
            {
              title: "Frontend Developer | Angular, BFF & Azure Migration",
              period: "SET 2023 — JUN 2025",
              body:
                "Atuação em projetos de migração e modernização de sistemas Frontend/BFF, evoluindo aplicações legadas, experiência do usuário e adaptação para ambientes cloud.",
              tags: ["Angular", "TypeScript", "JavaScript", "Azure", "BFF", "APIs", "UX/UI", "Cloud Migration"],
            },
          ],
        },
        {
          company: "NTT DATA Europe & LATAM",
          type: "Tempo integral",
          location: "São Paulo, Brasil · Remoto",
          signal: { alt: "NTT DATA Europe & LATAM", initials: "NTT", src: nttDataLogo },
          projects: ["Projeto: Itaú/Unibanco", "Internet Banking", "Mobile"],
          roles: [
            {
              title: "Frontend Developer | Internet Banking & Mobile",
              period: "JUN 2020 — AGO 2023",
              body:
                "Desenvolvimento frontend Angular em projetos de Internet Banking e Mobile, transformando requisitos financeiros complexos em interfaces digitais claras, funcionais e seguras.",
              tags: ["Angular", "TypeScript", "JavaScript", "SCSS", "APIs", "Git", "TDD", "DDD", "Scrum", "Kanban"],
            },
          ],
        },
        {
          company: "Qintess",
          type: "Tempo integral",
          location: "São Paulo, Brasil · No local",
          signal: { alt: "Qintess", initials: "Q", src: qintessLogo },
          projects: ["Projetos: Itaú/Unibanco", "Banco Original"],
          roles: [
            {
              title: "Frontend Developer",
              period: "JUN 2019 — JUN 2020",
              body:
                "Desenvolvimento de aplicações financeiras com foco em usabilidade, fluxos bancários, prototipação, integração com APIs e qualidade de entrega.",
              tags: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "UX Research", "UI/UX", "Prototyping", "TDD", "DDD"],
            },
          ],
        },
        {
          company: "Indra",
          type: "Tempo integral",
          location: "São Paulo, Brasil · No local",
          signal: { alt: "Indra", initials: "IN", src: indraLogo },
          projects: ["Projeto: Santander Geração Digital", "FIRST"],
          roles: [
            {
              title: "Frontend Developer",
              period: "JUL 2018 — JUL 2019",
              body:
                "Construção de interfaces Angular para soluções financeiras, visualização de dados, monitoramento e suporte a aplicações em produção.",
              tags: ["Angular", "TypeScript", "JavaScript", "SCSS", "APIs", "Git", "TDD", "Scrum", "Dynatrace", "Data Visualization"],
            },
          ],
        },
      ],
      earlyCareer: {
        label: "EARLY CAREER",
        collapsedLabel: "VER PRIMEIRAS EXPERIÊNCIAS",
        expandedLabel: "OCULTAR PRIMEIRAS EXPERIÊNCIAS",
        items: [
          { company: "Tech Viking - IT Consultancy", role: "Frontend Developer", period: "JAN 2015 — JUN 2018", body: "Desenvolvimento de interfaces web responsivas para pequenas e médias empresas, com autonomia, adaptação ao contexto do cliente e foco em valor operacional.", signal: { alt: "Tech Viking - IT Consultancy", initials: "TV" }, tags: ["Angular", "JavaScript", "HTML5", "CSS3", "Responsive UI"] },
          { company: "DWS", role: "Frontend Developer", period: "JAN 2014 — JUN 2015", body: "Aplicações web para visualização de câmeras IP e analógicas, personalização visual e adequação das interfaces às necessidades dos clientes.", signal: { alt: "DWS", initials: "DWS" }, tags: ["Frontend", "JavaScript", "Node.js", "Video Monitoring"] },
          { company: "Zignet", role: "Analista de Suporte de TI", period: "SET 2012 — DEZ 2013", body: "Suporte e operação de sistemas de internet via rádio, infraestrutura de rede, servidores, técnicos de campo e atendimento ao consumidor final.", signal: { alt: "Zignet", initials: "ZG" }, tags: ["Redes", "Infraestrutura", "Suporte Técnico", "Servidores"] },
          { company: "Masterponto Equipamentos e Sistemas", role: "Analista de Suporte de TI", period: "JAN 2011 — AGO 2012", body: "Suporte técnico remoto e presencial, manutenção de dispositivos eletroeletrônicos e treinamentos para soluções de ponto eletrônico e segurança.", signal: { alt: "Masterponto Equipamentos e Sistemas", initials: "MP" }, tags: ["Suporte Técnico", "Manutenção", "Treinamento", "Acesso Remoto"] },
        ],
      },
      lab: {
        period: "CONTÍNUO",
        title: "Engenharia Independente & Labs",
        place: "SELF-HOSTED · PWA · OPEN SOURCE",
        body: "Experimentos pessoais em infraestrutura self-hosted, PWAs e ferramentas, onde o caos controlado vira prática.",
        signal: { alt: "Independent Engineering Labs", initials: "LAB" },
        tags: ["Self-hosted", "PWA", "Docker", "Linux", "Open Source"],
      },
    },
    academic: {
      kicker: "// 06_ACADEMIC_ARCHIVE",
      heading: "Formação",
      items: [
        {
          period: "FEV 2025 — DEZ 2026",
          institution: "MBA USP/Esalq",
          degree: "MBA, Computer Software Engineering",
          focus:
            "Especialização em engenharia de software com foco em arquitetura, qualidade, gestão técnica e construção de sistemas modernos.",
          tags: ["Software Engineering", "Architecture", "Quality"],
        },
        {
          period: "2019 — 2022",
          institution: "Universidade Anhembi Morumbi",
          degree: "Design Gráfico — Tecnólogo",
          focus:
            "Base visual para sistemas digitais: tipografia, identidade, metodologia projetual e construção de interfaces com mais intenção estética.",
          tags: ["Design", "Typography", "Visual Systems"],
        },
        {
          period: "2017 — 2019",
          institution: "Universidade de São Paulo",
          degree: "Geografia — Bacharelado",
          focus:
            "Leitura crítica de território, dados, contexto e complexidade. Um treino analítico que conversa diretamente com arquitetura de produto.",
          tags: ["Research", "Systems Thinking", "Context"],
        },
        {
          period: "2015 — 2017",
          institution: "Universidade Federal de Alfenas",
          degree: "Geografia — Bacharelado",
          focus:
            "Fundação acadêmica em análise espacial, investigação e interpretação de sistemas complexos antes da transição para tecnologia.",
          tags: ["Analysis", "Method", "Complexity"],
        },
      ],
    },
    contact: {
      kicker: "// 07_CONNECT",
      heading: "Vamos\nconstruir",
      body:
        "Aberto a desafios de engenharia: produtos financeiros, modernização de frontend e workflows com IA.",
      email: "cezarbononi@gmail.com",
      copyEmail: "COPIAR E-MAIL",
      whatsappButton: "WHATSAPP",
      copiedEmail: "E-mail copiado",
      copyFailed: "Copie manualmente",
      topButton: "VOLTAR AO TOPO",
    },
  },
  en: {
    meta: {
      documentLang: "en-US",
      title:
        "Cezar Bononi | Software Engineer | Cloud, Frontend Modernization & AI-assisted Development",
    },
    header: {
      index: "INDEX",
      nav: {
        about: "ABOUT",
        work: "WORK",
        stack: "STACK",
        experience: "EXPERIENCE",
        academic: "ACADEMIC",
        contact: "CONTACT",
      },
    },
    hero: {
      role: "SOFTWARE ENGINEER // CLOUD · AI · FRONTEND",
      sub: "Cloud · Frontend Modernization · AI-assisted Development.",
      manifesto:
        "> Systems that survive real production pressure. AI is part of the workflow, not a buzzword.",
      workButton: "VIEW WORK",
      cvButton: "DOWNLOAD CV",
      whatsappButton: "WHATSAPP",
      cvTitle: "CV coming soon",
    },
    marquee:
      "CONTROLLED CHAOS · SOFTWARE ENGINEER · CLOUD · AI WORKFLOW · ANGULAR · TYPESCRIPT · AZURE · DOCKER · CI/CD ·",
    about: {
      kicker: "// 01_ABOUT",
      label: "ABOUT / MANIFESTO",
      heading: "I modernize financial frontends and engineering workflows.",
      body:
        "AI is not a buzzword here: it is part of the engineering workflow. I work across frontend, cloud, architecture, testing, UX/CX and real product constraints. Modern, technical, authorial engineering, with code that survives production.",
      stats: [
        { value: "7+", label: "YEARS ENG." },
        { value: "∞", label: "CONTROLLED CHAOS" },
        { value: "PT/EN", label: "BILINGUAL" },
      ],
    },
    work: {
      kicker: "// 02_SELECTED_WORK",
      heading: "Work",
      items: [
        {
          no: "001",
          title: "Financial Frontend Modernization",
          tags: ["Angular", "TypeScript", "MFE"],
          body:
            "High-traffic banking interface migrated to modular Angular architecture. Zero downtime.",
        },
        {
          no: "002",
          title: "Cloud Migration & CI/CD",
          tags: ["Azure", "Docker", "Actions"],
          body:
            "Legacy deploys on Azure with pipelines, Docker and automated gates. On-demand releases.",
        },
        {
          no: "003",
          title: "AI-assisted Engineering Workflow",
          tags: ["AI", "TDD", "DX"],
          body:
            "AI in code review, test generation and refactors. Measurable velocity, quality preserved.",
        },
        {
          no: "004",
          title: "Self-hosted Infrastructure Lab",
          tags: ["Docker", "Networking", "Linux"],
          body:
            "Personal cloud with self-hosted services, reverse proxies and monitoring. Production discipline in a home lab.",
        },
        {
          no: "005",
          title: "Interactive PWA Experience",
          tags: ["PWA", "Performance", "UX"],
          body:
            "Offline-first PWA with native-feel motion, push and installability. Frontend at the limit.",
        },
      ],
    },
    stack: {
      kicker: "// 03_STACK",
      heading: "Stack",
      items: stackItems,
    },
    workflow: {
      kicker: "// 04_AI_WORKFLOW",
      heading: "AI-assisted Engineering",
      lead:
        "I use AI as an operational engineering layer: review, challenge, refactor, test and document through short loops, explicit context and human judgment at the center.",
      sequence:
        "Code Review → Refactor → Tests → Documentation → Architecture Exploration",
      steps: [
        {
          label: "CODE REVIEW",
          title: "Critical diff reading",
          body:
            "Context-aware prompts map risks, regressions, broken contracts and blind spots before code reaches merge.",
          tags: ["diff reading", "risk map", "prompt loops"],
        },
        {
          label: "REFACTOR",
          title: "Harness-backed refactor",
          body:
            "Small changes protected by harnesses, fixtures and checkpoints to reduce debt without losing behavior.",
          tags: ["harness", "guardrails", "incremental"],
        },
        {
          label: "TESTS",
          title: "SDD + pragmatic TDD",
          body:
            "Spec-driven development turns intent into scenarios, edge cases and executable assertions.",
          tags: ["SDD", "TDD", "edge cases"],
        },
        {
          label: "DOCS",
          title: "Living documentation",
          body:
            "Decisions, trade-offs, technical onboarding and release notes captured without breaking delivery flow.",
          tags: ["ADRs", "release notes", "knowledge base"],
        },
        {
          label: "ARCH",
          title: "Architecture exploration",
          body:
            "Comparing alternatives, shaping migration paths and validating architecture before code hardens.",
          tags: ["architecture", "trade-offs", "decision loops"],
        },
      ],
      signals: [
        { value: "ARCH", label: "workflow loops" },
        { value: "SDD", label: "spec-first prompts" },
        { value: "QA", label: "review harness" },
        { value: "DX", label: "docs + velocity" },
      ],
    },
    experience: {
      kicker: "// 05_EXPERIENCE",
      heading: "Experience",
      featured: [
        {
          company: "Bradesco",
          type: "Full-time",
          location: "São Paulo, Brazil · Hybrid",
          signal: { alt: "Bradesco", initials: "B", src: bradescoLogo },
          projects: ["Frontend/BFF", "Azure Migration", "AI Workflow"],
          roles: [
            { title: "Software Engineer Cloud | Frontend/BFF & AI-assisted Engineering", period: "FEB 2025 — PRESENT", body: "Modernizing and migrating Frontend/BFF applications to Azure, with focus on architecture, code quality, automation, scalability and technical debt reduction.", tags: ["Angular", "TypeScript", "Azure", "BFF", "Docker", "GitHub Actions", "CI/CD", "AI-assisted Engineering"] },
            { title: "Frontend Developer | Angular, BFF & Azure Migration", period: "SEP 2023 — JUN 2025", body: "Worked on Frontend/BFF migration and modernization initiatives, evolving legacy applications, user experience and cloud-ready solutions.", tags: ["Angular", "TypeScript", "JavaScript", "Azure", "BFF", "APIs", "UX/UI", "Cloud Migration"] },
          ],
        },
        {
          company: "NTT DATA Europe & LATAM",
          type: "Full-time",
          location: "São Paulo, Brazil · Remote",
          signal: { alt: "NTT DATA Europe & LATAM", initials: "NTT", src: nttDataLogo },
          projects: ["Project: Itaú/Unibanco", "Internet Banking", "Mobile"],
          roles: [
            { title: "Frontend Developer | Internet Banking & Mobile", period: "JUN 2020 — AUG 2023", body: "Angular frontend development for Internet Banking and Mobile projects, turning complex financial requirements into clear, functional and secure digital interfaces.", tags: ["Angular", "TypeScript", "JavaScript", "SCSS", "APIs", "Git", "TDD", "DDD", "Scrum", "Kanban"] },
          ],
        },
        {
          company: "Qintess",
          type: "Full-time",
          location: "São Paulo, Brazil · On-site",
          signal: { alt: "Qintess", initials: "Q", src: qintessLogo },
          projects: ["Projects: Itaú/Unibanco", "Banco Original"],
          roles: [
            { title: "Frontend Developer", period: "JUN 2019 — JUN 2020", body: "Built financial applications focused on usability, banking flows, prototyping, API integration and delivery quality.", tags: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "UX Research", "UI/UX", "Prototyping", "TDD", "DDD"] },
          ],
        },
        {
          company: "Indra",
          type: "Full-time",
          location: "São Paulo, Brazil · On-site",
          signal: { alt: "Indra", initials: "IN", src: indraLogo },
          projects: ["Project: Santander Geração Digital", "FIRST"],
          roles: [
            { title: "Frontend Developer", period: "JUL 2018 — JUL 2019", body: "Built Angular interfaces for financial solutions, data visualization, monitoring and production application support.", tags: ["Angular", "TypeScript", "JavaScript", "SCSS", "APIs", "Git", "TDD", "Scrum", "Dynatrace", "Data Visualization"] },
          ],
        },
      ],
      earlyCareer: {
        label: "EARLY CAREER",
        collapsedLabel: "VIEW EARLY CAREER",
        expandedLabel: "HIDE EARLY CAREER",
        items: [
          { company: "Tech Viking - IT Consultancy", role: "Frontend Developer", period: "JAN 2015 — JUN 2018", body: "Responsive web interface development for small and mid-sized companies, with autonomy, client context adaptation and operational value focus.", signal: { alt: "Tech Viking - IT Consultancy", initials: "TV" }, tags: ["Angular", "JavaScript", "HTML5", "CSS3", "Responsive UI"] },
          { company: "DWS", role: "Frontend Developer", period: "JAN 2014 — JUN 2015", body: "Web applications for IP and analog camera visualization, visual customization and interface adaptation to client needs.", signal: { alt: "DWS", initials: "DWS" }, tags: ["Frontend", "JavaScript", "Node.js", "Video Monitoring"] },
          { company: "Zignet", role: "IT Support Analyst", period: "SEP 2012 — DEC 2013", body: "Support and operation of radio internet systems, network infrastructure, servers, field technicians and end-customer service.", signal: { alt: "Zignet", initials: "ZG" }, tags: ["Networking", "Infrastructure", "Technical Support", "Servers"] },
          { company: "Masterponto Equipamentos e Sistemas", role: "IT Support Analyst", period: "JAN 2011 — AUG 2012", body: "Remote and on-site technical support, maintenance of electronic devices and customer training for time-tracking and electronic security solutions.", signal: { alt: "Masterponto Equipamentos e Sistemas", initials: "MP" }, tags: ["Technical Support", "Maintenance", "Training", "Remote Access"] },
        ],
      },
      lab: {
        period: "ONGOING",
        title: "Independent Engineering & Labs",
        place: "SELF-HOSTED · PWA · OPEN SOURCE",
        body: "Personal experiments in self-hosted infrastructure, PWAs and tooling, where controlled chaos becomes practice.",
        signal: { alt: "Independent Engineering Labs", initials: "LAB" },
        tags: ["Self-hosted", "PWA", "Docker", "Linux", "Open Source"],
      },
    },
    academic: {
      kicker: "// 06_ACADEMIC_ARCHIVE",
      heading: "Academic",
      items: [
        {
          period: "FEB 2025 — DEC 2026",
          institution: "MBA USP/Esalq",
          degree: "MBA, Computer Software Engineering",
          focus:
            "Graduate-level specialization in software engineering focused on architecture, quality, technical management and modern systems.",
          tags: ["Software Engineering", "Architecture", "Quality"],
        },
        {
          period: "2019 — 2022",
          institution: "Anhembi Morumbi University",
          degree: "Graphic Design — Technologist Degree",
          focus:
            "A visual foundation for digital systems: typography, identity, design methodology and more intentional interface work.",
          tags: ["Design", "Typography", "Visual Systems"],
        },
        {
          period: "2017 — 2019",
          institution: "University of São Paulo",
          degree: "Geography — Bachelor's Studies",
          focus:
            "Critical reading of territory, data, context and complexity. Analytical training that maps well to product architecture.",
          tags: ["Research", "Systems Thinking", "Context"],
        },
        {
          period: "2015 — 2017",
          institution: "Federal University of Alfenas",
          degree: "Geography — Bachelor's Studies",
          focus:
            "Academic foundation in spatial analysis, investigation and interpretation of complex systems before moving into technology.",
          tags: ["Analysis", "Method", "Complexity"],
        },
      ],
    },
    contact: {
      kicker: "// 07_CONNECT",
      heading: "Let's\nbuild",
      body:
        "Open to engineering challenges: financial products, frontend modernization and AI-assisted workflows.",
      email: "cezarbononi@gmail.com",
      copyEmail: "COPY EMAIL",
      whatsappButton: "WHATSAPP",
      copiedEmail: "Email copied",
      copyFailed: "Copy manually",
      topButton: "BACK TO TOP",
    },
  },
};
