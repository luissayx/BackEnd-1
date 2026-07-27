Declaração de variáveis em JavaScript
Em JavaScript, existem três formas de declarar variáveis:

//1. Usando var(forma mais antiga)
var idade = 25;
var nome = "Maria";
var estudante = true;

//2. Usando let(introduzindo no ES6)
let idade = 25;
let nome = "Maria";
let estudante = true;

//3. Usando const(para valores constantes)
const PI= 3.14159;
const NOME_EMPRESA = "TechSolutions";

Tipos de Dados em JavaScript
// 1. Tipos Primitivos
Number (Número)
Representa tantos números inteiros quanto decimais.
let idade = 25; //Número inteiro
let altura = 1.75; // Número decimal
let teperatura = -5; // Número negativo

String (texto)
Representa sequência de caracteres(texto)
let nome = "João";
let sobrenome = "Silva";
let enderenco = "Rua das flores, 123"; // Template string (ES9)

Boolean(Booleano)
Representa valores lógicos: verdadeiro (true) ou falso(false)
let estudante= true;
let aprovado = false;
Undefined
Representa uma variável que foi declarada, mas não recebeu um valor definido
let cidade;//valor é underfined
Null
Representa a ausência intencional de valor
let telefone = null; //Explicitamente sem valor

2. Tipos Complexos
//Array (Vetor)
//Coleção ordenada de valores.
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1,2,3,4,5];
let misturado = [1, "dois", true, null];

//Object(objeto)
//Coleção de pares chave-valor
let pessoa = {
nome: "Ana",
idade: 30,
profissao: "Desenvolvedora"
};

//Varificando o Tipo de variável

let idade = 25;
console.log(typeof idade);

let nome = "Maria";
console.log(typeof nome);
 
let ativo = true;
console.log(typeof ativo);

//Conversão entre Tipos
let numeroTexto = "42";
let numero = Number(numeroTexto);
console.log(typeof numero); //"number"

let numero1 = parseInt(numeroTexto); //Para inteiros
let numero2 = parseFloat(numeroTexto); //Para decimais

//De number para string 
let numero = 42; 
let texto = String(numero); //"42"(texto)
//Alternativa
let texto2 = numero.toString(); //"42"(texto)
//Para Boolean
let valor = 1;
let booleano = Boolean(valor);
//Valores que convertem para false:
//0, "", null, undefined, NaN, false



Exemplo Prático: Calculadora de idade
//declaração de variáveis
const anoAtual = 2026;
let anoNascimento = 2009;
//calculando a idade
let idade = anoAtual - anoNascimento;
//exibindo o resultado 
console.log("Você tem " + idade + " anos");//método antigo
console.log(`Você tem ${idade} anos.`)

Exemplo Prático:
//calculadora de média de notas
let nota1=8.5;
let nota2= 7.0;
let nota3 =9.5;

let media = (nota1 + nota2 + nota3) / 3;
console.log(`A média das notas é: ${media.toFixed(1)}`);

//Operadores de Atribuição Combinados
let pontos = 100; 
console.log(`Pontuação inicial: ${pontos}`);
//O jogador ganhou 50 pontos
pontos += 50;//Adiciona 50 pontos
console.log(`Pontuação após ganhar 50 pontos: ${pontos}`);
//O jogador perdeu 30 pontos 
pontos -=30; //Subtrai 30 pontos
console.log(`Pontuação após perder 30 pontos: ${pontos}`);