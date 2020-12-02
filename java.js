var inicial = 0;

var botaoAdd = document.getElementById("adicionar");
botaoAdd.addEventListener("click", function () {
  inicial = inicial + 1;
  console.log(inicial);
  linha.innerHTML = inicial;
});

var botaoRemove = document.getElementById("diminuir");
botaoRemove.addEventListener("click", function () {
  inicial = inicial - 1;
  console.log(inicial);
  linha.innerHTML = inicial;
});

var botaoReset = document.getElementById("reset");
botaoReset.addEventListener("click", function () {
  inicial = 0;
  console.log(inicial);
  linha.innerHTML = inicial;
});

let exibir = document.getElementById("numero");
let linha = document.createElement("td");
exibir.appendChild(linha);
linha.innerHTML = inicial;
