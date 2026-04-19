document.addEventListener('DOMContentLoaded', function() {

    const botones = document.querySelectorAll('.boton-menu');
    const secciones = document.querySelectorAll('.seccion');

    function mostrarSeccion(idSeccion) {
        // Ocultar todas
        secciones.forEach(sec => {
            sec.classList.remove('visible');
        });

        // Quitar activo a todos los botones
        botones.forEach(btn => {
            btn.classList.remove('activo');
        });

        // Mostrar la seleccionada
        const activa = document.getElementById(idSeccion);
        if(activa) {
            activa.classList.add('visible');
        }

        // Resaltar el botón
        event.target.classList.add('activo');
    }

    // Asignar evento a cada botón
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const seccionId = this.dataset.seccion;
            mostrarSeccion(seccionId);
        });
    });

    // Mostrar Inicio al cargar
    document.querySelector('.boton-menu[data-seccion="inicio"]').click();

});
