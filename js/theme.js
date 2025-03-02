const themeToggle = document.getElementById('theme-toggle');

// Verificar preferencia del sistema
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark-mode');
}

// Cambiar tema al hacer click en el botón
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
});