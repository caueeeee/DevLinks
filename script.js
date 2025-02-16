function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('#profile img');

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-robin-light.png');
        img.setAttribute('alt', 'Imagem modo claro');
    } else {
        img.setAttribute('src', './assets/avatar-batman-dark.png');
        img.setAttribute('alt', 'Imagem modo escuro');
    }
}