//Simulador Simples de Orçamento Pessoal
function lerNumero(mensagem) {
  let valor;
  do {
    valor = Number(prompt(mensagem));
  } while (isNaN(valor) || prompt === null);
  return valor;
}

//Dados iniciais

//Nome do usuário
let nome = prompt("Qual é o seu nome?");

//Renda mensal
let renda;
do {
  renda = Number(prompt("Qual é a sua renda mensal? (R$)"));
} while (isNaN(renda));

//Despesas com limite de 1-5
let qtdDespesas;
do {
  qtdDespesas = Number(prompt("Quantas despesas você vai informar? (1 a 5)"));
} while (isNaN(qtdDespesas));

if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;

//Despesas com for
let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
  let despesa;
  do {
    despesa = Number(prompt(`Informe o valor da Despesa ${i}: (R$)`));
  } while (isNaN(despesa));
  totalDespesas += despesa;
}

//Analise de if/else
let sobra = renda - totalDespesas;
let mensagem;

if (totalDespesas > renda) {
  mensagem = "Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.30) {
    mensagem = "Ótimo: boa margem de sobra.";
  } else {
    mensagem = "Ok: dá para melhorar a sobra.";
  }
}

//Saida final
let resultado = `
   SIMULADOR DE ORÇAMENTO PESSOAL

Nome:              ${nome}
Renda mensal:      R$ ${renda.toFixed(2)}
Total de despesas: R$ ${totalDespesas.toFixed(2)}
Sobra:             R$ ${sobra.toFixed(2)}

${mensagem}
`;

alert(resultado);
console.log(resultado);