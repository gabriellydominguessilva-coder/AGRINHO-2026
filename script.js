document.body.classList.remove("no-js");

/* =========================
   MENU MOBILE
========================= */
const menuLinks = document.querySelectorAll(".main-nav a");
const menuCheckbox = document.querySelector("#nav-toggle-checkbox");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  });
});

/* =========================
   ANIMAÇÃO DAS SEÇÕES
========================= */
const secoes = document.querySelectorAll(".content-section");

secoes.forEach(secao => {
  secao.style.opacity = "0";
  secao.style.transform = "translateY(30px)";
  secao.style.transition = "0.6s ease";
});

function animarSecoes() {
  secoes.forEach(secao => {
    const topo = secao.getBoundingClientRect().top;

    if (topo < window.innerHeight - 100) {
      secao.style.opacity = "1";
      secao.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", animarSecoes);
animarSecoes();

/* =========================
   GRÁFICOS (CHART.JS)
========================= */
const grafico1 = document.getElementById("chart1");

if (grafico1) {
  new Chart(grafico1, {
    type: "bar",
    data: {
      labels: ["Produção", "Uso de Água", "Economia"],
      datasets: [{
        label: "Índice sustentável",
        data: [90, 60, 75]
      }]
    },
    options: {
      responsive: true
    }
  });
}

const grafico2 = document.getElementById("chart2");

if (grafico2) {
  new Chart(grafico2, {
    type: "doughnut",
    data: {
      labels: ["Área Conservada", "Área Produtiva"],
      datasets: [{
        data: [40, 60]
      }]
    },
    options: {
      responsive: true
    }
  });
}

/* =========================
   QUIZ
========================= */
const perguntas = [
  {
    pergunta: "Qual prática ajuda na agricultura sustentável?",
    respostas: ["Desmatamento", "Rotação de culturas", "Poluição da água"],
    correta: 1
  },
  {
    pergunta: "Qual tecnologia ajuda o agricultor?",
    respostas: ["Drones", "Queimadas", "Desperdício"],
    correta: 0
  },
  {
    pergunta: "Qual energia é renovável?",
    respostas: ["Carvão", "Solar", "Petróleo"],
    correta: 1
  }
];

let perguntaAtual = 0;
let pontos = 0;

const areaPergunta = document.querySelector("#question-area");
const areaResposta = document.querySelector("#answers");
const botaoProximo = document.querySelector("#next-btn");
const resultado = document.querySelector("#result");

function carregarQuiz() {
  if (!areaPergunta) return;

  const pergunta = perguntas[perguntaAtual];

  areaPergunta.textContent = pergunta.pergunta;
  areaResposta.innerHTML = "";

  pergunta.respostas.forEach((resposta, index) => {
    const li = document.createElement("li");
    const botao = document.createElement("button");

    botao.textContent = resposta;

    botao.addEventListener("click", () => {
      if (index === pergunta.correta) {
        pontos++;
      }
      botaoProximo.disabled = false;
    });

    li.appendChild(botao);
    areaResposta.appendChild(li);
  });
}

if (botaoProximo) {
  botaoProximo.addEventListener("click", () => {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
      carregarQuiz();
      botaoProximo.disabled = true;
    } else {
      areaPergunta.textContent = "Quiz finalizado!";
      areaResposta.innerHTML = "";
      resultado.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
    }
  });
}

carregarQuiz();

/* =========================
   INTERAÇÃO GERAL
========================= */
document.querySelectorAll(".btn").forEach(botao => {
  botao.addEventListener("click", () => {
    console.log("Botão clicado!");
  });
});

/* =========================
   LOAD
========================= */
window.addEventListener("load", () => {
  console.log("Agro Forte carregado com sucesso 🌱");
});
