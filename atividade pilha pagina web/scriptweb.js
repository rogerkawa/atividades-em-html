let web = [];

function avancar(){
    let navegador = document.getElementById("navegador").value;
    if(navegador !== "")
        {
        web.push(navegador);
        document.getElementById("navegador").value ="";
        mostrarNavegador();
    }
}
function voltar(){
    if(web.length>0){
        alert("Você saiu da página " + web.pop());
        mostrarNavegador();
    }else{
        alert("Você ainda não inseriu nenhuma página");
    }
}
function pagAtual(){
    if(web.length > 0){
        alert("Página atual " + web[web.length - 1]);  
    }else{
        alert("Você ainda não inseriu nenhuma página");
    }
}
 function mostrarNavegador(){
     let lista = document.getElementById ("web");
        lista.innerHTML="";
        for (let i = web.length -1; i>=0; i--){
            let li = document.createElement("li");
            li.textContent = web[i];
            lista.appendChild(li);
        }
}
    