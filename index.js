//Perguntas iniciais
//variáveis
//Dados de Entrada e Saída

const elementoResposta = document.querySelector("#respostas")

//elementoResposta chama o id resposta no arquivo html

const inputPergunta = document.querySelector("#inputPergunta")

//inputPergunta chama o id inputPergunta no arquivo html

const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
  "Não",
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não dizer agora...",
  "Ao meu ver, sim",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Pergunte novamente.",
  "Sinais apontam que sim.",
  "Improvável.",
  "Impossível.",
  "Possível.",
  "Pode acontecer.",
]


//Para gerar um número aleatório.

//O math.random cria um número aleatório e 0 á 1 (sem contar o 1. 0.9999999).

//O math.floor arredonda o número para o piso 0.97 vira 0

//Unindo os dois eu posso criar un número aleatório com o limitador que eu precisar. nesse caso será o total de respostas (const totalRespostas)


//CLickar em fazer pergunta

function fazerPergunta() {

  if (inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute('disabled', true)
  //Atributindo disabled a tag button

  //Mostra a pergunta
  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //Gerar número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  //Sumir a resposta depois de 3 segundos

  setTimeout(function () { elementoResposta.style.opacity = 0; }, 3000)
  buttonPerguntar.removeAttribute('disabled')
  //três mil milisegundos
  //função sendo passada como argumento.
}