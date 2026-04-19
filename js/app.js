// Esperamos a que cargue todo el contenido
document.addEventListener('DOMContentLoaded', function() {

    // Obtenemos todos los enlaces del menú
    const enlaces = document.querySelectorAll('.menu-link');

    // Función para mostrar una sección y ocultar las demás
    function mostrarSeccion(idSeccion) {
        // Ocultar todas las secciones
        const secciones = document.querySelectorAll('.seccion');
        secciones.forEach(seccion => {
            seccion.classList.remove('visible');
        });

        // Mostrar la sección seleccionada
        const seccionActiva = document.getElementById(idSeccion);
        if(seccionActiva) {
            seccionActiva.classList.add('visible');
        }

        // Resaltar el enlace activo en el menú
        enlaces.forEach(enlace => {
            enlace.classList.remove('activo');
            if(enlace.dataset.seccion === idSeccion) {
                enlace.classList.add('activo');
            }
        });
    }

    // Agregar evento clic a cada enlace
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Evitar que salte a la posición
            const seccion = this.dataset.seccion;
            mostrarSeccion(seccion);
        });
    });

    // Mostrar la sección "Inicio" por defecto al cargar la página
    mostrarSeccion('inicio');

});
