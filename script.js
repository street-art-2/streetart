
// Scroll reveal animations
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    // Elements with basic fade/slide effects
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('active');
        }
    });

    // Timeline items animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (itemPosition < screenPosition) {
            item.classList.add('visible');
        }
    });
}

// Initialize everything on load
document.addEventListener('DOMContentLoaded', () => {
    // Initial scroll reveal
    revealOnScroll();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero section parallax effect
    const heroVideo = document.querySelector('video');
    if (heroVideo) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroVideo.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        });
    }

    // Warrior card hover effects
    const warriors = document.querySelectorAll('.warrior-card');
    warriors.forEach(warrior => {
        warrior.addEventListener('mouseenter', () => {
            warrior.classList.add('warrior-glow');
            const img = warrior.querySelector('img');
            if (img) img.style.transform = 'scale(1.05)';
        });
        
        warrior.addEventListener('mouseleave', () => {
            warrior.classList.remove('warrior-glow');
            const img = warrior.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
        });
    });

    // Tooltip for roadmap items
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    roadmapItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const tooltip = item.querySelector('.roadmap-tooltip');
            if (tooltip) tooltip.classList.remove('hidden');
        });
        
        item.addEventListener('mouseleave', () => {
            const tooltip = item.querySelector('.roadmap-tooltip');
            if (tooltip) tooltip.classList.add('hidden');
        });
    });

    // Animate warrior class icons
    const classIcons = document.querySelectorAll('.warrior-class-icon');
    classIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });
});

// Intersection Observer for more performant scroll effects
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
});