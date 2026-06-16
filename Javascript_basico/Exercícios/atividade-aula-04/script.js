// Instrução: Crie uma variável com uma nota de 0 a 100. Use if/else para classificar: A (>= 90), B (>= 80), C (< 80). Exiba a classificação.
// Dica: Use else if para verificar múltiplas condições.

// let nota = Number(prompt("infome uma nota:"))

// if(nota >= 90){
//     alert(" A sua nota é A")
// }else if(nota >= 80){
//     alert("A sua nota é B")
// }else{
//     alert("A sua nota é C")
// }
// ========================================================================================

// Instrução: Crie uma variável com número de 1 a 7. Use switch para exibir o nome do dia correspondente (1 = Domingo, 2 = Segunda...). Caso inválido, exiba "Dia inválido".
// Dica: Use case para cada número e break para interromper.

// let numero = Number(prompt("Informe um numero de 1 a 7:"))

// switch (numero) {
//     case 1: alert("domingo")
//         break;
//     case 2: alert("segunda-feira")
//         break;
//     case 3: alert("terça-feira")
//         break;
//     case 4: alert("quarta-feira")
//         break;
//     case 5: alert("quinta-feira")
//         break;
//     case 6: alert("sexta-feira")
//         break;
//     case 7: alert("sábado")
//         break;
//     default: alert("dia inválido")
// }
//=========================================================================================

// Instrução: Crie uma variável com uma temperatura. Use o operador ternário para exibir "Quente" se maior que 25, ou "Frio" caso contrário.
// Dica: condicao ? valorSeVerdadeiro : valorSeFalso

// let temperatura = Number(prompt("Informe a temperatura:"));
// let temp = temperatura>25?"quente":"frio";
// alert(temp)
//=========================================================================================

// Instrução: Crie duas variáveis: maior de idade (boolean) e tem carteira (boolean). Use if com && para verificar se a pessoa pode dirigir (maior de idade E tem carteira).
// Dica: && exige que TODAS as condições sejam verdadeiras.

// let maiorIdade = Boolean(prompt("Informe false para menor ou true para maior de idade") === "true")
// let carteira = Boolean(prompt("tem carteira de motorista") === "true")

// if (maiorIdade && carteira) {
//     alert("Pode dirigir")
// } else {
//     alert("Nao pode dirigir")
// }
//==========================================================================================

// Instrução: Crie uma variável com um número. Verifique se ele está entre 10 e 20 (inclusive). Exiba "Dentro" ou "Fora" do intervalo.
// Dica: Use && para verificar duas condições ao mesmo tempo.

// let numero = Number(prompt("Informe um número"))

// if(numero >9 && numero<=20){
//     alert("Dentro do Intervalo")
// }else{
//     alert("Fora do Intervalo")
// }
//==========================================================================================

// Instrução: Você tem um if/else que verifica cores. Reescreva-o usando switch. Cores: "vermelho" → "Pare", "amarelo" → "Atenção", "verde" → "Siga".
// Dica: Cada case corresponde a uma cor.

// let cor = prompt("Informe uma cor:")

// switch(cor){
//     case "amarelo": alert("atenção")
//     break;
//     case "vermelho": alert("pare")
//     break;
//     case "verde": alert("siga")
//     break;

//     default: alert("Valor inválido")
    
// }
//=========================================================================================
//=========================================================================================
//=========================================================================================

// ATIVIDADE
// let idade = Number(prompt("informe sua idade:"))

// if(idade < 18){
//     alert("Menor de idade")
// }else{
//     alert("Maior de idade")
// }
//=========================================================================================

// let altura = Number(prompt("Informe um numero de 1 a 3:"))

// switch(altura){
//     case 1: alert("baixo")
//     break;
//     case 2: alert("médio")
//     break;
//     case 3: alert("alto")
//     break;
// }
//=========================================================================================

// let numero = Number(prompt("Informe um numero:"))

// let resultado = numero<0?"negativo":"positivo"
// alert(resultado)
//=========================================================================================

// let brasileira = prompt("se for brasileiro digite true, se nao for digite false") === true
// let idade = Number(prompt("Digite sua idade:"))

// if(brasileira && idade>16){
//     alert("pode votar")
// }else{
//     alert("nao pode votar")
// }
