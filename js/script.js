document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality for single-page version
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');

    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const activePage = document.querySelector(pageId);
        if (activePage) {
            activePage.classList.add('active');
            window.scrollTo(0, 0);
        }
    }

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('href');
                showPage(pageId);
            });
        });

        // Initial page load
        showPage('#home');
    }
});