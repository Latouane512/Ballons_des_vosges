document.addEventListener('DOMContentLoaded', () => {
    // Éléments du DOM
    const menuButton = document.getElementById('menuButton');
    const menuDropdown = document.getElementById('menuDropdown');
    const menuItems = document.querySelectorAll('.menu-item');
    const pages = document.querySelectorAll('.page');

    // Gestion du menu déroulant
    menuButton.addEventListener('click', () => {
        menuDropdown.classList.toggle('hidden');
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.add('hidden');
        }
    });

    // Navigation entre les pages
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            
            // Mettre à jour les classes actives
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === pageId) {
                    page.classList.add('active');
                }
            });

            // Fermer le menu
            menuDropdown.classList.add('hidden');

            // Scroll en haut de la page
            window.scrollTo(0, 0);
        });
    });

    // Animation douce pour le défilement
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});