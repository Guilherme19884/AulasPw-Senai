// function calcular() {
//   // pegar o valor do primeiro input que está no doc HTML
//   x = document.getElementById("valor1").value;
//   //alert(x);
//   // pegar o valor do segundo input que está no doc HTML
//   y = document.getElementById("valor2").value;

//   op = document.getElementById("operacao").value;

//   // converter x e y para inteiro, senão 1+1 = 11 (string)
//   // lembrando que o que vem da tela vem como string.
//   xint = parseInt(x);
//   yint = parseInt(y);
//   resultado = 0;
//   switch (op) {
//     case "+":
//       resultado = xint + yint;
//       break;
//     case "-":
//       resultado = xint - yint;
//       break;
//     case "*":
//       resultado = xint * yint;
//       break;
//     case "/":
//       resultado = xint / yint;
//       break;
//     default:
//       break;
//   }
//   //alert("Resultado: " + resultado);
//   document.getElementById("resultado").innerHTML = resultado;
// }
function tornarMaiusculos() {
  nome = document.getElementById("texto").value;
  nomeMaiusculo = nome.toUpperCase();
  document.getElementById("texto").value = nomeMaiusculo;
}
function validarIdade() {
  idade = parseInt(document.getElementById("txtIdade").value);
  if (idade >= 18) {
    return true;
  }
  return false;
}
function validarForm() {
  tornarMaiusculos();
  if (validarIdade()) {
    alert("Preenchimento dos dados ok!");
  } else {
    alert("Refaça os passos, para o próximo usuário pois esse é menor de idade!");
  }
}
