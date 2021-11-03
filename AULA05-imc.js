function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}
console.log(imc(65, 1.65));