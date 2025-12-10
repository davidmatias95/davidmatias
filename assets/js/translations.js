// Traduções para EN e PT-PT
const translations = {
  en: {
    // Navbar
    about: "About",
    resume: "Resume",
    skills: "Skills",
    additional: "Additional",
    
    // About Section
    aboutMe: "About me",
    
    // Resume Section
    experience: "Experience",
    education: "Education",
    
    // Skills Section
    skillsTitle: "Skills",
    languages: "Languages",
    motherTongue: "Mother Tongue",
    digitalSkills: "Digital Skills",
    programmingLanguages: "Programming Languages",
    databases: "Databases",
    otherSkills: "Other Skills",
    communication: "Communication",
    organizational: "Organizational",
    
    // Additional Section
    additionalTitle: "Additional",
    projects: "Projects",
    conferences: "Conferences",
    hobbiesEvents: "Hobbies & Events",
    drivingLicense: "Driving License",
    eventOrganization: "Event Organization",
    
    // Technology Section
    technology: "Technology's",
    
    // Resume details
    level: "Level",
    curriculumUnits: "Curriculum Units",
    professionalTest: "Professional Test",
    description: "Description",
    technologies: "Technologies",
    keyProjects: "Key Projects",
    certifications: "Certifications"
  },
  
  pt: {
    // Navbar
    about: "Sobre",
    resume: "Currículo",
    skills: "Competências",
    additional: "Adicional",
    
    // About Section
    aboutMe: "Sobre mim",
    
    // Resume Section
    experience: "Experiência",
    education: "Educação",
    
    // Skills Section
    skillsTitle: "Competências",
    languages: "Idiomas",
    motherTongue: "Língua Materna",
    digitalSkills: "Competências Digitais",
    programmingLanguages: "Linguagens de Programação",
    databases: "Bases de Dados",
    otherSkills: "Outras Competências",
    communication: "Comunicação",
    organizational: "Organizacional",
    
    // Additional Section
    additionalTitle: "Adicional",
    projects: "Projetos",
    conferences: "Conferências",
    hobbiesEvents: "Hobbies & Eventos",
    drivingLicense: "Carta de Condução",
    eventOrganization: "Organização de Eventos",
    
    // Technology Section
    technology: "Tecnologias",
    
    // Resume details
    level: "Nível",
    curriculumUnits: "Unidades Curriculares",
    professionalTest: "Teste Profissional",
    description: "Descrição",
    technologies: "Tecnologias",
    keyProjects: "Projetos-Chave",
    certifications: "Certificações"
  }
};

// Função para obter tradução
function t(key, lang = 'en') {
  return translations[lang]?.[key] || translations['en'][key] || key;
}

// Exportar para uso global
window.translations = translations;
window.t = t;
