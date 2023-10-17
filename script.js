const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Oculta todas las secciones
            document.querySelectorAll('main section').forEach(section => {
                section.style.display = 'none';
            });

            // Muestra la sección objetivo
            targetSection.style.display = 'block';
        }
    });
});