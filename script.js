console.log("Js carregando");

//Variáveis
const buttonRandom = document.querySelector(".button-random");

const numberMin = document.querySelector(".number-min");

const numberMax = document.querySelector(".number-max");

//Funções
function numberRandom() {
    const min = Math.ceil(Number(numberMin.value));
    const max = Math.floor(Number(numberMax.value));

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);

}

//Eventos
buttonRandom.addEventListener("click", numberRandom);