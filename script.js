// ========== SISTEMA DE TEMA (funciona em todas as páginas) ==========
const body = document.body;
const temaSalvo = localStorage.getItem('tema');

// Aplica o tema salvo automaticamente ao carregar a página
if (temaSalvo === 'escuro') {
    body.style.backgroundColor = '#1a1a1a';
    body.style.color = 'white';
} else if (temaSalvo === 'claro') {
    body.style.backgroundColor = '#f4f4f4';
    body.style.color = 'black';
}

// ========== BOTÃO DE MODO ESCURO (só no index.html) ==========
const botao = document.getElementById('modoEscuro');

// Só executa se o botão existir (proteção)
if (botao) {
    // Atualiza o texto do botão baseado no tema atual
    if (temaSalvo === 'escuro') {
        botao.textContent = '☀️ Modo Claro';
        botao.style.background = '#ff6b6b';
    }

    // Quando clicar no botão
    botao.addEventListener('click', function() {
        const temaAtual = localStorage.getItem('tema');

        if (temaAtual === 'escuro') {
            ativarModoClaro();
        } else {
            ativarModoEscuro();
        }
    });
}

// Função que ativa o modo escuro
function ativarModoEscuro() {
    body.style.backgroundColor = '#1a1a1a';
    body.style.color = 'white';
    
    if (botao) {
        botao.textContent = '☀️ Modo Claro';
        botao.style.background = '#ff6b6b';
    }
    
    localStorage.setItem('tema', 'escuro');
}

// Função que ativa o modo claro
function ativarModoClaro() {
    body.style.backgroundColor = '#f4f4f4';
    body.style.color = 'black';
    
    if (botao) {
        botao.textContent = '🌙 Modo Escuro';
        botao.style.background = '#00d4ff';
    }
    
    localStorage.setItem('tema', 'claro');
}

// ========== CONTADOR DE VISITAS (só no index.html) ==========
const contadorElemento = document.getElementById('contador');

// Só executa se o contador existir (proteção)
if (contadorElemento) {
    // Pega o número de visitas salvo (ou 0 se for a primeira vez)
    let visitas = localStorage.getItem('visitas') || 0;
    
    // Adiciona +1
    visitas++;
    
    // Salva o novo número
    localStorage.setItem('visitas', visitas);
    
    // Mostra na página
    contadorElemento.textContent = visitas;
}