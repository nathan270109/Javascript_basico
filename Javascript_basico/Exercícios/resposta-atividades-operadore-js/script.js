// EXERCICIOS

// let aluno = false
// if (aluno == true){
//     console.log("presença")
// } else {
//     console.log("Falta")
// }

// function situacaoAluno() {
//     let nota1 = Number(prompt("informe a primeira nota:"))
//     let nota2 = Number(prompt("informe a segunda nota:"))
//     let nota3 = Number(prompt("informe a terceira nota:"))

//     let media = (nota1+nota2+nota3)/3

//     if(media < 6){
//         alert("Aluno Reprovado")
//     } else if(media >= 6 && media<7){
//         alert("Aluno em exame")
//     } else{
//         alert("Aluno Reprovado")
//     }




// // 1 ----------------------------------
// let a = 10;
// let b = 5;

// console.log("Soma:", a + b);
// console.log("Subtração:", a - b);
// console.log("Multiplicação:", a * b);
// console.log("Divisão:", a / b);


// // 2 ---------------------------------
// let numero = 7;

// console.log(numero % 2 === 0 ? "Par" : "Ímpar");


// // 3 ------------------------------------
// let num = 4;

// console.log("Quadrado:", num ** 2);
// console.log("Cubo:", num ** 3);


// // 4 -----------------------------
// let celsius = 30;
// let fahrenheit = (celsius*9/5)+32;

// console.log("Temp. em Fahrenheit:", fahrenheit);


// // 5 -------------------------------
// let nota1 = 5;
// let nota2 = 5;
// let nota3 = 5;

// let media = (nota1+nota2+nota3)/3;
// console.log(media.toFixed(2));


// 6 ------------------------------------
// let preco = 45;
// let pago = 60;
// let troco = pago-preco;

// console.log("Troco: R$",troco);


// 7 ------------------------------
// console.log(5 == "7");
// console.log(5 === "6");


// 8 -------------------------------------
// let n1 = 15;
// let n2 = 20;

// if (n1 > n2) {
//     console.log(n1 + " é maior");
// } else {
//     console.log(n2 + " é maior");
// }


// 9 ----------------------------------------
// let nota = 6;

// console.log(nota >= 6 ? "Aprovado" : "Reprovado");


// 10 ------------------------------------------------
// let idade = 17;

// console.log(idade >= 18 ? "Maior de idade" : "Menor de idade");


// 11 -------------------------------------------------
// console.log("bicicleta" === "bicicleta");
// console.log("bicicleta" !== "carro");
// console.log("bicicleta" === "BicicLeta");


// 12 ----------------------------------------------
// let valor = 101;

// console.log(valor >= 10 && valor <= 100);


// 13 --------------------------------------
// let numeroPositivo = 8;

// console.log(numeroPositivo > 0 && numeroPositivo %2==0);


// 14 -----------------------------------
// let usuario = "root";

// console.log(usuario === "admin" || usuario === "root");


// 15 --------------------------------------
// let logado = true;

// console.log(!logado);

// if (!logado) {
//     console.log("Usuário deslogado");
// } else {
//     console.log("Usuário logado");
// }


// 16 ----------------------------------------
// let idadeUsuario = 17;
// let email = "teste@gmail.com";

// console.log(idadeUsuario > 18 && email !== "");


// 17 ----------------------------------------------
// let assinante = false;
// let totalCompra = 200;

// console.log(assinante || totalCompra >= 200);


// 18 -----------------------------------------
// let maiorIdade = true;
// let contaAtiva = true;
// let banido = false;

// console.log(maiorIdade && contaAtiva && !banido);


// 19 -----------------------------------------
// function parEIntervalo(){
//     let numero = Number(prompt("Informe um valor"))

//     if(numero > 0 && numero <= 100){
//         if(numero % 2 == 0){
//             alert("O numero está no Intervalo de 1 a 100, e é par")
//         }else{
//             alert("O numero está no Intervalo de 1 a 100, e é ímpar")
//         }
//     }else{
//         alert("Fora do Intervalo 1 a 100")
//     }
// }

// parEIntervalo()


// 20 ------------------------------------------------

// function classificacaoNota(){
//     let nota = Number(prompt("Informe o Valor"))

//     if(nota >= 0 && nota <= 10){
//         if(nota >= 9){
//             alert("Exelente")
//         }else if(nota >= 7){
//             alert("Aprovado")
//         }else if(nota >= 5){
//             alert("Recuperação")
//         }else{
//             alert("Reprovado")
//         }
//     }else{
//         alert("Nota Inválida")
//     }
// }

// classificacaoNota()


// 21 ----------------------------------

function calculoIMC() {
    let peso = Number(prompt("Informe seu Peso"))
    let altura = Number(prompt("Informe sua altura"))

    let imc = peso / (altura ** 2)

    if (imc < 18.5) {
        alert("Abaixo do peso")
    } else if (imc < 25) {
        alert("Peso normal")
    } else if (imc < 30) {
        alert("Sobre peso")
    } else {
        alert("Obesidade")
    }
}

calculoIMC()


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

