// 1. Calculadora simples
let a = 10;
let b = 5;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);

// 2. Resto da divisão
let numero = 7;

console.log(numero % 2 === 0 ? "Par" : "Ímpar");

// 3. Potência
let num = 4;

console.log("Quadrado:", num ** 2);
console.log("Cubo:", num ** 3);

// 4. Conversão de temperatura
let celsius = 30;
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Temperatura em Fahrenheit:", fahrenheit);

// 5. Média aritmética
let nota1 = 8;
let nota2 = 7.5;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(2));

// 6. Cálculo de troco
let preco = 45;
let pago = 60;

let troco = pago - preco;

console.log("Troco: R$", troco);

// 7. Igual ou diferente?
console.log(5 == "5");
console.log(5 === "5");

// 8. Maior ou menor?
let n1 = 15;
let n2 = 20;

if (n1 > n2) {
    console.log(n1 + " é maior");
} else {
    console.log(n2 + " é maior");
}

// 9. Aprovado ou reprovado?
let nota = 6;

console.log(nota >= 7 ? "Aprovado" : "Reprovado");

// 10. Verificação de idade
let idade = 18;

console.log(idade >= 18 ? "Maior de idade" : "Menor de idade");

// 11. Comparação de strings
console.log("JavaScript" === "JavaScript");
console.log("JavaScript" !== "Python");
console.log("JS" === "js");

// 12. Faixa de preço
let valor = 50;

console.log(valor >= 10 && valor <= 100);

// 13. E lógico (&&)
let numeroPositivo = 8;

console.log(numeroPositivo > 0 && numeroPositivo % 2 === 0);

// 14. OU lógico (||)
let usuario = "admin";

console.log(usuario === "admin" || usuario === "root");

// 15. NÃO lógico (!)
let logado = true;

console.log(!logado);

if (!logado) {
    console.log("Usuário deslogado");
} else {
    console.log("Usuário logado");
}

// 16. Validação de formulário
let idadeUsuario = 20;
let email = "teste@gmail.com";

console.log(idadeUsuario > 18 && email !== "");

// 17. Desconto especial
let assinante = false;
let totalCompra = 250;

console.log(assinante || totalCompra > 200);

// 18. Acesso restrito
let maiorIdade = true;
let contaAtiva = true;
let banido = false;

console.log(maiorIdade && contaAtiva && !banido);

// 19. Par e dentro do intervalo
let numeroTeste = 40;

console.log(
    numeroTeste % 2 === 0 &&
    numeroTeste >= 1 &&
    numeroTeste <= 100
);

// 20. Classificação de nota
let notaAluno = 8;

if (notaAluno >= 9) {
    console.log("Excelente");
} else if (notaAluno >= 7) {
    console.log("Aprovado");
} else if (notaAluno >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// 21. Calculadora de IMC
let peso = 70;
let altura = 1.75;

let imc = peso / (altura ** 2);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

// 22. Jogo de adivinhar o número
let numeroSecreto = 42;
let palpite = 30;

if (palpite === numeroSecreto) {
    console.log("Você acertou!");
} else if (palpite > numeroSecreto) {
    console.log("O palpite é maior que o número secreto");
} else {
    console.log("O palpite é menor que o número secreto");
}

