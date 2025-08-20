function validarSenha(){
    var forca = 0;
    var senha = document.getElementById("senha").value;
    console.log(senha)
    if(senha.length <8){
        forca +=5;
    }
    if ((senha.length) && (senha.match(/[0-9]+/))){
        forca +=10
    }
    if((senha.length>8) && (senha.match(/[a-z]+/))){
        forca =+15;
    }
    if((senha.length>8) && (senha.match(/[A-Z]+/))){
        forca+=25;
    }
    if((senha.length>=9) && (senha.match(/[!@#$%¨&*]/))){
        forca +=35
    }
    mostraForca(forca);
}
function mostraForca(forca){
let mensagem = document.getElementById("forca")
if(forca<=5){
    mensagem.innerHTML="Senha Fraca"
}else if((forca>5) && (forca<=40)){
    mensagem.innerHTML = "Senha Mediana"
}else if((forca>40)){
    mensagem.innerHTML = "Senha Forte"
}
}
