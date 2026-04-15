// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Nav background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 50
        ? 'rgba(10,10,15,0.9)'
        : 'rgba(10,10,15,0.7)';
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
