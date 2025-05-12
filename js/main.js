// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for header height
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Observe all project cards and skill items
document.querySelectorAll('.project-card, .skill-item').forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initializeNavigation();
    
    // Load all data from the portfolio-data.js file
    loadSiteData();
    loadPersonalData();
    loadProjectsData();
    loadSkillsData();
    loadSocialLinksData();
});

// Mobile Navigation Toggle
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Load Site Data (Logo and Title)
function loadSiteData() {
    // Set site title
    document.getElementById('site-title').textContent = portfolioData.site.title;
    document.title = portfolioData.site.title;
    
    // Set logo image
    const logoImage = document.getElementById('logo-image');
    logoImage.src = portfolioData.site.logoPath;
    logoImage.alt = portfolioData.site.title + " Logo";
}

// Load Personal Data
function loadPersonalData() {
    // Set name and title in hero section
    document.getElementById('user-name').textContent = portfolioData.personal.name;
    document.getElementById('user-title').textContent = portfolioData.personal.title;
    
    // Set about content
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = '';  // Clear existing content
    
    portfolioData.personal.about.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        aboutContent.appendChild(p);
    });
    
    // Set copyright text
    document.getElementById('copyright-text').textContent = 
        `© ${portfolioData.personal.year} ${portfolioData.personal.name}. All rights reserved.`;
}

// Load Projects Data
function loadProjectsData() {
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = '';  // Clear existing content
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.links.demo}" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="${project.links.github}" class="project-link"><i class="fab fa-github"></i> Source Code</a>
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Load Skills Data
function loadSkillsData() {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';  // Clear existing content
    
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <i class="${skill.icon} skill-icon"></i>
            <span class="skill-name">${skill.name}</span>
        `;
        
        skillsGrid.appendChild(skillItem);
    });
}

// Load Social Links Data
function loadSocialLinksData() {
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = '';  // Clear existing content
    
    portfolioData.socialLinks.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.url}" class="footer-link" title="${link.platform}"><i class="${link.icon}"></i></a>`;
        socialLinks.appendChild(li);
    });
}

(function () {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  })();

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert("Please complete the reCAPTCHA.");
        return;
    }

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
        .then(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            grecaptcha.reset();
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Failed to send message.");
        });
});

// Inject the sitekey into the reCAPTCHA div
document.addEventListener("DOMContentLoaded", function () {
    const recaptchaDiv = document.getElementById("recaptcha-container");
  
    if (recaptchaDiv && typeof RECAPTCHA_SITE_KEY !== "undefined") {
      recaptchaDiv.setAttribute("data-sitekey", RECAPTCHA_SITE_KEY);
    } else {
      console.error("reCAPTCHA sitekey not found in config.js.");
    }
  });