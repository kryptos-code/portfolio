// Portfolio Data
const portfolioData = {
    // Site Information
    site: {
        title: "Shoaib",
        logoPath: "assets/images/logo.png",
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
            title: "E-commerce Website",
            description: "A full-featured e-commerce platform built with React and Node.js, featuring product catalog, shopping cart, and secure payment integration.",
            image: "assets/images/project1.jpg",
            tags: ["React", "Node.js", "MongoDB", "Stripe API"],
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "Task Management App",
            description: "A productivity application with drag-and-drop interface, task prioritization, and team collaboration features.",
            image: "assets/images/project2.jpg",
            tags: ["Vue.js", "Firebase", "Tailwind CSS"],
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "Portfolio Website",
            description: "A responsive personal portfolio website showcasing projects, skills, and contact information with a modern design.",
            image: "assets/images/project3.jpg",
            tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
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
        { platform: "GitHub", icon: "fab fa-github", url: "#" },
        { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
        { platform: "Twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "Instagram", icon: "fab fa-instagram", url: "#" }
    ]
};