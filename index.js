
var imagemAtual = 0;

function trocarImagem(){
    
    var header = document.getElementById("cabecalho");

    if(imagemAtual == 1){
        header.style.backgroundImage = "url('assets/images/universo.jpg')";
        imagemAtual++;
    }else if(imagemAtual == 2){
        header.style.backgroundImage = "url('assets/images/universo2.jpg')";
        imagemAtual++;
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



document.addEventListener('DOMContentLoaded', () =>{
    const h3 = document.querySelector('.titulo');

    h3.addEventListener

    h3.addEventListener('mouseover', (event) =>{
        const paragrafoExplicar = document.createElement('p');
        paragrafoExplicar.className = 'explicarPlaneta';
        explicarPlaneta.style.display = 'block';
    });

    h3.addEventListener('mouseout', event =>{
        const paragrafoExplicar = document.querySelector('explicarPlaneta');
        if(paragrafoExplicar){
            explicarPlaneta.remove();
        }
        
    });
});

    