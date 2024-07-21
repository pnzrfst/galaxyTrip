
var imagemAtual = 1;

function trocarImagem(){
    
    var header = document.getElementById("cabecalho");

    if(imagemAtual == 1){
        header.style.backgroundImage = "url('assets/images/universo.jpg')";
        imagemAtual = 2;
    }else if(imagemAtual == 2){
        header.style.backgroundImage = "url('assets/images/universo2.jpg')";
        imagemAtual = 3;
    }else{
        header.style.backgroundImage = "url('assets/images/universo3.jpg')";
        imagemAtual = 1
    }
    header.style.backgroundSize = "cover";
}

trocarImagem();



function mudarOpacidadeBotao(sobreBotao){
    var botaoHeader = document.getElementById("header-btn");

    if(sobreBotao == true){
        botaoHeader.style.backgroundColor = "gray";
        botaoHeader.style.opacity = 0.9;
    }else{
        botaoHeader.style.backgroundColor = "#E4E5C5"
        botaoHeader.style.opacity = 1;
    }
}