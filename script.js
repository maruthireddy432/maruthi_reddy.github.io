document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. Navigation Smooth Scroll --- */
    // Updated selector for the new floating navigation links
    document.querySelectorAll('.floating-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* --- 2. Scroll Spy (Highlight Active Icon) --- */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        // Trigger when 55% of the section is visible in the viewport
        threshold: 0.55 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the section is significantly visible
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Find the link that corresponds to the visible section and add active class
                const activeLink = document.querySelector(`.floating-nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Start observing all sections
    sections.forEach(section => {
        observer.observe(section);
    });


    /* --- 3. Contact Form (Existing Code) --- */
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
