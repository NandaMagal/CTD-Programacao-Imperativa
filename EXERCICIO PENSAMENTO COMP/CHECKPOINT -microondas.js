function numPrato(numero, tempo) {
    switch (numero) {
        case '1':
            var tempoPadrao = 10;
            console.log("VOCÊ SELECIONOU A PIPOCA");
            if (tempo < tempoPadrao) {
                console.log("TEMPO PARA COZIMENTO INSUFICIENTE");
            } else if (tempo == tempoPadrao || tempo <= (2 * tempoPadrao)) {
                console.log("TEMPO DE COZIMENTO DENTRO DO ESPERADO.PRATO PRONTO, BOM APETITE!!!");
            } else if (tempo > (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
                console.log("A COMIDA QUEIMOU.TEMPO INFORMADO PARA COZIMENTO ESTA ENTRE  2 A 3 VEZES MAIOR DO QUE O NECESSÁRIO!!!");
            } else if (tempo > (3 * tempoPadrao)) {
                console.log("KABUM!!!TEMPO INFORMADO PARA COZIMENTO É SUPERIOR AO NECESSÁRIO!!!SEU MICROONDAS EXPLODIU!!!");
            }
            break;
        case '2':
            var tempoPadrao = 8;
            console.log("VOCÊ SELECIONOU A MACARRÃO");
            if (tempo < tempoPadrao) {
                console.log("TEMPO PARA COZIMENTO INSUFICIENTE");
            } else if (tempo == tempoPadrao || tempo <= (2 * tempoPadrao)) {
                console.log("TEMPO DE COZIMENTO DENTRO DO ESPERADO.PRATO PRONTO, BOM APETITE!!!");
            } else if (tempo > (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
                console.log("A COMIDA QUEIMOU.TEMPO INFORMADO PARA COZIMENTO ESTA ENTRE  2 A 3 VEZES MAIOR DO QUE O NECESSÁRIO!!!");
            } else if (tempo > (3 * tempoPadrao)) {
                console.log("KABUM!!!TEMPO INFORMADO PARA COZIMENTO É SUPERIOR AO NECESSÁRIO!!!SEU MICROONDAS EXPLODIU!!!");
            }
            break;
        case '3':
            var tempoPadrao = 15;
            console.log("VOCÊ SELECIONOU A CARNE");
            if (tempo < tempoPadrao) {
                console.log("TEMPO PARA COZIMENTO INSUFICIENTE");
            } else if (tempo == tempoPadrao || tempo <= (2 * tempoPadrao)) {
                console.log("TEMPO DE COZIMENTO DENTRO DO ESPERADO.PRATO PRONTO, BOM APETITE!!!");
            } else if (tempo > (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
                console.log("A COMIDA QUEIMOU.TEMPO INFORMADO PARA COZIMENTO ESTA ENTRE  2 A 3 VEZES MAIOR DO QUE O NECESSÁRIO!!!");
            } else if (tempo > (3 * tempoPadrao)) {
                console.log("KABUM!!!TEMPO INFORMADO PARA COZIMENTO É SUPERIOR AO NECESSÁRIO!!!SEU MICROONDAS EXPLODIU!!!");
            }
            break;
        case '4':
            var tempoPadrao = 12;
            console.log("VOCÊ SELECIONOU A FEIJÃO");
            if (tempo < tempoPadrao) {
                console.log("TEMPO PARA COZIMENTO INSUFICIENTE");
            } else if (tempo == tempoPadrao || tempo <= (2 * tempoPadrao)) {
                console.log("TEMPO DE COZIMENTO DENTRO DO ESPERADO.PRATO PRONTO, BOM APETITE!!!");
            } else if (tempo > (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
                console.log("A COMIDA QUEIMOU.TEMPO INFORMADO PARA COZIMENTO ESTA ENTRE  2 A 3 VEZES MAIOR DO QUE O NECESSÁRIO!!!");
            } else if (tempo > (3 * tempoPadrao)) {
                console.log("KABUM!!!TEMPO INFORMADO PARA COZIMENTO É SUPERIOR AO NECESSÁRIO!!!SEU MICROONDAS EXPLODIU!!!");
            }
            break;

        case '5':
            var tempoPadrao = 8;
            console.log("VOCÊ SELECIONOU A BRIGADEIRO");
            if (tempo < tempoPadrao) {
                console.log("TEMPO PARA COZIMENTO INSUFICIENTE");
            } else if (tempo == tempoPadrao || tempo <= (2 * tempoPadrao)) {
                console.log("TEMPO DE COZIMENTO DENTRO DO ESPERADO.PRATO PRONTO, BOM APETITE!!!");
            } else if (tempo > (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
                console.log("A COMIDA QUEIMOU.TEMPO INFORMADO PARA COZIMENTO ESTA ENTRE  2 A 3 VEZES MAIOR DO QUE O NECESSÁRIO!!!");
            } else if (tempo > (3 * tempoPadrao)) {
                console.log("KABUM!!!TEMPO INFORMADO PARA COZIMENTO É SUPERIOR AO NECESSÁRIO!!!SEU MICROONDAS EXPLODIU!!!");
            }
            break;
        default:
            console.log("O NUMERO DO PRATO SELECIONADO É INVÁLIDO!!! ");
            break;
    }
}
numPrato('0', 10);
numPrato('1', 30);
numPrato('2', 40);
numPrato('3', 5);
numPrato('4', 15);
numPrato('5', 30);