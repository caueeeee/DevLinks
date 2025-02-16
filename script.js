function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('#profile img');

    // Adiciona transição suave reduzindo a opacidade antes da troca
    img.style.opacity = '0';

    setTimeout(() => {
        if (html.classList.contains('light')) {
            img.setAttribute('src', './assets/avatar-robin-light.png');
            img.setAttribute('alt', 'Imagem modo claro');
        } else {
            img.setAttribute('src', './assets/avatar-batman-dark.png');
            img.setAttribute('alt', 'Imagem modo escuro');
        }

        // Restaura a opacidade suavemente após a troca da imagem
        img.style.opacity = '1';
    }, 100); // Tempo suficiente para suavizar a transição
}
