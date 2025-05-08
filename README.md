# Modern Portfolio Template

A responsive, dark-themed personal portfolio website for showcasing my projects and skills.

## Features

- Fully responsive design that works on all devices
- Modern dark theme with purple accent colors
- Clean typography using Inter and Plus Jakarta Sans fonts
- Project showcase section with hover effects
- Skills section with interactive icons
- Contact form with form validation
- Smooth scrolling navigation
- Intersection Observer API for scroll animations

## File Structure

```
portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   └── project3.jpg
│   └── favicon/
│       └── favicon.ico
└── README.md
```

## Customization

### Changing Colors

You can easily customize the color scheme by updating the CSS variables in the `:root` section of the `styles.css` file:

```css
:root {
    --primary: #333333;
    --primary-light: #555555;
    --accent: #7f5af0;
    --dark: #121212;
    --dark-gray: #222222;
    --medium-gray: #505050;
    --light-gray: #9ca3af;
    --light: #f3f4f6;
}
```

### Adding Projects

To add a new project, copy and paste the project card structure in the `index.html` file:

```html
<div class="project-card">
    <img src="assets/images/your-project-image.jpg" alt="Project Image" class="project-img">
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Description of your project here.</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" class="project-link"><i class="fab fa-github"></i> Source Code</a>
        </div>
    </div>
</div>
```

### Adding Skills

To add a new skill to the skills section, add this structure to the skills grid:

```html
<div class="skill-item">
    <i class="fab fa-skill-icon skill-icon"></i>
    <span class="skill-name">Skill Name</span>
</div>
```

Replace `fa-skill-icon` with the appropriate Font Awesome icon class for your skill.

## Dependencies

- [Font Awesome](https://fontawesome.com/) - For icons
- [Google Fonts](https://fonts.google.com/) - Inter and Plus Jakarta Sans fonts

## License

This template is free to use for both personal and commercial projects.

## Credits

Created with ❤️ by Shoaib Rehman


https://claude.ai/public/artifacts/8d226d57-7b16-4272-b48e-8b46345812f2