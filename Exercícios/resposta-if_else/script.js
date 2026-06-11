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

let salarioAntes = Number(prompt("Informe seu sálario"))
let porcentual;
let valorAumento;
let novoSalario;

if(salarioAntes <= 280){
    porcentual = 20;
}else if(salarioAnte <= 700){
    porcentual = 15;
}else if(salarioAntes <= 1500){
    porcentual = 10
}else{
    porcentual = 5
}

valorAumento = salarioAntes*(porcentual/100);
novoSalario = salarioAntes + valorAumento;

alert( "Resumo do Reajuste Salarial:")


