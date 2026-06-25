import { contactLinks } from "./links";
import { type Language } from "./i18n";

export type CVRole = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export type CVEducationItem = {
  institution: string;
  degree: string;
  period: string;
};

export type CVCopy = {
  lang: string;
  fileName: string;
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  labels: {
    contact: string;
    summary: string;
    highlights: string;
    experience: string;
    earlyCareer: string;
    stack: string;
    education: string;
    page: string;
  };
  summary: string;
  highlights: string[];
  roles: CVRole[];
  earlyCareer: CVRole[];
  stack: string[];
  education: CVEducationItem[];
};

const stack = [
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

export const cvContent: Record<Language, CVCopy> = {
  pt: {
    lang: "pt-BR",
    fileName: "cezar-bononi-cv-pt-br.pdf",
    name: "Cezar Bononi",
    headline:
      "Software Engineer | Cloud, Frontend Modernization & AI-assisted Development",
    location: "São Paulo, Brasil",
    email: "cezarbononi@gmail.com",
    linkedin: "linkedin.com/in/cezar-bononi",
    github: "github.com/cezarbononi",
    whatsapp: contactLinks.whatsapp,
    labels: {
      contact: "Contato",
      summary: "Resumo",
      highlights: "Frentes de atuação",
      experience: "Experiência",
      earlyCareer: "Primeiras experiências",
      stack: "Stack",
      education: "Formação",
      page: "CV://CYBER_PRINT_EDITION",
    },
    summary:
      "Software Engineer com experiência em produtos financeiros, modernização frontend, BFFs, migração para Azure e workflows de engenharia assistidos por IA. Atuação forte em Angular/TypeScript, arquitetura, testes, CI/CD, UX/CX e redução de débito técnico em ambientes de produção.",
    highlights: [
      "Modernização de aplicações Frontend/BFF para ambientes cloud, com foco em qualidade, escalabilidade e continuidade operacional.",
      "Experiência em Internet Banking, Mobile e produtos financeiros com requisitos complexos de segurança, usabilidade e estabilidade.",
      "Uso prático de IA em code review, refactors, testes, documentação e exploração arquitetural com prompts, harnesses e loops curtos.",
      "Integração entre engenharia, produto e experiência do usuário para transformar sistemas legados em interfaces digitais claras e sustentáveis.",
    ],
    roles: [
      {
        title: "Software Engineer Cloud | Frontend/BFF & AI-assisted Engineering",
        company: "Bradesco",
        period: "fev 2025 - presente",
        location: "São Paulo, Brasil - híbrido",
        bullets: [
          "Modernização e migração de aplicações Frontend/BFF para Azure.",
          "Atuação em arquitetura, automação, qualidade de código e redução de débito técnico.",
          "Aplicação de IA no workflow de engenharia para revisão, testes, documentação e refactors controlados.",
        ],
        tags: ["Angular", "TypeScript", "Azure", "BFF", "Docker", "GitHub Actions", "CI/CD", "AI-assisted Engineering"],
      },
      {
        title: "Frontend Developer | Angular, BFF & Azure Migration",
        company: "Bradesco",
        period: "set 2023 - jun 2025",
        location: "São Paulo, Brasil - híbrido",
        bullets: [
          "Evolução de aplicações legadas Frontend/BFF para soluções cloud-ready.",
          "Entrega de interfaces bancárias com foco em UX, integração com APIs e qualidade de entrega.",
        ],
        tags: ["Angular", "TypeScript", "JavaScript", "Azure", "APIs", "UX/UI"],
      },
      {
        title: "Frontend Developer | Internet Banking & Mobile",
        company: "NTT DATA Europe & LATAM",
        period: "jun 2020 - ago 2023",
        location: "São Paulo, Brasil - remoto",
        bullets: [
          "Desenvolvimento Angular em projetos de Internet Banking e Mobile para Itaú/Unibanco.",
          "Tradução de requisitos financeiros complexos em interfaces seguras, claras e responsivas.",
          "Trabalho em times ágeis com TDD, DDD, Git, Scrum e Kanban.",
        ],
        tags: ["Angular", "TypeScript", "SCSS", "APIs", "TDD", "DDD", "Scrum"],
      },
      {
        title: "Frontend Developer",
        company: "Qintess",
        period: "jun 2019 - jun 2020",
        location: "São Paulo, Brasil - presencial",
        bullets: [
          "Construção de aplicações financeiras para Itaú/Unibanco e Banco Original.",
          "Foco em usabilidade, prototipação, integração com APIs e qualidade de entrega.",
        ],
        tags: ["Angular", "TypeScript", "UX Research", "Prototyping", "TDD"],
      },
      {
        title: "Frontend Developer",
        company: "Indra",
        period: "jul 2018 - jul 2019",
        location: "São Paulo, Brasil - presencial",
        bullets: [
          "Construção de interfaces Angular para soluções financeiras e visualização de dados.",
          "Suporte a aplicações em produção com monitoramento e melhoria contínua.",
        ],
        tags: ["Angular", "TypeScript", "SCSS", "Dynatrace", "Data Visualization"],
      },
    ],
    earlyCareer: [
      {
        title: "Frontend Developer",
        company: "Tech Viking - IT Consultancy",
        period: "jan 2015 - jun 2018",
        location: "São Paulo, Brasil",
        bullets: ["Interfaces web responsivas para pequenas e médias empresas."],
        tags: ["Angular", "JavaScript", "HTML5", "CSS3"],
      },
      {
        title: "Frontend Developer",
        company: "DWS",
        period: "jan 2014 - jun 2015",
        location: "São Paulo, Brasil",
        bullets: ["Aplicações web para visualização de câmeras IP e analógicas."],
        tags: ["Frontend", "JavaScript", "Node.js"],
      },
      {
        title: "IT Support Analyst",
        company: "Zignet",
        period: "set 2012 - dez 2013",
        location: "São Paulo, Brasil",
        bullets: ["Suporte a rede, servidores, internet via rádio e operação técnica."],
        tags: ["Networking", "Infrastructure", "Support"],
      },
      {
        title: "IT Support Analyst",
        company: "Masterponto Equipamentos e Sistemas",
        period: "jan 2011 - ago 2012",
        location: "São Paulo, Brasil",
        bullets: ["Suporte técnico, manutenção e treinamento de clientes."],
        tags: ["Support", "Maintenance", "Training"],
      },
    ],
    stack,
    education: [
      {
        institution: "MBA USP/Esalq",
        degree: "MBA, Computer Software Engineering",
        period: "fev 2025 - dez 2026",
      },
      {
        institution: "Universidade Anhembi Morumbi",
        degree: "Design Gráfico - Tecnólogo",
        period: "2019 - 2022",
      },
      {
        institution: "Universidade de São Paulo",
        degree: "Geografia - Bacharelado",
        period: "2017 - 2019",
      },
    ],
  },
  en: {
    lang: "en-US",
    fileName: "cezar-bononi-cv-en-us.pdf",
    name: "Cezar Bononi",
    headline:
      "Software Engineer | Cloud, Frontend Modernization & AI-assisted Development",
    location: "São Paulo, Brazil",
    email: "cezarbononi@gmail.com",
    linkedin: "linkedin.com/in/cezar-bononi",
    github: "github.com/cezarbononi",
    whatsapp: contactLinks.whatsapp,
    labels: {
      contact: "Contact",
      summary: "Summary",
      highlights: "Engineering focus",
      experience: "Experience",
      earlyCareer: "Early career",
      stack: "Stack",
      education: "Education",
      page: "CV://CYBER_PRINT_EDITION",
    },
    summary:
      "Software Engineer experienced in financial products, frontend modernization, BFFs, Azure migration and AI-assisted engineering workflows. Strong background in Angular/TypeScript, architecture, testing, CI/CD, UX/CX and technical debt reduction in production environments.",
    highlights: [
      "Modernizing Frontend/BFF applications for cloud environments with focus on quality, scalability and operational continuity.",
      "Experience in Internet Banking, Mobile and financial products with complex security, usability and stability requirements.",
      "Practical AI usage in code review, refactors, tests, documentation and architecture exploration with prompts, harnesses and short feedback loops.",
      "Connecting engineering, product and user experience to evolve legacy systems into clear and sustainable digital interfaces.",
    ],
    roles: [
      {
        title: "Software Engineer Cloud | Frontend/BFF & AI-assisted Engineering",
        company: "Bradesco",
        period: "Feb 2025 - Present",
        location: "São Paulo, Brazil - Hybrid",
        bullets: [
          "Modernizing and migrating Frontend/BFF applications to Azure.",
          "Working across architecture, automation, code quality and technical debt reduction.",
          "Applying AI in engineering workflows for review, tests, documentation and controlled refactors.",
        ],
        tags: ["Angular", "TypeScript", "Azure", "BFF", "Docker", "GitHub Actions", "CI/CD", "AI-assisted Engineering"],
      },
      {
        title: "Frontend Developer | Angular, BFF & Azure Migration",
        company: "Bradesco",
        period: "Sep 2023 - Jun 2025",
        location: "São Paulo, Brazil - Hybrid",
        bullets: [
          "Evolved legacy Frontend/BFF applications into cloud-ready solutions.",
          "Delivered banking interfaces focused on UX, API integration and delivery quality.",
        ],
        tags: ["Angular", "TypeScript", "JavaScript", "Azure", "APIs", "UX/UI"],
      },
      {
        title: "Frontend Developer | Internet Banking & Mobile",
        company: "NTT DATA Europe & LATAM",
        period: "Jun 2020 - Aug 2023",
        location: "São Paulo, Brazil - Remote",
        bullets: [
          "Angular development for Internet Banking and Mobile projects for Itaú/Unibanco.",
          "Translated complex financial requirements into secure, clear and responsive interfaces.",
          "Worked in agile teams using TDD, DDD, Git, Scrum and Kanban.",
        ],
        tags: ["Angular", "TypeScript", "SCSS", "APIs", "TDD", "DDD", "Scrum"],
      },
      {
        title: "Frontend Developer",
        company: "Qintess",
        period: "Jun 2019 - Jun 2020",
        location: "São Paulo, Brazil - On-site",
        bullets: [
          "Built financial applications for Itaú/Unibanco and Banco Original.",
          "Focused on usability, prototyping, API integration and delivery quality.",
        ],
        tags: ["Angular", "TypeScript", "UX Research", "Prototyping", "TDD"],
      },
      {
        title: "Frontend Developer",
        company: "Indra",
        period: "Jul 2018 - Jul 2019",
        location: "São Paulo, Brazil - On-site",
        bullets: [
          "Built Angular interfaces for financial solutions and data visualization.",
          "Supported production applications with monitoring and continuous improvement.",
        ],
        tags: ["Angular", "TypeScript", "SCSS", "Dynatrace", "Data Visualization"],
      },
    ],
    earlyCareer: [
      {
        title: "Frontend Developer",
        company: "Tech Viking - IT Consultancy",
        period: "Jan 2015 - Jun 2018",
        location: "São Paulo, Brazil",
        bullets: ["Responsive web interfaces for small and mid-sized companies."],
        tags: ["Angular", "JavaScript", "HTML5", "CSS3"],
      },
      {
        title: "Frontend Developer",
        company: "DWS",
        period: "Jan 2014 - Jun 2015",
        location: "São Paulo, Brazil",
        bullets: ["Web applications for IP and analog camera visualization."],
        tags: ["Frontend", "JavaScript", "Node.js"],
      },
      {
        title: "IT Support Analyst",
        company: "Zignet",
        period: "Sep 2012 - Dec 2013",
        location: "São Paulo, Brazil",
        bullets: ["Network, servers, radio internet and technical operations support."],
        tags: ["Networking", "Infrastructure", "Support"],
      },
      {
        title: "IT Support Analyst",
        company: "Masterponto Equipamentos e Sistemas",
        period: "Jan 2011 - Aug 2012",
        location: "São Paulo, Brazil",
        bullets: ["Technical support, maintenance and customer training."],
        tags: ["Support", "Maintenance", "Training"],
      },
    ],
    stack,
    education: [
      {
        institution: "MBA USP/Esalq",
        degree: "MBA, Computer Software Engineering",
        period: "Feb 2025 - Dec 2026",
      },
      {
        institution: "Anhembi Morumbi University",
        degree: "Graphic Design - Technologist Degree",
        period: "2019 - 2022",
      },
      {
        institution: "University of São Paulo",
        degree: "Geography - Bachelor's Studies",
        period: "2017 - 2019",
      },
    ],
  },
};
