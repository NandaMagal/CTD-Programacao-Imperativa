function adicionar(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

console.log("----------------Teste de Operações de Soma e Subtração / Calculadora-------------");
console.log(adicionar(10, 6000));
console.log(subtracao(353, 60));


function multiplicacao(a, b) {
    return a * b
}
console.log("----------------Teste de Operações de Multiplicação / Calculadora-------------");
console.log(multiplicacao(450, 6000));



function divisao(a, b) {
    return a / b
}
console.log("----------------Teste de Operações de Divisão / Calculadora-------------");
console.log(divisao(670, 10));
console.log(0, 30);

function QuadradodoNumero(a) {
    return multiplicacao(a, a);
}
console.log(QuadradodoNumero(5), " é o Quadrado do número informado");

function mediaDeTresNumeros(a, b, c) {
    return [adicionar(a, b, c)] / 3;

}
console.log(mediaDeTresNumeros(8, 6, 10), "é a média dos três números informados");

function calculaPorcentagem(a, b) {
    return [multiplicacao(a, b)] / 100;

}
console.log(calculaPorcentagem(300, 15), "%");

function geradorDePorcentagem(a, b) {
    return [divisao(a, b)] * 100;

}
console.log(geradorDePorcentagem(2, 100), "%");