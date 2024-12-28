// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('bg-black');
    } else {
        document.querySelector('.navbar').classList.remove('bg-black');
    }
});

// Pre-order button click handler
document.querySelectorAll('.btn-neon').forEach(button => {
    button.addEventListener('click', function() {
        // Add glow effect on click
        this.style.boxShadow = 'var(--neon-green-glow)';
        setTimeout(() => {
            this.style.boxShadow = '';
        }, 200);
        
        // Here you would typically handle the pre-order process
        // For example, opening a modal or redirecting to a checkout page
        alert('Pre-order functionality would be implemented here!');
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});