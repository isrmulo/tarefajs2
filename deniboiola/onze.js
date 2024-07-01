function calcularValorFinal(preco, condicaoPagamento) {
    let valorFinal;

    switch (condicaoPagamento) {
        case 1:
            valorFinal = preco * 0.90; // 10% de desconto
            break;
        case 2:
            valorFinal = preco * 0.85; // 15% de desconto
            break;
        case 3:
            valorFinal = preco; // Preço normal
            break;
        case 4:
            valorFinal = preco * 1.10; // 10% de juros
            break;
        default:
            return "Condição de pagamento inválida.";
    }

    return valorFinal;
}

let preco = parseFloat(prompt("Digite o preço normal do produto:"));
let condicaoPagamento = parseInt(prompt("Digite a condição de pagamento (1: À vista em dinheiro/cheque, 2: À vista no cartão, 3: Em duas vezes, 4: Em duas vezes com juros):"));

let valorFinal = calcularValorFinal(preco, condicaoPagamento);

if (typeof valorFinal === 'string') {
    alert(valorFinal); // Exibir mensagem de erro
} else {
    alert(`O valor final a ser pago é R$ ${valorFinal.toFixed(2)}`);
}