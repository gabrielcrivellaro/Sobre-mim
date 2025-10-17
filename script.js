const botao = document.getElementById('modoEscuro');
const body = document.body;
//Pega o número de visitas salvo (ou 0 se for a primeira vez)
let visitas = localStorage.getItem('visitas') || 0;

//Verifica se o usuário já escolheu um tema antes
const temaSalvo = localStorage.getItem('tema');

//Se já escolheu, aplica automaticamente
if (temaSalvo === 'escuro') {
    ativarModoEscuro();
}

//Quando clicar no botão
botao.addEventListener('click', function() {
    const temaAtual = localStorage.getItem('tema');

    if (temaAtual === 'escuro') {
        ativarModoClaro();
    } else {
        ativarModoEscuro();
    }
});

//Função que ativa o modo escuro
function ativarModoEscuro() {
    body.style.backgroundColor = '#1a1a1a';
    body.style.color = 'white';
    botao.textContent = '☀️ Modo Claro';
    botao.style.background = '#ff6b6b';

    //Salva a escolha no navegador
    localStorage.setItem('tema', 'escuro');
}

//Função que ativa o modo claro
function ativarModoClaro() {
    body.style.backgroundColor = '#f4f4f4';
    body.style.color = 'black';
    botao.textContent = '🌙 Modo Escuro';
    botao.style.background = '#00d4ff';

    //Salva a escolha no navegador
    localStorage.setItem('tema', 'claro');
}

//Adiciona +1
visitas++;

//Salva o novo número
localStorage.setItem('visitas', visitas);

//Mostra na página
document.getElementById('contador').textContent = visitas;