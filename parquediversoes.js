//1) Crie uma função podeSubir() que receba dois parâmetros:-altura da pessoa; -se está acompanhada.
//Deve retornar um valor booleano(TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
//a) A pessoa deve medir mais de 1.40 m e menos de 2 metros.
//b) Se a pessoa medir menos de 1.40 m, deverá ir acompanhada.
//c) Se a pessoa medir menos de 1.20 m, não poderá subir, nem acompanhada.


function podeSubir(altpessoa, acompanhada) {
    let podeSubir = false;
    switch (altpessoa) {

        case (altpessoa <= 2.0) && (altpessoa > 1.4):
        case (acompanhada):
            podeSubir = true;
            break;

        case (altpessoa <= 1.4) && (altpessoa > 1.2):
        case acompanhada:
            podeSubir = true;
            break;
        default:
            podeSubir = false;

    }
    return podeSubir;
    podeSubir(1.65, true);
    podeSubir(1.25, true);
    podeSubir(1.20, false);

}