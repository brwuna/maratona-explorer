// quais são minhas varivaies?
// dados de entrada?
// dados de saída?
// como vou gerar os números?

const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const botaoPerguntar = document.querySelector('#botaoPerguntar')
const respostas = [
  "Com certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, simm!",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possível prever agora. :/",
  "Tenho uma perspectativa boa.",
  "Hm... as perspectativas não são tão boas.",
  "Sim.",
  "Concentre-se... Pergunte novamente",
  "Sinais apontam que sim.",
  "Volte amanhã, talvez minha resposta mude",
  "Em análise...",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if (inputPergunta.value == false) {
    alert('Você não pode querer respostas sem me fazer uma pergunta!')
    return
  }

  botaoPerguntar.setAttribute('disabled', true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerarando um número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
  // sumindo com a resposta depois de 3s
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    botaoPerguntar.removeAttribute('disabled')
  }, 3000)
}


