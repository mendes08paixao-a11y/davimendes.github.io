function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
                });
            }
function toggleMenu() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('active');
            }
            
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((sec) => {
    sec.classList.add("hidden");
    observer.observe(sec);
});

