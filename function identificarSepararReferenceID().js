function identificarSepararReferenceID() {
    var codigoBoleto = document.getElementById("codigo_boleto").value;
    codigoBoleto = codigoBoleto.replace(/\s/g, "");
    codigoBoleto = codigoBoleto.replace(/\D/g, "");

    var quantidadeDigitos = codigoBoleto.length;

    if (quantidadeDigitos >= 47 && quantidadeDigitos <= 48) {
        var referenceID = "";
        var resultado = "";

        if (codigoBoleto.startsWith("104")) {
            referenceID = codigoBoleto.slice(17, 19) + codigoBoleto.slice(21, 30);
            resultado = "Boleto: Caixa";
        } else if (codigoBoleto.startsWith("237")) {
            referenceID = codigoBoleto.slice(11, 20) + codigoBoleto.slice(21, 23);
            resultado = "Boleto: Bradesco";
        } else if (codigoBoleto.startsWith("422")) {
            referenceID = codigoBoleto.slice(21, 30);
            resultado = "Boleto: Safra<br>Atenção: Para critério de busca, selecione 'Referência NSU'.";
        } else {
            resultado = "Banco não identificado.";
        }

        document.getElementById("reference_id").innerHTML = "<br>Reference ID: " + referenceID;
        document.getElementById("result").innerHTML = resultado;
    } else if (quantidadeDigitos > 48) {
        document.getElementById("result").innerHTML = "Há dígitos a mais! Revise o número do boleto.";
    } else if (quantidadeDigitos < 47) {
        document.getElementById("result").innerHTML = "Há menos dígitos! Revise o número do boleto.";
    }
}
