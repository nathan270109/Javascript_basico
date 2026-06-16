// ATIVIDADE - estrutura condicionais

//1 =========================================
// let num1 = 18;
// let num2 = 15;

// if(num1>num2){
//     console.log("ele é maior")
// }else{
//     console.log("ele é menor")
// }
//
//2 ===========================================
//  let numero = -1

//  if(numero < 0){
//     console.log("negativo")
//  }else{
//     console.log("positivo")
//  }

// 3 ===========================================

// let sexo = (prompt("informe seu sexo ou F para feminino, M para masculino"))

// if(sexo == 'M'){
//     alert("Masculino")
// }else if(sexo == 'F'){
//     alert("Feminino")
// }else{
//     alert("sexo inválido")
// }

// 4 =============================================

// let letra = (prompt("informe uma letra"))

// if (letra == "a" || letra == "e" || letra == "i" ||
//     letra == "o" || letra == "u") {
//     alert("é uma consoante")
// } else {
//     alert("é uma vogal")
// }

// 5 =============================================
// let n1 = 9;
// let n2 = 9;
// let n3 = 9;

// let media = (n1+n2+n3)/3

// if(media > 9){
//     console.log("aprovado com distinção")
// }else if(media >= 7){
//     console.log("aprovado")
// }else{
//     console.log("reprovado")
// }

// 6 ===================================================

// let n1 = 7;
// let n2 = 5;
// let n3 = 2;

// let maior;

// if( n1>=n2 && n1>=n3 ){
//     maior = n1;
// }else if( n2>=n1 && n2>=n3 ){
//     maior = n2;
// }else{
//     maior = n3;
// }


// 7 ==================================================

// let n1 = Number(prompt("digite um numero"))
// let n2 = Number(prompt("digite um numero"))
// let n3 = Number(prompt("digite um numero"))

// let maior;

// if( n1>=n2 && n1>=n3 ){
//     maior = n1;
// }else if( n2>=n1 && n2>=n3 ){
//     maior = n2;
// }else{
//     maior = n3;
// }

// let menor;

// if( n1<=n2 && n1<=n3 ){
//     menor = n1;
// }else if( n2<=n1 && n2<=n3 ){
//     menor = n2;
// }else{
//     menor = n3;
// }

// alert(maior + " é o maior")
// alert(menor + " é o menor")

// 8 =============================================================================

// let produto1 = Number(prompt("digite o preço do produto1"))
// let produto2 = Number(prompt("digite o preço do produto2"))
// let produto3 = Number(prompt("digite o preço do produto3"))

// let menor;

// if(produto1 <= produto2 && produto1 <= produto3){
//     menor = "produto1 é mais barato";
// }else if(produto2 <= produto1 && produto3){
//     menor = "produto2 é mais barato";
// }else{
//     menor = "produto3 é mais barato";
// }

// alert(menor)

// 9 =============================================================================

// let num1 = Number(prompt("Digite um numero"))
// let num2 = Number(prompt("Digite um numero"))
// let num3 = Number(prompt("Digite um numero"))
// let primeiro, segundo, terceiro

// if(num1 >= num2 && num1 >= num3){
//     primeiro = num1;
//     if(num2 >= num3){
//         segundo = num2;
//         terceiro = num3;
//     }else{
//         segundo = num3;
//         terceiro = num2;
//     }
// }else if(num2 >= num1 && num2 >= num3){
//     primeiro = num2;
//     if(num3 >= num1){
//         segundo = num3
//         terceiro = num1
//     }else{
//         segundo = num1
//         terceiro = num3
//     }
// }else{
//     primeiro = num3
//     if(num1 >= num2){
//         segundo = num1
//         terceiro = num2
//     }else{
//         segundo = num2
//         terceiro = num1
//     }
// }

// alert("Números em ordem decrescente:" + primeiro + ", " + segundo + ", " + terceiro)

// 10 ===================================================================================

// let turno = prompt("informe seu turno, M para matutino, V para verspertino e N para noturno").toLowerCase()

// if(turno === "n"){
//     alert("Noturno")
// }else if(turno === "v"){
//     alert("Vespertino")
// }else if(turno === "m"){
//     alert("Matutino")
// }else{
//     alert("Turno inválido")
// }

// 11 ====================================================================================

// let salarioAntes = Number(prompt("Informe seu sálario"))
// let porcentual;
// let valorAumento;
// let novoSalario;

// if(salarioAntes <= 280){
//     porcentual = 20;
// }else if(salarioAnte <= 700){
//     porcentual = 15;
// }else if(salarioAntes <= 1500){
//     porcentual = 10
// }else{
//     porcentual = 5
// }

// valorAumento = salarioAntes*(porcentual/100);
// novoSalario = salarioAntes + valorAumento;

// alert( "Resumo do Reajuste Salarial:")

// 12 ====================================================================================

// let valorHora = Number(prompt("Informe o valor da hora trabalhada:"));
// let horasTrabalhadas = Number(prompt("Informe a quantidade de horas trabalhadas no mês:"));

// let salarioBruto = valorHora * horasTrabalhadas;
// let percentualIR = 0;

// if (salarioBruto <= 900) {
//     percentualIR = 0;
// } else if (salarioBruto <= 1500) {
//     percentualIR = 5;
// } else if (salarioBruto <= 2500) {
//     percentualIR = 10;
// } else {
//     percentualIR = 20;
// }

// let descontoIR = salarioBruto * (percentualIR / 100);
// let descontoINSS = salarioBruto * 0.10;
// let descontoSindicato = salarioBruto * 0.03;
// let fgts = salarioBruto * 0.11;

// let totalDescontos = descontoIR + descontoINSS + descontoSindicato;
// let salarioLiquido = salarioBruto - totalDescontos;

// alert(
//     `Salário Bruto (${valorHora} * ${horasTrabalhadas}) : R$ ${salarioBruto.toFixed(2)}\n` +
//     `(-) IR (${percentualIR}%)                : R$ ${descontoIR.toFixed(2)}\n` +
//     `(-) INSS (10%)             : R$ ${descontoINSS.toFixed(2)}\n` +
//     `(-) Sindicato (3%)         : R$ ${descontoSindicato.toFixed(2)}\n` +
//     `FGTS (11%)                 : R$ ${fgts.toFixed(2)}\n` +
//     `Total de descontos         : R$ ${totalDescontos.toFixed(2)}\n` +
//     `Salário Líquido            : R$ ${salarioLiquido.toFixed(2)}`
// );

// 13 ====================================================================================

// let numeroDia = Number(prompt("Digite um número (1-7) para o dia da semana:"));

// if (numeroDia === 1) {
//     alert("Domingo");
// } else if (numeroDia === 2) {
//     alert("Segunda");
// } else if (numeroDia === 3) {
//     alert("Terça");
// } else if (numeroDia === 4) {
//     alert("Quarta");
// } else if (numeroDia === 5) {
//     alert("Quinta");
// } else if (numeroDia === 6) {
//     alert("Sexta");
// } else if (numeroDia === 7) {
//     alert("Sábado");
// } else {
//     alert("Valor inválido");
// }

// 14 ====================================================================================

// let nota1 = Number(prompt("Informe a primeira nota parcial:"));
// let nota2 = Number(prompt("Informe a segunda nota parcial:"));

// let media = (nota1 + nota2) / 2;
// let conceito = "";
// let situacao = "";

// if (media >= 9.0 && media <= 10.0) {
//     conceito = "A";
// } else if (media >= 7.5 && media < 9.0) {
//     conceito = "B";
// } else if (media >= 6.0 && media < 7.5) {
//     conceito = "C";
// } else if (media >= 4.0 && media < 6.0) {
//     conceito = "D";
// } else if (media >= 0 && media < 4.0) {
//     conceito = "E";
// }

// if (conceito === "A" || conceito === "B" || conceito === "C") {
//     situacao = "APROVADO";
// } else {
//     situacao = "REPROVADO";
// }

// alert(
//     `Notas: ${nota1} e ${nota2}\n` +
//     `Média: ${media.toFixed(1)}\n` +
//     `Conceito: ${conceito}\n` +
//     `Situação: ${situacao}`
// );

// 15 ====================================================================================

// let lado1 = Number(prompt("Informe o primeiro lado do triângulo:"));
// let lado2 = Number(prompt("Informe o segundo lado do triângulo:"));
// let lado3 = Number(prompt("Informe o terceiro lado do triângulo:"));

// let eTriangulo = (lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1);

// if (!eTriangulo) {
//     alert("Os lados não formam um triângulo.");
// } else {
//     if (lado1 === lado2 && lado2 === lado3) {
//         alert("Equilátero");
//     } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//         alert("Isósceles");
//     } else {
//         alert("Escaleno");
//     }
// }

// 16 ====================================================================================

// let a = Number(prompt("Informe o valor de a:"));

// if (a === 0) {
//     alert("A equação não é de segundo grau.");
// } else {
//     let b = Number(prompt("Informe o valor de b:"));
//     let c = Number(prompt("Informe o valor de c:"));
    
//     let delta = (b * b) - (4 * a * c);
    
//     if (delta < 0) {
//         alert(`Delta (Δ) = ${delta}\nA equação não possui raízes reais.`);
//     } else if (delta === 0) {
//         let x = -b / (2 * a);
//         alert(`Delta (Δ) = ${delta}\nA equação possui apenas uma raiz real: X = ${x}`);
//     } else {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         alert(`Delta (Δ) = ${delta}\nA equação possui duas raíces reais:\nX1 = ${x1.toFixed(2)}\nX2 = ${x2.toFixed(2)}`);
//     }
// }

// 17 ====================================================================================

// let ano = Number(prompt("Informe o ano:"));

// if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//     alert(`O ano ${ano} é BISSEXTO.`);
// } else {
//     alert(`O ano ${ano} NÃO É bissexto.`);
// }

// 18 ====================================================================================

// let numeroParImpar = Number(prompt("Informe um número inteiro:"));

// if (numeroParImpar % 2 === 0) {
//     alert(`O número ${numeroParImpar} é PAR.`);
// } else {
//     alert(`O número ${numeroParImpar} é ÍMPAR.`);
// }

// 19 ====================================================================================

// let numeroCaract = Number(prompt("Informe um número:"));
// let operacaoDesejada = prompt("Qual operação deseja realizar?");

// let parOuImparResult = (numeroCaract % 2 === 0) ? "Par" : "Ímpar";
// let positivoOuNegativoResult = "";

// if (numeroCaract > 0) {
//     positivoOuNegativoResult = "Positivo";
// } else if (numeroCaract < 0) {
//     positivoOuNegativoResult = "Negativo";
// } else {
//     positivoOuNegativoResult = "Neutro";
// }

// alert(`Operação: ${operacaoDesejada}\nO número ${numeroCaract} é ${parOuImparResult} e ${positivoOuNegativoResult}.`);

// 20 ====================================================================================

// let respostasPositivas = 0;

// if (prompt("Telefonou para a vítima? (sim/nao)").toLowerCase() === "sim") respostasPositivas++;
// if (prompt("Esteve no local do crime? (sim/nao)").toLowerCase() === "sim") respostasPositivas++;
// if (prompt("Mora perto da vítima? (sim/nao)").toLowerCase() === "sim") respostasPositivas++;
// if (prompt("Devia para a vítima? (sim/nao)").toLowerCase() === "sim") respostasPositivas++;
// if (prompt("Já trabalhou com a vítima? (sim/nao)").toLowerCase() === "sim") respostasPositivas++;

// if (respostasPositivas === 2) {
//     alert("Classificação: Suspeita");
// } else if (respostasPositivas === 3 || respostasPositivas === 4) {
//     alert("Classificação: Cúmplice");
// } else if (respostasPositivas === 5) {
//     alert("Classificação: Assassino");
// } else {
//     alert("Classificação: Inocente");
// }

// 21 ====================================================================================

// let n1 = Number(prompt("Informe o primeiro número:"));
// let n2 = Number(prompt("Informe o segundo número:"));

// if (n1 > n2) {
//     alert(`Maior: ${n1}\nMenor: ${n2}`);
// } else if (n2 > n1) {
//     alert(`Maior: ${n2}\nMenor: ${n1}`);
// } else {
//     alert("Os dois números são iguais.");
// }

// 22 ====================================================================================

// let valorA = Number(prompt("Informe o primeiro número inteiro:"));
// let valorB = Number(prompt("Informe o segundo número inteiro:"));
// let valorC = Number(prompt("Informe o terceiro número inteiro:"));

// let maiorTres = Math.max(valorA, valorB, valorC);
// let menorTres = Math.min(valorA, valorB, valorC);

// alert(`Maior: ${maiorTres}\nMenor: ${menorTres}`);

// 23 ====================================================================================

// let numC = Number(prompt("Informe um número inteiro (Versão JS do programa em C):"));

// if (numC % 2 === 0) {
//     alert(`O número ${numC} é par.`);
// } else {
//     alert(`O número ${numC} é ímpar.`);
// }

// 24 ====================================================================================

// let raioCirc = Number(prompt("Informe o raio da circunferência:"));

// let piVal = Math.PI;
// let diametroVal = 2 * raioCirc;
// let comprimentoVal = 2 * piVal * raioCirc;
// let areaVal = piVal * (raioCirc * raioCirc);

// alert(
//     `Raio: ${raioCirc}\n` +
//     `Diâmetro: ${diametroVal}\n` +
//     `Comprimento: ${comprimentoVal.toFixed(2)}\n` +
//     `Área: ${areaVal.toFixed(2)}`
// );

// 25 ====================================================================================

// let idadeDoador = Number(prompt("Informe a sua idade:"));

// if (idadeDoador >= 18 && idadeDoador <= 67) {
//     alert(`Idade: ${idadeDoador} anos.\nVocê PODE doar sangue!`);
// } else {
//     alert(`Idade: ${idadeDoador} anos.\nVocê NÃO PODE doar sangue.`);
// }

// 26 ====================================================================================

// let diaData = Number(prompt("Informe o dia:"));
// let mesData = Number(prompt("Informe o mês:"));
// let anoData = Number(prompt("Informe o ano:"));
// let anoAtualData = 2013;

// if (anoData !== anoAtualData) {
//     alert(`Data Inválida. Motivo: O ano informado deve ser ${anoAtualData}.`);
// } else if (mesData < 1 || mesData > 12) {
//     alert("Data Inválida. Motivo: O mês deve ser entre 1 e 12.");
// } else if (diaData < 1 || diaData > 31) {
//     alert("Data Inválida. Motivo: O dia deve ser entre 1 e 31.");
// } else {
//     alert(`A data ${diaData}/${mesData}/${anoData} é VÁLIDA.`);
// }

// 27 ====================================================================================

// let x = Number(prompt("Informe o valor de x:"));
// let y = Number(prompt("Informe o valor de y:"));

// alert(`Antes:\nx = ${x}\ny = ${y}`);

// let tempVal = x;
// x = y;
// y = tempVal;

// alert(`Depois:\nx = ${x}\ny = ${y}`);

