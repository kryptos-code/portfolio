// Portfolio Data
const portfolioData = {
    // Site Information
    site: {
        title: "Shoaib",
        logoPath: "assets/images/logo.png",
        resumePath: "assets/resume/resume.pdf",
        favicon: {
            ico: "assets/favicon/favicon.ico",
            apple: "assets/favicon/apple-touch-icon.png",
            png32: "assets/favicon/favicon-32x32.png",
            png16: "assets/favicon/favicon-16x16.png",
            manifest: "assets/favicon/site.webmanifest"
        }
    },
    
    // Personal Information
    personal: {
        name: "Shoaib Rehman",
        title: "Software Engineer | Full-Stack Developer | Problem Solver",
        year: 2025,
        about: [
            "Welcome to my portfolio! I’m a dedicated software engineer with a passion for building robust and scalable web applications. With experience across both front-end and back-end development, I enjoy crafting solutions that are not only functional but also user-centric and efficient.",
            "I thrive on solving complex challenges and translating ideas into impactful software. Outside of work, I’m often exploring new technologies, sharpening my design and system thinking, or contributing to developer communities through open-source and collaboration."
        ]
    },
    
    // Projects
    projects: [
        {
            title: "Recruitify - Smart Job Board Platform",
            description: "A full-stack job portal with role-based access for applicants, employers, and admins. Features include job posting, resume management, analytics dashboard, and email notifications.",
            image: "assets/images/project1.png",
            tags: ["Java", "Spring Boot", "Spring Security", "React.js", "Swagger (OpenAPI)"],
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "ResumeSense - Resume Scanner & AI Job Matcher",
            description: "An AI-powered tool that analyzes resumes against job descriptions to calculate match scores. Built using NLP techniques to highlight relevant skills and optimize job fit.",
            image: "assets/images/project2.png",
            tags: ["Python", "React.js", "FastAPI", "sklearn", "Pandas", "TF-IDF", "Named Entity Recognition"],
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "FinSight - Personal Finance Tracker with Visual Insights",
            description: "A modern web app to track income and expenses with interactive charts and export options. Helps users visualize spending patterns and manage personal budgets effectively.",
            image: "assets/images/project3.png",
            tags: ["Java", "Spring Boot", "JPA", "React.js", "Axios", "Docker"],
            links: {
                demo: "#",
                github: "#"
            }
        }
    ],
    
    // Skills
    skills: [
        { name: "Java", icon: "fab fa-java" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Sass", icon: "fab fa-sass" },
        { name: "AWS Cloud", icon: "fab fa-aws" },
        { name: "Docker", icon: "fab fa-docker" }
    ],
    
    // Social Links
    socialLinks: [
        { platform: "GitHub", icon: "fab fa-github", url: "https://github.com/kryptos-code" },
        { platform: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/kryptosshoaib" },
        { platform: "Twitter", icon: "fab fa-twitter", url: "https://x.com/shoaib_io" },
        { platform: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/shoaib.io" }
    ]
};