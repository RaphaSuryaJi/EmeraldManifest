document.addEventListener('DOMContentLoaded', () => {
    console.log('Manifesto Esmeralda carregado!');

    const acc = document.querySelectorAll('.accordion');
    acc.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    const joinButton = document.getElementById('joinUs');
    joinButton.addEventListener('click', () => {
        alert('Obrigado por se juntar a nós na jornada para um futuro regenerativo e consciente!');
    });
});
