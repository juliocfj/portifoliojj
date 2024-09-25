const content = {
    en: {
        projects: "Projects",
        technologies: "Technologies",
        skills: "Hard Skills",
        softskills: "Soft Skills",
        roles: "Roles",
        certifications: "Certifications & Courses",
        projectContent: "Here are the projects I've worked on, including cloud infrastructure automation, monitoring setup, and more.",
        technologiesContent: "Technologies I excel in include: Google Cloud, Kubernetes, Terraform, Ansible, and Linux.",
        skillsContent: "My hard skills: Cloud Engineering, Networking, Automation, Cybersecurity, Fortinet, Microsoft Azure.",
        softskillsContent: "My soft skills include: Leadership, Communication, Problem-solving, Team Collaboration.",
        rolesContent: "Roles I've held: Cloud Engineer, IT Security Admin, ITOps Specialist, Network Engineer.",
        certificationsContent: "Certifications and courses: Fortinet Certified Associate, Microsoft Azure Certification, Google Cloud training."
    },
    pt: {
        projects: "Projetos",
        technologies: "Tecnologias",
        skills: "Habilidades Técnicas",
        softskills: "Habilidades Interpessoais",
        roles: "Funções",
        certifications: "Certificações e Cursos",
        projectContent: "Aqui estão os projetos em que trabalhei, incluindo automação de infraestrutura em cloud, configuração de monitoramento, e mais.",
        technologiesContent: "Tecnologias em que sou especialista: Google Cloud, Kubernetes, Terraform, Ansible, e Linux.",
        skillsContent: "Minhas habilidades técnicas: Engenharia de Cloud, Redes, Automação, Segurança Cibernética, Fortinet, Microsoft Azure.",
        softskillsContent: "Minhas habilidades interpessoais incluem: Liderança, Comunicação, Resolução de Problemas, Colaboração em Equipe.",
        rolesContent: "Funções que ocupei: Engenheiro de Cloud, Administrador de Segurança de TI, Especialista em ITOps, Engenheiro de Redes.",
        certificationsContent: "Certificações e cursos: Fortinet Certified Associate, Certificação Microsoft Azure, treinamento em Google Cloud."
    },
    it: {
        projects: "Progetti",
        technologies: "Tecnologie",
        skills: "Competenze Tecniche",
        softskills: "Competenze Trasversali",
        roles: "Ruoli",
        certifications: "Certificazioni e Corsi",
        projectContent: "Ecco i progetti a cui ho lavorato, inclusa l'automazione dell'infrastruttura cloud, la configurazione del monitoraggio e altro.",
        technologiesContent: "Tecnologie in cui eccello: Google Cloud, Kubernetes, Terraform, Ansible, e Linux.",
        skillsContent: "Le mie competenze tecniche: Cloud Engineering, Networking, Automazione, Sicurezza informatica, Fortinet, Microsoft Azure.",
        softskillsContent: "Le mie competenze trasversali includono: Leadership, Comunicazione, Problem-solving, Collaborazione di squadra.",
        rolesContent: "Ruoli che ho ricoperto: Cloud Engineer, Amministratore di sicurezza IT, Specialista ITOps, Ingegnere di rete.",
        certificationsContent: "Certificazioni e corsi: Fortinet Certified Associate, Certificazione Microsoft Azure, Formazione Google Cloud."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('.tab').forEach(function(tab, index) {
        switch (index) {
            case 0:
                tab.textContent = content[lang].projects;
                break;
            case 1:
                tab.textContent = content[lang].technologies;
                break;
            case 2:
                tab.textContent = content[lang].skills;
                break;
            case 3:
                tab.textContent = content[lang].softskills;
                break;
            case 4:
                tab.textContent = content[lang].roles;
                break;
            case 5:
                tab.textContent = content[lang].certifications;
                break;
        }
    });

    document.getElementById('projects-content').textContent = content[lang].projectContent;
    document.getElementById('technologies-content').textContent = content[lang].technologiesContent;
    document.getElementById('skills-content').textContent = content[lang].skillsContent;
    document.getElementById('softskills-content').textContent = content[lang].softskillsContent;
    document.getElementById('roles-content').textContent = content[lang].rolesContent;
    document.getElementById('certifications-content').textContent = content[lang].certificationsContent;
}

function showSection(section) {
    document.querySelectorAll('.content-section').forEach(function(contentSection) {
        contentSection.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}
