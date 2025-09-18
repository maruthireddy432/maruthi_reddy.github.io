document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // AOS is initialized in the HTML for simplicity, but you can manage it here.
    // For now, the existing functionality is handled by AOS.
    
    // Example: A simple form validation script for the contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real scenario, you'd send this data to a server.
            alert('Thank you for your message! I will get back to you shortly.');
            contactForm.reset();
        });
    }
});
