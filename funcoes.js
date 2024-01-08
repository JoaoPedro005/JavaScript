console.log("Testando...");
function exibirMensagem(nome){
    alert(nome+", eu amo programar!");
}

function efetuarSoma(n1, n2){
    let soma = n1 + n2;
    //alert("A soma é "+soma);
    let paragrafo = document.getElementById("resultado");
    paragrafo.innerHTML="A soma é "+soma;
}