// This script just contains language switching functionality and navigation

document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('languageSelect');

    // Language switcher
    languageSelect.addEventListener('change', function (e) {
        const language = e.target.value;
        document.documentElement.lang = language;

        // Hide all language-specific content
        document.querySelectorAll('.lang-en, .lang-fr').forEach(el => {
            el.classList.add('hidden');
        });

        // Show selected language content
        document.querySelectorAll('.lang-' + language).forEach(el => {
            el.classList.remove('hidden');
        });
    });

    // Logo click scrolls to top
    document.querySelector('.logo').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    });
});
