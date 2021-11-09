function podeSubir(altpessoa, acompanhada) {
    switch (altpessoa) {

        case (altpessoa < 2.0) && (altpessoa > 1.4):
        case acompanhada:
            podeSubir = "true";
            // console.log("Pode subir");
            break;
            return podeSubir();

        case (altpessoa < 1.40 && acompanhada):
            podeSubir = "true";
            //console.log("Pode subir");
            break;
            return podeSubir();

        default:
            console.log("Não Pode subir");


    }
    podeSubir(1.65, true);
    podeSubir(1.25, true);
    podeSubir(1.20, false);
}