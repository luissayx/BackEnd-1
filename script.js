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