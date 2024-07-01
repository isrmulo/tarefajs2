function calcularMediaAproveitamento(nota1, nota2, nota3, mediaExercicios) {
    return (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;
}

function obterConceito(mediaAproveitamento) {
    if (mediaAproveitamento >= 90) {
        return 'A';
    } else if (mediaAproveitamento >= 75) {
        return 'B';
    } else if (mediaAproveitamento >= 60) {
        return 'C';
    } else if (mediaAproveitamento >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

let numeroIdentificacao = prompt("Digite o número de identificação do aluno:");
let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let nota3 = parseFloat(prompt("Digite a nota 3:"));
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

let mediaAproveitamento = calcularMediaAproveitamento(nota1, nota2, nota3, mediaExercicios);
let conceito = obterConceito(mediaAproveitamento);
let status = (conceito === 'A' || conceito === 'B' || conceito === 'C') ? 'Aprovado' : 'Reprovado';

alert(`Número de Identificação: ${numeroIdentificacao}
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média dos Exercícios: ${mediaExercicios}
Média de Aproveitamento: ${mediaAproveitamento.toFixed(2)}
Conceito: ${conceito}
Status: ${status}`);