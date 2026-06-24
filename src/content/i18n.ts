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
  experience: {
    kicker: string;
    heading: string;
    items: ExperienceItem[];
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
      title: "Cezar Bononi | Software Engineer",
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
    experience: {
      kicker: "// 04_EXPERIENCE",
      heading: "Experiência",
      items: [
        {
          period: "2022 — PRESENTE",
          role: "Software Engineer — Produtos Financeiros",
          place: "SETOR FINANCEIRO · ALTA ESCALA",
          body:
            "Liderança técnica em modernização de frontend, migração para cloud e adoção de workflow com IA em aplicações financeiras de alta escala. Foco em arquitetura, testes e confiabilidade em produção.",
        },
        {
          period: "2019 — 2022",
          role: "Frontend Engineer — Web Corporativa",
          place: "ANGULAR · DESIGN SYSTEMS · BFF",
          body:
            "Desenvolvimento de aplicações Angular de larga escala, design systems e camadas BFF, com forte foco em UX/CX e performance.",
        },
        {
          period: "CONTÍNUO",
          role: "Engenharia Independente & Labs",
          place: "SELF-HOSTED · PWA · OPEN SOURCE",
          body:
            "Experimentos pessoais em infraestrutura self-hosted, PWAs e ferramentas, onde o caos controlado vira prática.",
        },
      ],
    },
    academic: {
      kicker: "// 05_ACADEMIC_ARCHIVE",
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
      kicker: "// 06_CONNECT",
      heading: "Vamos\nconstruir",
      body:
        "Aberto a desafios de engenharia: produtos financeiros, modernização de frontend e workflows com IA.",
      topButton: "VOLTAR AO TOPO",
    },
  },
  en: {
    meta: {
      documentLang: "en-US",
      title: "Cezar Bononi | Software Engineer",
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
    experience: {
      kicker: "// 04_EXPERIENCE",
      heading: "Experience",
      items: [
        {
          period: "2022 — PRESENT",
          role: "Software Engineer — Financial Products",
          place: "FINANCIAL SECTOR · HIGH SCALE",
          body:
            "Technical lead on frontend modernization, cloud migration and AI workflow adoption across high-scale financial applications. Focus on architecture, testing and production reliability.",
        },
        {
          period: "2019 — 2022",
          role: "Frontend Engineer — Enterprise Web",
          place: "ANGULAR · DESIGN SYSTEMS · BFF",
          body:
            "Built large-scale Angular applications, design systems and BFF layers, with a strong focus on UX/CX and performance.",
        },
        {
          period: "ONGOING",
          role: "Independent Engineering & Labs",
          place: "SELF-HOSTED · PWA · OPEN SOURCE",
          body:
            "Personal experiments in self-hosted infrastructure, PWAs and tooling, where controlled chaos becomes practice.",
        },
      ],
    },
    academic: {
      kicker: "// 05_ACADEMIC_ARCHIVE",
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
      kicker: "// 06_CONNECT",
      heading: "Let's\nbuild",
      body:
        "Open to engineering challenges: financial products, frontend modernization and AI-assisted workflows.",
      topButton: "BACK TO TOP",
    },
  },
};
