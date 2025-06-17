// Este es el contenido de tu archivo '../Script/ac_estil.js'
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('mainHeader');
    // Ya NO necesitamos seleccionar 'headerTitle' aquí.
    // const headerTitle = document.querySelector('.header-title'); // ELIMINA ESTA LÍNEA

    const scrollThreshold = 100; // Define cuántos píxeles debe bajar el usuario antes de que ocurra el cambio

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            // Cuando el usuario ha bajado más allá del umbral
            header.classList.add('scrolled'); // SOLO AÑADE LA CLASE 'scrolled' AL HEADER
        } else {
            header.classList.remove('scrolled'); // SOLO QUITA LA CLASE 'scrolled'
        }
    });
});