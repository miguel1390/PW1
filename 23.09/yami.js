let nome = document.getElementById("nome");
let numero = document.getElementById("numero");
let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {

    resultado.innerHTML = nome.value + " - R$ " + numero.value;

});