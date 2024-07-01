function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function obterCondicaoIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso";
    } else {
        return "Obeso";
    }
}

let peso = parseFloat(+prompt("Digite seu peso em kg:"));
let altura = parseFloat(+prompt("Digite sua altura em metros:"));

let imc = calcularIMC(peso, altura);
let condicao = obterCondicaoIMC(imc);

alert(`Seu IMC é ${imc.toFixed(2)}. Condição: ${condicao}`);