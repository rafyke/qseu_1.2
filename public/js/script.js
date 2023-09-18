//SCRIPT 

const pessoas = [
  {
    nome: "LULA",
    inicial: "POPULISTA",
    dicas: ["TEM 9 DEDOS", "REPRESENTA A REPÚBLICA", "CACHACEIRO", "EX-MULHER MORREU", "FAZ O L"]
  },
  {
    nome: "ANITTA",
    inicial: "POLIGLOTA",
    dicas: ["DE HONÓRIO GURGEL", "ESTEVE NO TOP GLOBAL DO SPOTIFY", "CANTOR(A)", "ERA POBRE", "INTERNACIONAL"]
  },
  {
    nome: "ZECA PAGODINHO",
    inicial: "CERVEJEIRO",
    dicas: ["DE XERÉM", "DA MASSA", "CANTOR(A)", "ERA POBRE", "CASADO(A)"]
  },
  {
    nome: "SILVIO SANTOS",
    inicial: "DA TERCEIRA IDADE",
    dicas: ["APRESENTADOR(A)", "EMPRESÁRIO(A)", "JÁ CONCORREU A PRESIDÊNCIA", "SÓ TEM FILHAS", "DONO DE EMISSORA"]
  },
  {
    nome: "MARGOT ROBBIE",
    inicial:"ATRIZ",
    dicas: ["DA AUSTRÁLIA", "TALENTO RECENTE", "INDICADO(A) AO OSCAR", "TATUADOR(A) AMADOR(A)", "INTERPRETOU JANE DO TARZAN"]
  }
  // Adicione outras pessoas aqui
];

let pessoaAtual = 0;
let dicaAtual = 0;
let vidas = 5; // Defina o número inicial de vidas

const dicaInicial = document.getElementById("zeroTip");

const spansDicas = [
  document.getElementById("firTip"),
  document.getElementById("secTip"),
  document.getElementById("thTip"),
  document.getElementById("foTip"),
  document.getElementById("fiTip")
];

// Exibir a dica inicial automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  exibirDicaInicial();
});

function exibirDicaInicial() {
  if (pessoas[pessoaAtual].inicial !== "") {
    dicaInicial.textContent = pessoas[pessoaAtual].inicial;
  }
}


const vidasP = document.getElementById("vidasP");
atualizarVidas(); // Atualiza o número de vidas na exibição inicial

const inputPal = document.getElementById("inputPal");
const botaoExibir = document.getElementById("botaoExibir");
const botaoAdivinhar = document.getElementById("botaoAdivinhar");
const botaoPular = document.getElementById("botaoPular");

function exibirProximaDica() {
  if (dicaAtual < pessoas[pessoaAtual].dicas.length) {
    spansDicas[dicaAtual].textContent = pessoas[pessoaAtual].dicas[dicaAtual];
    dicaAtual++;
    vidas--;
    atualizarVidas();
  }

  // Verifica se há mais dicas disponíveis para exibir
  if (dicaAtual < pessoas[pessoaAtual].dicas.length) {
    botaoExibir.disabled = false;
  } else {
    botaoExibir.disabled = true;
  }

  inputPal.value = "";
}

function atualizarVidas() {
  vidasP.textContent = " ❤".repeat(vidas);
}

botaoExibir.addEventListener("click", () => {
  exibirProximaDica();
});


botaoAdivinhar.addEventListener("click", () => {
  const nomePessoa = pessoas[pessoaAtual].nome;
  const palpite = inputPal.value.toUpperCase();
  if (palpite === nomePessoa) {
    alert("Parabéns, você acertou!");
     
    pessoaAtual = (pessoaAtual + 1) % pessoas.length; // Avança para a próxima pessoa
    dicaAtual = 0; // Reinicia as dicas para a nova pessoa
    vidas = 5; // Reinicia as vidas para a nova pessoa
    atualizarVidas();
    botaoPular.click;
    exibirDicaInicial();
    spansDicas.forEach(span => (span.textContent = "")); // Limpa as dicas exibidas
    botaoExibir.disabled = false; // Habilita o botão Exibir para a nova pessoa
  } else {
    alert("Tente novamente");
    exibirProximaDica();
  }
  inputPal.value = "";
});

botaoPular.addEventListener("click", () => {
  pessoaAtual = (pessoaAtual + 1) % pessoas.length;
  dicaAtual = 0;
  vidas = 5;
  atualizarVidas();
  spansDicas.forEach(span => (span.textContent = ""));
  botaoExibir.disabled = false; // Habilita o botão Exibir após pular para a próxima pessoa
  inputPal.value = "";
  exibirDicaInicial();
});

//CONFIGURANDO O POP-UP COM AS REGRAS
const closePopupButton = document.getElementById("botaoFechar");
const popup = document.getElementById("popup");

function fechar() {
  popup.style.display = "none";
}

closePopupButton.addEventListener("click", fechar);

// // CONFIGURANDO O BOTÃO VOLTAR AVALIAÇÃO
// const botaoVoltar = document.getElementById("botaoVoltar");
// botaoVoltar.addEventListener("click", () => {
//   window.history.back();
// });

//REABRIR O POP UP AVALIAÇÃO
const botaoAbrirbtn = document.getElementById("botaoAbrir");
// const popup = document.getElementById("popup"); // Substitua com o ID correto do pop-up

function abrir() {
  popup.style.display = "block"; // Exibe o pop-up de avaliação}
}

botaoAbrirbtn.addEventListener("click", abrir);
