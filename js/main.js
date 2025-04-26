// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Galería dinámica
const galleryImages = [
    { src: 'img/image2.png', alt: 'Evento 1' },
    { src: 'img/image1.png', alt: 'Evento 2' },
    { src: 'img/image.png', alt: 'Evento 3' },
];

const galleryContainer = document.querySelector('#galeria .row');

galleryImages.forEach((image, index) => {
    const delay = index * 200;
    const html = `
        <div class="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="gallery-item">
                <img src="${image.src}" alt="${image.alt}" class="img-fluid">
            </div>
        </div>
    `;
    galleryContainer.innerHTML += html;
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Mensaje enviado correctamente');
    this.reset();
});

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('preloader-finish');
    }
});

// Botón "Volver arriba"
const scrollToTop = document.createElement('div');
scrollToTop.classList.add('scroll-to-top');
scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTop);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
});

scrollToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
