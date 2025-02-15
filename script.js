function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('#profile img');

    // Reduz opacidade antes de trocar a imagem
    img.style.opacity = '0';

    setTimeout(() => {
        if (html.classList.contains('light')) {
            img.setAttribute('src', './assets/lightIMG.jfif');
            img.setAttribute('alt', 'Imagem modo claro');
        } else {
            img.setAttribute('src', './assets/Insta @staatues.jfif');
            img.setAttribute('alt', 'Imagem modo escuro');
        }

        // Aumenta a opacidade suavemente após trocar a imagem
        img.style.opacity = '1';
    }, 150); // Tempo para garantir que a mudança de imagem ocorra suavemente
}
