// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Cargar componentes
$(document).ready(function() {
    // Cargar Navbar
    $("#navbar-container").load("components/Navbar.html", function() {
        // Inicializar el menú móvil después de cargar el navbar
        initializeMobileMenu();
    });

    // Cargar Empresa
    $("#empresa-container").load("components/Empresa.html");

    // Cargar Servicios
    $("#servicios-container").load("components/Servicios.html");

    // Cargar Productos
    $("#productos-container").load("components/Productos.html");

    // Cargar Galería
    $("#galeria-container").load("components/Galeria.html");

    // Cargar Contacto
    $("#contacto-container").load("components/Contacto.html", function() {
        // Inicializar el formulario de contacto después de cargarlo
        initializeContactForm();
    });

    // Cargar Footer
    $("#footer-container").load("components/Footer.html");
});

// Función para inicializar el menú móvil
function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const overlay = document.querySelector('[data-overlay]');

    if (mobileMenuButton && mobileMenu && overlay) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-0');
            mobileMenu.classList.toggle('translate-x-full');
            overlay.classList.toggle('opacity-0');
            overlay.classList.toggle('pointer-events-none');
        });

        overlay.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            overlay.classList.add('opacity-0', 'pointer-events-none');
        });
    }
}

// Función para inicializar el formulario de contacto
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar la lógica para enviar el formulario
            // Por ejemplo, usando fetch para enviar los datos a un servidor
            
            // Mostrar mensaje de éxito
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
}

// Smooth scroll para los enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-lg');
            navbar.classList.add('bg-transparent');
        }
    }
});

// Lazy loading para imágenes
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Mostrar/ocultar logo en navbar y hero al hacer scroll
window.addEventListener('scroll', function() {
    const logoNavbar = document.getElementById('navbar-logo');
    const logoHero = document.getElementById('hero-logo');
    if (window.scrollY > 80) {
        logoNavbar.classList.remove('opacity-0', 'pointer-events-none');
        logoNavbar.classList.add('opacity-100');
        logoHero.classList.add('opacity-0');
        logoHero.classList.remove('opacity-100');
    } else {
        logoNavbar.classList.add('opacity-0', 'pointer-events-none');
        logoNavbar.classList.remove('opacity-100');
        logoHero.classList.remove('opacity-0');
        logoHero.classList.add('opacity-100');
    }
});
