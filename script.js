// Menú móvil
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulario de Reserva (ejemplo básico)
const form = document.querySelector('.reservation form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Reserva enviada! Nos pondremos en contacto contigo.');
    form.reset();
});