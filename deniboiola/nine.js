function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;

    if (sexo.toLowerCase() === 'homem') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo.toLowerCase() === 'mulher') {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        return "Sexo inválido. Por favor, informe 'homem' ou 'mulher'.";
    }

    return `O peso ideal para uma pessoa do sexo ${sexo} com altura ${altura}m é ${pesoIdeal.toFixed(2)} kg.`;
}

let altura = parseFloat(+prompt("Digite a altura em metros:"));
let sexo = prompt("Digite o sexo (homem ou mulher):");

let resultado = calcularPesoIdeal(altura, sexo);
alert(resultado);
