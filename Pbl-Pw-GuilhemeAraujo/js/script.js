const input = document.querySelector("#senha");
const text = document.querySelector("span");

input.addEventListener("input", validPassword);

let regExpweak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!@#$%^&*()-+]/;

let min_weak_passoword = 6;
let min_medium_passoword = 6;
let min_strong_passoword = 6;

function validPassword() {
  let input_weak = input.value.match(regExpweak);
  let input_medium = input.value.match(regExpMedium);
  let input_strong = input.value.match(regExpStrong);

  if (input.value) {
    if (
      input.value.length <= min_weak_passoword &&
      (input_weak || input_medium || input_strong)
    ) {
      text.innerHTML = "Sua senha é fraca";
    }
    if (
      input.value.length >= min_medium_passoword &&
      ((input_weak && input_medium) || input_medium || input_strong)
    ) {
      text.innerHTML = "Sua senha é Média";
    }

    if (
      input.value.length >= min_strong_passoword &&
      input_weak &&
      input_medium &&
      input_strong
    ) {
      text.innerHTML = "Sua senha é forte";
    }
  }
}
function tornarMaiusculos() {
  let nome = document.getElementById("texto").value;
  let nomeMaiusculo = nome.toUpperCase();
  document.getElementById("texto").value = nomeMaiusculo;
}

function validarIdade() {
  let idade = parseInt(document.getElementById("idade").value);
  if (idade >= 15) {
    alert("Fique a Vontadade para comprar o que vai te deixar mais linda!");
  } else if ((idade = 0)) {
    alert("Preencha novamente!");
  } else if (idade == "") {
    alert("Insira um valor válido!!!");
  } else {
    alert("Chame um adulto para comprar sua  máquiagem!!!");
    return false;
  }
}

function testarIgualdadeSenha() {
  let input1 = document.getElementById("senha").value;
  let inputConfirmacao = document.getElementById("cSenha").value;

  if (input1 == inputConfirmacao) {
    alert("Parabéns você ganhou um 10!!!");
  } else {
    alert("OS campos de senha e confirmação diferem!");
  }
}
