const perguntas = [
    {
        pergunta: "Se você pudesse herdar uma relíquia tecnológica do passado para usar hoje, qual seria?",
        opcoes: [
            { texto: "Um celular de teclado QWERTY físico (estilo BlackBerry) ou os primeiros iPods Touch", decada: "2010"},
            { texto: "Uma Jukebox clássica iluminada por neon para decorar a sala", decada: "1950" },
            { texto: "Um toca-discos portátil em formato de maleta bem retrô", decada: "1970" },
            { texto: "Um iPod Classic de rodinha lotado de arquivos MP3", decada: "2000" },
            { texto: "Um toca-fitas Walkman amarelo daqueles bem esportivos", decada: "1980" },
            { texto: "Uma câmera analógica Super 8 para filmar a vida em tons quentes", decada: "1960" },
            { texto: "Um Discman que pula a música se você andar muito rápido", decada: "1990" },
            { texto: "Eu prefiro o minimalismo: só o meu celular e fones sem fio atuais", decada: "2020" }
        ]
    },
    {
        pergunta: "Qual é a sua estética visual favorita ou o estilo de imagem que mais te atrai?",
        opcoes: [
            { texto: "Pôsteres pintados à mão e revistas com cores pastéis e visual limpo", decada: "1950" },
            { texto: "Artes psicodélicas, pôsteres de festivais e estampas florais vibrantes", decada: "1960" },
            { texto: "Fotos com filtros quentes, lentes olho de peixe e muito veludo cotelê", decada: "1970" },
            { texto: "Cores neon piscando, gráficos de fliperama e estática de fita VHS", decada: "1980" },
            { texto: "Fotos analógicas com data amarela no canto e estilo urbano largado", decada: "1990" },
            { texto: "Estética cibernética do início da internet, tons prateados e óculos futuristas", decada: "2000" },
            { texto: "Estética Hipster ou fotos conceituais do Tumblr, com filtros vintage bem marcados e camisas xadrez", decada: "2010"},
            { texto: "Imagens minimalistas, vídeos verticais dinâmicos e filtros estéticos de redes sociais", decada: "2020" }
        ]
    },
    {
        pergunta: "Escolha uma forma clássica de passar o tempo ou um passatempo icônico:",
        opcoes: [
            { texto: "Se reunir com amigos em um gramado para tocar violão e conversar", decada: "1960" },
            { texto: "Passar na locadora de fitas de vídeo para escolher os filmes do fim de semana", decada: "1990" },
            { texto: "Passar a tarde patinando em uma pista de patinação com globos espelhados", decada: "1970" },
            { texto: "Maratonar uma série inteira em um único dia fazendo um 'cine em casa'", decada: "2020" },
            { texto: "Tentar quebrar o recorde de pontuação na máquina de Pinball do bairro", decada: "1980" },
            { texto: "Ir ao cinema drive-in assistir a um filme de suspense dentro do carro", decada: "1950" },
            { texto: "Ficar horas escolhendo o subnick perfeito e o plano de fundo do bate-papo", decada: "2000" },
            { texto: "Passar a tarde jogando Flappy Bird no celular ou personalizando o feed do Instagram com bordas brancas", decada: "2010"}
        ]
    },
    {
        pergunta: "Se você ganhasse uma viagem no tempo para um evento cultural, para onde iria?",
        opcoes: [
            { texto: "Para a pista de um festival eletrônico de 2012 ouvindo o auge do EDM e do Pop de rádio", decada: "2010"},
            { texto: "Para a plateia de um programa de auditório de rádio ao vivo", decada: "1950" },
            { texto: "Para um festival histórico de três dias de paz, lama e muita música livre", decada: "1960" },
            { texto: "Para um show pop icônico cheio de coreografias sincronizadas e roupas jeans", decada: "2000" },
            { texto: "Para uma pista lotada de Nova York dançar sob um enorme globo de espelhos", decada: "1970" },
            { texto: "Para um festival moderno cheio de palcos interativos, telões de LED e pulseiras luminosas", decada: "2020" },
            { texto: "Para a inauguração de uma grande loja de fliperamas ou o primeiro dia da MTV no ar", decada: "1980" },
            { texto: "Para um festival alternativo de rock de garagem ou um show de boyband dos anos 90", decada: "1990" }
            
        ]
    },
    {
        pergunta: "Qual dessas atitudes mais combina com o seu jeito de ser no dia a dia?",
        opcoes: [
            { texto: "Questionador(a) e idealista, gosto de pensar fora da caixa e lutar por mudanças", decada: "1960" },
            { texto: "Prático(a) e multitarefa, faço tudo pelo celular, crio conteúdos e consumo tudo muito rápido", decada: "2020" },
            { texto: "Good vibes e expressivo(a), gosto de liberdade e de me destacar pelo estilo", decada: "1970" },
            { texto: "Entusiasta da tecnologia, adoro acompanhar tendências e criar comunidades online", decada: "2000" },
            { texto: "Nostálgico(a) e enérgico(a), amo tudo que envolve cultura pop, cores e videogames", decada: "1980" },
            { texto: "Romântico(a) à moda antiga, aprecio a elegância e as tradições clássicas", decada: "1950" },
            { texto: "Descontraído(a) e autêntico(a), prefiro as coisas simples, reais e sem muita frescura", decada: "1990" },
            { texto: "Ligado(a) em cultura pop de transição, vivi a febre das sagas literárias no cinema e gosto de registrar tudo com fotos estéticas", decada: "2010"}
        ]
    }
];

let perguntaAtual = 0;

let pontuacao = {
    "1950": 0, "1960": 0, "1970": 0, "1980": 0, "1990": 0, "2000": 0, "2010": 0, "2020": 0
};

function carregarPergunta() {
    if (perguntaAtual < perguntas.length) {
        const dadosPergunta = perguntas[perguntaAtual];
        document.getElementById("pergunta").innerText = dadosPergunta.pergunta;
        
        const divOpcoes = document.getElementById("opcoes");
        divOpcoes.innerHTML = ""; 
        dadosPergunta.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.innerText = opcao.texto;
            botao.className = "btn-opcao"; 
            botao.onclick = () => computarResposta(opcao.decada);
            divOpcoes.appendChild(botao);
        });
    } else {
        mostrarResultado();
    }
}

function computarResposta(decadaSelecionada) {
    pontuacao[decadaSelecionada]++;
    perguntaAtual++;
    carregarPergunta();
}

function mostrarResultado() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("resultado-container").style.display = "block";

    let decadaVencedora = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);

    document.getElementById("resultado-decada").innerText = `Anos ${decadaVencedora}!`;
    
    const textosResultados = {
        "1950": "Você é do puro Rockabily! Combina com o nascimento do Rock 'n' Roll, Elvis Presley e os clássicos juke-boxes.",
        "1960": "Sua vibe é a Revolução dos Beatles e a Tropicália! Paz, amor e muita psicodelia definem sua alma.",
        "1970": "Abram alas para a era Disco e o Rock progressivo! Você brilha na pista ao som de ABBA, Queen e Bee Gees.",
        "1980": "Puro Synthpop e New Wave! Você combina com os cabelos armados, as batidas eletrônicas e o auge de Michael Jackson e Madonna.",
        "1990": "A era de ouro do Grunge e das Boybands! Você tem a energia do Nirvana, das Spice Girls e das dancinhas do Eurodance.",
        "2000": "Anos 2000 purinho! Sua vibe é o Pop Punk, Britney Spears, Beyoncé e o início da era digital com o MP3 player.",
        "2010": "A era de ouro do Tumblr, do EDM e dos feeds organizados! Sua vibe combina com o nascimento do Instagram, as camisas xadrez, a febre das sagas literárias e os maiores hits pop que dominavam as rádios.",
        "2020": "Você é totalmente conectado! Sua trilha sonora passeia pelo Pop moderno, K-Pop, e os maiores hits do TikTok e streaming."
    };

    document.getElementById("resultado-texto").innerText = textosResultados[decadaVencedora];

    const paginasDecadas = {
        "1950": "1950s.html", 
        "1960": "1960s.html",
        "1970": "1970s.html",
        "1980": "1980s.html",
        "1990": "1990s.html",
        "2000": "2000s.html",
        "2010": "2010s.html",
        "2020": "2020s.html"
    };

    const btnVisitar = document.getElementById("btn-visitar-era");
    btnVisitar.onclick = () => {
        globalThis.location.href = paginasDecadas[decadaVencedora];
    };

}

function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = { "1950": 0, "1960": 0, "1970": 0, "1980": 0, "1990": 0, "2000": 0, "2010": 0, "2020": 0 };
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("resultado-container").style.display = "none";
    carregarPergunta();
}

window.onload = carregarPergunta;

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
