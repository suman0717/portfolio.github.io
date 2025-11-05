// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = savedTheme;
    updateThemeIcon();
}

function toggleTheme() {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.className === 'dark';
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (isDark) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const isOpen = mobileMenu.classList.contains('open');
    
    if (isOpen) {
        mobileMenu.classList.remove('open');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        mobileMenu.classList.add('open');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

// Smooth Scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('open')) {
            toggleMobileMenu();
        }
    }
}

// Download Resume
function downloadResume() {
    // Check if resume.pdf exists, otherwise show alert
    const resumePath = 'https://github.com/suman0717/portfolio.github.io/blob/main/SUMAN_KUMAR_CHANDAN.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Suman_Kumar_Chandan_Resume.pdf';
    
    // Try to download, show alert if file doesn't exist
    link.onerror = function() {
        alert('Please add your resume PDF file as "resume.pdf" in the same folder as this HTML file.');
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = portfolioData.skills.map((skillGroup, index) => `
        <div class="skill-card" style="animation-delay: ${index * 0.1}s">
            <h3 class="skill-category">${skillGroup.category}</h3>
            <div class="skill-tags">
                ${skillGroup.items.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render Experience
function renderExperience() {
    const experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.innerHTML = portfolioData.experience.map((job, index) => `
        <div class="experience-card" style="animation-delay: ${index * 0.2}s">
            <div class="experience-header">
                <div>
                    <h3 class="experience-role">${job.role}</h3>
                    <div class="experience-company">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        <span>${job.company}</span>
                    </div>
                    <div class="experience-meta">
                        <span class="experience-duration">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            ${job.duration}
                        </span>
                        <span class="experience-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            ${job.location}
                        </span>
                    </div>
                </div>
            </div>
            <div class="experience-content">
                <div class="experience-section">
                    <h4 class="experience-section-title">Key Responsibilities</h4>
                    <ul class="experience-list">
                        ${job.responsibilities.map(resp => `
                            <li>${resp}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="experience-section">
                    <h4 class="experience-section-title">Key Projects</h4>
                    <div class="project-tags">
                        ${job.keyProjects.map(project => `
                            <span class="project-tag">${project}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Projects Filtering
let selectedTags = [];
let searchQuery = '';
let expandedProjects = new Set();

function renderTags() {
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = portfolioData.allTags.map(tag => `
        <button class="tag-filter ${selectedTags.includes(tag) ? 'active' : ''}" 
                onclick="toggleTag('${tag}')">
            ${tag}
        </button>
    `).join('');
}

function toggleTag(tag) {
    if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(t => t !== tag);
    } else {
        selectedTags.push(tag);
    }
    renderTags();
    filterProjects();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchQuery = '';
    filterProjects();
}

function clearFilters() {
    searchQuery = '';
    selectedTags = [];
    document.getElementById('searchInput').value = '';
    renderTags();
    filterProjects();
}

function filterProjects() {
    const filteredProjects = portfolioData.projects.filter(project => {
        // Search query filter
        const matchesSearch = searchQuery === '' || 
            project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

        // Tag filter
        const matchesTags = selectedTags.length === 0 ||
            selectedTags.every(tag => project.tags.includes(tag));

        return matchesSearch && matchesTags;
    });

    renderProjects(filteredProjects);
    updateActiveFilters();
    updateResultsCount(filteredProjects.length);
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    const noResults = document.getElementById('noResults');

    if (projects.length === 0) {
        projectsGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        projectsGrid.style.display = 'grid';
        noResults.style.display = 'none';
        
        projectsGrid.innerHTML = projects.map((project, index) => {
            const isExpanded = expandedProjects.has(project.name);
            const displayFeatures = isExpanded ? project.features : project.features.slice(0, 3);
            
            return `
                <div class="project-card" style="animation-delay: ${index * 0.1}s">
                    <div class="project-header">
                        <h3 class="project-title">${project.name}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                    <div class="project-content">
                        <div class="project-features">
                            <h4 class="features-title">Key Features</h4>
                            <ul class="features-list">
                                ${displayFeatures.map(feature => `
                                    <li>${feature}</li>
                                `).join('')}
                            </ul>
                            ${project.features.length > 3 ? `
                                <button class="show-more-btn" onclick="toggleProjectExpanded('${project.name}')">
                                    ${isExpanded ? 
                                        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> Show Less' :
                                        `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg> Show ${project.features.length - 3} More`
                                    }
                                </button>
                            ` : ''}
                        </div>
                        <div class="project-tags-container">
                            ${project.tags.map(tag => `
                                <span class="project-tag-badge">${tag}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function toggleProjectExpanded(projectName) {
    if (expandedProjects.has(projectName)) {
        expandedProjects.delete(projectName);
    } else {
        expandedProjects.add(projectName);
    }
    filterProjects();
}

function updateActiveFilters() {
    const activeFilters = document.getElementById('activeFilters');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    
    const hasFilters = searchQuery || selectedTags.length > 0;
    
    if (hasFilters) {
        let filterText = '';
        if (searchQuery) {
            filterText += `Searching for: <strong>"${searchQuery}"</strong>`;
        }
        if (searchQuery && selectedTags.length > 0) {
            filterText += ' • ';
        }
        if (selectedTags.length > 0) {
            filterText += `Filtered by: <strong>${selectedTags.join(', ')}</strong>`;
        }
        activeFilters.innerHTML = filterText;
        activeFilters.style.display = 'block';
        clearFiltersBtn.style.display = 'inline-block';
    } else {
        activeFilters.style.display = 'none';
        clearFiltersBtn.style.display = 'none';
    }
    
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
}

function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    const hasFilters = searchQuery || selectedTags.length > 0;
    
    if (hasFilters && count > 0) {
        resultsCount.textContent = `Showing ${count} of ${portfolioData.projects.length} projects`;
        resultsCount.style.display = 'block';
    } else {
        resultsCount.style.display = 'none';
    }
}

// Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:suman0717@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    e.target.reset();
    
    // Show success message (you can customize this)
    alert('Opening your email client...');
}

// Search Input Handler
function handleSearchInput(e) {
    searchQuery = e.target.value;
    filterProjects();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize theme
    initTheme();
    
    // Render sections
    renderSkills();
    renderExperience();
    renderTags();
    filterProjects();
    
    // Add event listeners
    document.getElementById('searchInput').addEventListener('input', handleSearchInput);
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
});
