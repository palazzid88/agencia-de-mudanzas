// script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Landing cargada correctamente");

    // Animación al hacer scroll usando IntersectionObserver
    const elements = document.querySelectorAll('.scroll-anim');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const anim = entry.target.getAttribute('data-anim');
                entry.target.classList.add('animate__animated', `animate__${anim}`);
                observer.unobserve(entry.target); // solo una vez
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => {
        observer.observe(el);
    });
});
