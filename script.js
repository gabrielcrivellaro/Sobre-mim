const botao = document.getElementById('modoEscuro');
const body = document.body;
let modoEscuro = true;

botao.addEventListener('click', function() {
    if (modoEscuro) {
        //Volta pro modo claro
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = 'black';
        botao.textContent = '🌙 Modo Escuro';
        botao.style.background = '#00d4ff';
        modoEscuro = false;
    } else {
        //Ativa modo escuro
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = 'white';
        botao.textContent = '☀️ Modo Claro';
        botao.style.background = '#ff6b6b';
        modoEscuro = true;
    }
});