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
        botao.textContent = '☀️';
        botao.style.background = '#00d4ff';
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
        botao.textContent = '☀️';
        botao.style.background = '#00d4ff';
    }
    
    localStorage.setItem('tema', 'escuro');
}

// Função que ativa o modo claro
function ativarModoClaro() {
    body.style.backgroundColor = '#f4f4f4';
    body.style.color = 'white';
    
    if (botao) {
        botao.textContent = '🌙 ';
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

// ========== FORMULÁRIO DE CONTATO ==========
const formulario = document.getElementById('formularioContato');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); //Impede o envio tradicional

        //Pega os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        //Salva no localStorage (simulação - depois integração com backend)
        const contato = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem,
            data: new Date().toLocaleString('pt-BR')
        };

        //Salva (em produção real, isso iria para um servidor)
        localStorage.setItem('ultimoContato', JSON.stringify(contato));

        //Mostra mensagem de sucesso
        formulario.style.display = 'none';
        document.getElementById('mensagemSucesso').style.display = 'block';

        //Log no console (para ver que funcionou)
        console.log('📧 Contato recebido', contato);

        //Reseta após 3 segundos
        setTimeout(() => {
            formulario.requestFullscreen();
            formulario.style.display = 'block';
            document.getElementById('mensagemSucesso').style.display = 'none';
        }, 3000);
    })
}

// ========== BOTÃO TOGGLE HABILIDADES ==========
const btnToggle = document.getElementById('btnToggleHabilidades');
const secaoHabilidades = document.getElementById('secaoHabilidades');

//Só executa se os elementos existirem (proteção)
if (btnToggle && secaoHabilidades) {
    btnToggle.addEventListener('click', function() {
        //Toggle: adiciona/remove a classe "escondido"
        secaoHabilidades.classList.toggle('escondido');

        //Muda o texto do botão
        if (secaoHabilidades.classList.contains('escondido')) {
            btnToggle.textContent = '🤓 Mostrar Habilidades';
        } else {
            btnToggle.textContent = '🫣 Esconder Habilidades';
        }
    })
}

// ========== BOTÃO TOGGLE EXPERIÊNCIAS ==========
const btnToggleExp = document.getElementById('btnToggleExperiencias');
const secaoExperiencias = document.getElementById('secaoExperiencias');

//Só executa se os elementos existirem (proteção)
if (btnToggleExp && secaoExperiencias) {
    btnToggleExp.addEventListener('click', function() {
        //Toggle: adiciona/remove a classe "escondido"
        secaoExperiencias.classList.toggle('escondido');

        //Muda o texto do botão
        if (secaoExperiencias.classList.contains('escondido')) {
            btnToggleExp.textContent = '🤓 Mostrar Experiências';
        } else {
            btnToggleExp.textContent = '🫣 Esconder Experiências';
        }
    })
}

// ========== BOTÃO TOGGLE FORMAÇÕES ==========
const btnToggleFormacao = document.getElementById('btnToggleFormacao');
const secaoFormacao = document.getElementById('secaoFormacao');

//Só executa se os elementos existirem (proteção)
if (btnToggleFormacao && secaoFormacao) {
    btnToggleFormacao.addEventListener('click', function() {
        //Toggle: adiciona/remove a classe "escondido"
        secaoFormacao.classList.toggle('escondido');

        //Muda o texto do botão
        if (secaoFormacao.classList.contains('escondido')) {
            btnToggleFormacao.textContent = '🤓 Mostrar Formações';
        } else {
            btnToggleFormacao.textContent = '🫣 Esconder Formações';
        }
    })
}

// ========== BOTÃO TOGGLE IDIOMA ==========
const btnToggleIdioma = document.getElementById('btnToggleIdioma');
const secaoIdioma = document.getElementById('secaoIdioma');

//Só executa se os elementos existirem (proteção)
if (btnToggleIdioma && secaoIdioma) {
    btnToggleIdioma.addEventListener('click', function() {
        //Toggle: adiciona/remove a classe "escondido"
        secaoIdioma.classList.toggle('escondido');

        //Muda o texto do botão
        if (secaoIdioma.classList.contains('escondido')) {
            btnToggleIdioma.textContent = '🤓 Mostrar Idiomas';
        } else {
            btnToggleIdioma.textContent = '🫣 Esconder Idiomas';
        }
    })
}