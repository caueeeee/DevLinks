function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('#profile img');

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/lightIMG.jfif');
        img.setAttribute('alt', 'Imagem modo claro');
    } else {
        img.setAttribute('src', './assets/Insta @staatues.jfif');
        img.setAttribute('alt', 'Imagem modo escuro');
    }
}